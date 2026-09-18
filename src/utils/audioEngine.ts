/**
 * Web Audio and Web Speech synthesizer for documentary narration and atmospheric audio.
 * Zero external audio dependencies - 100% reliable and cross-browser compliant.
 */

class AudioEngine {
  private audioCtx: AudioContext | null = null;
  private noiseNode: AudioNode | null = null;
  private filterNode: BiquadFilterNode | null = null;
  private gainNode: GainNode | null = null;
  private isAmbientPlaying: boolean = false;
  private isVoiceoverMuted: boolean = false;
  private currentUtterance: SpeechSynthesisUtterance | null = null;

  public initAudioContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  public startAmbientSoundscape(volume: number = 0.15) {
    try {
      this.initAudioContext();
      if (!this.audioCtx || this.isAmbientPlaying) return;

      // Generate brown/pink noise buffer for realistic ocean/wind rumble
      const bufferSize = this.audioCtx.sampleRate * 2;
      const noiseBuffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = output[i];
        output[i] *= 3.5; // Gain compensation
      }

      const whiteNoise = this.audioCtx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Bandpass filter centered at low frequencies (~140Hz) for deep oceanic/wind sound
      const filter = this.audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(180, this.audioCtx.currentTime);

      const gain = this.audioCtx.createGain();
      gain.gain.setValueAtTime(volume, this.audioCtx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.audioCtx.destination);

      whiteNoise.start();

      this.noiseNode = whiteNoise;
      this.filterNode = filter;
      this.gainNode = gain;
      this.isAmbientPlaying = true;
    } catch {
      // Graceful fallback if Web Audio is blocked
    }
  }

  public stopAmbientSoundscape() {
    try {
      if (this.gainNode && this.audioCtx) {
        this.gainNode.gain.linearRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.5);
        setTimeout(() => {
          if (this.noiseNode && 'stop' in this.noiseNode) {
            (this.noiseNode as AudioBufferSourceNode).stop();
          }
          this.noiseNode = null;
          this.filterNode = null;
          this.gainNode = null;
          this.isAmbientPlaying = false;
        }, 500);
      }
    } catch {
      this.isAmbientPlaying = false;
    }
  }

  public setAmbientVolume(val: number) {
    if (this.gainNode && this.audioCtx) {
      this.gainNode.gain.setValueAtTime(Math.max(0, Math.min(1, val)), this.audioCtx.currentTime);
    }
  }

  public triggerRadarBeep() {
    try {
      this.initAudioContext();
      if (!this.audioCtx) return;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(440, this.audioCtx.currentTime + 0.18);

      gain.gain.setValueAtTime(0.06, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.2);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.2);
    } catch {
      // Ignore
    }
  }

  public speak(
    text: string,
    options: {
      playbackRate?: number;
      onEnd?: () => void;
      onBoundary?: (charIndex: number) => void;
    } = {}
  ) {
    if (!('speechSynthesis' in window) || this.isVoiceoverMuted) {
      return;
    }

    this.stopSpeaking();

    const utterance = new SpeechSynthesisUtterance(text);
    this.currentUtterance = utterance;
    utterance.rate = options.playbackRate || 0.96;
    utterance.pitch = 0.95; // slightly lower, authoritative documentary tone

    // Try to find a high quality English voice
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(
      (v) =>
        (v.lang.startsWith('en-IN') || v.lang.startsWith('en-GB') || v.lang.startsWith('en-US')) &&
        (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Premium') || v.name.includes('Enhanced'))
    ) || voices.find((v) => v.lang.startsWith('en'));

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onend = () => {
      this.currentUtterance = null;
      if (options.onEnd) options.onEnd();
    };

    utterance.onerror = () => {
      this.currentUtterance = null;
    };

    if (options.onBoundary) {
      utterance.onboundary = (event) => {
        options.onBoundary?.(event.charIndex);
      };
    }

    window.speechSynthesis.speak(utterance);
  }

  public stopSpeaking() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.currentUtterance = null;
    }
  }

  public setVoiceoverMuted(muted: boolean) {
    this.isVoiceoverMuted = muted;
    if (muted) {
      this.stopSpeaking();
    }
  }

  public isVoiceSpeaking(): boolean {
    return 'speechSynthesis' in window && window.speechSynthesis.speaking;
  }
}

export const audioEngine = new AudioEngine();
