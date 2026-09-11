import React, { useState, useMemo } from 'react';
import type { ConfiguratorState } from '../types';
import { WrenchIcon, CheckIcon, ShieldCheckIcon } from './Icons';

interface BuildEstimatorProps {
  onReserveConfig: (configSummary: string) => void;
}

export const BuildEstimator: React.FC<BuildEstimatorProps> = ({ onReserveConfig }) => {
  const [config, setConfig] = useState<ConfiguratorState>({
    discipline: 'enduro',
    frameMaterial: 'titanium',
    suspensionTier: 'kashima',
    finish: 'moss-cerakote',
    wheelset: 'onyx-alloy',
    riderHeight: `5'10" (178cm)`,
  });

  const calculation = useMemo(() => {
    let basePrice = 6200;
    let baseWeight = 29.5;
    let baseWeeks = 4;

    // Discipline adjustments
    if (config.discipline === 'enduro') {
      basePrice += 1100;
      baseWeight += 2.2;
      baseWeeks += 1;
    } else if (config.discipline === 'allmountain') {
      basePrice += 650;
      baseWeight += 0.8;
    } else if (config.discipline === 'gravel') {
      basePrice -= 800;
      baseWeight -= 8.5;
      baseWeeks -= 1;
    } else if (config.discipline === 'hardtail') {
      basePrice -= 400;
      baseWeight -= 3.2;
    }

    // Material adjustments
    if (config.frameMaterial === 'titanium') {
      basePrice += 950;
      baseWeight -= 0.6;
      baseWeeks += 1;
    } else if (config.frameMaterial === 'carbon') {
      basePrice += 1200;
      baseWeight -= 1.1;
      baseWeeks += 1;
    } else if (config.frameMaterial === 'steel') {
      basePrice += 0;
      baseWeight += 1.0;
    }

    // Suspension tier
    if (config.suspensionTier === 'kashima') {
      basePrice += 950;
      baseWeight += 0.2;
    } else if (config.suspensionTier === 'coil') {
      basePrice += 1150;
      baseWeight += 1.1;
    }

    // Wheelset
    if (config.wheelset === 'carbon-reserve') {
      basePrice += 1100;
      baseWeight -= 0.8;
    } else if (config.wheelset === 'onyx-alloy') {
      basePrice += 650;
      baseWeight += 0.3;
    } else if (config.wheelset === 'i9-hydra') {
      basePrice += 750;
      baseWeight -= 0.2;
    }

    return {
      price: `$${basePrice.toLocaleString()}`,
      weightLbs: `${baseWeight.toFixed(1)} lbs`,
      weightKg: `${(baseWeight * 0.453592).toFixed(1)} kg`,
      weeks: `${baseWeeks}–${baseWeeks + 2} Weeks`,
    };
  }, [config]);

  const handleReserve = () => {
    const summary = `${config.frameMaterial.toUpperCase()} ${config.discipline.toUpperCase()} (${config.finish}) with ${config.suspensionTier} suspension & ${config.wheelset} hoops [Est: ${calculation.price}]`;
    onReserveConfig(summary);
  };

  return (
    <section id="configurator" className="section estimator-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <WrenchIcon size={16} />
            <span>INTERACTIVE BENCH ESTIMATOR</span>
          </div>
          <h2 className="section-title">CALCULATE YOUR BESPOKE BUILD</h2>
          <p className="section-subtitle">
            Configure your dream mountain or gravel weapon. Tune geometry discipline, frame metallurgy, suspension, and artisan finishes to see real-time weight, build queue times, and pricing.
          </p>
        </div>

        <div className="estimator-layout">
          {/* Controls Column */}
          <div className="estimator-controls">
            {/* 1. Discipline */}
            <div className="option-group">
              <label className="group-label">
                <span className="step-num">01</span>
                <span>Choose Riding Discipline</span>
              </label>
              <div className="option-grid">
                {[
                  { id: 'enduro', title: 'High-Pivot Enduro', desc: '170mm Coil / 63.5° HTA' },
                  { id: 'allmountain', title: 'Cascadia All-Mountain', desc: '150mm Air / 64.5° HTA' },
                  { id: 'hardtail', title: 'Chuckanut Ti Hardtail', desc: '140mm Fork / Loam Sled' },
                  { id: 'gravel', title: 'Olympic Overland Gravel', desc: 'Rigid Adventure / 50c' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`selector-card ${config.discipline === item.id ? 'selected' : ''}`}
                    onClick={() => setConfig({ ...config, discipline: item.id as any })}
                  >
                    <div className="selector-indicator">
                      {config.discipline === item.id && <CheckIcon size={14} />}
                    </div>
                    <div className="selector-info">
                      <span className="selector-title">{item.title}</span>
                      <span className="selector-desc">{item.desc}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Frame Metallurgy */}
            <div className="option-group">
              <label className="group-label">
                <span className="step-num">02</span>
                <span>Frame Metallurgy &amp; Tubing</span>
              </label>
              <div className="option-grid">
                {[
                  { id: 'titanium', title: 'Grade 9 Titanium (3Al-2.5V)', desc: 'Infinite fatigue life, natural vibration damping' },
                  { id: 'steel', title: 'Reynolds 853 Air-Hardened Steel', desc: 'Crisp spring feel, resilient and rebuildable' },
                  { id: 'carbon', title: 'Hybrid Ti Front / Toray Carbon Stay', desc: 'Maximum lateral stiffness and low weight' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`selector-card ${config.frameMaterial === item.id ? 'selected' : ''}`}
                    onClick={() => setConfig({ ...config, frameMaterial: item.id as any })}
                  >
                    <div className="selector-indicator">
                      {config.frameMaterial === item.id && <CheckIcon size={14} />}
                    </div>
                    <div className="selector-info">
                      <span className="selector-title">{item.title}</span>
                      <span className="selector-desc">{item.desc}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Suspension & Drivetrain */}
            <div className="option-group">
              <label className="group-label">
                <span className="step-num">03</span>
                <span>Suspension &amp; Drivetrain Tier</span>
              </label>
              <div className="option-grid">
                {[
                  { id: 'kashima', title: 'Fox Factory Kashima + SRAM AXS', desc: 'GRIP X2 damper & wireless XX Transmission' },
                  { id: 'coil', title: 'Push 11.6 Hypercoil + Shimano XTR', desc: 'Custom dyno-valved coil with XTR 4-piston' },
                  { id: 'ultimate', title: 'RockShox Ultimate + GX Eagle', desc: 'Charger 3.1 damper with bulletproof GX' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`selector-card ${config.suspensionTier === item.id ? 'selected' : ''}`}
                    onClick={() => setConfig({ ...config, suspensionTier: item.id as any })}
                  >
                    <div className="selector-indicator">
                      {config.suspensionTier === item.id && <CheckIcon size={14} />}
                    </div>
                    <div className="selector-info">
                      <span className="selector-title">{item.title}</span>
                      <span className="selector-desc">{item.desc}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Finish */}
            <div className="option-group">
              <label className="group-label">
                <span className="step-num">04</span>
                <span>Artisan Finish &amp; Cerakote</span>
              </label>
              <div className="finish-pill-group">
                {[
                  { id: 'moss-cerakote', label: 'Rainforest Moss Cerakote', color: '#29543e' },
                  { id: 'mist-anodized', label: 'Cascade Mist Anodized Fade', color: '#4a6b63' },
                  { id: 'raw-brushed', label: 'Raw Brushed Titanium & Etch', color: '#88928c' },
                  { id: 'cedar-metallic', label: 'Cedar Bark Anodized Bronze', color: '#966031' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`finish-pill ${config.finish === item.id ? 'selected' : ''}`}
                    onClick={() => setConfig({ ...config, finish: item.id as any })}
                  >
                    <span className="color-swatch" style={{ backgroundColor: item.color }}></span>
                    <span className="swatch-name">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Wheelset */}
            <div className="option-group">
              <label className="group-label">
                <span className="step-num">05</span>
                <span>Hand-Laced Wheelset</span>
              </label>
              <div className="option-grid">
                {[
                  { id: 'onyx-alloy', title: 'Onyx Silent Instant Sprag-Clutch', desc: 'Whispering silent freehub on DT Swiss alloy rims' },
                  { id: 'carbon-reserve', title: 'Reserve Carbon HD on Chris King', desc: 'Lifetime rim replacement with bourbon hubs' },
                  { id: 'i9-hydra', title: 'Industry Nine Hydra 690 POE', desc: '0.52° instantaneous pedal engagement' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`selector-card ${config.wheelset === item.id ? 'selected' : ''}`}
                    onClick={() => setConfig({ ...config, wheelset: item.id as any })}
                  >
                    <div className="selector-indicator">
                      {config.wheelset === item.id && <CheckIcon size={14} />}
                    </div>
                    <div className="selector-info">
                      <span className="selector-title">{item.title}</span>
                      <span className="selector-desc">{item.desc}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Summary & Output Column */}
          <div className="estimator-summary-column">
            <div className="estimator-summary-card glass-card">
              <div className="summary-header">
                <span className="summary-tag">CUSTOM BENCH QUOTE</span>
                <span className="summary-badge">FALL / WINTER SLOT</span>
              </div>

              <div className="price-display">
                <span className="price-label">Estimated Complete Rig</span>
                <div className="price-number">{calculation.price}</div>
                <span className="price-sub">Includes full 3D CAD fit &amp; in-house dyno tune</span>
              </div>

              <div className="metrics-box">
                <div className="metric-cell">
                  <span className="metric-label">Est. Complete Weight</span>
                  <span className="metric-val">{calculation.weightLbs}</span>
                  <span className="metric-sub">{calculation.weightKg}</span>
                </div>
                <div className="metric-divider"></div>
                <div className="metric-cell">
                  <span className="metric-label">Workshop Queue</span>
                  <span className="metric-val">{calculation.weeks}</span>
                  <span className="metric-sub">From CAD sign-off</span>
                </div>
              </div>

              <div className="summary-spec-list">
                <div className="spec-line">
                  <span className="k">Discipline:</span>
                  <span className="v">{config.discipline.toUpperCase()}</span>
                </div>
                <div className="spec-line">
                  <span className="k">Metallurgy:</span>
                  <span className="v">{config.frameMaterial.toUpperCase()}</span>
                </div>
                <div className="spec-line">
                  <span className="k">Suspension:</span>
                  <span className="v">{config.suspensionTier.toUpperCase()}</span>
                </div>
                <div className="spec-line">
                  <span className="k">Finish:</span>
                  <span className="v">{config.finish.replace('-', ' ').toUpperCase()}</span>
                </div>
                <div className="spec-line">
                  <span className="k">Wheelset:</span>
                  <span className="v">{config.wheelset.replace('-', ' ').toUpperCase()}</span>
                </div>
              </div>

              <div className="summary-guarantees">
                <div className="guarantee-row">
                  <ShieldCheckIcon size={16} className="guar-icon" />
                  <span>Cascadia Lifetime Frame Warranty</span>
                </div>
                <div className="guarantee-row">
                  <CheckIcon size={16} className="guar-icon" />
                  <span>Includes 100-mile complete teardown &amp; tune</span>
                </div>
                <div className="guarantee-row">
                  <CheckIcon size={16} className="guar-icon" />
                  <span>Enduro MAX marine-sealed bearings standard</span>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-bronze btn-lg reserve-btn"
                onClick={handleReserve}
              >
                Reserve This Spec Slot →
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .estimator-section {
          background: linear-gradient(180deg, var(--bg-primary) 0%, #0d1a14 50%, var(--bg-primary) 100%);
          border-top: 1px solid rgba(56, 178, 108, 0.12);
          border-bottom: 1px solid rgba(56, 178, 108, 0.12);
        }

        .estimator-layout {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 40px;
          align-items: start;
        }

        .estimator-controls {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .option-group {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .group-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .step-num {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--green-bright);
          background: rgba(74, 222, 128, 0.15);
          border: 1px solid rgba(74, 222, 128, 0.3);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .option-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
        }

        .selector-card {
          background: rgba(14, 27, 21, 0.7);
          border: 1px solid rgba(56, 178, 108, 0.18);
          border-radius: 10px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
          color: inherit;
        }

        .selector-card:hover {
          border-color: rgba(74, 222, 128, 0.4);
          background: rgba(19, 38, 30, 0.85);
          transform: translateX(3px);
        }

        .selector-card.selected {
          border-color: var(--green-bright);
          background: rgba(22, 48, 37, 0.95);
          box-shadow: 0 0 20px rgba(74, 222, 128, 0.15);
        }

        .selector-indicator {
          width: 22px;
          height: 22px;
          border-radius: 6px;
          border: 1.5px solid rgba(56, 178, 108, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--green-bright);
        }

        .selector-card.selected .selector-indicator {
          border-color: var(--green-bright);
          background: rgba(74, 222, 128, 0.2);
        }

        .selector-info {
          display: flex;
          flex-direction: column;
        }

        .selector-title {
          font-family: var(--font-display);
          font-size: 15px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .selector-desc {
          font-size: 12.5px;
          color: var(--text-secondary);
        }

        .finish-pill-group {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .finish-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(14, 27, 21, 0.7);
          border: 1px solid rgba(56, 178, 108, 0.18);
          border-radius: 8px;
          padding: 10px 14px;
          cursor: pointer;
          color: var(--text-primary);
          font-family: var(--font-display);
          font-size: 13.5px;
          transition: all 0.2s ease;
          text-align: left;
        }

        .finish-pill:hover {
          border-color: rgba(74, 222, 128, 0.4);
        }

        .finish-pill.selected {
          border-color: var(--bronze);
          background: rgba(28, 40, 32, 0.95);
          box-shadow: 0 0 15px rgba(212, 151, 85, 0.2);
        }

        .color-swatch {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          flex-shrink: 0;
        }

        /* Summary Column */
        .estimator-summary-column {
          position: sticky;
          top: 110px;
        }

        .estimator-summary-card {
          padding: 32px;
          border: 1px solid rgba(212, 151, 85, 0.35);
          background: rgba(12, 23, 18, 0.9);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
        }

        .summary-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .summary-tag {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.1em;
          color: var(--bronze);
          font-weight: 700;
        }

        .summary-badge {
          font-family: var(--font-mono);
          font-size: 10px;
          background: rgba(74, 222, 128, 0.12);
          color: var(--green-bright);
          border: 1px solid rgba(74, 222, 128, 0.25);
          padding: 3px 8px;
          border-radius: 4px;
        }

        .price-display {
          margin-bottom: 24px;
          text-align: center;
          padding: 20px;
          background: rgba(8, 16, 12, 0.8);
          border-radius: 12px;
          border: 1px solid rgba(56, 178, 108, 0.15);
        }

        .price-label {
          font-size: 13px;
          color: var(--text-secondary);
          display: block;
          margin-bottom: 4px;
        }

        .price-number {
          font-family: var(--font-display);
          font-size: 44px;
          font-weight: 800;
          color: var(--green-bright);
          line-height: 1.1;
        }

        .price-sub {
          font-size: 12px;
          color: var(--text-muted);
          display: block;
          margin-top: 6px;
        }

        .metrics-box {
          display: flex;
          background: rgba(15, 30, 23, 0.6);
          border: 1px solid rgba(56, 178, 108, 0.18);
          border-radius: 10px;
          padding: 16px;
          margin-bottom: 24px;
        }

        .metric-cell {
          flex: 1;
          text-align: center;
        }

        .metric-label {
          font-family: var(--font-mono);
          font-size: 10.5px;
          color: var(--text-secondary);
          display: block;
          margin-bottom: 4px;
          text-transform: uppercase;
        }

        .metric-val {
          font-family: var(--font-mono);
          font-size: 19px;
          font-weight: 700;
          color: var(--text-primary);
          display: block;
        }

        .metric-sub {
          font-size: 11px;
          color: var(--text-muted);
        }

        .metric-divider {
          width: 1px;
          background: rgba(56, 178, 108, 0.2);
          margin: 0 12px;
        }

        .summary-spec-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 24px;
          font-size: 13px;
          border-top: 1px solid rgba(56, 178, 108, 0.12);
          padding-top: 16px;
        }

        .spec-line {
          display: flex;
          justify-content: space-between;
        }

        .spec-line .k {
          color: var(--text-secondary);
          font-family: var(--font-mono);
        }

        .spec-line .v {
          color: var(--bronze-light);
          font-weight: 600;
        }

        .summary-guarantees {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 28px;
        }

        .guarantee-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          color: var(--text-secondary);
        }

        .guar-icon {
          color: var(--green-bright);
          flex-shrink: 0;
        }

        .reserve-btn {
          width: 100%;
        }

        @media (max-width: 1024px) {
          .estimator-layout {
            grid-template-columns: 1fr;
          }
          .estimator-summary-column {
            position: static;
          }
        }

        @media (max-width: 600px) {
          .finish-pill-group {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
