import React, { useState } from 'react';
import { CycloneMapCanvas } from '../CycloneMapCanvas';
import { HISTORICAL_FANI_DATA, DEMO_PREDICTION_SERIES } from '../../data/documentaryData';
import {
  AlertTriangle,
  Compass,
  Gauge,
  HelpCircle,
  Layers,
  MapPin,
  TrendingUp,
  Wind
} from 'lucide-react';

export const PredictionDemoView: React.FC = () => {
  const [forecastHorizon, setForecastHorizon] = useState<'24h' | '48h' | '72h'>('48h');
  const demo = DEMO_PREDICTION_SERIES;

  const currentForecast =
    forecastHorizon === '24h'
      ? demo.forecast24h
      : forecastHorizon === '48h'
      ? demo.forecast48h
      : demo.forecast72h;

  return (
    <div className="relative w-full h-full flex flex-col p-4 sm:p-8 z-10 text-white overflow-y-auto">
      {/* Prominent Mandatory AI Demonstration Label */}
      <div className="bg-amber-950/80 border-2 border-amber-500/80 rounded-xl p-3 mb-4 flex flex-wrap items-center justify-between gap-3 shadow-lg shadow-amber-950/40">
        <div className="flex items-center gap-2.5">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 animate-pulse" />
          <div>
            <span className="font-mono-tech text-xs uppercase font-extrabold tracking-wider text-amber-300 block">
              ILLUSTRATIVE AI DEMONSTRATION — EXPERIMENTAL INFERENCE
            </span>
            <span className="text-[11px] text-amber-200/80 font-mono-tech">
              Scientific Prototype Demonstration • Clearly distinguishing Observed Data from AI Predictions
            </span>
          </div>
        </div>

        <div className="text-[11px] font-mono-tech text-amber-300/90 bg-amber-900/60 px-3 py-1 rounded-md border border-amber-700/60">
          NEVER PRESENTED AS ACTUAL HISTORICAL ADVISORY
        </div>
      </div>

      {/* Main Grid: Left Map with Observed vs Prediction, Right Technical Telemetry */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 items-stretch">
        {/* Left: Interactive Map with Cone of Uncertainty */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="relative flex-1 min-h-[340px]">
            <CycloneMapCanvas
              currentTrack={HISTORICAL_FANI_DATA.track}
              activePointIndex={6}
              showForecastCone={true}
              satelliteOverlay={true}
              isAiDemonstration={true}
              className="h-full"
            />
          </div>

          {/* Horizon Selection Buttons */}
          <div className="bg-neutral-900/90 border border-neutral-800 p-2 rounded-xl flex items-center justify-between gap-2 text-xs font-mono-tech">
            <span className="text-neutral-400 px-2">FORECAST LEAD TIME:</span>
            <div className="flex items-center gap-1.5 flex-1 justify-end">
              {(['24h', '48h', '72h'] as const).map((lead) => (
                <button
                  key={lead}
                  onClick={() => setForecastHorizon(lead)}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                    forecastHorizon === lead
                      ? 'bg-amber-500 text-neutral-950 shadow-md font-bold'
                      : 'bg-neutral-800/80 text-neutral-300 hover:bg-neutral-800'
                  }`}
                >
                  +{lead} Horizon
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Explicit Side-by-Side Comparison: Observed vs AI Prediction */}
        <div className="lg:col-span-5 flex flex-col gap-3 justify-between">
          {/* Card 1: Ground Truth / Observed Data */}
          <div className="bg-cyan-950/30 border border-cyan-500/50 rounded-xl p-4">
            <div className="flex items-center justify-between border-b border-cyan-800/60 pb-2 mb-2">
              <span className="font-mono-tech text-xs text-cyan-300 font-bold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                OBSERVED DATA (GROUND TRUTH)
              </span>
              <span className="text-[10px] font-mono-tech bg-cyan-900/60 text-cyan-200 px-2 py-0.5 rounded">
                T=00h (Confirmed Fix)
              </span>
            </div>

            <div className="space-y-1.5 text-xs font-mono-tech text-neutral-300">
              <div className="flex justify-between">
                <span className="text-neutral-400">Position Coordinates:</span>
                <span className="text-cyan-300 font-bold">{demo.observedAnchor.lat}° N, {demo.observedAnchor.lon}° E</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">IMD Classification:</span>
                <span className="text-neutral-200">{demo.observedAnchor.intensity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Sustained Wind Speed:</span>
                <span className="text-neutral-200">{demo.observedAnchor.windKmh} km/h (90 kts)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Central Pressure:</span>
                <span className="text-neutral-200">{demo.observedAnchor.pressureHpa} hPa</span>
              </div>
            </div>
          </div>

          {/* Card 2: AI Model Prediction */}
          <div className="bg-amber-950/30 border border-amber-500/50 rounded-xl p-4 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-amber-800/60 pb-2 mb-2">
                <span className="font-mono-tech text-xs text-amber-300 font-bold flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                  AI MODEL PREDICTION (T+{forecastHorizon})
                </span>
                <span className="text-[10px] font-mono-tech bg-amber-900/60 text-amber-200 px-2 py-0.5 rounded">
                  Probabilistic Forecast
                </span>
              </div>

              <div className="space-y-1.5 text-xs font-mono-tech text-neutral-300">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Predicted Center:</span>
                  <span className="text-amber-300 font-bold">{currentForecast.lat}° N, {currentForecast.lon}° E</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Estimated Intensity:</span>
                  <span className="text-neutral-200">{currentForecast.intensity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Predicted Sustained Wind:</span>
                  <span className="text-amber-300 font-semibold">{currentForecast.windKmh} km/h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Predicted Central Pressure:</span>
                  <span className="text-neutral-200">{currentForecast.pressureHpa} hPa</span>
                </div>
              </div>
            </div>

            {/* Uncertainty & Prediction Corridor metrics */}
            <div className="mt-3 pt-3 border-t border-amber-800/60 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono-tech">
                <span className="text-neutral-400">Confidence Metric:</span>
                <span className="text-emerald-400 font-bold">{currentForecast.confidencePercent}% Reliability</span>
              </div>
              <div className="w-full bg-neutral-900 rounded-full h-2 overflow-hidden border border-neutral-800">
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${currentForecast.confidencePercent}%` }}
                />
              </div>

              <div className="flex justify-between text-[11px] font-mono-tech text-amber-300">
                <span>Prediction Corridor Radius:</span>
                <span className="font-bold">±{currentForecast.uncertaintyConeRadiusKm} km (70% Confidence Band)</span>
              </div>
            </div>
          </div>

          {/* Operational Clarification Note */}
          <div className="p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800 text-[11px] font-mono-tech text-neutral-400 flex items-start gap-2">
            <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              Forecast corridors widen over time due to synoptic chaos. AI predictions are strictly supplementary inputs to human chief forecasters.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
