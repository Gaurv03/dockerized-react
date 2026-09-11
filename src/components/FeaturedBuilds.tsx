import React, { useState } from 'react';
import { FEATURED_BUILDS } from '../data/mockData';
import type { BikeBuild, BikeDiscipline } from '../types';
import { MountainIcon, CheckIcon, CloseIcon } from './Icons';

interface FeaturedBuildsProps {
  onSelectBuildForBooking: (buildName: string) => void;
}

export const FeaturedBuilds: React.FC<FeaturedBuildsProps> = ({ onSelectBuildForBooking }) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<BikeDiscipline>('all');
  const [activeSpecModal, setActiveSpecModal] = useState<BikeBuild | null>(null);

  const filterButtons: { label: string; value: BikeDiscipline }[] = [
    { label: 'All Builds', value: 'all' },
    { label: 'High-Pivot Enduro', value: 'enduro' },
    { label: 'Overland Gravel', value: 'gravel' },
    { label: 'Artisanal Hardtail', value: 'hardtail' },
    { label: 'Downhill Gravity', value: 'downhill' },
  ];

  const filteredBuilds = selectedDiscipline === 'all'
    ? FEATURED_BUILDS
    : FEATURED_BUILDS.filter(b => b.discipline === selectedDiscipline);

  return (
    <section id="bikes" className="section builds-section topo-pattern">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MountainIcon size={16} />
            <span>BESPOKE GARAGE RIGS</span>
          </div>
          <h2 className="section-title">HANDBUILT FOR CASCADIA'S STEEPEST TRAILS</h2>
          <p className="section-subtitle">
            Zero mass-production. Each frame is CAD-designed, mitred, welded, and dyno-tested in our Bellingham workshop. Crafted to handle 90% humidity, slick cedar roots, and 4,000-ft mountain descents.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tab-container">
          <div className="filter-tabs">
            {filterButtons.map(tab => (
              <button
                key={tab.value}
                type="button"
                className={`filter-btn ${selectedDiscipline === tab.value ? 'active' : ''}`}
                onClick={() => setSelectedDiscipline(tab.value)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Builds Grid */}
        <div className="builds-grid">
          {filteredBuilds.map((build) => (
            <article key={build.id} className="build-card glass-card">
              <div className="build-image-wrap">
                <img
                  src={build.image}
                  alt={build.name}
                  className="build-card-img"
                  loading="lazy"
                />
                <div className="image-overlay-gradient"></div>
                <div className="card-badge-top">
                  <span className="build-badge">{build.badge}</span>
                  <span className="build-lead-time">{build.leadTime} Lead</span>
                </div>
              </div>

              <div className="build-body">
                <div className="build-meta">
                  <span className="discipline-tag">{build.discipline.toUpperCase()}</span>
                  <span className="starting-price">{build.priceStarting}</span>
                </div>

                <h3 className="build-name">{build.name}</h3>
                <p className="build-subtitle">{build.subtitle}</p>
                <p className="build-description">{build.description}</p>

                {/* Key Spec Pills */}
                <div className="spec-pill-grid">
                  <div className="spec-item">
                    <span className="spec-title">Frame:</span>
                    <span className="spec-detail">{build.frameMaterial}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-title">Travel:</span>
                    <span className="spec-detail">{build.travel}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-title">Weight:</span>
                    <span className="spec-detail">{build.weight}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-title">Drivetrain:</span>
                    <span className="spec-detail">{build.drivetrain}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="build-features">
                  {build.features.slice(0, 3).map((feat, i) => (
                    <li key={i} className="feature-line">
                      <CheckIcon size={15} className="feat-check" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="card-actions">
                  <button
                    type="button"
                    className="btn btn-outline btn-sm flex-1"
                    onClick={() => setActiveSpecModal(build)}
                  >
                    Full Spec Sheet
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm flex-1"
                    onClick={() => onSelectBuildForBooking(build.name)}
                  >
                    Inquire On Build
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full Spec Modal */}
      {activeSpecModal && (
        <div className="spec-modal-backdrop" onClick={() => setActiveSpecModal(null)}>
          <div className="spec-modal-window glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="section-tag">{activeSpecModal.discipline.toUpperCase()} SPECIFICATION</span>
                <h3 className="modal-title">{activeSpecModal.name}</h3>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setActiveSpecModal(null)}
                aria-label="Close modal"
              >
                <CloseIcon size={22} />
              </button>
            </div>

            <div className="modal-body-scroll">
              <div className="modal-image-preview">
                <img src={activeSpecModal.image} alt={activeSpecModal.name} />
              </div>

              <div className="modal-specs-table">
                <div className="table-row">
                  <span className="col-prop">Frame Metallurgy</span>
                  <span className="col-val">{activeSpecModal.frameMaterial}</span>
                </div>
                <div className="table-row">
                  <span className="col-prop">Suspension Package</span>
                  <span className="col-val">{activeSpecModal.travel}</span>
                </div>
                <div className="table-row">
                  <span className="col-prop">Estimated Complete Weight</span>
                  <span className="col-val">{activeSpecModal.weight}</span>
                </div>
                <div className="table-row">
                  <span className="col-prop">Wheelset &amp; Hubs</span>
                  <span className="col-val">{activeSpecModal.wheelset}</span>
                </div>
                <div className="table-row">
                  <span className="col-prop">Drivetrain &amp; Shifting</span>
                  <span className="col-val">{activeSpecModal.drivetrain}</span>
                </div>
                <div className="table-row">
                  <span className="col-prop">Braking System</span>
                  <span className="col-val">{activeSpecModal.brakes}</span>
                </div>
                <div className="table-row">
                  <span className="col-prop">Base Configuration Price</span>
                  <span className="col-val price-highlight">{activeSpecModal.priceStarting}</span>
                </div>
                <div className="table-row">
                  <span className="col-prop">Typical Build Queue</span>
                  <span className="col-val">{activeSpecModal.leadTime}</span>
                </div>
              </div>

              <div className="modal-craft-notes">
                <h4>PNW Engineering Notes</h4>
                <p>{activeSpecModal.description}</p>
                <div className="modal-all-features">
                  {activeSpecModal.features.map((item, idx) => (
                    <div key={idx} className="feature-row">
                      <CheckIcon size={16} className="feat-check" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setActiveSpecModal(null)}
              >
                Close Spec Sheet
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  const build = activeSpecModal.name;
                  setActiveSpecModal(null);
                  onSelectBuildForBooking(build);
                }}
              >
                Request Consultation For {activeSpecModal.name}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .builds-section {
          background-color: var(--bg-primary);
        }

        .filter-tab-container {
          display: flex;
          justify-content: center;
          margin-bottom: 48px;
        }

        .filter-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          background: rgba(14, 27, 21, 0.85);
          padding: 6px;
          border-radius: 9999px;
          border: 1px solid var(--border-subtle);
        }

        .filter-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          padding: 8px 18px;
          border-radius: 9999px;
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          color: var(--text-primary);
        }

        .filter-btn.active {
          background: var(--green-pine);
          color: #ffffff;
          box-shadow: 0 2px 10px rgba(21, 128, 61, 0.4);
        }

        .builds-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          gap: 32px;
        }

        @media (max-width: 480px) {
          .builds-grid {
            grid-template-columns: 1fr;
          }
        }

        .build-card {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(56, 178, 108, 0.18);
        }

        .build-image-wrap {
          position: relative;
          height: 240px;
          width: 100%;
          overflow: hidden;
        }

        .build-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .build-card:hover .build-card-img {
          transform: scale(1.05);
        }

        .image-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(10, 20, 16, 0.95) 100%
          );
        }

        .card-badge-top {
          position: absolute;
          top: 16px;
          left: 16px;
          right: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .build-badge {
          background: rgba(10, 20, 16, 0.85);
          color: var(--green-bright);
          border: 1px solid rgba(74, 222, 128, 0.3);
          padding: 4px 10px;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .build-lead-time {
          background: rgba(212, 151, 85, 0.2);
          color: var(--bronze-light);
          border: 1px solid rgba(212, 151, 85, 0.4);
          padding: 4px 10px;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
        }

        .build-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .build-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .discipline-tag {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--bronze);
          letter-spacing: 0.1em;
          font-weight: 600;
        }

        .starting-price {
          font-family: var(--font-mono);
          font-size: 17px;
          font-weight: 700;
          color: var(--green-bright);
        }

        .build-name {
          font-size: 22px;
          margin-bottom: 4px;
        }

        .build-subtitle {
          font-size: 13.5px;
          color: var(--text-secondary);
          margin-bottom: 12px;
          font-weight: 500;
        }

        .build-description {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 18px;
        }

        .spec-pill-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 6px;
          background: rgba(9, 18, 14, 0.7);
          padding: 12px;
          border-radius: 8px;
          border: 1px solid rgba(56, 178, 108, 0.12);
          margin-bottom: 18px;
        }

        .spec-item {
          display: flex;
          font-size: 12.5px;
          gap: 6px;
        }

        .spec-title {
          font-family: var(--font-mono);
          color: var(--text-secondary);
          font-weight: 600;
          min-width: 70px;
        }

        .spec-detail {
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .build-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 24px;
        }

        .feature-line {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 13px;
          color: var(--text-secondary);
        }

        .feat-check {
          color: var(--green-bright);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .card-actions {
          display: flex;
          gap: 10px;
          margin-top: auto;
        }

        .flex-1 {
          flex: 1;
        }

        /* Modal Styles */
        .spec-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.82);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .spec-modal-window {
          max-width: 720px;
          width: 100%;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          background: rgba(12, 24, 19, 0.98);
          border: 1px solid var(--border-medium);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.8);
          overflow: hidden;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 24px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .modal-title {
          font-size: 26px;
          margin-top: 6px;
        }

        .modal-close-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 4px;
          transition: color 0.2s;
        }

        .modal-close-btn:hover {
          color: #ffffff;
        }

        .modal-body-scroll {
          padding: 24px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .modal-image-preview img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          border-radius: 8px;
          border: 1px solid var(--border-subtle);
        }

        .modal-specs-table {
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          overflow: hidden;
        }

        .table-row {
          display: flex;
          justify-content: space-between;
          padding: 10px 16px;
          font-size: 13.5px;
          border-bottom: 1px solid rgba(56, 178, 108, 0.1);
        }

        .table-row:nth-child(even) {
          background: rgba(255, 255, 255, 0.02);
        }

        .col-prop {
          font-family: var(--font-mono);
          color: var(--text-secondary);
        }

        .col-val {
          color: var(--text-primary);
          font-weight: 500;
          text-align: right;
        }

        .price-highlight {
          color: var(--green-bright);
          font-weight: 700;
        }

        .modal-craft-notes h4 {
          font-size: 16px;
          margin-bottom: 8px;
          color: var(--bronze);
        }

        .modal-craft-notes p {
          font-size: 14px;
          margin-bottom: 12px;
          line-height: 1.5;
        }

        .modal-all-features {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .feature-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
        }

        .modal-footer {
          padding: 18px 24px;
          border-top: 1px solid var(--border-subtle);
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          background: rgba(9, 18, 14, 0.7);
        }

        @media (max-width: 600px) {
          .modal-footer {
            flex-direction: column;
          }
          .table-row {
            flex-direction: column;
            gap: 4px;
          }
          .col-val {
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
};
