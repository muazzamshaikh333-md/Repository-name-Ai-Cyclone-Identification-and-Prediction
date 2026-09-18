import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  Maximize2,
  Minimize2,
  Pause,
  Play,
  RotateCcw,
  ShieldCheck,
  Subtitles,
  Volume2,
  VolumeX,
  Waves
} from 'lucide-react';
import { DOCUMENTARY_CHAPTERS } from '../data/documentaryData';

interface DocumentaryPlayerControlsProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  currentChapterIndex: number;
  onSelectChapter: (idx: number) => void;
  progressPercent: number;
  onSeek: (percent: number) => void;
  playbackSpeed: number;
  onChangeSpeed: (speed: number) => void;
  isVoiceoverEnabled: boolean;
  onToggleVoiceover: () => void;
  isAmbientEnabled: boolean;
  onToggleAmbient: () => void;
  showCaptions: boolean;
  onToggleCaptions: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onOpenFactCheck: () => void;
  currentTimeFormatted: string;
  totalTimeFormatted: string;
}

export const DocumentaryPlayerControls: React.FC<DocumentaryPlayerControlsProps> = ({
  isPlaying,
  onTogglePlay,
  currentChapterIndex,
  onSelectChapter,
  progressPercent,
  onSeek,
  playbackSpeed,
  onChangeSpeed,
  isVoiceoverEnabled,
  onToggleVoiceover,
  isAmbientEnabled,
  onToggleAmbient,
  showCaptions,
  onToggleCaptions,
  isFullscreen,
  onToggleFullscreen,
  onOpenFactCheck,
  currentTimeFormatted,
  totalTimeFormatted
}) => {
  const chapters = DOCUMENTARY_CHAPTERS;
  const currentChapter = chapters[currentChapterIndex] || chapters[0];

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
    onSeek(pct);
  };

  return (
    <div className="w-full bg-neutral-950/95 border-t border-neutral-800 p-3 sm:p-4 text-white z-20 backdrop-blur-md">
      {/* Chapter Pills Carousel / Quick Navigation */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2.5 mb-2.5 scrollbar-thin scrollbar-thumb-neutral-700">
        {chapters.map((ch, idx) => {
          const isActive = idx === currentChapterIndex;
          return (
            <button
              key={ch.id}
              onClick={() => onSelectChapter(idx)}
              className={`px-3 py-1 rounded-full text-xs font-mono-tech whitespace-nowrap transition-all shrink-0 flex items-center gap-1.5 border ${
                isActive
                  ? 'bg-cyan-950 border-cyan-400 text-cyan-200 font-bold shadow-sm ring-1 ring-cyan-500/40'
                  : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
              }`}
            >
              <span className="opacity-60">{ch.number}.</span>
              <span>{ch.title}</span>
            </button>
          );
        })}
      </div>

      {/* Scrub Bar / Timeline with Chapter Intervals */}
      <div
        onClick={handleTimelineClick}
        className="group relative w-full h-3 sm:h-3.5 bg-neutral-900 rounded-full cursor-pointer overflow-hidden border border-neutral-800 mb-3"
      >
        {/* Progress Fill */}
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-amber-400 transition-all duration-100 ease-linear rounded-full"
          style={{ width: `${progressPercent}%` }}
        />

        {/* Chapter tick dividers */}
        <div className="absolute inset-0 flex justify-between pointer-events-none px-1">
          {chapters.map((_, i) => (
            <div
              key={i}
              className="w-[1px] h-full bg-neutral-700/50"
              style={{ left: `${(i / chapters.length) * 100}%` }}
            />
          ))}
        </div>
      </div>

      {/* Main Controls Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono-tech">
        {/* Left: Playback controls and timecode */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => onSelectChapter(Math.max(0, currentChapterIndex - 1))}
            disabled={currentChapterIndex === 0}
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 disabled:opacity-30 disabled:pointer-events-none"
            title="Previous Chapter"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={onTogglePlay}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold shadow-lg shadow-cyan-600/30 transition-colors"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
          </button>

          <button
            onClick={() => onSelectChapter(Math.min(chapters.length - 1, currentChapterIndex + 1))}
            disabled={currentChapterIndex === chapters.length - 1}
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 disabled:opacity-30 disabled:pointer-events-none"
            title="Next Chapter"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5 text-neutral-300 pl-2">
            <span className="text-cyan-400 font-bold">{currentTimeFormatted}</span>
            <span className="text-neutral-600">/</span>
            <span className="text-neutral-400">{totalTimeFormatted}</span>
          </div>
        </div>

        {/* Center: Current Chapter Title */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800 text-neutral-300">
          <span className="text-cyan-400 font-bold">CH {currentChapter.number}:</span>
          <span className="font-semibold text-neutral-100 truncate max-w-[280px]">
            {currentChapter.title}
          </span>
        </div>

        {/* Right: Audio toggles, speed, captions, fact-check modal & fullscreen */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Playback Speed dropdown */}
          <select
            value={playbackSpeed}
            onChange={(e) => onChangeSpeed(parseFloat(e.target.value))}
            className="bg-neutral-900 border border-neutral-800 rounded-lg px-2 py-1.5 text-xs text-neutral-300 focus:outline-none focus:border-cyan-500 cursor-pointer"
          >
            <option value={0.75}>0.75x</option>
            <option value={1.0}>1.0x</option>
            <option value={1.25}>1.25x</option>
            <option value={1.5}>1.5x</option>
          </select>

          {/* Voiceover Speech Toggle */}
          <button
            onClick={onToggleVoiceover}
            className={`p-2 rounded-lg border transition-colors flex items-center gap-1 ${
              isVoiceoverEnabled
                ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300'
                : 'bg-neutral-900 border-neutral-800 text-neutral-500 hover:text-neutral-300'
            }`}
            title={isVoiceoverEnabled ? 'Mute Narrator Voiceover' : 'Enable Narrator Voiceover'}
          >
            {isVoiceoverEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
            <span className="hidden sm:inline text-[11px]">Voice</span>
          </button>

          {/* Ambient Soundscape Toggle */}
          <button
            onClick={onToggleAmbient}
            className={`p-2 rounded-lg border transition-colors flex items-center gap-1 ${
              isAmbientEnabled
                ? 'bg-amber-950/80 border-amber-500 text-amber-300'
                : 'bg-neutral-900 border-neutral-800 text-neutral-500 hover:text-neutral-300'
            }`}
            title={isAmbientEnabled ? 'Disable Oceanic Ambiance' : 'Enable Oceanic Soundscape'}
          >
            <Waves className="w-4 h-4" />
            <span className="hidden sm:inline text-[11px]">Soundscape</span>
          </button>

          {/* Captions Toggle */}
          <button
            onClick={onToggleCaptions}
            className={`p-2 rounded-lg border transition-colors flex items-center gap-1 ${
              showCaptions
                ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300'
                : 'bg-neutral-900 border-neutral-800 text-neutral-500 hover:text-neutral-300'
            }`}
            title="Toggle Subtitles & Documentary Script"
          >
            <Subtitles className="w-4 h-4" />
            <span className="hidden sm:inline text-[11px]">CC</span>
          </button>

          {/* Fact Check Modal Button */}
          <button
            onClick={onOpenFactCheck}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-emerald-600 text-neutral-300 hover:text-emerald-300 transition-colors"
            title="Open Scientific Sources & Fact Check"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="hidden sm:inline text-[11px]">Sources</span>
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={onToggleFullscreen}
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
            title="Toggle Fullscreen Video View"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};
