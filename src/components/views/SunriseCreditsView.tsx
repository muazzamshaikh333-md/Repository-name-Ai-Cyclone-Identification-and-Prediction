import React from 'react';
import { DOCUMENTARY_ASSETS } from '../../assets/images';
import { Award, Compass, HeartHandshake, ShieldCheck, Sun, Users } from 'lucide-react';

export const SunriseCreditsView: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-12 z-10 text-white overflow-hidden">
      {/* Background coastal sunrise shot with subtle documentary pan */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={DOCUMENTARY_ASSETS.coastalSunrise}
          alt="Peaceful coastal sunrise in Odisha after successful cyclone warning operation"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-45 scale-105 transition-transform duration-[15000ms] ease-out hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/65 to-neutral-950/30" />
        <div className="absolute inset-0 scanlines opacity-20 pointer-events-none" />
      </div>

      {/* Top Banner */}
      <div className="relative z-10 flex items-center justify-between border-b border-neutral-800/80 pb-3">
        <div className="flex items-center gap-2 font-mono-tech text-xs text-amber-300">
          <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
          <span>DAWN OVER EAST COAST // POST-OPERATION RESTORATION</span>
        </div>
        <div className="text-xs font-mono-tech text-neutral-400">
          Zero Casualties Objective Achieved
        </div>
      </div>

      {/* Center Cinematic Display: The Required Climax Text */}
      <div className="relative z-10 my-auto text-center max-w-3xl mx-auto py-6">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs px-3 py-1 rounded-full mb-5 font-mono-tech">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>SCIENCE FOR HUMAN RESILIENCE</span>
        </div>

        {/* The Exact Required Motto */}
        <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-100 tracking-tight leading-tight">
          “From Satellite Data to Early Action.”
        </h1>

        <p className="mt-4 text-sm sm:text-lg text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
          Bridging orbital remote sensing with ground-level disaster mitigation. When meteorologists, emergency rescue responders, and local communities unite under accurate early intelligence, nature's most fierce vortexes become survivable.
        </p>

        {/* Team O(1) Official Submission Block as mandated */}
        <div className="mt-8 p-6 rounded-2xl bg-neutral-900/90 border border-neutral-700/80 backdrop-blur-md shadow-2xl inline-block text-left w-full max-w-xl">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span className="font-mono-tech text-xs text-amber-300 font-bold uppercase tracking-wider">
                Smart India Hackathon 2026
              </span>
            </div>
            <span className="text-xs font-mono-tech bg-cyan-950 text-cyan-300 border border-cyan-800 px-2 py-0.5 rounded">
              Official Project Entry
            </span>
          </div>

          <div className="space-y-2 font-mono-tech text-xs sm:text-sm">
            <div className="text-base sm:text-lg font-bold text-white font-cinzel">
              AI-Driven Cyclone Identification & Prediction
            </div>
            <div className="flex justify-between text-neutral-300">
              <span className="text-neutral-400">Team:</span>
              <span className="text-cyan-400 font-bold">Team O(1)</span>
            </div>
            <div className="flex justify-between text-neutral-300">
              <span className="text-neutral-400">Problem Statement ID:</span>
              <span className="text-white font-bold">26070</span>
            </div>
            <div className="flex justify-between text-neutral-300">
              <span className="text-neutral-400">Theme:</span>
              <span className="text-emerald-400 font-bold">Disaster Management</span>
            </div>
            <div className="flex justify-between text-neutral-300">
              <span className="text-neutral-400">Target Ministry / Nodal Center:</span>
              <span className="text-neutral-200">Ministry of Earth Sciences (MoES) / IMD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Credits & Acknowledgements */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-neutral-800/80 text-[11px] font-mono-tech text-neutral-400">
        <div>
          Scientific Grounding: ISRO MOSDAC • IMD New Delhi • NOAA IBTrACS • WMO
        </div>
        <div className="text-neutral-500">
          Smart India Hackathon 2026 • Grand Finale Demonstration
        </div>
      </div>
    </div>
  );
};
