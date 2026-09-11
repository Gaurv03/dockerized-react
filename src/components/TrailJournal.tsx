import React from 'react';
import { FIELD_REPORTS } from '../data/mockData';
import { MountainIcon, StarIcon, CompassIcon, DropletIcon } from './Icons';

export const TrailJournal: React.FC = () => {
  return (
    <section id="journal" className="section journal-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <CompassIcon size={16} />
            <span>FIELD TESTING TELEMETRY</span>
          </div>
          <h2 className="section-title">TESTED ON PACIFIC NORTHWEST DIRT</h2>
          <p className="section-subtitle">
            We don't rely on laboratory simulations. Our bikes are tested in freezing torrential downpours, across mossy granite slabs, and through the deepest rainforest loam in Washington state.
          </p>
        </div>

        <div className="reports-grid">
          {FIELD_REPORTS.map((report) => (
            <div key={report.id} className="report-card glass-card">
              <div className="report-top">
                <div className="report-location">
                  <MountainIcon size={18} className="loc-icon" />
                  <div>
                    <h4 className="trail-name">{report.trailName}</h4>
                    <span className="trail-loc">{report.location}</span>
                  </div>
                </div>
                <div className="report-rating">
                  {Array.from({ length: report.rating }).map((_, i) => (
                    <StarIcon key={i} size={15} className="star-svg" />
                  ))}
                </div>
              </div>

              <div className="conditions-badge">
                <DropletIcon size={14} className="drop-svg" />
                <span className="conditions-text">{report.conditions}</span>
              </div>

              <div className="rig-tested-row">
                <span className="rig-label">Rig Tested:</span>
                <span className="rig-val">{report.rigTested}</span>
                <span className="rig-elev">· {report.elevation}</span>
              </div>

              <blockquote className="rider-quote">
                "{report.riderQuote}"
              </blockquote>

              <div className="rider-meta">
                <div className="rider-avatar-initials">
                  {report.riderName.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="rider-info">
                  <span className="rider-name">{report.riderName}</span>
                  <span className="rider-title">{report.riderTitle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trail Trust Ribbon */}
        <div className="trail-trust-box glass-card">
          <div className="trust-item">
            <span className="trust-val">100%</span>
            <span className="trust-lbl">Grade 9 Titanium or Columbus Steel</span>
          </div>
          <div className="trust-sep"></div>
          <div className="trust-item">
            <span className="trust-val">0</span>
            <span className="trust-lbl">Compromised Bearing Failures In Rain</span>
          </div>
          <div className="trust-sep"></div>
          <div className="trust-item">
            <span className="trust-val">340+</span>
            <span className="trust-lbl">Happy PNW Loam Sledders</span>
          </div>
        </div>
      </div>

      <style>{`
        .journal-section {
          background-color: var(--bg-primary);
          border-top: 1px solid rgba(56, 178, 108, 0.12);
        }

        .reports-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 28px;
          margin-bottom: 56px;
        }

        .report-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(56, 178, 108, 0.2);
        }

        .report-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
        }

        .report-location {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .loc-icon {
          color: var(--green-bright);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .trail-name {
          font-size: 16px;
          color: var(--text-primary);
          line-height: 1.25;
        }

        .trail-loc {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-secondary);
        }

        .report-rating {
          display: flex;
          gap: 3px;
          color: var(--bronze);
        }

        .conditions-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(14, 27, 21, 0.85);
          border: 1px solid rgba(56, 178, 108, 0.25);
          padding: 6px 12px;
          border-radius: 6px;
          margin-bottom: 14px;
        }

        .drop-svg {
          color: var(--green-bright);
        }

        .conditions-text {
          font-family: var(--font-mono);
          font-size: 11.5px;
          color: var(--text-secondary);
        }

        .rig-tested-row {
          font-size: 12.5px;
          margin-bottom: 16px;
          color: var(--text-muted);
        }

        .rig-label {
          font-family: var(--font-mono);
          margin-right: 6px;
        }

        .rig-val {
          color: var(--bronze-light);
          font-weight: 600;
        }

        .rig-elev {
          color: var(--text-secondary);
          margin-left: 4px;
        }

        .rider-quote {
          font-size: 14px;
          font-style: italic;
          color: var(--text-primary);
          line-height: 1.6;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .rider-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          border-top: 1px solid rgba(56, 178, 108, 0.12);
          padding-top: 16px;
        }

        .rider-avatar-initials {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #183a2b 0%, #0c1c14 100%);
          border: 1.5px solid var(--border-medium);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 700;
          color: var(--green-bright);
        }

        .rider-info {
          display: flex;
          flex-direction: column;
        }

        .rider-name {
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .rider-title {
          font-size: 11.5px;
          color: var(--text-secondary);
        }

        /* Trust Ribbon */
        .trail-trust-box {
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 24px;
          border: 1px solid rgba(56, 178, 108, 0.25);
          background: rgba(14, 28, 22, 0.7);
        }

        .trust-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .trust-val {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 800;
          color: var(--green-bright);
        }

        .trust-lbl {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-secondary);
          text-transform: uppercase;
        }

        .trust-sep {
          width: 1px;
          height: 36px;
          background: rgba(56, 178, 108, 0.2);
        }

        @media (max-width: 768px) {
          .trail-trust-box {
            flex-direction: column;
            gap: 18px;
          }
          .trust-sep {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};
