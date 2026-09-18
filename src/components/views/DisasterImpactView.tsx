import React, { useState } from 'react';
import { DOCUMENTARY_ASSETS } from '../../assets/images';
import {
  Anchor,
  BellRing,
  Building2,
  CheckCircle,
  HelpCircle,
  LifeBuoy,
  PhoneCall,
  ShieldCheck,
  Truck,
  Users
} from 'lucide-react';

export const DisasterImpactView: React.FC = () => {
  const [selectedApp, setSelectedApp] = useState<number>(0);

  const applications = [
    {
      title: '72-Hour Coastal Evacuation Planning',
      icon: Users,
      badge: 'Golden 72h-48h Window',
      desc: 'Predictive track corridors enable district collectors to sequence transport logistics, moving vulnerable elderly, children, and coastal communities to fortified multi-purpose cyclone shelters ahead of heavy rains.',
      metric: 'Over 1.2M evacuated in Cyclone Fani (Odisha Standard of Zero Casualties)'
    },
    {
      title: 'Fishermen & Marine Advisory Dissemination',
      icon: Anchor,
      badge: 'Offshore Safety Zone',
      desc: 'Dynamic gale wind radius forecasting triggers direct NAVTEX, VHF radio broadcasts, and satellite messaging to recall deep-sea fishing trawlers before rough seas develop.',
      metric: '100% offshore trawlers docked within 36 hours of first red alert'
    },
    {
      title: 'NDRF & Emergency Rescue Pre-Positioning',
      icon: Truck,
      badge: 'Tactical Resource Staging',
      desc: 'National Disaster Response Force (NDRF) and state disaster relief battalions are strategically stationed along probable landfall corridors with tree-clearing saws, inflatable boats, and mobile power generators.',
      metric: '28+ specialized disaster battalions positioned prior to landfall'
    },
    {
      title: 'Critical Infrastructure & Power Grid Hardening',
      icon: Building2,
      badge: 'Utility Protection',
      desc: 'Telecom providers, hospital backup generators, water supply plants, and substation transformers are secured or temporarily decoupled to prevent grid collapses.',
      metric: 'Emergency hospital generators kept fueled for uninterrupted ICUs'
    },
    {
      title: 'State Emergency Operations Center (SEOC) Coordination',
      icon: BellRing,
      badge: 'Command & Control',
      desc: 'Unified decision dashboards synthesize AI forecasts with live district reports, enabling chief secretaries to coordinate relief camps, food packets, and medical teams.',
      metric: 'Integrated multi-agency dashboard active 24/7'
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col p-4 sm:p-8 z-10 text-white overflow-y-auto">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-3 mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-emerald-950/80 border border-emerald-800 text-emerald-300 font-mono-tech text-xs px-2.5 py-0.5 rounded">
              OPERATIONAL IMPACT & RESILIENCE
            </span>
            <span className="text-xs font-mono-tech text-neutral-400">
              Transforming Algorithmic Accuracy into Saved Lives
            </span>
          </div>
          <h2 className="font-cinzel text-xl sm:text-3xl font-bold text-neutral-100 mt-1">
            Disaster Management & Decision Support
          </h2>
        </div>

        {/* Human-in-the-loop Badge */}
        <div className="bg-neutral-900/90 border border-emerald-800/80 px-3 py-1.5 rounded-lg text-xs font-mono-tech text-emerald-300 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Human-in-the-Loop: AI Augments, Never Replaces Authorities</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 items-stretch">
        {/* Left 5 Cols: Evacuation Photo & Mandate Statement */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="relative rounded-xl overflow-hidden border border-neutral-800 flex-1 min-h-[220px]">
            <img
              src={DOCUMENTARY_ASSETS.coastalEvacuation}
              alt="Coastal Evacuation and NDRF preparedness in Odisha"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-xs font-mono-tech text-neutral-200">
              <div className="text-emerald-400 font-bold">Odisha Coastal Disaster Protocol</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">
                Community evacuation before severe squall arrival
              </div>
            </div>
          </div>

          <div className="bg-neutral-900/80 border border-neutral-800 p-4 rounded-xl text-xs font-mono-tech space-y-2">
            <div className="text-emerald-400 font-bold flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4" /> CORE DISASTER MANDATE:
            </div>
            <p className="text-neutral-300 leading-relaxed text-[11px]">
              AI prediction models serve strictly as an intelligent advisory layer. The final issuance of cyclone warnings, red alerts, and evacuation orders remains the exclusive prerogative of the India Meteorological Department and designated State Disaster Management Authorities.
            </p>
          </div>
        </div>

        {/* Right 7 Cols: Interactive List of Disaster Management Use Cases */}
        <div className="lg:col-span-7 flex flex-col gap-2.5">
          <div className="text-xs font-mono-tech text-neutral-400 mb-1">
            KEY DISASTER MANAGEMENT APPLICATIONS (CLICK TO INSPECT):
          </div>

          <div className="space-y-2 flex-1">
            {applications.map((app, idx) => {
              const Icon = app.icon;
              const isSelected = selectedApp === idx;
              return (
                <button
                  key={app.title}
                  onClick={() => setSelectedApp(idx)}
                  className={`w-full p-3 rounded-lg border text-left transition-all duration-150 flex items-start gap-3 ${
                    isSelected
                      ? 'bg-emerald-950/40 border-emerald-500 text-white shadow-lg ring-1 ring-emerald-500/50'
                      : 'bg-neutral-950/60 border-neutral-800 hover:bg-neutral-900 text-neutral-300'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected ? 'bg-emerald-500 text-neutral-950 font-bold' : 'bg-neutral-800 text-neutral-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-neutral-100">{app.title}</span>
                      <span className="text-[10px] font-mono-tech bg-neutral-900 border border-neutral-700/60 text-emerald-300 px-2 py-0.5 rounded shrink-0">
                        {app.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-300/90 mt-1 leading-relaxed">
                      {app.desc}
                    </p>
                    <div className="mt-1.5 text-[10px] font-mono-tech text-emerald-400/90">
                      ➜ {app.metric}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
