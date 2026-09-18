import React from 'react';
import {
  CheckCircle2,
  FileCheck2,
  KeyRound,
  Lock,
  Radio,
  Server,
  Shield,
  ShieldAlert,
  UserCheck
} from 'lucide-react';

export const DataSecurityView: React.FC = () => {
  const securityPillars = [
    {
      title: 'Secure Transmission Pipelines',
      icon: Lock,
      color: 'text-cyan-400',
      border: 'border-cyan-500/50',
      bg: 'bg-cyan-950/20',
      badge: 'TLS 1.3 & mTLS Ingestion',
      details:
        'All telemetry and satellite radiance granules from MOSDAC/ISRO servers are streamed over encrypted mTLS tunnels with mutual certificate validation, preventing spoofing or man-in-the-middle tampering.'
    },
    {
      title: 'Role-Based Access Control (RBAC)',
      icon: KeyRound,
      color: 'text-amber-400',
      border: 'border-amber-500/50',
      bg: 'bg-amber-950/20',
      badge: 'State Operations Authentication',
      details:
        'Strict hierarchical permissions. Only credentialed meteorological officers and certified State Emergency Operations Center (SEOC) directors can trigger automated warning draft syntheses.'
    },
    {
      title: 'Data Integrity & Sanity Verification',
      icon: FileCheck2,
      color: 'text-emerald-400',
      border: 'border-emerald-500/50',
      bg: 'bg-emerald-950/20',
      badge: 'SHA-256 Checksum Audits',
      details:
        'Automated telemetry filters detect sensor dropouts, missing satellite scan lines, or anomalous brightness temperatures. If input data fails physics validation, fallback alerts are immediately raised.'
    },
    {
      title: 'Mandatory Human Verification Gate',
      icon: UserCheck,
      color: 'text-purple-400',
      border: 'border-purple-500/50',
      bg: 'bg-purple-950/20',
      badge: 'Zero Autonomous Broadcast',
      details:
        'The system is hard-coded with a physical "Human-in-the-Loop" verification requirement. No public bulletin, siren trigger, or district evacuation advisory can be released without dual digital sign-off from IMD duty meteorologists.'
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col p-4 sm:p-8 z-10 text-white overflow-y-auto">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-3 mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-cyan-950/80 border border-cyan-800 text-cyan-300 font-mono-tech text-xs px-2.5 py-0.5 rounded">
              SYSTEM INTEGRITY & DEFENSE
            </span>
            <span className="text-xs font-mono-tech text-neutral-400">
              National Critical Infrastructure Security Compliance
            </span>
          </div>
          <h2 className="font-cinzel text-xl sm:text-3xl font-bold text-neutral-100 mt-1">
            Data Security, Integrity & Operational Safety
          </h2>
        </div>

        <div className="bg-neutral-900/90 border border-neutral-800 px-3 py-1.5 rounded-lg text-xs font-mono-tech text-emerald-300 flex items-center gap-2">
          <Shield className="w-4 h-4 text-emerald-400" />
          <span>Compliant with Indian CERT-In Guidelines</span>
        </div>
      </div>

      {/* Grid of 4 Security Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        {securityPillars.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className={`p-5 rounded-xl border ${p.border} ${p.bg} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-neutral-800/80 pb-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Icon className={`w-5 h-5 ${p.color}`} />
                    <span className="text-xs font-mono-tech font-bold uppercase tracking-wider text-neutral-200">
                      {p.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono-tech bg-neutral-900 text-neutral-300 border border-neutral-700/60 px-2 py-0.5 rounded">
                    {p.badge}
                  </span>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">{p.details}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono-tech text-neutral-400">
                <span>Verification State:</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Enforced at Pipeline Gateway
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Architecture Fail-Safe Guarantee */}
      <div className="mt-4 p-3 bg-neutral-950/90 border border-neutral-800 rounded-lg flex flex-wrap items-center justify-between gap-3 text-xs font-mono-tech text-neutral-300">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong className="text-amber-300">Fail-Safe Architectural Redundancy: </strong>
            In the event of network disruption or AI inference failure, the system falls back automatically to WRF / NWP numerical forecasts without service interruption.
          </span>
        </div>
      </div>
    </div>
  );
};
