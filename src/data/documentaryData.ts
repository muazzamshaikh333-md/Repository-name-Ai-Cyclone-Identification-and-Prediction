import { DocumentaryChapter, HistoricalCycloneData, SatelliteChannel } from '../types';

export const DOCUMENTARY_CHAPTERS: DocumentaryChapter[] = [
  {
    id: 'opening',
    number: 1,
    title: 'Real-World Threat',
    eyebrow: 'Opening Scene — Indian Ocean & Bay of Bengal',
    timecode: '00:00',
    durationSeconds: 16,
    calloutText: 'Tropical cyclones can rapidly intensify and change direction, making early prediction critical.',
    narrationScript:
      'The North Indian Ocean, bordered by dense coastal populations, generates some of the deadliest tropical cyclones on Earth. Over the warm waters of the Bay of Bengal, atmospheric instability can transform a disorganized depression into a catastrophic cyclonic storm within hours. When rapid intensification strikes, every minute of advance warning represents thousands of lives saved.',
    scientificSources: [
      'IMD Cyclone e-Atlas & RSMC New Delhi Annual Reports',
      'ISRO MOSDAC INSAT-3D/3DR Earth Observation Data',
      'WMO Regional Tropical Cyclone Committee'
    ],
    visualMode: 'satellite-threat'
  },
  {
    id: 'real-incident',
    number: 2,
    title: 'Case Study: Cyclone Fani (2019)',
    eyebrow: 'Real Incident Section — Historical Verification',
    timecode: '00:16',
    durationSeconds: 22,
    narrationScript:
      'In late April 2019, Extremely Severe Cyclonic Storm Fani developed near the equator. Spanning eight critical phases from initial marine cyclogenesis to rapid intensification, Fani attained peak sustained winds of 215 kilometers per hour with a central pressure of 932 hectopascals. Through rigorous early track tracking, authorities executed one of the largest peacetime coastal evacuations in human history, moving 1.2 million citizens to safety in Odisha.',
    scientificSources: [
      'RSMC New Delhi Official Report on Cyclonic Storm FANI (2019)',
      'NOAA IBTrACS v04r00 Historical Best Track',
      'OSDMA & UNDRR Global Disaster Assessment Report'
    ],
    visualMode: 'historical-incident'
  },
  {
    id: 'problem',
    number: 3,
    title: 'The Multi-Sensor Challenge',
    eyebrow: 'The Problem — Data Divergence & Sensor Overload',
    timecode: '00:38',
    durationSeconds: 20,
    narrationScript:
      'Operational meteorologists face an overwhelming cognitive load. Thermal infrared sensors reveal cloud-top temperatures, water vapour channels expose mid-tropospheric moisture and steering winds, while visible channels map storm core geometry only in daylight. Synthesizing disparate spatial resolutions, asynchronous update intervals, and complex non-linear atmospheric physics under severe time constraints remains a formidable operational hurdle.',
    scientificSources: [
      'IMD RSMC Forecaster Operational Guidelines',
      'WMO Technical Document No. 560: Tropical Cyclone Forecasting',
      'ISRO SAC Satellite Meteorology Handbook'
    ],
    visualMode: 'sensor-overload'
  },
  {
    id: 'ai-solution',
    number: 4,
    title: 'AI-Driven Prediction Architecture',
    eyebrow: 'Our AI Solution — Deep Neural Pipeline',
    timecode: '00:58',
    durationSeconds: 22,
    narrationScript:
      'To solve this bottleneck, Team O(1) engineered an integrated deep learning architecture. Multi-spectral satellite streams enter automated preprocessing and feature extraction. Deep convolutional networks isolate convective cloud patterns and automate Dvorak intensity classification, while bidirectional recurrent networks process spatiotemporal trajectory sequences, generating forward track forecasts with calibrated uncertainty corridors.',
    scientificSources: [
      'IEEE Transactions on Geoscience & Remote Sensing (TC Deep Learning)',
      'WMO Machine Learning in Weather Prediction Assessment',
      'Smart India Hackathon 2026 Problem Statement 26070 Technical Spec'
    ],
    visualMode: 'pipeline-architecture'
  },
  {
    id: 'data-fusion',
    number: 5,
    title: 'Multi-Source Data Fusion',
    eyebrow: 'Sensor Synchronization — Unified Feature Tensor',
    timecode: '01:20',
    durationSeconds: 18,
    narrationScript:
      'Rather than analyzing satellite bands in isolation, our system creates a unified multi-modal tensor. By co-registering Infrared Band 1 at 10.8 micrometers, Water Vapour at 6.8 micrometers, and Visible spectrum imagery, deep neural attention layers capture eye-wall eyewall symmetry, central dense overcast solidity, and convective shearing simultaneously.',
    scientificSources: [
      'MOSDAC INSAT-3D Multi-spectral Imager Specifications',
      'IMD Doppler Weather Radar & Satellite Fusion Protocols'
    ],
    visualMode: 'multispectral-fusion'
  },
  {
    id: 'data-sources',
    number: 6,
    title: 'Verifiable Data Lineage',
    eyebrow: 'Data Sources — Grounded in Official Repositories',
    timecode: '01:38',
    durationSeconds: 17,
    narrationScript:
      'Scientific integrity requires verifiable data provenance. Our prototype integrates official archives: ISRO MOSDAC INSAT-3D and INSAT-3DR geostationary imagery, IMD RSMC New Delhi synoptic best-track bulletins, NOAA International Best Track Archive for Climate Stewardship, and validated Kaggle INSAT-3D training benchmarks for reproducible baseline validation.',
    scientificSources: [
      'ISRO Meteorological & Oceanographic Satellite Data Archival Centre (MOSDAC)',
      'India Meteorological Department RSMC New Delhi',
      'NOAA National Centers for Environmental Information (NCEI)',
      'Kaggle INSAT-3D Tropical Cyclone Benchmark'
    ],
    visualMode: 'data-lineage'
  },
  {
    id: 'prediction-demo',
    number: 7,
    title: 'Realistic Prediction Demonstration',
    eyebrow: 'Illustrative AI Demonstration — Observed vs Forecast',
    timecode: '01:55',
    durationSeconds: 22,
    calloutText: 'Clearly distinguishes Observed Satellite Data from AI Model Predictions with probabilistic confidence corridors.',
    narrationScript:
      'In this illustrative demonstration, observed satellite fixes are demarcated with solid precision. The AI model forecasts the 24, 48, and 72-hour progression. Crucially, the system does not present false certainty; instead, it outputs an expanding cone of uncertainty reflecting atmospheric ensemble spread and kinematic variance, empowering forecasters with actionable risk envelopes.',
    scientificSources: [
      'IMD Standard Operating Procedure for Cyclone Warning in India',
      'NHC / JTWC Cone of Uncertainty Mathematical Definition',
      'Team O(1) Ensemble Track Variance Model'
    ],
    visualMode: 'forecast-demonstration'
  },
  {
    id: 'disaster-impact',
    number: 8,
    title: 'Disaster Management Impact',
    eyebrow: 'Operational Response — Human-in-the-Loop',
    timecode: '02:17',
    durationSeconds: 20,
    narrationScript:
      'The true measure of early warning is human safety. Early track convergence enables district emergency control rooms to issue targeted marine bans for fishermen, pre-position NDRF search and rescue units, and sequence village evacuations before squall-line arrival. The AI never replaces the meteorologist; it serves as a force multiplier for rapid human decision-making.',
    scientificSources: [
      'National Disaster Management Authority (NDMA) Cyclone Guidelines',
      'Odisha State Disaster Management Authority (OSDMA) Zero Casualty Protocol',
      'Ministry of Earth Sciences Cyclone Early Warning System'
    ],
    visualMode: 'evacuation-impact'
  },
  {
    id: 'data-security',
    number: 9,
    title: 'Data Security & Operational Safety',
    eyebrow: 'System Resilience — Cryptographic Integrity & Fallbacks',
    timecode: '02:37',
    durationSeconds: 16,
    narrationScript:
      'Critical disaster infrastructure demands fault-tolerant security. Our ingest pipeline features end-to-end cryptographic telemetry checks, strict role-based access for state emergency operations centers, and automated anomaly watchdogs with fail-safe rollback to standard numerical weather prediction models whenever satellite data corruption is detected.',
    scientificSources: [
      'CERT-In National Cyber Security Directive for Critical Infrastructure',
      'ISRO Secure Data Distribution Protocols'
    ],
    visualMode: 'security-architecture'
  },
  {
    id: 'what-is-new',
    number: 10,
    title: 'What Is New: The Core Innovation',
    eyebrow: 'Competitive Advantage — Unified Multi-Task System',
    timecode: '02:53',
    durationSeconds: 18,
    calloutText: 'Multi-source satellite data + AI-based cyclone identification + intensity estimation + track prediction + uncertainty estimation.',
    narrationScript:
      'What sets our solution apart is the unification of multi-source satellite data, automated spatial cloud pattern analysis, rapid Dvorak intensity grading, sequential track extrapolation, and calibrated uncertainty quantification within a single real-time computational workflow.',
    scientificSources: [
      'Smart India Hackathon 2026 Innovation Matrix',
      'Peer-Reviewed Benchmarks on North Indian Ocean Tropical Cyclones'
    ],
    visualMode: 'innovation-matrix'
  },
  {
    id: 'future-scope',
    number: 11,
    title: 'Future Scope & Scaling',
    eyebrow: 'Research Roadmap — Next-Gen Remote Sensing',
    timecode: '03:11',
    durationSeconds: 17,
    narrationScript:
      'Looking ahead, our roadmap incorporates future INSAT-4 geostationary sounders with 10-minute rapid-scan intervals, physics-informed neural networks embedding fluid dynamic equations, extended 120-hour prediction horizons, and direct API integration with India’s Common Alerting Protocol for cell-broadcast emergency sirens.',
    scientificSources: [
      'ISRO Future Earth Observation Roadmap (INSAT-4 Series)',
      'NDMA Integrated Common Alerting Protocol (CAP)'
    ],
    visualMode: 'future-roadmap'
  },
  {
    id: 'final-scene',
    number: 12,
    title: 'From Satellite Data to Early Action',
    eyebrow: 'Final Scene — Coastal Dawn & Credits',
    timecode: '03:28',
    durationSeconds: 20,
    calloutText: 'From Satellite Data to Early Action.',
    narrationScript:
      'As dawn breaks over a safeguarded coastline, the bridge between orbital science and coastal resilience stands validated. From satellite observation to actionable decision support, early prediction saves lives.',
    scientificSources: [
      'Smart India Hackathon 2026 — Ministry of Earth Sciences & MoE',
      'Team O(1) Submission for Problem Statement 26070'
    ],
    visualMode: 'sunrise-credits'
  }
];

export const HISTORICAL_FANI_DATA: HistoricalCycloneData = {
  name: 'Extremely Severe Cyclonic Storm FANI',
  year: 2019,
  basin: 'North Indian Ocean (Bay of Bengal)',
  classification: 'Extremely Severe Cyclonic Storm (IMD) / Category 5 equivalent (JTWC)',
  peakWindSpeedKmh: 215,
  lowestPressureHpa: 932,
  formationDate: '26 April 2019 (03:00 UTC)',
  landfallDate: '03 May 2019 (08:00 - 10:00 IST)',
  landfallLocation: 'South of Puri, Odisha (19.8° N, 85.8° E)',
  evacuatedCount: '1,200,000+ people in 24 hours into 4,000+ shelters',
  casualtiesCount: '64 in Odisha (Kept remarkably low due to 72h early warning)',
  officialSource: 'IMD RSMC Report on Cyclonic Storm Fani (2019) & NOAA IBTrACS',
  stages: [
    {
      stage: 1,
      title: 'Equatorial Genesis & Depression',
      description: 'Low pressure system organized near 2.7°N, 88.7°E over southeast Bay of Bengal.',
      date: '26 April 2019',
      status: 'Depression BOB 02 (Winds 45 km/h, 1004 hPa)'
    },
    {
      stage: 2,
      title: 'Satellite Structural Organization',
      description: 'INSAT-3D captured curved cloud banding pattern with sustained deep ocean convection.',
      date: '27 April 2019',
      status: 'Deep Depression → Named Cyclonic Storm Fani (Winds 65 km/h)'
    },
    {
      stage: 3,
      title: 'North-Northwest Track & Recurvature',
      description: 'Anticyclonic steering ridge guided system northward away from Tamil Nadu towards Odisha.',
      date: '28-29 April 2019',
      status: 'Severe Cyclonic Storm (Winds 105-130 km/h)'
    },
    {
      stage: 4,
      title: 'Rapid Intensification',
      description: 'High Ocean Thermal Energy (>100 kJ/cm²) fueled rapid eye formation and core symmetry.',
      date: '30 April - 01 May 2019',
      status: 'Very Severe → Extremely Severe Cyclonic Storm (Winds 175-205 km/h)'
    },
    {
      stage: 5,
      title: 'Peak Intensity & Pin-Hole Eye',
      description: 'Well-defined warm eye with eyewall temperature contrast reaching T-number 6.5.',
      date: '02 May 2019',
      status: 'Peak Winds: 215 km/h sustained, Gusts 240 km/h, 932 hPa'
    },
    {
      stage: 6,
      title: 'Mass Evacuation & Alert Mobilization',
      description: 'OSDMA and NDRF mobilized 28 battalions; 1.2M citizens evacuated in under 24 hours.',
      date: '02-03 May 2019',
      status: 'Red Alert across 14 coastal Odisha districts'
    },
    {
      stage: 7,
      title: 'Landfall near Puri Coast',
      description: 'Storm eye crossed coast near Puri with storm surge of 1.5m and hurricane-force gusts.',
      date: '03 May 2019 (08:00 IST)',
      status: 'Landfall: 19.8° N, 85.8° E (Winds ~180-200 km/h)'
    },
    {
      stage: 8,
      title: 'Rapid Assessment & Early Action Success',
      description: 'UN-DRR commended India for near-zero avoidable loss of human life.',
      date: '04-06 May 2019',
      status: 'Post-landfall recovery; infrastructure restoration accelerated'
    }
  ],
  track: [
    { id: 'f1', timestamp: '2019-04-26 12:00', latitude: 2.7, longitude: 88.7, stage: 'Depression', windSpeedKmh: 45, windSpeedKnots: 25, pressureHpa: 1004, isObserved: true, notes: 'Formation near equator' },
    { id: 'f2', timestamp: '2019-04-27 06:00', latitude: 4.3, longitude: 88.5, stage: 'Deep Depression', windSpeedKmh: 55, windSpeedKnots: 30, pressureHpa: 1000, isObserved: true },
    { id: 'f3', timestamp: '2019-04-27 18:00', latitude: 5.2, longitude: 88.2, stage: 'Cyclonic Storm Fani', windSpeedKmh: 65, windSpeedKnots: 35, pressureHpa: 996, isObserved: true, notes: 'Named Fani by IMD' },
    { id: 'f4', timestamp: '2019-04-28 12:00', latitude: 7.0, longitude: 86.9, stage: 'Severe Cyclonic Storm', windSpeedKmh: 95, windSpeedKnots: 50, pressureHpa: 988, isObserved: true },
    { id: 'f5', timestamp: '2019-04-29 18:00', latitude: 10.4, longitude: 84.0, stage: 'Very Severe Cyclonic Storm', windSpeedKmh: 130, windSpeedKnots: 70, pressureHpa: 975, isObserved: true },
    { id: 'f6', timestamp: '2019-04-30 18:00', latitude: 13.1, longitude: 84.1, stage: 'Extremely Severe Cyclonic Storm', windSpeedKmh: 175, windSpeedKnots: 95, pressureHpa: 954, isObserved: true, notes: 'Rapid Intensification initiates' },
    { id: 'f7', timestamp: '2019-05-01 12:00', latitude: 14.7, longitude: 84.3, stage: 'Extremely Severe Cyclonic Storm', windSpeedKmh: 195, windSpeedKnots: 105, pressureHpa: 942, isObserved: true },
    { id: 'f8', timestamp: '2019-05-02 12:00', latitude: 17.1, longitude: 84.8, stage: 'Extremely Severe Cyclonic Storm (Peak)', windSpeedKmh: 215, windSpeedKnots: 115, pressureHpa: 932, isObserved: true, notes: 'Peak intensity, 215 km/h' },
    { id: 'f9', timestamp: '2019-05-03 03:00', latitude: 19.8, longitude: 85.8, stage: 'Landfall at Puri Coast', windSpeedKmh: 185, windSpeedKnots: 100, pressureHpa: 940, isObserved: true, isLandfall: true, notes: 'Landfall near Puri, Odisha' },
    { id: 'f10', timestamp: '2019-05-03 18:00', latitude: 21.5, longitude: 86.8, stage: 'Severe Cyclonic Storm (Inland)', windSpeedKmh: 110, windSpeedKnots: 60, pressureHpa: 972, isObserved: true },
    { id: 'f11', timestamp: '2019-05-04 06:00', latitude: 23.8, longitude: 88.6, stage: 'Cyclonic Storm', windSpeedKmh: 75, windSpeedKnots: 40, pressureHpa: 988, isObserved: true }
  ]
};

export const SATELLITE_CHANNELS: SatelliteChannel[] = [
  {
    id: 'IR1',
    name: 'Thermal Infrared (TIR-1)',
    wavelength: '10.8 µm',
    satellite: 'INSAT-3D / 3DR Imager',
    purpose: 'Cloud-Top Temperature & Deep Convection',
    colorSpectrum: 'Color-enhanced cold cloud tops (below -70°C in crimson)',
    physicalSignificance: 'Measures radiative temperature of cloud tops; identifies convective burst vigor and central cold cover.'
  },
  {
    id: 'WV',
    name: 'Water Vapour (WV)',
    wavelength: '6.8 µm',
    satellite: 'INSAT-3D / 3DR Imager',
    purpose: 'Upper-Tropospheric Moisture & Steering Flow',
    colorSpectrum: 'Cyan-to-deep-navy moisture gradient',
    physicalSignificance: 'Traces mid-to-upper tropospheric moisture gradients, dry air intrusion, and subtropical steering currents.'
  },
  {
    id: 'VIS',
    name: 'Visible Channel (VIS)',
    wavelength: '0.65 µm',
    satellite: 'INSAT-3D / 3DR Imager',
    purpose: 'Optical Geometric Cloud Pattern & Eye Definition',
    colorSpectrum: 'High-contrast monochrome albedo',
    physicalSignificance: 'Provides highest spatial resolution (1 km) for locating the exact circulation center and low-level feeder bands.'
  },
  {
    id: 'MIR',
    name: 'Middle Infrared (MIR)',
    wavelength: '3.9 µm',
    satellite: 'INSAT-3D / 3DR Imager',
    purpose: 'Day/Night Fog, Low Stratus & Sea Surface Temp',
    colorSpectrum: 'Sepia thermal radiance',
    physicalSignificance: 'Differentiates water droplet clouds from ice crystals; useful for night-time low-level cloud tracking.'
  }
];

export const DEMO_PREDICTION_SERIES = {
  observedAnchor: {
    name: 'Cyclone Observation Fix (T=00h)',
    lat: 16.2,
    lon: 84.6,
    time: 'Day 3, 06:00 UTC',
    intensity: 'Very Severe Cyclonic Storm',
    windKmh: 165,
    pressureHpa: 960,
    rMaxKm: 28
  },
  forecast24h: {
    lat: 18.2,
    lon: 85.2,
    intensity: 'Extremely Severe Cyclonic Storm',
    windKmh: 195,
    pressureHpa: 945,
    trackErrorExpectedKm: 42,
    confidencePercent: 92,
    uncertaintyConeRadiusKm: 55
  },
  forecast48h: {
    lat: 19.8,
    lon: 85.9,
    intensity: 'Extremely Severe (Pre-Landfall)',
    windKmh: 210,
    pressureHpa: 936,
    trackErrorExpectedKm: 78,
    confidencePercent: 86,
    uncertaintyConeRadiusKm: 110
  },
  forecast72h: {
    lat: 22.1,
    lon: 87.4,
    intensity: 'Severe Cyclonic Storm (Post-Landfall)',
    windKmh: 120,
    pressureHpa: 970,
    trackErrorExpectedKm: 124,
    confidencePercent: 78,
    uncertaintyConeRadiusKm: 175
  }
};
