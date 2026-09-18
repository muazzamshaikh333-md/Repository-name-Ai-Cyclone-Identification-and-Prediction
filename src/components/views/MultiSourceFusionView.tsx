import React, { useState } from 'react';
import { SATELLITE_CHANNELS, HISTORICAL_FANI_DATA } from '../../data/documentaryData';
import { CycloneMapCanvas } from '../CycloneMapCanvas';
import { Eye, Layers, Sliders, Sparkles, Terminal } from 'lucide-react';

export const MultiSourceFusionView: React.FC = () => {
  const [selectedChannel, setSelectedChannel] = useState<string>('IR1');
  const [fusionMode, setFusionMode] = useState<'split' | 'composite' | 'tensor'>('composite');

  const channels = SATELLITE_CHANNELS;

  return (
    <div className="relative w-full h-full flex flex-col p-4 sm:p-8 z-10 text-white overflow-y-auto">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-3 mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-cyan-950/80 border border-cyan-800 text-cyan-300 font-mono-tech text-xs px-2.5 py-0.5 rounded">
              METEOROLOGICAL WORKSTATION // MULTI-SPECTRAL FUSION
            </span>
            <span className="text-xs font-mono-tech text-neutral-400">
              INSAT-3D Imager Channel Integration
            </span>
          </div>
          <h2 className="font-cinzel text-xl sm:text-3xl font-bold text-neutral-100 mt-1">
            Multi-Source Satellite Data Fusion
          </h2>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1 bg-neutral-900 border border-neutral-800 p-1 rounded-lg text-xs font-mono-tech">
          <button
            onClick={() => setFusionMode('composite')}
            className={`px-3 py-1 rounded transition-colors ${
              fusionMode === 'composite' ? 'bg-cyan-600 text-white font-semibold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Multi-Spectral Composite
          </button>
          <button
            onClick={() => setFusionMode('split')}
            className={`px-3 py-1 rounded transition-colors ${
              fusionMode === 'split' ? 'bg-cyan-600 text-white font-semibold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            4-Channel Matrix
          </button>
          <button
            onClick={() => setFusionMode('tensor')}
            className={`px-3 py-1 rounded transition-colors ${
              fusionMode === 'tensor' ? 'bg-cyan-600 text-white font-semibold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            AI Feature Tensor
          </button>
        </div>
      </div>

      {/* Main Meteorological Console */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 items-stretch">
        {/* Left 8 Cols: Visual Canvas Display */}
        <div className="lg:col-span-8 flex flex-col gap-3">
          {fusionMode === 'composite' && (
            <div className="relative flex-1 min-h-[340px] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950">
              <CycloneMapCanvas
                currentTrack={HISTORICAL_FANI_DATA.track}
                satelliteOverlay={true}
                className="h-full"
              />
              {/* Overlay HUD displaying current sensor sync */}
              <div className="absolute top-3 right-3 bg-neutral-900/90 border border-neutral-700/80 p-3 rounded-lg text-xs font-mono-tech space-y-1 backdrop-blur-md">
                <div className="text-cyan-400 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> FUSED RADIANCE SYNTHESIS
                </div>
                <div className="text-neutral-300">• TIR-1 (10.8 µm): Cloud Top Brightness Temp</div>
                <div className="text-neutral-300">• WV (6.8 µm): 500-200 hPa Moisture Vector</div>
                <div className="text-neutral-300">• VIS (0.65 µm): Low-level Inflow Feeder Bands</div>
                <div className="text-amber-300">• IBTrACS Climatological Kernel Overlay</div>
              </div>
            </div>
          )}

          {fusionMode === 'split' && (
            <div className="grid grid-cols-2 gap-3 flex-1 min-h-[340px]">
              {channels.map((ch) => (
                <div
                  key={ch.id}
                  onClick={() => setSelectedChannel(ch.id)}
                  className={`p-3 rounded-lg border flex flex-col justify-between cursor-pointer transition-all ${
                    selectedChannel === ch.id
                      ? 'bg-neutral-900 border-cyan-500 shadow-md ring-1 ring-cyan-500/50'
                      : 'bg-neutral-950/70 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-neutral-800/80 pb-1.5">
                    <span className="font-mono-tech text-xs text-cyan-300 font-semibold">
                      {ch.id} [{ch.wavelength}]
                    </span>
                    <span className="text-[10px] text-neutral-400 font-mono-tech">{ch.satellite}</span>
                  </div>

                  <div className="my-2 h-20 rounded bg-neutral-900/80 flex items-center justify-center border border-neutral-800/80 relative overflow-hidden">
                    {ch.id === 'IR1' && (
                      <div className="w-full h-full bg-gradient-to-tr from-rose-950 via-cyan-900 to-amber-700 opacity-70 flex items-center justify-center font-mono-tech text-xs text-white">
                        [Thermal Radiance Gradient]
                      </div>
                    )}
                    {ch.id === 'WV' && (
                      <div className="w-full h-full bg-gradient-to-tr from-cyan-950 via-blue-900 to-cyan-700 opacity-70 flex items-center justify-center font-mono-tech text-xs text-white">
                        [Moisture Vapor Stream]
                      </div>
                    )}
                    {ch.id === 'VIS' && (
                      <div className="w-full h-full bg-gradient-to-tr from-neutral-900 via-neutral-700 to-neutral-400 opacity-70 flex items-center justify-center font-mono-tech text-xs text-white">
                        [High-Res Optical Albedo]
                      </div>
                    )}
                    {ch.id === 'MIR' && (
                      <div className="w-full h-full bg-gradient-to-tr from-amber-950 via-yellow-900 to-stone-700 opacity-70 flex items-center justify-center font-mono-tech text-xs text-white">
                        [Middle-IR Thermal Flux]
                      </div>
                    )}
                  </div>

                  <div className="text-[11px] text-neutral-300 truncate">{ch.purpose}</div>
                </div>
              ))}
            </div>
          )}

          {fusionMode === 'tensor' && (
            <div className="flex-1 min-h-[340px] bg-neutral-950 border border-neutral-800 rounded-xl p-4 flex flex-col justify-between font-mono-tech text-xs">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                <span className="text-cyan-400 font-bold flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> MULTI-MODAL 4D TENSOR REPRESENTATION: X ∈ ℝ^(B × 4 × H × W)
                </span>
                <span className="text-neutral-400 text-[10px]">PyTorch / TensorFlow Architecture</span>
              </div>

              <div className="grid grid-cols-4 gap-3 my-4">
                <div className="bg-neutral-900 p-3 rounded border border-neutral-800">
                  <div className="text-rose-400 font-bold mb-1">Channel 0: TIR-1</div>
                  <div className="text-[11px] text-neutral-400">Dim: 256×256 px</div>
                  <div className="text-[10px] text-neutral-500 mt-1">Norm: (BT - 200) / 100</div>
                </div>
                <div className="bg-neutral-900 p-3 rounded border border-neutral-800">
                  <div className="text-cyan-400 font-bold mb-1">Channel 1: WV</div>
                  <div className="text-[11px] text-neutral-400">Dim: 256×256 px</div>
                  <div className="text-[10px] text-neutral-500 mt-1">Upper steering flux</div>
                </div>
                <div className="bg-neutral-900 p-3 rounded border border-neutral-800">
                  <div className="text-amber-400 font-bold mb-1">Channel 2: VIS</div>
                  <div className="text-[11px] text-neutral-400">Dim: 256×256 px</div>
                  <div className="text-[10px] text-neutral-500 mt-1">Reflectance ratio</div>
                </div>
                <div className="bg-neutral-900 p-3 rounded border border-neutral-800">
                  <div className="text-purple-400 font-bold mb-1">Channel 3: IBTrACS</div>
                  <div className="text-[11px] text-neutral-400">Spatial Prior</div>
                  <div className="text-[10px] text-neutral-500 mt-1">Gaussian motion mask</div>
                </div>
              </div>

              <div className="bg-neutral-900/80 p-3 rounded border border-neutral-800 text-[11px] text-neutral-300">
                <span className="text-cyan-400 font-bold">Cross-Attention Fusion Mechanism: </span>
                Multi-head cross-attention allows the spatial CNN to query water-vapour steering currents, providing physics-consistent representations even when high cirrus clouds conceal the lower circulation center.
              </div>
            </div>
          )}

          {/* Bottom quick channel buttons */}
          <div className="grid grid-cols-4 gap-2">
            {channels.map((ch) => (
              <button
                key={ch.id}
                onClick={() => setSelectedChannel(ch.id)}
                className={`p-2 rounded-lg border text-left transition-all ${
                  selectedChannel === ch.id
                    ? 'bg-neutral-900 border-cyan-400 text-white'
                    : 'bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                <div className="font-mono-tech text-xs font-bold text-cyan-300">{ch.id}</div>
                <div className="text-[10px] text-neutral-400 truncate">{ch.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Right 4 Cols: Active Channel Metadata Inspector */}
        <div className="lg:col-span-4 flex flex-col justify-between bg-neutral-900/60 border border-neutral-800 rounded-xl p-4">
          {(() => {
            const ch = channels.find((c) => c.id === selectedChannel) || channels[0];
            return (
              <div className="space-y-4">
                <div className="border-b border-neutral-800 pb-2">
                  <span className="text-xs font-mono-tech text-cyan-400 font-semibold uppercase">
                    CHANNEL SPECTROMETRY
                  </span>
                  <h3 className="text-base font-bold text-white mt-1">{ch.name}</h3>
                  <div className="text-xs font-mono-tech text-neutral-400 mt-0.5">
                    Central Wavelength: {ch.wavelength} • {ch.satellite}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-neutral-300 mb-1">Target Physical Property:</div>
                  <p className="text-xs text-neutral-300 leading-relaxed">{ch.purpose}</p>
                </div>

                <div>
                  <div className="text-xs font-semibold text-neutral-300 mb-1">Spectral Color Encoding:</div>
                  <p className="text-xs text-neutral-400 leading-relaxed">{ch.colorSpectrum}</p>
                </div>

                <div>
                  <div className="text-xs font-semibold text-neutral-300 mb-1">Atmospheric Physics Role:</div>
                  <p className="text-xs text-neutral-400 leading-relaxed">{ch.physicalSignificance}</p>
                </div>

                <div className="p-3 bg-neutral-950/90 rounded-lg border border-neutral-800 text-[11px] font-mono-tech text-cyan-300">
                  <span className="font-bold text-white">AI Advantage: </span>
                  Automates simultaneous synthesis of thermodynamic and kinematic atmospheric variables at 15-minute intervals.
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
};
