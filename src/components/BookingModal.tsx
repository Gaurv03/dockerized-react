import React, { useState } from 'react';
import type { BookingFormData } from '../types';
import { CloseIcon, CheckIcon, MountainIcon, ShieldCheckIcon } from './Icons';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBuildOrService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialBuildOrService = '',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    consultationType: 'in-person',
    desiredBuild: initialBuildOrService || 'The Rainier Enduro Works',
    timeline: 'Within 30–60 Days',
    notes: initialBuildOrService ? `Inquiring regarding: ${initialBuildOrService}` : '',
  });

  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  const handleReset = () => {
    setConfirmed(false);
    onClose();
  };

  return (
    <div className="booking-modal-overlay" onClick={handleReset}>
      <div className="booking-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
        <div className="booking-modal-header">
          <div className="header-info">
            <div className="section-tag">
              <MountainIcon size={14} />
              <span>GARAGE BENCH CONSULTATION</span>
            </div>
            <h3 className="modal-title">RESERVE A WORKSHOP SLOT</h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={handleReset}
            aria-label="Close booking modal"
          >
            <CloseIcon size={22} />
          </button>
        </div>

        {confirmed ? (
          <div className="booking-confirmed-body">
            <div className="confirm-icon-box">
              <CheckIcon size={32} />
            </div>
            <h4 className="confirm-title">Bench Consultation Reserved!</h4>
            <p className="confirm-sub">
              Thank you, <strong>{formData.name}</strong>. We have logged your request for <strong>{formData.desiredBuild}</strong>.
            </p>
            <div className="confirm-summary-box">
              <div className="cs-row">
                <span className="cs-lbl">Session Format:</span>
                <span className="cs-val">
                  {formData.consultationType === 'in-person' ? 'Bellingham Workshop In-Person Fit' : 'Remote 3D CAD Screen Share'}
                </span>
              </div>
              <div className="cs-row">
                <span className="cs-lbl">Direct Contact:</span>
                <span className="cs-val">{formData.email} · {formData.phone || 'Phone pending'}</span>
              </div>
              <div className="cs-row">
                <span className="cs-lbl">Target Timeline:</span>
                <span className="cs-val">{formData.timeline}</span>
              </div>
            </div>
            <p className="confirm-note">
              Our master builder Silas Vance will contact you within 24 business hours to lock in your calendar appointment.
            </p>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={handleReset}
            >
              Back to Cascadia Custom Cycles
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="booking-form">
            <div className="modal-form-scroll">
              <p className="form-lead-note">
                Whether you're visiting our Bellingham shop or configuring a machine from anywhere in North America, we tailor geometry to your exact biomechanics.
              </p>

              {/* Consultation Format Tabs */}
              <div className="format-selection">
                <label className="field-label">Consultation Format</label>
                <div className="format-grid">
                  {[
                    { id: 'in-person', title: 'Bellingham Workshop Fit', desc: '1-on-1 laser fit jig in our Bellingham shop' },
                    { id: 'remote-cad', title: 'Remote 3D CAD Fit', desc: 'Screen share geometry modeling & tube selection' },
                    { id: 'suspension-tune', title: 'Suspension Dyno Drop-Off', desc: 'In-person drop off for shock revalve' },
                  ].map((fmt) => (
                    <button
                      key={fmt.id}
                      type="button"
                      className={`format-button ${formData.consultationType === fmt.id ? 'active' : ''}`}
                      onClick={() => setFormData({ ...formData, consultationType: fmt.id as any })}
                    >
                      <span className="fmt-title">{fmt.title}</span>
                      <span className="fmt-desc">{fmt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Rider Details */}
              <div className="form-fields-grid">
                <div className="field-group">
                  <label className="field-label" htmlFor="bm-name">Rider Full Name *</label>
                  <input
                    id="bm-name"
                    type="text"
                    required
                    placeholder="e.g. Kai Sterling"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="modal-input"
                  />
                </div>

                <div className="field-group">
                  <label className="field-label" htmlFor="bm-email">Email Address *</label>
                  <input
                    id="bm-email"
                    type="email"
                    required
                    placeholder="kai@loamranger.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="modal-input"
                  />
                </div>

                <div className="field-group">
                  <label className="field-label" htmlFor="bm-phone">Phone Number</label>
                  <input
                    id="bm-phone"
                    type="tel"
                    placeholder="(360) 555-0192"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="modal-input"
                  />
                </div>

                <div className="field-group">
                  <label className="field-label" htmlFor="bm-timeline">Target Build Completion</label>
                  <select
                    id="bm-timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="modal-input"
                  >
                    <option value="Ready Now (Next Slot)">Ready Now (Next Available Bench Slot)</option>
                    <option value="Within 30–60 Days">Within 30–60 Days (Spring Season)</option>
                    <option value="Summer Season">Summer Season</option>
                    <option value="Exploring Custom Ideas">Just Exploring Custom Ideas</option>
                  </select>
                </div>
              </div>

              <div className="field-group">
                <label className="field-label" htmlFor="bm-build">Target Bike Rig or Service Configuration</label>
                <input
                  id="bm-build"
                  type="text"
                  required
                  placeholder="e.g. Rainier Enduro Titanium or Custom Configurator Spec"
                  value={formData.desiredBuild}
                  onChange={(e) => setFormData({ ...formData, desiredBuild: e.target.value })}
                  className="modal-input"
                />
              </div>

              <div className="field-group">
                <label className="field-label" htmlFor="bm-notes">Rider Biometrics, Home Trails &amp; Custom Requests</label>
                <textarea
                  id="bm-notes"
                  rows={3}
                  placeholder="Your height, inseam, favorite local trails (e.g. Galbraith, Tiger Mtn, Squamish), specific groupset or fork preferences..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="modal-input"
                ></textarea>
              </div>

              <div className="booking-assurances">
                <div className="assurance-item">
                  <ShieldCheckIcon size={16} className="assur-icon" />
                  <span>No deposit required until full CAD geometry blueprint sign-off</span>
                </div>
                <div className="assurance-item">
                  <CheckIcon size={16} className="assur-icon" />
                  <span>Includes lifetime frame metallurgy warranty</span>
                </div>
              </div>
            </div>

            <div className="booking-modal-footer">
              <button
                type="button"
                className="btn btn-outline"
                onClick={handleReset}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
              >
                Submit Consultation Request →
              </button>
            </div>
          </form>
        )}
      </div>

      <style>{`
        .booking-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.82);
          backdrop-filter: blur(10px);
          z-index: 3000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .booking-modal-card {
          width: 100%;
          max-width: 680px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          background: rgba(11, 22, 17, 0.98);
          border: 1px solid var(--border-medium);
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.85);
          overflow: hidden;
        }

        .booking-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 24px 28px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .modal-title {
          font-size: 24px;
          margin-top: 6px;
        }

        .modal-close-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 4px;
        }

        .modal-close-btn:hover {
          color: #ffffff;
        }

        .booking-form {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .modal-form-scroll {
          padding: 24px 28px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-lead-note {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .field-label {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--green-bright);
          text-transform: uppercase;
          margin-bottom: 8px;
          display: block;
        }

        .format-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }

        .format-button {
          background: rgba(14, 28, 22, 0.7);
          border: 1px solid rgba(56, 178, 108, 0.2);
          border-radius: 8px;
          padding: 10px 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          text-align: left;
          cursor: pointer;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .format-button:hover {
          border-color: rgba(74, 222, 128, 0.4);
        }

        .format-button.active {
          border-color: var(--green-bright);
          background: rgba(26, 52, 40, 0.9);
          color: var(--text-primary);
        }

        .fmt-title {
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .fmt-desc {
          font-size: 11px;
          color: var(--text-muted);
          line-height: 1.3;
        }

        .form-fields-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .field-group {
          display: flex;
          flex-direction: column;
        }

        .modal-input {
          background: rgba(8, 17, 13, 0.85);
          border: 1px solid rgba(56, 178, 108, 0.25);
          border-radius: 8px;
          padding: 11px 14px;
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 14px;
          outline: none;
        }

        .modal-input:focus {
          border-color: var(--green-bright);
          box-shadow: 0 0 14px rgba(74, 222, 128, 0.2);
        }

        .booking-assurances {
          display: flex;
          flex-direction: column;
          gap: 6px;
          background: rgba(14, 28, 22, 0.6);
          padding: 12px 16px;
          border-radius: 8px;
          border: 1px solid rgba(56, 178, 108, 0.15);
        }

        .assurance-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: var(--text-secondary);
        }

        .assur-icon {
          color: var(--green-bright);
          flex-shrink: 0;
        }

        .booking-modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          padding: 18px 28px;
          border-top: 1px solid var(--border-subtle);
          background: rgba(9, 18, 14, 0.8);
        }

        /* Confirmed State */
        .booking-confirmed-body {
          padding: 48px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .confirm-icon-box {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: rgba(74, 222, 128, 0.18);
          border: 2px solid var(--green-bright);
          color: var(--green-bright);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .confirm-title {
          font-size: 26px;
          margin-bottom: 10px;
        }

        .confirm-sub {
          font-size: 15px;
          color: var(--text-secondary);
          margin-bottom: 24px;
          max-width: 480px;
        }

        .confirm-summary-box {
          background: rgba(8, 16, 12, 0.8);
          border: 1px solid rgba(56, 178, 108, 0.2);
          border-radius: 10px;
          padding: 16px 20px;
          width: 100%;
          max-width: 480px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
          text-align: left;
        }

        .cs-row {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
        }

        .cs-lbl {
          font-family: var(--font-mono);
          color: var(--text-secondary);
        }

        .cs-val {
          color: var(--bronze-light);
          font-weight: 600;
        }

        .confirm-note {
          font-size: 13.5px;
          color: var(--text-muted);
          margin-bottom: 28px;
          max-width: 440px;
        }

        @media (max-width: 700px) {
          .format-grid {
            grid-template-columns: 1fr;
          }
          .form-fields-grid {
            grid-template-columns: 1fr;
          }
          .booking-modal-footer {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};
