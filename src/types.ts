export type ChapterId =
  | 'opening'
  | 'real-incident'
  | 'problem'
  | 'ai-solution'
  | 'data-fusion'
  | 'data-sources'
  | 'prediction-demo'
  | 'disaster-impact'
  | 'data-security'
  | 'what-is-new'
  | 'future-scope'
  | 'final-scene';

export interface CycloneTrackPoint {
  id: string;
  timestamp: string;
  latitude: number;
  longitude: number;
  stage: string;
  windSpeedKmh: number;
  windSpeedKnots: number;
  pressureHpa: number;
  isObserved: boolean;
  isLandfall?: boolean;
  notes?: string;
  uncertaintyKm?: number;
}

export interface DocumentaryChapter {
  id: ChapterId;
  number: number;
  title: string;
  eyebrow: string;
  timecode: string;
  durationSeconds: number;
  calloutText?: string;
  narrationScript: string;
  scientificSources: string[];
  visualMode:
    | 'satellite-threat'
    | 'historical-incident'
    | 'sensor-overload'
    | 'pipeline-architecture'
    | 'multispectral-fusion'
    | 'data-lineage'
    | 'forecast-demonstration'
    | 'evacuation-impact'
    | 'security-architecture'
    | 'innovation-matrix'
    | 'future-roadmap'
    | 'sunrise-credits';
}

export interface HistoricalCycloneData {
  name: string;
  year: number;
  basin: string;
  classification: string;
  peakWindSpeedKmh: number;
  lowestPressureHpa: number;
  formationDate: string;
  landfallDate: string;
  landfallLocation: string;
  evacuatedCount: string;
  casualtiesCount: string;
  officialSource: string;
  stages: {
    stage: number;
    title: string;
    description: string;
    date: string;
    status: string;
  }[];
  track: CycloneTrackPoint[];
}

export interface SatelliteChannel {
  id: 'IR1' | 'WV' | 'VIS' | 'MIR';
  name: string;
  wavelength: string;
  satellite: string;
  purpose: string;
  colorSpectrum: string;
  physicalSignificance: string;
}
