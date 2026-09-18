import React, { useState } from 'react';
import { HISTORICAL_FANI_DATA } from '../../data/documentaryData';
import { CycloneMapCanvas } from '../CycloneMapCanvas';
import { CheckCircle2, ChevronRight, Compass, ShieldCheck, Wind } from 'lucide-react';

export const HistoricalIncidentView: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<number>(0);
  const data = HISTORICAL_FANI_DATA;

  return (
    <div className="relative w-full h-full flex flex-col p-4 sm:p-8 z-10 text-white overflow-y-auto">
      {/* Header with verified official classification */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-3 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-cyan-950/80 border border-cyan-800 text-cyan-300 font-mono-tech text-xs px-2.5 py-0.5 rounded">
              HISTORICAL GROUND TRUTH CASE STUDY
            </span>
            <span className="text-xs font-mono-tech text-neutral-400">
              Source: {data.officialSource}
            </span>
          </div>
          <h2 className="font-cinzel text-xl sm:text-3xl font-bold text-neutral-100 mt-1">
            {data.name} ({data.year})
          </h2>
        </div>

        {/* Real Official Metrics Badge */}
        <div className="flex items-center gap-2 font-mono-tech text-xs">
          <div className="bg-neutral-900/90 border border-neutral-800 px-3 py-1.5 rounded-md">
            <span className="text-neutral-400 block text-[10px]">PEAK SUSTAINED WIND</span>
            <span className="text-red-400 font-bold text-sm">{data.peakWindSpeedKmh} km/h (115 kts)</span>
          </div>
          <div className="bg-neutral-900/90 border border-neutral-800 px-3 py-1.5 rounded-md">
            <span className="text-neutral-400 block text-[10px]">LOWEST PRESSURE</span>
            <span className="text-cyan-300 font-bold text-sm">{data.lowestPressureHpa} hPa</span>
          </div>
          <div className="bg-neutral-900/90 border border-neutral-800 px-3 py-1.5 rounded-md">
            <span className="text-neutral-400 block text-[10px]">CITIZENS EVACUATED</span>
            <span className="text-emerald-400 font-bold text-sm">1.2 Million</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Map Track, Right 8-Stage Life Cycle */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1">
        {/* Left: Real Track Map Canvas */}
        <div className="lg:col-span-6 flex flex-col gap-3">
          <div className="relative flex-1 min-h-[300px] sm:min-h-[380px]">
            <CycloneMapCanvas
              currentTrack={data.track}
              activePointIndex={selectedStage + 2}
              satelliteOverlay={true}
              className="h-full"
            />
          </div>

          {/* Quick verification banner */}
          <div className="bg-neutral-900/80 border border-neutral-800/80 p-3 rounded-lg text-xs font-mono-tech flex items-center justify-between text-neutral-300">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Landfall: {data.landfallLocation}</span>
            </div>
            <span className="text-neutral-400">{data.landfallDate}</span>
          </div>
        </div>

        {/* Right: The 8 Historical Stages as required */}
        <div className="lg:col-span-6 flex flex-col bg-neutral-900/50 border border-neutral-800/70 rounded-xl p-4 overflow-hidden">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-2 mb-3">
            <span className="text-xs font-mono-tech uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
              <Wind className="w-3.5 h-3.5" /> 8 Lifecycle Milestones (Formation to Recovery)
            </span>
            <span className="text-[11px] font-mono-tech text-neutral-400">
              Select stage to inspect track
            </span>
          </div>

          <div className="space-y-2 overflow-y-auto pr-1 flex-1 max-h-[420px]">
            {data.stages.map((stage, idx) => {
              const isSelected = selectedStage === idx;
              return (
                <button
                  key={stage.stage}
                  onClick={() => setSelectedStage(idx)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 border flex items-start gap-3 ${
                    isSelected
                      ? 'bg-cyan-950/40 border-cyan-500/80 text-white shadow-lg shadow-cyan-950/30'
                      : 'bg-neutral-950/60 border-neutral-800/80 text-neutral-400 hover:bg-neutral-900/80 hover:text-neutral-200'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center font-mono-tech text-xs shrink-0 mt-0.5 ${
                      isSelected
                        ? 'bg-cyan-500 text-neutral-950 font-bold'
                        : 'bg-neutral-800 text-neutral-400'
                    }`}
                  >
                    {stage.stage}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4
                        className={`text-xs font-semibold tracking-wide ${
                          isSelected ? 'text-cyan-200' : 'text-neutral-300'
                        }`}
                      >
                        {stage.title}
                      </h4>
                      <span className="text-[10px] font-mono-tech text-neutral-400 shrink-0">
                        {stage.date}
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-300/80 mt-1 line-clamp-2 leading-relaxed">
                      {stage.description}
                    </p>
                    <div className="mt-1.5 flex items-center gap-1.5 text-[10px] font-mono-tech text-amber-300/90">
                      <ChevronRight className="w-3 h-3 text-amber-400" />
                      <span>{stage.status}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Disaster Preparedness Outcome footer */}
          <div className="mt-3 pt-3 border-t border-neutral-800/80 flex items-center gap-3 text-xs font-mono-tech text-neutral-300 bg-neutral-950/60 p-2.5 rounded-lg border border-neutral-800/60">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <span className="text-emerald-400 font-semibold">Historic Preparedness: </span>
              {data.evacuatedCount}; casualties restricted to {data.casualtiesCount}.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
