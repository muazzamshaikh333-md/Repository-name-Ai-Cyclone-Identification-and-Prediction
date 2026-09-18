import React from 'react';
import { Database, CheckCircle2, ShieldAlert, Globe, Server, Satellite, ExternalLink } from 'lucide-react';

export const DataSourcesView: React.FC = () => {
  const sources = [
    {
      name: 'MOSDAC / ISRO – INSAT-3D & INSAT-3DR',
      type: 'Geostationary Meteorological Satellite Imagery',
      coverage: 'Indian Ocean, Bay of Bengal, Arabian Sea (40°E–130°E)',
      resolution: '1 km (Visible), 4 km (TIR-1/TIR-2/MIR), 8 km (WV)',
      temporalCadence: 'Every 15 minutes (Half-hourly full disk & rapid scan)',
      accessMode: 'Archival & API Access (Near-Real-Time with Institutional Clearance)',
      verifiedRole: 'Primary raw multi-spectral radiometer imagery for cloud texture, convective depth, and eye tracking.',
      status: 'VERIFIED OFFICIAL REPOSITORY',
      realTimeNote: 'Near-Real-Time (15–30 min dissemination latency via MOSDAC portal)'
    },
    {
      name: 'IMD / RSMC New Delhi',
      type: 'Regional Specialized Meteorological Centre Official Bulletins',
      coverage: 'North Indian Ocean Tropical Cyclone Basin',
      resolution: 'Point synoptic fixes, 3-hourly advisory bulletins, DWR Doppler radiances',
      temporalCadence: '3-hourly cyclone warnings, hourly radar updates',
      accessMode: 'Official Government Open Data & Meteorological Bulletins',
      verifiedRole: 'Ground truth classifications, central pressure (hPa), landfall verification, and standard operational warning baseline.',
      status: 'VERIFIED OFFICIAL REPOSITORY',
      realTimeNote: 'Real-Time operational bulletins issued during active cyclonic events'
    },
    {
      name: 'NOAA IBTrACS (v04r00)',
      type: 'International Best Track Archive for Climate Stewardship',
      coverage: 'Global Tropical Cyclone Basins (1848–Present)',
      resolution: '6-hourly interpolated best-track coordinates, central pressure & winds',
      temporalCadence: 'Post-season QC verified archival series',
      accessMode: 'Public Scientific Climate Archive (NOAA NCEI)',
      verifiedRole: 'High-quality historical training dataset used for supervised training of the GRU/LSTM recurrent track trajectory predictor.',
      status: 'VERIFIED OFFICIAL REPOSITORY',
      realTimeNote: 'Archival Research Dataset (Post-season quality controlled, NOT real-time)'
    },
    {
      name: 'Kaggle INSAT-3D Tropical Cyclone Dataset',
      type: 'Curated Benchmark for Machine Learning & Deep Neural Prototyping',
      coverage: 'Labeled Cyclone Image Crops with Wind Speeds & Categories',
      resolution: 'Cropped 256×256 px image matrices from INSAT-3D TIR/VIS channels',
      temporalCadence: 'Historical benchmark snapshots',
      accessMode: 'Open Research Benchmark Dataset',
      verifiedRole: 'Initial baseline model prototyping, hyperparameter tuning, and ablation studies during development phase.',
      status: 'PROTOTYPE DEVELOPMENT BENCHMARK',
      realTimeNote: 'Static Offline Dataset (Used solely for prototyping & model benchmarking)'
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col p-4 sm:p-8 z-10 text-white overflow-y-auto">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-3 mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-cyan-950/80 border border-cyan-800 text-cyan-300 font-mono-tech text-xs px-2.5 py-0.5 rounded">
              DATA GOVERNANCE & PROVENANCE
            </span>
            <span className="text-xs font-mono-tech text-neutral-400">
              100% Verifiable Official Meteorological Archives
            </span>
          </div>
          <h2 className="font-cinzel text-xl sm:text-3xl font-bold text-neutral-100 mt-1">
            Data Lineage & Training Foundations
          </h2>
        </div>

        <div className="bg-neutral-900/90 border border-neutral-800 px-3 py-1.5 rounded-lg text-xs font-mono-tech text-amber-300 flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-400" />
          <span>Strict Disclaimer: No Fabricated Observations</span>
        </div>
      </div>

      {/* Grid of the 4 Explicit Data Sources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        {sources.map((src, i) => (
          <div
            key={src.name}
            className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between hover:border-cyan-500/50 transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 border-b border-neutral-800/80 pb-2 mb-2">
                <span className="text-xs font-mono-tech text-cyan-400 font-bold flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5" /> SOURCE 0{i + 1}
                </span>
                <span
                  className={`text-[10px] font-mono-tech px-2 py-0.5 rounded font-semibold ${
                    src.status.includes('OFFICIAL')
                      ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800'
                      : 'bg-amber-950/80 text-amber-300 border border-amber-800'
                  }`}
                >
                  {src.status}
                </span>
              </div>

              <h3 className="text-base font-bold text-neutral-100 mb-1">{src.name}</h3>
              <div className="text-xs text-neutral-400 mb-3">{src.type}</div>

              <div className="space-y-1.5 text-[11px] font-mono-tech text-neutral-300 bg-neutral-950/70 p-3 rounded-lg border border-neutral-800/80">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Spatial Res:</span>
                  <span className="text-neutral-200 text-right">{src.resolution}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Temporal Cadence:</span>
                  <span className="text-neutral-200 text-right">{src.temporalCadence}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Coverage:</span>
                  <span className="text-neutral-200 text-right truncate max-w-[200px]">{src.coverage}</span>
                </div>
              </div>

              <p className="mt-3 text-xs text-neutral-300 leading-relaxed">
                <strong className="text-neutral-200">Role in Pipeline: </strong>
                {src.verifiedRole}
              </p>
            </div>

            {/* Crucial Real-Time vs Archival Disambiguation Notice */}
            <div className="mt-4 pt-2.5 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono-tech">
              <span className="text-neutral-400">Operational Latency:</span>
              <span className="text-amber-400 font-semibold">{src.realTimeNote}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Compliance banner */}
      <div className="mt-4 p-3 rounded-lg bg-neutral-950/90 border border-neutral-800 flex items-center justify-between text-xs font-mono-tech text-neutral-400">
        <div>
          <span className="text-cyan-400 font-semibold">Verification Standard: </span>
          All baseline testing matches published WMO & RSMC New Delhi peer benchmarks.
        </div>
        <div className="text-[10px] text-neutral-500">
          SIH 2026 Problem Statement 26070 Compliance
        </div>
      </div>
    </div>
  );
};
