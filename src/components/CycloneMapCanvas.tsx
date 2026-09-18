import React, { useRef, useEffect } from 'react';
import { CycloneTrackPoint } from '../types';

interface CycloneMapCanvasProps {
  currentTrack?: CycloneTrackPoint[];
  showForecastCone?: boolean;
  activePointIndex?: number;
  satelliteOverlay?: boolean;
  className?: string;
  isAiDemonstration?: boolean;
}

export const CycloneMapCanvas: React.FC<CycloneMapCanvasProps> = ({
  currentTrack = [],
  showForecastCone = false,
  activePointIndex,
  satelliteOverlay = true,
  className = '',
  isAiDemonstration = false
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Geographic bounds for Bay of Bengal focus
  // Lat: 2°N to 24°N, Lon: 80°E to 94°E
  const minLat = 2;
  const maxLat = 25;
  const minLon = 79;
  const maxLon = 95;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let rotation = 0;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;

      // Coordinate converter
      const toCanvasX = (lon: number) => ((lon - minLon) / (maxLon - minLon)) * width;
      const toCanvasY = (lat: number) => (1 - (lat - minLat) / (maxLat - minLat)) * height;

      // Clear ocean canvas with deep ocean gradient
      const oceanGrad = ctx.createRadialGradient(
        width * 0.6,
        height * 0.6,
        50,
        width * 0.5,
        height * 0.5,
        width * 0.7
      );
      oceanGrad.addColorStop(0, '#0c1b2b');
      oceanGrad.addColorStop(1, '#050c14');
      ctx.fillStyle = oceanGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw meteorological grid lines
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);

      // Latitudinal parallels
      for (let lat = 5; lat <= 20; lat += 5) {
        const y = toCanvasY(lat);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();

        ctx.fillStyle = 'rgba(148, 163, 184, 0.4)';
        ctx.font = '10px monospace';
        ctx.fillText(`${lat}°N`, 10, y - 4);
      }

      // Longitudinal meridians
      for (let lon = 80; lon <= 95; lon += 5) {
        const x = toCanvasX(lon);
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();

        ctx.fillStyle = 'rgba(148, 163, 184, 0.4)';
        ctx.font = '10px monospace';
        ctx.fillText(`${lon}°E`, x + 4, height - 10);
      }
      ctx.setLineDash([]);

      // Draw East Coast of India & Bay of Bengal Landmass Vector
      ctx.fillStyle = 'rgba(30, 41, 59, 0.75)';
      ctx.strokeStyle = 'rgba(100, 116, 139, 0.45)';
      ctx.lineWidth = 1.5;

      // Simplified accurate coastline coordinates for Peninsular East Coast & Odisha
      const coastPoints = [
        { lat: 8.1, lon: 77.5 },  // Kanyakumari
        { lat: 10.8, lon: 79.8 }, // Nagapattinam / TN
        { lat: 13.1, lon: 80.3 }, // Chennai
        { lat: 15.8, lon: 80.8 }, // Machilipatnam, AP
        { lat: 17.7, lon: 83.3 }, // Visakhapatnam
        { lat: 19.3, lon: 84.9 }, // Gopalpur, Odisha
        { lat: 19.8, lon: 85.8 }, // Puri, Odisha
        { lat: 20.3, lon: 86.7 }, // Paradip, Odisha
        { lat: 21.6, lon: 87.5 }, // Digha / WB
        { lat: 22.4, lon: 88.4 }, // Sundarbans / Kolkata
        { lat: 22.3, lon: 90.5 }, // Bangladesh Coast
        { lat: 21.4, lon: 91.9 }, // Cox's Bazar
        { lat: 19.5, lon: 93.5 }, // Myanmar Coast
        { lat: 16.0, lon: 94.2 }
      ];

      // Draw Coast outline
      ctx.beginPath();
      coastPoints.forEach((pt, i) => {
        const x = toCanvasX(pt.lon);
        const y = toCanvasY(pt.lat);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();

      // Coast labels
      ctx.fillStyle = 'rgba(203, 213, 225, 0.6)';
      ctx.font = '11px sans-serif';
      ctx.fillText('ODISHA', toCanvasX(85.2), toCanvasY(20.5));
      ctx.fillText('ANDHRA PRADESH', toCanvasX(81.8), toCanvasY(16.5));
      ctx.fillText('BAY OF BENGAL', toCanvasX(87.5), toCanvasY(14.0));

      // Landfall marker if available
      const landfall = currentTrack.find((t) => t.isLandfall);
      if (landfall) {
        const lx = toCanvasX(landfall.longitude);
        const ly = toCanvasY(landfall.latitude);

        // Warning circle around Puri
        ctx.beginPath();
        ctx.arc(lx, ly, 22, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(239, 68, 68, 0.15)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(239, 68, 68, 0.7)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = '#f87171';
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText('LANDFALL: PURI COAST (03 MAY 2019)', lx + 12, ly - 8);
      }

      // Draw Satellite Cloud Swirl Animation
      if (satelliteOverlay && currentTrack.length > 0) {
        const activePoint =
          activePointIndex !== undefined && currentTrack[activePointIndex]
            ? currentTrack[activePointIndex]
            : currentTrack[Math.min(currentTrack.length - 1, 7)];

        const cx = toCanvasX(activePoint.longitude);
        const cy = toCanvasY(activePoint.latitude);

        rotation += 0.008;

        // Spiraling cyclone cloud arms
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(-rotation);

        for (let arm = 0; arm < 3; arm++) {
          const armAngle = (arm * Math.PI * 2) / 3;
          ctx.beginPath();
          for (let r = 10; r < 90; r += 5) {
            const theta = armAngle + (r * 0.04);
            const x = Math.cos(theta) * r;
            const y = Math.sin(theta) * r;
            if (r === 10) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
          ctx.lineWidth = 12;
          ctx.lineCap = 'round';
          ctx.stroke();
        }

        // Cyclone Eye Wall Ring
        ctx.beginPath();
        ctx.arc(0, 0, 16, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(14, 165, 233, 0.18)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.6)';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.restore();
      }

      // Draw AI Prediction Corridor / Cone of Uncertainty if enabled
      if (showForecastCone) {
        // T=0 anchor at index 5 or 7
        const anchorIdx = Math.min(6, currentTrack.length - 1);
        const anchor = currentTrack[anchorIdx];
        if (anchor) {
          const ax = toCanvasX(anchor.longitude);
          const ay = toCanvasY(anchor.latitude);

          // Simulated forecast trajectory points: 24h, 48h, 72h
          const p24 = { x: toCanvasX(85.2), y: toCanvasY(18.2), r: 24 };
          const p48 = { x: toCanvasX(85.9), y: toCanvasY(19.8), r: 42 };
          const p72 = { x: toCanvasX(87.4), y: toCanvasY(22.1), r: 68 };

          // Cone polygon
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(p24.x - p24.r, p24.y);
          ctx.lineTo(p48.x - p48.r, p48.y);
          ctx.lineTo(p72.x - p72.r, p72.y);
          ctx.arc(p72.x, p72.y, p72.r, Math.PI, 0, true);
          ctx.lineTo(p48.x + p48.r, p48.y);
          ctx.lineTo(p24.x + p24.r, p24.y);
          ctx.closePath();

          ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(245, 158, 11, 0.65)';
          ctx.lineWidth = 1.5;
          ctx.setLineDash([5, 5]);
          ctx.stroke();
          ctx.setLineDash([]);

          // Predicted track central spline
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(p24.x, p24.y);
          ctx.lineTo(p48.x, p48.y);
          ctx.lineTo(p72.x, p72.y);
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 2.5;
          ctx.stroke();

          // Forecast waypoints
          [
            { pt: p24, label: '+24h Forecast' },
            { pt: p48, label: '+48h Landfall Corridor' },
            { pt: p72, label: '+72h Dissipation' }
          ].forEach(({ pt, label }) => {
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 5, 0, Math.PI * 2);
            ctx.fillStyle = '#f59e0b';
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            ctx.fillStyle = '#fbbf24';
            ctx.font = 'bold 10px monospace';
            ctx.fillText(label, pt.x + 8, pt.y + 3);
          });
        }
      }

      // Draw Historical Observed Track
      if (currentTrack.length > 1) {
        ctx.beginPath();
        const displayLimit =
          activePointIndex !== undefined
            ? Math.min(activePointIndex + 1, currentTrack.length)
            : currentTrack.length;

        for (let i = 0; i < displayLimit; i++) {
          const pt = currentTrack[i];
          const x = toCanvasX(pt.longitude);
          const y = toCanvasY(pt.latitude);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = '#06b6d4';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Draw track points
        for (let i = 0; i < displayLimit; i++) {
          const pt = currentTrack[i];
          const x = toCanvasX(pt.longitude);
          const y = toCanvasY(pt.latitude);

          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fillStyle = pt.windSpeedKmh > 180 ? '#ef4444' : pt.windSpeedKmh > 100 ? '#f59e0b' : '#06b6d4';
          ctx.fill();
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Top corner telemetry banner
      ctx.fillStyle = 'rgba(2, 6, 23, 0.85)';
      ctx.fillRect(8, 8, 260, 48);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
      ctx.lineWidth = 1;
      ctx.strokeRect(8, 8, 260, 48);

      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 10px monospace';
      ctx.fillText(
        isAiDemonstration
          ? 'DEMO: AI PREDICTION VS OBSERVED'
          : 'SYNOPTIC RADAR: BAY OF BENGAL (INSAT-3D)',
        16,
        24
      );

      ctx.fillStyle = 'rgba(226, 232, 240, 0.8)';
      ctx.font = '9px monospace';
      ctx.fillText('PROJECTION: MERCATOR EQUATORIAL EXT', 16, 38);
      ctx.fillText('GEO-REF: 80°E-95°E / 2°N-25°N', 16, 48);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [currentTrack, showForecastCone, activePointIndex, satelliteOverlay, isAiDemonstration]);

  return (
    <div className={`relative rounded-xl overflow-hidden border border-cyan-950/60 bg-neutral-950 ${className}`}>
      <canvas
        ref={canvasRef}
        width={760}
        height={480}
        className="w-full h-full object-cover block"
      />
      {/* Legend at bottom right */}
      <div className="absolute bottom-3 right-3 bg-neutral-900/90 backdrop-blur-md px-3 py-2 rounded-lg border border-neutral-800 text-[11px] font-mono-tech flex flex-col gap-1 z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block"></span>
          <span className="text-neutral-300">Observed Track (IMD / IBTrACS)</span>
        </div>
        {showForecastCone && (
          <>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-amber-500 inline-block"></span>
              <span className="text-amber-300">AI Predicted Trajectory</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-amber-500/30 border border-amber-400 border-dashed inline-block"></span>
              <span className="text-amber-200/80">Cone of Uncertainty (70% CI)</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
