import React from 'react';
import {
  Brain,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  TrendingUp,
  XCircle,
  Zap
} from 'lucide-react';

export const WhatIsNewView: React.FC = () => {
  const innovationElements = [
    {
      num: '01',
      title: 'Multi-Source Satellite Data Fusion',
      desc: 'Seamlessly combines Infrared (10.8µm), Water Vapour (6.8µm), and Visible channels into a synchronous spatio-temporal tensor.',
      icon: Layers,
      color: 'text-cyan-400'
    },
    {
      num: '02',
      title: 'AI-Based Cyclone Identification',
      desc: 'Automates early depression pattern recognition from raw spaceborne imagery before subjective visual signs emerge.',
      icon: Brain,
      color: 'text-purple-400'
    },
    {
      num: '03',
      title: 'Automated Intensity Estimation',
      desc: 'Translates manual subjective Dvorak technique into real-time deterministic wind speed (km/h) and central pressure (hPa) regression.',
      icon: Sparkles,
      color: 'text-amber-400'
    },
    {
      num: '04',
      title: 'Sequential Track Trajectory Prediction',
      desc: 'Bidirectional recurrent attention networks predict 24h, 48h, and 72h positions with sub-60km error bounds.',
      icon: TrendingUp,
      color: 'text-emerald-400'
    },
    {
      num: '05',
      title: 'Calibrated Uncertainty Estimation',
      desc: 'Generates probabilistic prediction corridors (cones of uncertainty) reflecting atmospheric chaos rather than false certainty.',
      icon: Cpu,
      color: 'text-rose-400'
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col p-4 sm:p-8 z-10 text-white overflow-y-auto">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-3 mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-cyan-950/80 border border-cyan-800 text-cyan-300 font-mono-tech text-xs px-2.5 py-0.5 rounded">
              SIH 2026 CORE INNOVATION MATRIX
            </span>
            <span className="text-xs font-mono-tech text-neutral-400">
              Problem Statement ID: 26070
            </span>
          </div>
          <h2 className="font-cinzel text-xl sm:text-3xl font-bold text-neutral-100 mt-1">
            What Is New: The Unified Paradigm
          </h2>
        </div>

        <div className="bg-cyan-950/70 border border-cyan-700/80 px-3 py-1.5 rounded-lg text-xs font-mono-tech text-cyan-300 flex items-center gap-2">
          <Zap className="w-4 h-4 text-cyan-400" />
          <span>Team O(1) Architectural Breakthrough</span>
        </div>
      </div>

      {/* Prominent Core Innovation Statement as required */}
      <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-cyan-950/70 via-neutral-900 to-purple-950/50 border border-cyan-500/60 shadow-xl mb-5">
        <span className="text-xs font-mono-tech text-cyan-400 uppercase tracking-wider block font-bold mb-1">
          THE FIVE-PILLAR INNOVATION FORMULA:
        </span>
        <p className="font-mono-tech text-sm sm:text-lg text-neutral-100 font-semibold leading-relaxed">
          “Multi-source satellite data + AI-based cyclone identification + intensity estimation + track prediction + uncertainty estimation.”
        </p>
      </div>

      {/* Comparison: Traditional vs Team O(1) Unified System */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 items-stretch">
        {/* Left: Traditional Workflow (Fragmented) */}
        <div className="lg:col-span-5 bg-neutral-900/40 border border-neutral-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 border-b border-neutral-800 pb-2 mb-3">
              <XCircle className="w-4 h-4 text-rose-400" />
              <span className="text-xs font-mono-tech text-rose-400 font-bold uppercase tracking-wide">
                Traditional Fragmented Approach
              </span>
            </div>

            <div className="space-y-3 text-xs text-neutral-400">
              <div className="p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/80">
                <strong className="text-neutral-300 block mb-0.5">Isolated Channel Analysis:</strong>
                Forecasters manually switch between separate IR, WV, and VIS software viewer screens.
              </div>
              <div className="p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/80">
                <strong className="text-neutral-300 block mb-0.5">Subjective Dvorak Classification:</strong>
                Significant human variance (±1.0 T-number) between different forecasters during night-time.
              </div>
              <div className="p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/80">
                <strong className="text-neutral-300 block mb-0.5">High Inference Turnaround:</strong>
                Numerical models (NWP) take 3–5 hours to complete high-resolution supercomputer runs.
              </div>
              <div className="p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/80">
                <strong className="text-neutral-300 block mb-0.5">Static Confidence Envelopes:</strong>
                Historical average circles of error that fail to reflect storm-specific atmospheric variance.
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-neutral-800/80 text-[11px] font-mono-tech text-neutral-500">
            Slow operational latency when rapid intensification strikes.
          </div>
        </div>

        {/* Right: Team O(1) Unified System (The 5 Combined Pillars) */}
        <div className="lg:col-span-7 bg-cyan-950/20 border border-cyan-500/50 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 border-b border-cyan-800/80 pb-2 mb-3">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono-tech text-cyan-300 font-bold uppercase tracking-wide">
                Team O(1) Unified Deep Learning Architecture
              </span>
            </div>

            <div className="space-y-2">
              {innovationElements.map((el) => {
                const Icon = el.icon;
                return (
                  <div
                    key={el.num}
                    className="p-2.5 rounded-lg bg-neutral-900/80 border border-neutral-800/80 flex items-start gap-3 hover:border-cyan-500/60 transition-all"
                  >
                    <span className="font-mono-tech text-xs text-cyan-400 font-bold mt-0.5">
                      {el.num}
                    </span>
                    <Icon className={`w-4 h-4 ${el.color} shrink-0 mt-0.5`} />
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-neutral-100">{el.title}</div>
                      <div className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed">
                        {el.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-cyan-900/80 text-[11px] font-mono-tech text-cyan-300 flex items-center justify-between">
            <span>Result: Sub-second inference • Objective classification • Calibrated risk corridor</span>
          </div>
        </div>
      </div>
    </div>
  );
};
