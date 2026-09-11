import React from 'react';
import { GARAGE_SERVICES } from '../data/mockData';
import { WrenchIcon, GaugeIcon, DropletIcon, PaletteIcon, CheckIcon, ClockIcon } from './Icons';

interface GarageServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const GarageServices: React.FC<GarageServicesProps> = ({ onSelectService }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'frame':
        return <WrenchIcon size={24} className="service-icon-svg" />;
      case 'suspension':
        return <GaugeIcon size={24} className="service-icon-svg" />;
      case 'shield':
        return <DropletIcon size={24} className="service-icon-svg" />;
      case 'palette':
        return <PaletteIcon size={24} className="service-icon-svg" />;
      default:
        return <WrenchIcon size={24} className="service-icon-svg" />;
    }
  };

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <WrenchIcon size={16} />
            <span>PRECISION WORKSHOP CAPABILITIES</span>
          </div>
          <h2 className="section-title">ENGINEERED FOR UNFORGIVING TERRAIN</h2>
          <p className="section-subtitle">
            Pacific Northwest trails will destroy ordinary components in weeks. Our bench is equipped with an in-house Roehrig shock dyno, titanium TIG fabrication fixtures, and specialized marine-grade weatherproofing.
          </p>
        </div>

        <div className="services-grid">
          {GARAGE_SERVICES.map((srv) => (
            <div key={srv.id} className="service-card glass-card">
              <div className="service-card-top">
                <div className="service-icon-box">
                  {getServiceIcon(srv.iconName)}
                </div>
                <div className="service-turnaround">
                  <ClockIcon size={14} className="clock-svg" />
                  <span>{srv.turnaround}</span>
                </div>
              </div>

              <h3 className="service-title">{srv.title}</h3>
              <p className="service-tagline">{srv.tagline}</p>
              <p className="service-description">{srv.description}</p>

              <div className="service-deliverables">
                <span className="deliverables-heading">What's Included:</span>
                <ul className="deliverables-list">
                  {srv.deliverables.map((item, idx) => (
                    <li key={idx} className="deliverable-item">
                      <CheckIcon size={15} className="item-check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                className="btn btn-outline btn-sm service-btn"
                onClick={() => onSelectService(srv.title)}
              >
                Book {srv.title}
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-section {
          background-color: var(--bg-primary);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
        }

        .service-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(56, 178, 108, 0.2);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-card:hover {
          border-color: rgba(74, 222, 128, 0.5);
          transform: translateY(-4px);
        }

        .service-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .service-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: rgba(18, 38, 29, 0.9);
          border: 1px solid rgba(74, 222, 128, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
        }

        .service-icon-svg {
          color: var(--green-bright);
        }

        .service-turnaround {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(212, 151, 85, 0.15);
          border: 1px solid rgba(212, 151, 85, 0.35);
          padding: 4px 10px;
          border-radius: 9999px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--bronze-light);
          font-weight: 600;
        }

        .clock-svg {
          color: var(--bronze);
        }

        .service-title {
          font-size: 22px;
          margin-bottom: 6px;
        }

        .service-tagline {
          font-size: 13.5px;
          color: var(--green-bright);
          margin-bottom: 14px;
          font-weight: 500;
        }

        .service-description {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 22px;
        }

        .service-deliverables {
          margin-top: auto;
          margin-bottom: 24px;
          background: rgba(8, 17, 13, 0.6);
          padding: 16px;
          border-radius: 8px;
          border: 1px solid rgba(56, 178, 108, 0.12);
        }

        .deliverables-heading {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          display: block;
          margin-bottom: 10px;
          text-transform: uppercase;
        }

        .deliverables-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .deliverable-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12.5px;
          color: var(--text-primary);
        }

        .item-check {
          color: var(--green-bright);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .service-btn {
          width: 100%;
        }
      `}</style>
    </section>
  );
};
