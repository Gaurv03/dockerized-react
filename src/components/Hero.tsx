import React from 'react';
import heroBikeImg from '../assets/hero-bike.jpg';
import { PineTreeIcon, ShieldCheckIcon, CompassIcon, ArrowRightIcon } from './Icons';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      {/* Background Image with Cinematic Overlay */}
      <div className="hero-backdrop">
        <img
          src={heroBikeImg}
          alt="Custom titanium mountain bike in foggy Pacific Northwest forest"
          className="hero-img"
        />
        <div className="hero-overlay"></div>
        <div className="hero-fog-vignette"></div>
      </div>

      <div className="container hero-container">
        {/* Content Box */}
        <div className="hero-content">
          <div className="hero-badge">
            <PineTreeIcon size={16} className="badge-icon" />
            <span>PACIFIC NORTHWEST · BELLINGHAM WORKSHOP</span>
          </div>

          <h1 className="hero-title">
            FORGED FOR THE <span className="text-gradient-green">LOAM, MIST</span> &amp; STEEPS.
          </h1>

          <p className="hero-description">
            Bespoke titanium &amp; steel all-mountain machines, in-house dyno-tuned suspension, and marine-grade weatherproofing. Engineered by hand where the rugged Cascades meet the Pacific ocean.
          </p>

          <div className="hero-cta-group">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => scrollTo('#configurator')}
            >
              <span>Build Estimator</span>
              <ArrowRightIcon size={18} />
            </button>

            <button
              type="button"
              className="btn btn-outline btn-lg"
              onClick={() => scrollTo('#bikes')}
            >
              <span>Explore Current Rigs</span>
            </button>

            <button
              type="button"
              className="btn btn-bronze btn-lg"
              onClick={onOpenBooking}
            >
              <span>Book Shop Fit</span>
            </button>
          </div>

          {/* Guarantee Badges */}
          <div className="hero-pills">
            <div className="pill-item">
              <ShieldCheckIcon size={16} className="pill-icon" />
              <span>Lifetime Trail Guarantee</span>
            </div>
            <div className="pill-item">
              <CompassIcon size={16} className="pill-icon" />
              <span>Tested on Galbraith &amp; Whistler</span>
            </div>
            <div className="pill-item">
              <span className="live-dot"></span>
              <span>Zero Off-the-Shelf Compromises</span>
            </div>
          </div>
        </div>

        {/* Floating Quick Spec Card */}
        <div className="hero-quick-card glass-card">
          <div className="card-top">
            <span className="card-label">CURRENT BENCH BUILD</span>
            <span className="card-status">READY FOR CAD</span>
          </div>
          <h3 className="card-name">Rainier High-Pivot Ti</h3>
          <p className="card-desc">Tuned for Galbraith SST wet roots &amp; 35% loam grades.</p>
          <div className="card-specs">
            <div className="spec-col">
              <span className="spec-val">170mm</span>
              <span className="spec-lbl">Coil Travel</span>
            </div>
            <div className="spec-col">
              <span className="spec-val">63.5°</span>
              <span className="spec-lbl">Head Angle</span>
            </div>
            <div className="spec-col">
              <span className="spec-val">Grade 9</span>
              <span className="spec-lbl">Titanium</span>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-outline btn-sm card-btn"
            onClick={() => scrollTo('#bikes')}
          >
            Inspect Build Specs →
          </button>
        </div>
      </div>

      {/* Stats Ribbon */}
      <div className="hero-stats-bar">
        <div className="container stats-inner-grid">
          <div className="stat-box">
            <span className="stat-number">340+</span>
            <span className="stat-label">Bespoke Frames Built</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <span className="stat-number">48,000+</span>
            <span className="stat-label">Miles Tested in Rain</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <span className="stat-number">1,800+</span>
            <span className="stat-label">Suspension Dyno Tunes</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <span className="stat-number">100%</span>
            <span className="stat-label">Marine-Grade Sealed</span>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 94vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-top: 130px;
          overflow: hidden;
        }

        .hero-backdrop {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          transform: scale(1.02);
          filter: brightness(0.72) contrast(1.1);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(8, 15, 12, 0.75) 0%,
            rgba(8, 15, 12, 0.45) 40%,
            rgba(8, 15, 12, 0.88) 85%,
            #080f0c 100%
          );
        }

        .hero-fog-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 20% 40%,
            rgba(56, 178, 108, 0.12) 0%,
            transparent 60%
          );
          pointer-events: none;
        }

        .hero-container {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
          padding-top: 40px;
          padding-bottom: 60px;
        }

        .hero-content {
          max-width: 720px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 9999px;
          background: rgba(18, 38, 29, 0.8);
          border: 1px solid rgba(74, 222, 128, 0.3);
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.12em;
          color: var(--green-bright);
          margin-bottom: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .badge-icon {
          color: var(--bronze);
        }

        .hero-title {
          font-size: 58px;
          letter-spacing: -0.025em;
          line-height: 1.05;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .text-gradient-green {
          background: linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #d49755 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 19px;
          line-height: 1.6;
          color: #d1dfd7;
          margin-bottom: 34px;
          max-width: 620px;
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 36px;
        }

        .hero-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
        }

        .pill-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          color: var(--text-secondary);
        }

        .pill-icon {
          color: var(--green-bright);
        }

        /* Hero Quick Card */
        .hero-quick-card {
          width: 320px;
          flex-shrink: 0;
          padding: 24px;
          background: rgba(13, 27, 21, 0.85);
          border: 1px solid rgba(74, 222, 128, 0.28);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6);
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .card-label {
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.1em;
          color: var(--bronze);
          font-weight: 600;
        }

        .card-status {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--green-bright);
          background: rgba(74, 222, 128, 0.12);
          padding: 3px 8px;
          border-radius: 4px;
        }

        .card-name {
          font-size: 20px;
          margin-bottom: 6px;
        }

        .card-desc {
          font-size: 13px;
          color: var(--text-secondary);
          margin-bottom: 18px;
        }

        .card-specs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          background: rgba(8, 17, 13, 0.7);
          padding: 12px 8px;
          border-radius: 8px;
          border: 1px solid rgba(56, 178, 108, 0.15);
          margin-bottom: 18px;
          text-align: center;
        }

        .spec-val {
          display: block;
          font-family: var(--font-mono);
          font-size: 14px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .spec-lbl {
          display: block;
          font-size: 10px;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .card-btn {
          width: 100%;
          text-align: center;
        }

        /* Stats Bar */
        .hero-stats-bar {
          position: relative;
          z-index: 1;
          background: rgba(10, 20, 16, 0.94);
          border-top: 1px solid rgba(56, 178, 108, 0.18);
          border-bottom: 1px solid rgba(56, 178, 108, 0.18);
          padding: 24px 0;
          backdrop-filter: blur(10px);
        }

        .stats-inner-grid {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .stat-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1;
        }

        .stat-number {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1;
          margin-bottom: 6px;
        }

        .stat-label {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--green-bright);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .stat-divider {
          width: 1px;
          height: 38px;
          background: rgba(56, 178, 108, 0.2);
        }

        @media (max-width: 1024px) {
          .hero-container {
            flex-direction: column;
            align-items: flex-start;
          }
          .hero-quick-card {
            width: 100%;
          }
          .hero-title {
            font-size: 42px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 110px;
          }
          .hero-title {
            font-size: 34px;
          }
          .hero-description {
            font-size: 16px;
          }
          .hero-cta-group {
            flex-direction: column;
          }
          .hero-cta-group .btn {
            width: 100%;
          }
          .stats-inner-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .stat-divider {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};
