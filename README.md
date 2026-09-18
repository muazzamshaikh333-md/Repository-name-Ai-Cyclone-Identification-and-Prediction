# 🌪️ AI-Driven Tropical Cyclone Identification & Prediction

> **Smart India Hackathon 2026 (SIH 2026) — Disaster Management**

An interactive, documentary-style web prototype that presents a proposed **AI/ML-based system for identification, classification, intensity estimation, and short-term prediction of tropical cyclone patterns using multi-source satellite data**.

The project combines a real historical case study, satellite-data concepts, an AI processing pipeline, multi-source data fusion, an illustrative prediction dashboard, disaster-management use cases, data-safety concepts, and a future research roadmap.

---

## 🏆 Smart India Hackathon 2026

| Item | Details |
|---|---|
| **Problem Statement ID** | **26070** |
| **Problem Statement** | To develop an Artificial Intelligence (AI) / Machine Learning (ML) based system for identification, classification, and prediction of different tropical cyclone patterns using multi-source satellite data. |
| **Theme** | **Disaster Management** |
| **Category** | Software |
| **Team ID** | **34** |
| **Team Name** | **O(1)** |

---

## 🌐 Live Demo

### 🚀 Deployed Application
**https://ai-cyclone-identification-and-prediction-9hwpnvj5d.vercel.app**

### 💻 GitHub Repository
**https://github.com/muazzamshaikh333-md/Repository-name-Ai-Cyclone-Identification-and-Prediction**

---

## 📌 Problem Overview

Tropical cyclones can rapidly change in **intensity, structure, and movement**. Meteorological monitoring uses multiple observations, but different satellite channels provide different types of information and can differ in spatial resolution and update timing.

The proposed system addresses this challenge by bringing together:

- Multi-source satellite observations
- Automated image/feature analysis
- Cyclone identification and classification
- Intensity estimation
- Short-term track prediction
- Prediction uncertainty / confidence corridors
- Human-in-the-loop disaster-management decision support

The goal is to help transform satellite observations into information that can support **earlier and more targeted disaster-management action**.

---

# 🎯 Proposed Solution

## AI-Driven Cyclone Identification & Prediction

The proposed architecture follows a deep-learning pipeline:

```text
Multi-Source Satellite Data
            ↓
Data Collection
            ↓
Preprocessing & Co-Registration
            ↓
Feature Extraction
            ↓
CNN-Based Cyclone Identification / Classification
            ↓
Intensity Estimation
            ↓
LSTM/GRU-Based Track Prediction
            ↓
Uncertainty / Confidence Estimation
            ↓
Decision Support for Disaster Management
```

### Core concept

The system combines multiple satellite channels and historical cyclone information rather than treating every observation independently.

The prototype demonstrates how:

**Observed Data → AI Processing → Forecast Track → Uncertainty Corridor → Early Action**

can be presented in one integrated workflow.

---

# 🎬 Interactive Documentary Experience

The deployed application is structured as an interactive documentary / presentation experience with multiple chapters.

## Chapter 1 — Real-World Threat

Introduces the tropical-cyclone threat in the **Indian Ocean and Bay of Bengal** and explains why rapid identification and prediction matter for densely populated coastal regions.

## Chapter 2 — Case Study: Cyclone Fani (2019)

Uses **Cyclone Fani (2019)** as the historical case-study section.

The prototype presents:

- Formation and early development
- Satellite structural organization
- Track evolution
- Rapid intensification
- Peak intensity
- Evacuation and warning response
- Landfall near the Puri coast
- Post-landfall assessment

### Historical Fani data represented in the prototype

| Parameter | Prototype value |
|---|---|
| Cyclone | Extremely Severe Cyclonic Storm FANI |
| Year | 2019 |
| Basin | North Indian Ocean / Bay of Bengal |
| Peak sustained wind | 215 km/h |
| Lowest pressure | 932 hPa |
| Formation | 26 April 2019 |
| Landfall | 03 May 2019 |
| Landfall region | Near Puri, Odisha |
| Evacuated population represented | 1,200,000+ |
| Odisha casualties represented | 64 |

> **Note:** Historical values above are the values represented in the project prototype and should be cross-checked against the cited official datasets/reports before being used as a standalone authoritative disaster record.

---

# 🛰️ Multi-Source Satellite Data

The prototype explains the role of multiple satellite channels.

| Channel | Wavelength | Main purpose |
|---|---:|---|
| **Thermal Infrared (TIR-1)** | 10.8 µm | Cloud-top temperature and deep convection |
| **Water Vapour (WV)** | 6.8 µm | Upper-tropospheric moisture and steering flow |
| **Visible (VIS)** | 0.65 µm | Cloud geometry and eye definition |
| **Middle Infrared (MIR)** | 3.9 µm | Day/night cloud characterization and low-level tracking |

### Data fusion concept

The proposed system aligns multiple observations into a unified multi-modal representation so that cloud structure, moisture, convection, and other storm characteristics can be analyzed together.

---

# 🤖 AI / ML Architecture

## 1. Cyclone Identification & Classification

Convolutional neural networks (**CNNs**) are proposed for learning spatial patterns from satellite imagery.

Potential visual characteristics include:

- Eye structure
- Central dense overcast
- Convective cloud patterns
- Curved cloud bands
- Symmetry and organization
- Structural changes over time

## 2. Intensity Estimation

Satellite-derived structural features can be used to estimate cyclone intensity indicators such as:

- Wind speed
- Central pressure
- Storm organization

The prototype discusses **Dvorak-style intensity analysis** as part of the proposed workflow.

## 3. Track Prediction

Historical and sequential observations can be processed using recurrent architectures such as:

- **LSTM**
- **GRU**

The purpose is to model the temporal evolution of cyclone movement and generate short-term forward track estimates.

## 4. Uncertainty Estimation

Instead of presenting a forecast as absolute certainty, the prototype displays:

- Confidence values
- Expanding uncertainty corridors
- Expected track-error indicators

This is intended to help communicate forecast uncertainty to human decision-makers.

---

# 📊 Illustrative Prediction Demonstration

The application's prediction section is explicitly presented as an **illustrative AI demonstration**.

It distinguishes:

- **Observed Satellite Data**
- **AI Model Predictions**

and shows example forecast horizons:

- 24 hours
- 48 hours
- 72 hours

The prototype uses an expanding uncertainty corridor to communicate that forecast uncertainty can increase with prediction horizon.

> **Important:** The prediction values shown in the interface are demonstration data from the prototype and should not be interpreted as an operational forecast for a real cyclone.

---

# 🗂️ Data Sources & Data Lineage

The project materials reference the following repositories and technical sources:

### Official / scientific sources

- **MOSDAC / ISRO** — INSAT-3D and INSAT-3DR satellite imagery and meteorological products
- **India Meteorological Department (IMD) / RSMC New Delhi** — cyclone observations, warning information, and best-track material
- **NOAA IBTrACS** — global historical tropical-cyclone track dataset
- **Kaggle INSAT-3D Dataset** — prototype / benchmark dataset for model development

### Additional technical references used in the project concept

- TensorFlow / PyTorch documentation
- WMO technical material on tropical-cyclone forecasting
- NDMA cyclone and disaster-management guidance
- OSDMA disaster-response material
- NHC / JTWC cone-of-uncertainty definitions

> The prototype is designed around **verifiable data provenance**. Historical and operational claims should be validated against the originating official repository before operational use.

---

# 🚨 Disaster Management Impact

The proposed system is designed as **human-in-the-loop decision support**, not as a replacement for meteorologists or emergency authorities.

Potential applications include:

### Early Warning
Support earlier identification of developing cyclone patterns.

### Coastal Evacuation
Provide forecast-track information that can support evacuation planning.

### Fishermen / Marine Alerts
Support targeted marine restrictions and warning decisions.

### Emergency Response
Help disaster-management teams pre-position resources and response units.

### Infrastructure Preparedness
Support preparation of vulnerable infrastructure and communities before severe weather arrives.

### Resource Allocation
Use predicted risk areas to help prioritize emergency planning.

---

# 🔐 Data Security & Operational Safety

The prototype presents a security-oriented architecture with concepts such as:

- Secure data transmission
- Cryptographic integrity checks
- Role-based access
- Anomaly detection / watchdogs
- Fallback procedures
- Human verification for critical decisions

For operational disaster-management systems, security, availability, integrity, and safe fallback behavior are essential.

---

# 💡 What Is New in the Solution?

The central innovation presented by Team O(1) is the integration of multiple cyclone-analysis tasks into one workflow:

```text
Multi-Source Satellite Data
        +
Cyclone Identification
        +
Cyclone Classification
        +
Intensity Estimation
        +
Track Prediction
        +
Uncertainty Estimation
        ↓
Integrated Disaster-Management Decision Support
```

Instead of showing only a cyclone image or only a predicted path, the proposed architecture connects **observation, analysis, prediction, uncertainty, and response**.

---

# 🧭 Future Scope

The project roadmap includes:

- Additional satellite channels
- Higher-frequency / next-generation satellite observations
- Physics-informed neural networks
- Longer prediction horizons
- Improved uncertainty modeling
- Integration with disaster-management systems
- Common Alerting Protocol (CAP) integration
- Broader regional and historical datasets
- Improved model validation and benchmarking

These are presented as **future research / scaling directions**, not as current production capabilities of the prototype.

---

# 🛠️ Technology Stack

The current web project is built using:

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Motion**
- **Lucide React**
- **Google GenAI SDK dependency**
- **Node.js / npm**

### Project style

- Interactive web UI
- Documentary-style chapter navigation
- Cyclone map visualization
- Prediction demonstration
- Subtitles overlay
- Audio engine
- Fact-check modal
- Hackathon dossier modal
- Data-source sections
- Responsive presentation-oriented interface

---

# 📁 Project Structure

```text
Ai-Cyclone-Identification-and-Prediction/
│
├── src/
│   ├── assets/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── views/
│   │   │   ├── AiPipelineView.tsx
│   │   │   ├── DataSecurityView.tsx
│   │   │   ├── DataSourcesView.tsx
│   │   │   ├── DisasterImpactView.tsx
│   │   │   ├── FutureScopeView.tsx
│   │   │   ├── HistoricalIncidentView.tsx
│   │   │   ├── MultiSourceFusionView.tsx
│   │   │   ├── OpeningThreatView.tsx
│   │   │   ├── PredictionDemoView.tsx
│   │   │   ├── SensorOverloadView.tsx
│   │   │   ├── SunriseCreditsView.tsx
│   │   │   └── WhatIsNewView.tsx
│   │   │
│   │   ├── CycloneMapCanvas.tsx
│   │   ├── DocumentaryPlayerControls.tsx
│   │   ├── FactCheckModal.tsx
│   │   ├── HackathonDossierModal.tsx
│   │   └── SubtitlesOverlay.tsx
│   │
│   ├── data/
│   │   └── documentaryData.ts
│   │
│   ├── utils/
│   │   └── audioEngine.ts
│   │
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── types.ts
│   └── ...
│
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
├── metadata.json
├── .env.example
└── README.md
```

---

# 💻 Run Locally

## Prerequisites

- Node.js
- npm
- Git

## Clone the repository

```bash
git clone https://github.com/muazzamshaikh333-md/Repository-name-Ai-Cyclone-Identification-and-Prediction.git
cd Repository-name-Ai-Cyclone-Identification-and-Prediction
```

## Install dependencies

Because the project dependency tree may require legacy peer-dependency resolution:

```bash
npm install --legacy-peer-deps
```

## Start development server

```bash
npm run dev
```

The configured development server uses:

```text
http://localhost:3000/
```

## Production build

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Type-check

```bash
npm run lint
```

---

# 🔑 Environment Variables

The project template includes:

```env
GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
APP_URL="YOUR_APP_URL"
```

### `GEMINI_API_KEY`
Used by the project configuration for Gemini API access where applicable.

### `APP_URL`
The hosted application URL used by the deployment configuration where applicable.

> **Security:** Never commit real API keys or secrets to GitHub. Keep secret values in local environment files or your hosting provider's environment-variable settings.

---

# ☁️ Deployment

The project is deployed using **Vercel**.

### Production URL

```text
https://ai-cyclone-identification-and-prediction-9hwpnvj5d.vercel.app
```

### Typical Vercel settings

```text
Framework: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install --legacy-peer-deps
```

---

# 🔬 Research Areas

The project presentation identifies these major research areas:

1. **Satellite Image Analysis** — Cyclone detection and classification using CNN / deep learning.
2. **Cyclone Intensity Estimation** — Estimating wind speed and pressure from satellite features.
3. **Track Prediction** — LSTM / GRU based short-term cyclone movement forecasting.
4. **Multi-Channel Data Fusion** — Combining infrared, water-vapour, and other satellite channels.
5. **Uncertainty Estimation** — Confidence scores and prediction corridors for safer forecasting.

---

# 📚 References

The project presentation identifies the following core references:

- **MOSDAC / ISRO** — INSAT-3D & INSAT-3DR satellite imagery and meteorological products
- **IMD / RSMC New Delhi** — Tropical cyclone observations and best-track information
- **NOAA IBTrACS** — Global historical tropical cyclone track dataset
- **Kaggle INSAT-3D Dataset** — Prototype dataset for satellite-image model development
- **TensorFlow / PyTorch Documentation** — CNN, LSTM/GRU implementation resources

Additional sources represented in the prototype include:

- IMD Cyclone e-Atlas & RSMC New Delhi Annual Reports
- WMO tropical cyclone forecasting material
- NDMA Cyclone Guidelines
- OSDMA disaster-management material
- Ministry of Earth Sciences early-warning resources
- NHC / JTWC uncertainty-cone definitions

---

# ⚠️ Important Scientific & Operational Note

This repository is a **Smart India Hackathon prototype / concept demonstration**.

The interactive prediction section contains **illustrative demonstration values** and is not an operational cyclone-warning system.

For real-world emergency decisions, users should rely on official forecasts, warnings, observations, and bulletins from competent meteorological and disaster-management authorities.

---

# 👥 Team

## Team O(1)

**Smart India Hackathon 2026**  
**Problem Statement ID: 26070**  
**Theme: Disaster Management**



# 🌊 From Satellite Data to Early Action

> **“From Satellite Data to Early Action.”**

The project focuses on connecting **satellite observation, AI/ML analysis, uncertainty-aware prediction, and disaster-management decision support** into a single interactive experience.

---

## ⭐ Project Links

- 🌐 **Live Demo:** https://ai-cyclone-identification-and-prediction-9hwpnvj5d.vercel.app
- 💻 **GitHub:** https://github.com/muazzamshaikh333-md/Repository-name-Ai-Cyclone-Identification-and-Prediction
- 🏆 **Hackathon:** Smart India Hackathon 2026
- 🆔 **Problem Statement:** 26070
- 👥 **Team:** O(1)
