import React from 'react';
import { DocumentaryChapter } from '../types';

interface SubtitlesOverlayProps {
  chapter: DocumentaryChapter;
  isVisible: boolean;
}

export const SubtitlesOverlay: React.FC<SubtitlesOverlayProps> = ({ chapter, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="absolute bottom-2 left-4 right-4 sm:left-12 sm:right-12 z-20 pointer-events-none text-center">
      <div className="inline-block bg-black/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-neutral-800 shadow-2xl max-w-3xl">
        <p className="text-neutral-100 text-xs sm:text-sm md:text-base font-light tracking-wide leading-relaxed">
          {chapter.narrationScript}
        </p>
        <div className="mt-1 flex items-center justify-center gap-2 text-[10px] font-mono-tech text-cyan-400/80">
          <span>CH {chapter.number}: {chapter.title}</span>
          <span>•</span>
          <span>Official Ground Truth Narration</span>
        </div>
      </div>
    </div>
  );
};
