import React, { useState, useEffect, useRef } from 'react';
import { DOCUMENTARY_CHAPTERS } from './data/documentaryData';
import { audioEngine } from './utils/audioEngine';

// Chapter Views
import { OpeningThreatView } from './components/views/OpeningThreatView';
import { HistoricalIncidentView } from './components/views/HistoricalIncidentView';
import { SensorOverloadView } from './components/views/SensorOverloadView';
import { AiPipelineView } from './components/views/AiPipelineView';
import { MultiSourceFusionView } from './components/views/MultiSourceFusionView';
import { DataSourcesView } from './components/views/DataSourcesView';
import { PredictionDemoView } from './components/views/PredictionDemoView';
import { DisasterImpactView } from './components/views/DisasterImpactView';
import { DataSecurityView } from './components/views/DataSecurityView';
import { WhatIsNewView } from './components/views/WhatIsNewView';
import { FutureScopeView } from './components/views/FutureScopeView';
import { SunriseCreditsView } from './components/views/SunriseCreditsView';

// UI Controls & Modals
import { DocumentaryPlayerControls } from './components/DocumentaryPlayerControls';
import { SubtitlesOverlay } from './components/SubtitlesOverlay';
import { FactCheckModal } from './components/FactCheckModal';
import { HackathonDossierModal } from './components/HackathonDossierModal';

import {
  Award,
  BookOpen,
  FileCheck,
  Film,
  Radio,
  ShieldAlert,
  Sparkles,
  Zap
} from 'lucide-react';

export default function App() {
  const chapters = DOCUMENTARY_CHAPTERS;
  const [currentChapterIndex, setCurrentChapterIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [chapterElapsedSeconds, setChapterElapsedSeconds] = useState<number>(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [isVoiceoverEnabled, setIsVoiceoverEnabled] = useState<boolean>(true);
  const [isAmbientEnabled, setIsAmbientEnabled] = useState<boolean>(false);
  const [showCaptions, setShowCaptions] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isFactCheckOpen, setIsFactCheckOpen] = useState<boolean>(false);
  const [isDossierOpen, setIsDossierOpen] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const currentChapter = chapters[currentChapterIndex] || chapters[0];

  // Calculate total documentary length & cumulative time elapsed
  const totalDuration = chapters.reduce((acc, c) => acc + c.durationSeconds, 0);
  const elapsedPriorChapters = chapters
    .slice(0, currentChapterIndex)
    .reduce((acc, c) => acc + c.durationSeconds, 0);
  const totalElapsed = elapsedPriorChapters + chapterElapsedSeconds;
  const progressPercent = Math.min(100, (totalElapsed / totalDuration) * 100);

  // Time format helper (mm:ss)
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Chapter change handler
  const handleSelectChapter = (idx: number) => {
    setCurrentChapterIndex(idx);
    setChapterElapsedSeconds(0);

    if (isVoiceoverEnabled) {
      audioEngine.speak(chapters[idx].narrationScript, {
        playbackRate: playbackSpeed,
        onEnd: () => {
          // If in autoplay video mode, we can auto-transition
        }
      });
    } else {
      audioEngine.stopSpeaking();
    }
  };

  // Toggle playback
  const handleTogglePlay = () => {
    const nextState = !isPlaying;
    setIsPlaying(nextState);

    if (nextState) {
      if (isVoiceoverEnabled) {
        audioEngine.speak(currentChapter.narrationScript, {
          playbackRate: playbackSpeed
        });
      }
      if (isAmbientEnabled) {
        audioEngine.startAmbientSoundscape(0.12);
      }
    } else {
      audioEngine.stopSpeaking();
    }
  };

  // Seek handler
  const handleSeek = (pct: number) => {
    const targetSeconds = (pct / 100) * totalDuration;
    let accumulated = 0;
    for (let i = 0; i < chapters.length; i++) {
      const chDuration = chapters[i].durationSeconds;
      if (targetSeconds <= accumulated + chDuration || i === chapters.length - 1) {
        setCurrentChapterIndex(i);
        setChapterElapsedSeconds(Math.max(0, targetSeconds - accumulated));
        if (isVoiceoverEnabled && isPlaying) {
          audioEngine.speak(chapters[i].narrationScript, { playbackRate: playbackSpeed });
        }
        break;
      }
      accumulated += chDuration;
    }
  };

  // Toggle voiceover speech
  const handleToggleVoiceover = () => {
    const nextVal = !isVoiceoverEnabled;
    setIsVoiceoverEnabled(nextVal);
    audioEngine.setVoiceoverMuted(!nextVal);
    if (nextVal && isPlaying) {
      audioEngine.speak(currentChapter.narrationScript, { playbackRate: playbackSpeed });
    } else {
      audioEngine.stopSpeaking();
    }
  };

  // Toggle ambient audio
  const handleToggleAmbient = () => {
    const nextVal = !isAmbientEnabled;
    setIsAmbientEnabled(nextVal);
    if (nextVal) {
      audioEngine.startAmbientSoundscape(0.12);
    } else {
      audioEngine.stopAmbientSoundscape();
    }
  };

  // Toggle fullscreen
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  // Video timer tick
  useEffect(() => {
    if (!isPlaying) return;

    const intervalMs = 250;
    const timer = setInterval(() => {
      setChapterElapsedSeconds((prev) => {
        const next = prev + (intervalMs / 1000) * playbackSpeed;
        const targetChapterDuration = currentChapter.durationSeconds;

        // When chapter finishes
        if (next >= targetChapterDuration) {
          if (currentChapterIndex < chapters.length - 1) {
            const nextIdx = currentChapterIndex + 1;
            setCurrentChapterIndex(nextIdx);
            if (isVoiceoverEnabled) {
              audioEngine.speak(chapters[nextIdx].narrationScript, {
                playbackRate: playbackSpeed
              });
            }
            return 0;
          } else {
            // End of documentary
            setIsPlaying(false);
            return targetChapterDuration;
          }
        }
        return next;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, currentChapterIndex, playbackSpeed, isVoiceoverEnabled, chapters, currentChapter]);

  // Periodic subtle radar ping if ambient is on
  useEffect(() => {
    if (!isAmbientEnabled || !isPlaying) return;
    const radarInterval = setInterval(() => {
      audioEngine.triggerRadarBeep();
    }, 4000);
    return () => clearInterval(radarInterval);
  }, [isAmbientEnabled, isPlaying]);

  // Render view by visual mode
  const renderVisualView = () => {
    switch (currentChapter.visualMode) {
      case 'satellite-threat':
        return <OpeningThreatView />;
      case 'historical-incident':
        return <HistoricalIncidentView />;
      case 'sensor-overload':
        return <SensorOverloadView />;
      case 'pipeline-architecture':
        return <AiPipelineView />;
      case 'multispectral-fusion':
        return <MultiSourceFusionView />;
      case 'data-lineage':
        return <DataSourcesView />;
      case 'forecast-demonstration':
        return <PredictionDemoView />;
      case 'evacuation-impact':
        return <DisasterImpactView />;
      case 'security-architecture':
        return <DataSecurityView />;
      case 'innovation-matrix':
        return <WhatIsNewView />;
      case 'future-roadmap':
        return <FutureScopeView />;
      case 'sunrise-credits':
        return <SunriseCreditsView />;
      default:
        return <OpeningThreatView />;
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen bg-neutral-950 flex flex-col justify-between overflow-hidden select-none font-sans"
    >
      {/* Top Professional Documentary Masthead / Navigation Bar */}
      <header className="relative z-30 w-full bg-neutral-950/90 border-b border-neutral-800/80 px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3 backdrop-blur-md">
        {/* Left: Hackathon & Topic Credentials */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="font-cinzel font-bold text-sm sm:text-base tracking-wider text-white">
              SMART INDIA HACKATHON 2026
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-2 font-mono-tech text-xs border-l border-neutral-800 pl-3">
            <span className="bg-cyan-950 border border-cyan-800 text-cyan-300 px-2 py-0.5 rounded font-semibold">
              PS ID: 26070
            </span>
            <span className="text-neutral-400">Team O(1)</span>
            <span className="text-neutral-600">•</span>
            <span className="text-emerald-400 font-medium">Theme: Disaster Management</span>
          </div>
        </div>

        {/* Center: Documentary Video Title */}
        <div className="hidden md:flex items-center gap-2 text-xs font-mono-tech text-neutral-300">
          <Film className="w-4 h-4 text-cyan-400" />
          <span className="font-semibold text-neutral-200">
            AI-Driven Tropical Cyclone Identification, Classification & Prediction
          </span>
        </div>

        {/* Right: Quick Action Modals */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsFactCheckOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-cyan-500 text-xs font-mono-tech text-neutral-300 hover:text-cyan-300 transition-colors"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Fact Check & Sources</span>
            <span className="sm:hidden">Sources</span>
          </button>

          <button
            onClick={() => setIsDossierOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/70 border border-cyan-700/80 hover:bg-cyan-900 text-xs font-mono-tech text-cyan-200 transition-colors"
          >
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">SIH 2026 Dossier</span>
            <span className="sm:hidden">Dossier</span>
          </button>
        </div>
      </header>

      {/* Main Documentary Video Stage */}
      <main className="relative flex-1 w-full h-full overflow-hidden bg-neutral-950 flex flex-col justify-center">
        {renderVisualView()}

        {/* Real-time Subtitles / Narration script overlay */}
        <SubtitlesOverlay chapter={currentChapter} isVisible={showCaptions} />
      </main>

      {/* Bottom Documentary Player Controls Bar */}
      <DocumentaryPlayerControls
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
        currentChapterIndex={currentChapterIndex}
        onSelectChapter={handleSelectChapter}
        progressPercent={progressPercent}
        onSeek={handleSeek}
        playbackSpeed={playbackSpeed}
        onChangeSpeed={setPlaybackSpeed}
        isVoiceoverEnabled={isVoiceoverEnabled}
        onToggleVoiceover={handleToggleVoiceover}
        isAmbientEnabled={isAmbientEnabled}
        onToggleAmbient={handleToggleAmbient}
        showCaptions={showCaptions}
        onToggleCaptions={() => setShowCaptions(!showCaptions)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
        onOpenFactCheck={() => setIsFactCheckOpen(true)}
        currentTimeFormatted={formatTime(totalElapsed)}
        totalTimeFormatted={formatTime(totalDuration)}
      />

      {/* Verifiable Scientific Fact Check Modal */}
      <FactCheckModal
        isOpen={isFactCheckOpen}
        onClose={() => setIsFactCheckOpen(false)}
      />

      {/* Smart India Hackathon Technical Dossier Modal */}
      <HackathonDossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />
    </div>
  );
}
