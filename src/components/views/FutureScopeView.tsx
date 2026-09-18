import React from 'react';
import {
  Compass,
  Cpu,
  Globe2,
  LineChart,
  Radio,
  Rocket,
  ShieldAlert,
  Sparkles,
  Waves
} from 'lucide-react';

export const FutureScopeView: React.FC = () => {
  const roadmapCards = [
    {
      title: 'Next-Gen Satellite Constellations',
      badge: 'ISRO INSAT-4 Series',
      icon: Radio,
      desc: 'Incorporating future high-resolution hyperspectral sounders and 10-minute rapid-scan modes over active Indian Ocean cyclone sectors.'
    },
    {
      title: 'Physics-Informed Neural Networks (PINNs)',
      badge: 'Thermodynamic Navier-Stokes',
      icon: Cpu,
      desc: 'Constraining deep neural layers with fundamental atmospheric conservation laws (mass, momentum, and enthalpy) to prevent unphysical track jumps.'
    },
    {
      title: 'Extended 120-Hour Forecast Horizons',
      badge: '5-Day Advance Lead',
      icon: LineChart,
      desc: 'Expanding prediction memory architectures from 72-hour limits to full 120-hour (5-day) operational warning cones for long-range logistics.'
    },
    {
      title: 'Bayesian Deep Ensemble Uncertainty',
      badge: 'Probabilistic Rigor',
      icon: Sparkles,
      desc: 'Formulating multi-model Bayesian neural variance to map non-Gaussian track bifurcation when steering ridges weaken.'
    },
    {
      title: 'National CAP & NDMA Integration',
      badge: 'Direct Siren Activation',
      icon: ShieldAlert,
      desc: 'Direct automated API dispatch into India’s Common Alerting Protocol (CAP) for geo-targeted cell-broadcast sirens to coastal mobile subscribers.'
    },
    {
      title: 'Hyper-Local Coastal Inundation & Surge',
      badge: 'Bathymetric Coupling',
      icon: Waves,
      desc: 'Coupling AI wind fields with coastal bathymetry models (ADCIRC) to predict exact storm surge heights at village and block levels.'
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col p-4 sm:p-8 z-10 text-white overflow-y-auto">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-3 mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-purple-950/80 border border-purple-800 text-purple-300 font-mono-tech text-xs px-2.5 py-0.5 rounded">
              RESEARCH & SCALING ROADMAP
            </span>
            <span className="text-xs font-mono-tech text-neutral-400">
              Future Meteorological Frontiers
            </span>
          </div>
          <h2 className="font-cinzel text-xl sm:text-3xl font-bold text-neutral-100 mt-1">
            Future Scope & Technology Horizons
          </h2>
        </div>

        <div className="bg-neutral-900/90 border border-neutral-800 px-3 py-1.5 rounded-lg text-xs font-mono-tech text-purple-300 flex items-center gap-2">
          <Rocket className="w-4 h-4 text-purple-400" />
          <span>Long-Term Deployment Vision</span>
        </div>
      </div>

      {/* Grid of 6 Roadmap Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
        {roadmapCards.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/90 flex flex-col justify-between hover:border-purple-500/50 hover:bg-neutral-900 transition-all"
            >
              <div>
                <div className="flex items-center justify-between border-b border-neutral-800/80 pb-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-950/80 border border-purple-800/80 flex items-center justify-center text-purple-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono-tech bg-neutral-950 text-neutral-300 border border-neutral-800 px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-neutral-100 mb-1.5">{item.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-neutral-800/80 flex items-center justify-between text-[10px] font-mono-tech text-purple-400">
                <span>Phase: Post-Hackathon R&D</span>
                <span>T=0{idx + 1}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Summary Bar */}
      <div className="mt-4 p-3 rounded-lg bg-neutral-950/90 border border-neutral-800 flex items-center justify-between text-xs font-mono-tech text-neutral-300">
        <div>
          <strong className="text-purple-300">Ultimate Mission: </strong>
          Transforming satellite orbital telemetries into automated zero-casualty coastal protection protocols across India's 7,516 km coastline.
        </div>
      </div>
    </div>
  );
};
