import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Radio, Globe2, Activity, Server, Zap, Shield, Wifi } from 'lucide-react';

const REGIONS = [
  { name: "Islamabad Local Edge", ping: 6, code: "ISB-01", status: "Optimal" },
  { name: "Singapore Hub", ping: 84, code: "SIN-AP", status: "Active" },
  { name: "Frankfurt Hub", ping: 118, code: "FRA-EU", status: "Active" },
  { name: "London Hub", ping: 126, code: "LHR-EU", status: "Active" },
  { name: "US-East (N. Virginia)", ping: 162, code: "IAD-US", status: "Active" }
];

export default function TelemetryRadar() {
  const [livePings, setLivePings] = useState(REGIONS);

  useEffect(() => {
    const interval = setInterval(() => {
      setLivePings(prev => prev.map(r => ({
        ...r,
        ping: Math.max(4, r.ping + Math.floor(Math.random() * 5) - 2)
      })));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="telemetry" className="section-container" style={{ paddingTop: 'clamp(2rem, 5vw, 3.5rem)', paddingBottom: 'clamp(2rem, 4vw, 3rem)' }}>
      <div 
        className="card"
        style={{
          padding: 'clamp(1.2rem, 3.5vw, 2rem)',
          borderRadius: '24px',
          border: '1px solid rgba(0, 255, 204, 0.3)',
          background: 'var(--card-bg)',
          maxWidth: '1120px',
          margin: '0 auto'
        }}
      >
        {/* Header Strip */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.4rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              background: 'rgba(0, 255, 204, 0.12)',
              border: '1px solid rgba(0, 255, 204, 0.3)',
              padding: '8px',
              borderRadius: '12px',
              color: 'var(--accent-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Activity size={18} />
            </div>
            <div>
              <div style={{ color: 'var(--text-primary)', fontWeight: 800, fontSize: '1rem' }}>
                Global Edge Telemetry &amp; System Health Radar
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.76rem', marginTop: '1px' }}>
                Real-time roundtrip response metrics across distributed inference nodes
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span className="badge-neon" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px' }}>
              <span className="pulse-dot" style={{ width: '6px', height: '6px' }} /> HTTP/2 &amp; SSE Active
            </span>
            <span className="badge-neon" style={{ background: 'rgba(56, 189, 248, 0.08)', borderColor: 'rgba(56, 189, 248, 0.3)', color: 'var(--accent-cyan)' }}>
              5,717 Vector Chunks Indexed
            </span>
          </div>
        </div>

        {/* Global Node Latency Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '10px'
        }}>
          {livePings.map((node, i) => (
            <div
              key={i}
              style={{
                background: 'var(--btn-sec-bg)',
                border: '1px solid var(--btn-sec-border)',
                borderRadius: '16px',
                padding: '12px 14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  {node.code}
                </span>
                <span style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: node.ping < 20 ? 'var(--accent-color)' : node.ping < 100 ? 'var(--accent-cyan)' : 'var(--accent-alt)'
                }}>
                  {node.status}
                </span>
              </div>

              <div style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.86rem' }}>
                {node.name}
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginTop: '2px' }}>
                <span style={{
                  fontSize: '1.25rem',
                  fontWeight: 900,
                  color: node.ping < 20 ? 'var(--accent-color)' : node.ping < 100 ? 'var(--accent-cyan)' : 'var(--accent-alt)'
                }}>
                  {node.ping}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>ms RTT</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
