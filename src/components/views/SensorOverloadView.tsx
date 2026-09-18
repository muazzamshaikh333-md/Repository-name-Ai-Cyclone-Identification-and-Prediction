import React, { useState } from 'react';
import { DOCUMENTARY_ASSETS } from '../../assets/images';
import {
  Activity,
  CloudRain,
  Eye,
  Gauge,
  Layers,
  Thermometer,
  Waves,
  Wind,
  AlertCircle
} from 'lucide-react';

export const SensorOverloadView: React.FC = () => {
  const [activeChannel, setActiveChannel] = useState<string>('IR');

  const channels = [
    {
      id: 'IR',
      name: 'Infrared Satellite (TIR-1)',
      band: '10.8 µm',
      icon: Layers,
      color: 'text-rose-400',
      borderColor: 'border-rose-500/50',
      bgColor: 'bg-rose-950/30',
      role: 'Cloud-Top Temperature & Core Convection',
      insight:
        'Quantifies radiative temperatures of convective storm clouds. Cold cloud tops (below -70°C) indicate violent vertical updrafts and deep tropical storm development.',
      limitation:
        'Cannot resolve low-level circulation centers or eye boundaries if obscured by high-altitude cirrus cloud canopy.'
    },
    {
      id: 'WV',
      name: 'Water-Vapour Imagery (WV)',
      band: '6.8 µm',
      icon: CloudRain,
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500/50',
      bgColor: 'bg-cyan-950/30',
      role: 'Mid-to-Upper Tropospheric Moisture & Steering Flow',
      insight:
        'Reveals dry air intrusions that can choke cyclone convection, plus large-scale subtropical anticyclones that steer the cyclone track.',
      limitation: 'Primarily sensitive above 500 hPa; provides minimal information on surface wind speeds.'
    },
    {
      id: 'VIS',
      name: 'Visible Satellite (VIS)',
      band: '0.65 µm',
      icon: Eye,
      color: 'text-amber-400',
      borderColor: 'border-amber-500/50',
      bgColor: 'bg-amber-950/30',
      role: 'Optical Cloud Texture & Eyewall Geometry',
      insight:
        'Provides highest spatial resolution (1 km). Directly reveals tight spiral feeder bands, eye-wall pinhole formation, and low-level vorticity.',
      limitation: 'Completely unavailable during night-time hours (00:00 to 06:00 UTC over Indian basin).'
    },
    {
      id: 'TRACKS',
      name: 'Historical Cyclone Tracks',
      band: 'NOAA IBTrACS',
      icon: Activity,
      color: 'text-purple-400',
      borderColor: 'border-purple-500/50',
      bgColor: 'bg-purple-950/30',
      role: 'Climatological Trajectory Analogues',
      insight:
        'Historical analogue matching against past May/November Bay of Bengal tracks to estimate recurrence probabilities.',
      limitation: 'Historical patterns often fail when climate-driven marine heatwaves cause anomalous rapid recurvature.'
    },
    {
      id: 'WIND',
      name: 'Wind Speed & Scatterometry',
      band: 'SCATSAT-1 / ASCAT',
      icon: Wind,
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/50',
      bgColor: 'bg-emerald-950/30',
      role: 'Surface Wind Radii & Gale Envelope',
      insight:
        'Maps Radius of Maximum Wind (RMW) and 34-knot gale force radii critical for issuing marine warnings to offshore fishermen.',
      limitation: 'Swath coverage is infrequent (once or twice per day per satellite pass).'
    },
    {
      id: 'PRESS',
      name: 'Atmospheric Central Pressure',
      band: 'Barometric / Synoptic',
      icon: Gauge,
      color: 'text-orange-400',
      borderColor: 'border-orange-500/50',
      bgColor: 'bg-orange-950/30',
      role: 'Deepening Rate & Intensity Category',
      insight:
        'Pressure drop rate (e.g. Fani dropping to 932 hPa) serves as direct indicator of explosive deepening (>12 hPa in 12h).',
      limitation: 'Sparse ocean in-situ buoy network leaves huge observation gaps in open ocean.'
    },
    {
      id: 'TEMP',
      name: 'Sea Surface Temp (SST)',
      band: 'Thermal Radiometer',
      icon: Thermometer,
      color: 'text-pink-400',
      borderColor: 'border-pink-500/50',
      bgColor: 'bg-pink-950/30',
      role: 'Ocean Thermal Energy Fuel (>28°C)',
      insight:
        'Tropical Cyclone Heat Potential (TCHP) indicates whether ocean can sustain explosive rapid intensification without cold upwelling.',
      limitation: 'Subsurface thermocline depth cannot be determined from surface skin temperature alone.'
    },
    {
      id: 'CLOUD',
      name: 'Cloud Convective Structure',
      band: 'Dvorak Technique CI',
      icon: Waves,
      color: 'text-blue-400',
      borderColor: 'border-blue-500/50',
      bgColor: 'bg-blue-950/30',
      role: 'Curved Band Pattern & Eyewall Symmetry',
      insight:
        'Subjective Dvorak T-number classification based on spiral log-spiral overlay and central cold cover width.',
      limitation:
        'Significant subjective variability between different human forecasters (up to ±1.0 T-number difference).'
    }
  ];

  const selected = channels.find((c) => c.id === activeChannel) || channels[0];

  return (
    <div className="relative w-full h-full flex flex-col p-4 sm:p-8 z-10 text-white overflow-y-auto">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-3 mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-red-950/80 border border-red-800 text-red-300 font-mono-tech text-xs px-2.5 py-0.5 rounded">
              THE TECHNOLOGICAL PROBLEM
            </span>
            <span className="text-xs font-mono-tech text-neutral-400">
              Cognitive Overload & Asynchronous Multi-Channel Divergence
            </span>
          </div>
          <h2 className="font-cinzel text-xl sm:text-3xl font-bold text-neutral-100 mt-1">
            Data Fragmentation in Tropical Cyclone Forecasting
          </h2>
        </div>

        <div className="bg-neutral-900/90 border border-neutral-800 px-3 py-1.5 rounded-lg text-xs font-mono-tech text-neutral-300 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-400" />
          <span>8 Concurrent Sensor Streams Required for 1 Forecast Fix</span>
        </div>
      </div>

      {/* Main Layout: Left interactive sensor grid, Right meteorologist view and active analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 items-stretch">
        {/* Left: 8 Data Streams */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="text-xs font-mono-tech text-neutral-400 mb-2">
            SELECT OBSERVATIONAL STREAM TO EXAMINE METEOROLOGICAL ROLE & LIMITATION:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 flex-1">
            {channels.map((ch) => {
              const Icon = ch.icon;
              const isSelected = ch.id === activeChannel;
              return (
                <button
                  key={ch.id}
                  onClick={() => setActiveChannel(ch.id)}
                  className={`p-3 rounded-lg border text-left transition-all duration-200 flex items-start gap-3 ${
                    isSelected
                      ? `${ch.bgColor} ${ch.borderColor} shadow-lg ring-1 ring-cyan-500/50`
                      : 'bg-neutral-900/50 border-neutral-800/80 hover:bg-neutral-900 hover:border-neutral-700'
                  }`}
                >
                  <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${ch.color}`} />
                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-xs font-semibold text-neutral-200 truncate">
                        {ch.name}
                      </span>
                      <span className="text-[10px] font-mono-tech text-neutral-400 shrink-0">
                        {ch.band}
                      </span>
                    </div>
                    <div className="text-[11px] text-neutral-400 mt-1 line-clamp-1">
                      {ch.role}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Operational Inspector & Control Room Context */}
        <div className="lg:col-span-5 flex flex-col gap-3 bg-neutral-900/60 border border-neutral-800/80 rounded-xl p-4">
          <div className="relative rounded-lg overflow-hidden border border-neutral-800 h-40 shrink-0">
            <img
              src={DOCUMENTARY_ASSETS.controlRoom}
              alt="IMD Cyclone Warning Forecaster analyzing multi-screen data"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
            <div className="absolute bottom-2 left-3 right-3 text-[11px] font-mono-tech text-neutral-300 flex items-center justify-between">
              <span>IMD Cyclone Warning Division Forecaster Station</span>
              <span className="text-cyan-400">Synoptic Analysis Desk</span>
            </div>
          </div>

          {/* Active Sensor Deep Dive Card */}
          <div className={`flex-1 p-4 rounded-lg border ${selected.bgColor} ${selected.borderColor} flex flex-col justify-between`}>
            <div>
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2 mb-2">
                <span className={`text-xs font-mono-tech font-bold uppercase tracking-wider ${selected.color}`}>
                  {selected.name} [{selected.band}]
                </span>
                <span className="text-[10px] font-mono-tech text-neutral-400">
                  MET SIGNAL ANALYSIS
                </span>
              </div>

              <div className="text-xs font-semibold text-neutral-200 mb-1">
                Primary Meteorological Role:
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed mb-3">
                {selected.insight}
              </p>

              <div className="text-xs font-semibold text-amber-300 mb-1 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                Operational Limitation When Used Alone:
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {selected.limitation}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-800/80 text-[11px] font-mono-tech text-cyan-300">
              ➜ Human forecasters must manually reconcile these conflicting signals under intense 3-hour bulletin deadlines.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
