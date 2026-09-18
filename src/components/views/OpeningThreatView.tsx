import React from 'react';
import { DOCUMENTARY_ASSETS } from '../../assets/images';
import { AlertTriangle, Radio, Satellite, ShieldAlert } from 'lucide-react';

export const OpeningThreatView: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 z-10 text-white overflow-hidden">
      {/* Background imagery with slow documentary zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={DOCUMENTARY_ASSETS.cycloneEye}
          alt="Meteorological Satellite view of Tropical Cyclone over Bay of Bengal"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-35 scale-105 transition-transform duration-[12000ms] ease-out hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40" />
        <div className="absolute inset-0 scanlines opacity-25 pointer-events-none" />
      </div>

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800/80 pb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <div className="flex flex-col">
            <span className="font-mono-tech text-xs tracking-widest text-red-400 uppercase font-semibold">
              Live Threat Assessment // Basin BOB-2026
            </span>
            <span className="text-[11px] text-neutral-400 font-mono-tech">
              ISRO INSAT-3D Earth Observation • North Indian Ocean Sector
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-neutral-900/80 border border-neutral-800 rounded-full px-3 py-1 text-xs font-mono-tech text-neutral-300">
          <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>IMD Cyclone Warning Division Sync</span>
        </div>
      </div>

      {/* Center Cinematic Feature Block */}
      <div className="relative z-10 my-auto max-w-4xl py-6">
        <div className="inline-flex items-center gap-2 bg-red-950/50 border border-red-800/60 text-red-300 text-xs px-3 py-1 rounded-md mb-4 font-mono-tech">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>OPERATIONAL SCENARIO • RAPID INTENSIFICATION PROTOCOL</span>
        </div>

        <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-100 leading-tight">
          THE TROPICAL CYCLONE THREAT
        </h1>

        <p className="mt-4 text-base sm:text-xl text-neutral-300 font-light leading-relaxed max-w-3xl">
          The warm waters of the Bay of Bengal cradle dense coastal populations. Under favorable upper-level divergence and ocean thermal energy, atmospheric depressions transform into catastrophic vortexes with devastating speed.
        </p>

        {/* The Mandatory Subtle Text */}
        <div className="mt-8 p-4 sm:p-5 rounded-xl bg-neutral-900/90 border-l-4 border-amber-500 border-y border-r border-neutral-800 shadow-2xl backdrop-blur-md">
          <p className="font-mono-tech text-sm sm:text-base text-amber-300 italic tracking-wide">
            “Tropical cyclones can rapidly intensify and change direction, making early prediction critical.”
          </p>
          <div className="mt-2 flex items-center gap-3 text-[11px] text-neutral-400 font-mono-tech">
            <span>Core Met Challenge: Sub-24 Hour Rapid Intensification (RI)</span>
            <span>•</span>
            <span>Data Grounding: IMD / WMO Regional Specialized Met Center</span>
          </div>
        </div>
      </div>

      {/* Bottom Operational Multi-Screen Telemetry Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-neutral-800/80 text-xs font-mono-tech">
        <div className="bg-neutral-900/80 border border-neutral-800/90 rounded-lg p-3 flex items-start gap-3">
          <Satellite className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <div className="text-neutral-200 font-semibold">INSAT-3D/3DR Radiance</div>
            <div className="text-neutral-400 text-[11px] mt-0.5">
              Multi-spectral thermal infrared & water-vapour scanning every 15 minutes.
            </div>
          </div>
        </div>

        <div className="bg-neutral-900/80 border border-neutral-800/90 rounded-lg p-3 flex items-start gap-3">
          <Radio className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <div className="text-neutral-200 font-semibold">Weather Monitoring Centers</div>
            <div className="text-neutral-400 text-[11px] mt-0.5">
              IMD New Delhi & coastal Doppler Weather Radars tracking convective eyewall rings.
            </div>
          </div>
        </div>

        <div className="bg-neutral-900/80 border border-neutral-800/90 rounded-lg p-3 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <div className="text-neutral-200 font-semibold">Emergency Control Rooms</div>
            <div className="text-neutral-400 text-[11px] mt-0.5">
              State disaster management authorities synchronizing golden 48h evacuation windows.
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer tag */}
      <div className="relative z-10 text-[10px] text-neutral-500 font-mono-tech mt-2 text-right">
        [SCIENTIFIC VISUALIZATION: Authentic INSAT-3D Multi-Spectral Reconstructed Frame]
      </div>
    </div>
  );
};
