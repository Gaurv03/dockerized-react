import React, { useState } from 'react';
import { WORKSHOP_DETAILS } from '../data/mockData';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, PineTreeIcon, CheckIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discipline: 'Enduro',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', discipline: 'Enduro', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <MapPinIcon size={16} />
            <span>BELLINGHAM, WASHINGTON · WORKSHOP HQ</span>
          </div>
          <h2 className="section-title">VISIT THE GARAGE OR INITIATE YOUR BUILD</h2>
          <p className="section-subtitle">
            Located directly at the foothills of Galbraith Mountain. Drop into our cedar showroom for cold brew, inspect raw titanium weld beads, or schedule a 1-on-1 CAD geometry session.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Workshop Details & Trail Conditions */}
          <div className="contact-info-col">
            <div className="info-card glass-card">
              <h3 className="info-card-title">Workshop Headquarters</h3>

              <div className="info-item-list">
                <div className="info-item">
                  <div className="info-icon-box">
                    <MapPinIcon size={18} />
                  </div>
                  <div>
                    <span className="info-label">Shop Address</span>
                    <p className="info-text">{WORKSHOP_DETAILS.address}</p>
                    <p className="info-text">{WORKSHOP_DETAILS.cityStateZip}</p>
                    <span className="coords-sub">GPS: {WORKSHOP_DETAILS.coordinates}</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-box">
                    <PhoneIcon size={18} />
                  </div>
                  <div>
                    <span className="info-label">Direct Bench Phone</span>
                    <p className="info-text">{WORKSHOP_DETAILS.phone}</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-box">
                    <MailIcon size={18} />
                  </div>
                  <div>
                    <span className="info-label">Garage Email</span>
                    <p className="info-text">{WORKSHOP_DETAILS.email}</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-box">
                    <ClockIcon size={18} />
                  </div>
                  <div>
                    <span className="info-label">Bench Hours</span>
                    <p className="info-text">{WORKSHOP_DETAILS.hours}</p>
                    <span className="hours-sub">Closed Sunday &amp; Monday (Riding Galbraith)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Trail Report Live Card */}
            <div className="trail-status-card glass-card">
              <div className="status-title-row">
                <PineTreeIcon size={18} className="tree-svg" />
                <h4>Local Trail Conditions</h4>
              </div>
              <div className="trail-status-list">
                <div className="trail-status-row">
                  <span className="t-name">Galbraith Mountain (South Side)</span>
                  <span className="t-badge open">🟢 Prime Loam</span>
                </div>
                <div className="trail-status-row">
                  <span className="t-name">Chuckanut Ridge / Lost Lake</span>
                  <span className="t-badge open">🟢 Wet Roots / Caution</span>
                </div>
                <div className="trail-status-row">
                  <span className="t-name">Tiger Mountain (East Tiger)</span>
                  <span className="t-badge open">🟢 100% Rideable</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Dispatch Form */}
          <div className="contact-form-col">
            <div className="form-card glass-card">
              <h3 className="form-title">Send a Dispatch to the Bench</h3>
              <p className="form-sub">
                Ask about current tube sets in stock, shock dyno scheduling, or discuss your dream custom geometry.
              </p>

              {submitted ? (
                <div className="success-message">
                  <div className="success-icon-circle">
                    <CheckIcon size={24} />
                  </div>
                  <h4>Dispatch Received at the Bench!</h4>
                  <p>
                    Silas or one of our mechanics will review your specs and email you within 24 hours. Coffee is on us when you visit!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="dispatch-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="dispatch-name">Your Full Name</label>
                      <input
                        id="dispatch-name"
                        type="text"
                        required
                        placeholder="e.g. Liam Sterling"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="dispatch-email">Email Address</label>
                      <input
                        id="dispatch-email"
                        type="email"
                        required
                        placeholder="liam@cascadiatrails.org"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="dispatch-discipline">Build Interest or Service</label>
                    <select
                      id="dispatch-discipline"
                      value={formData.discipline}
                      onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                      className="form-input"
                    >
                      <option value="Enduro">The Rainier High-Pivot Enduro (170mm)</option>
                      <option value="Gravel">The Olympic Divide Overland Gravel</option>
                      <option value="Hardtail">The Chuckanut Rowdy Titanium Hardtail</option>
                      <option value="Suspension">Suspension Dyno & Custom Revalve</option>
                      <option value="Weatherproofing">Monsoon Weatherproofing Overhaul</option>
                      <option value="General">General Garage Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="dispatch-message">Tell Us About Your Riding &amp; Build Goals</label>
                    <textarea
                      id="dispatch-message"
                      rows={4}
                      required
                      placeholder="e.g. Looking for a custom titanium frame with 64° head angle to handle Galbraith steep wet roots..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg submit-btn">
                    Transmit Dispatch to Bench →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--bg-primary);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
        }

        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .info-card {
          padding: 32px;
          border: 1px solid rgba(56, 178, 108, 0.22);
        }

        .info-card-title {
          font-size: 22px;
          margin-bottom: 24px;
        }

        .info-item-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .info-item {
          display: flex;
          gap: 16px;
        }

        .info-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(18, 38, 29, 0.8);
          border: 1px solid rgba(74, 222, 128, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--green-bright);
        }

        .info-label {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--green-bright);
          text-transform: uppercase;
          display: block;
          margin-bottom: 2px;
        }

        .info-text {
          font-size: 14.5px;
          color: var(--text-primary);
          line-height: 1.4;
        }

        .coords-sub, .hours-sub {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted);
          display: block;
          margin-top: 4px;
        }

        .trail-status-card {
          padding: 24px;
          border: 1px solid rgba(56, 178, 108, 0.22);
          background: rgba(14, 27, 21, 0.75);
        }

        .status-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }

        .status-title-row h4 {
          font-size: 16px;
        }

        .tree-svg {
          color: var(--green-bright);
        }

        .trail-status-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .trail-status-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12.5px;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(56, 178, 108, 0.1);
        }

        .trail-status-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .t-name {
          color: var(--text-secondary);
        }

        .t-badge {
          font-family: var(--font-mono);
          font-size: 10.5px;
          padding: 2px 8px;
          border-radius: 4px;
        }

        .t-badge.open {
          background: rgba(74, 222, 128, 0.15);
          color: var(--green-bright);
          border: 1px solid rgba(74, 222, 128, 0.3);
        }

        /* Form Card */
        .form-card {
          padding: 36px;
          border: 1px solid rgba(56, 178, 108, 0.25);
          background: rgba(12, 24, 19, 0.85);
        }

        .form-title {
          font-size: 26px;
          margin-bottom: 8px;
        }

        .form-sub {
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 28px;
        }

        .dispatch-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-family: var(--font-mono);
          font-size: 11.5px;
          color: var(--text-secondary);
          text-transform: uppercase;
        }

        .form-input {
          background: rgba(8, 17, 13, 0.8);
          border: 1px solid rgba(56, 178, 108, 0.25);
          border-radius: 8px;
          padding: 12px 14px;
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 14px;
          transition: border-color 0.2s ease;
          outline: none;
        }

        .form-input:focus {
          border-color: var(--green-bright);
          box-shadow: 0 0 15px rgba(74, 222, 128, 0.2);
        }

        .submit-btn {
          width: 100%;
          margin-top: 8px;
        }

        .success-message {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 40px 20px;
        }

        .success-icon-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(74, 222, 128, 0.2);
          border: 2px solid var(--green-bright);
          color: var(--green-bright);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .success-message h4 {
          font-size: 22px;
          margin-bottom: 10px;
          color: var(--text-primary);
        }

        .success-message p {
          font-size: 14.5px;
          color: var(--text-secondary);
          max-width: 400px;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
