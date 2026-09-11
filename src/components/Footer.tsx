import React, { useState } from 'react';
import { MountainIcon, PineTreeIcon, CheckIcon } from './Icons';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      {/* Mountain & Pine Tree Graphic Divider */}
      <div className="mountain-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="mountain-svg-shape">
          <path
            d="M0,0 L150,85 L320,25 L480,95 L650,15 L820,90 L980,30 L1120,75 L1200,20 L1200,120 L0,120 Z"
            fill="#050a08"
          ></path>
          <path
            d="M0,40 L180,95 L340,55 L510,105 L690,45 L860,100 L1020,50 L1200,70 L1200,120 L0,120 Z"
            fill="#030605"
            opacity="0.7"
          ></path>
        </svg>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand-col">
              <div className="footer-logo">
                <div className="footer-emblem">
                  <MountainIcon size={22} className="mountain-icon" />
                  <PineTreeIcon size={16} className="pine-icon" />
                </div>
                <div>
                  <span className="brand-name">CASCADIA</span>
                  <span className="brand-sub">CUSTOM CYCLES · WA</span>
                </div>
              </div>

              <p className="footer-desc">
                Handcrafted bespoke titanium &amp; steel all-mountain machines. Tuned for the rain-soaked roots, granite slabs, and deep loam of the Pacific Northwest.
              </p>

              <div className="stewardship-box">
                <PineTreeIcon size={18} className="steward-tree" />
                <div className="steward-text">
                  <span className="steward-title">Trail Stewardship</span>
                  <span className="steward-sub">Proud partner of Evergreen Mountain Bike Alliance &amp; WMBC</span>
                </div>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="footer-links-col">
              <h4 className="footer-col-title">Bespoke Builds</h4>
              <ul className="footer-links-list">
                <li><a href="#bikes" onClick={(e) => { e.preventDefault(); scrollTo('#bikes'); }}>The Rainier Enduro Works</a></li>
                <li><a href="#bikes" onClick={(e) => { e.preventDefault(); scrollTo('#bikes'); }}>Olympic Divide Overland Gravel</a></li>
                <li><a href="#bikes" onClick={(e) => { e.preventDefault(); scrollTo('#bikes'); }}>Chuckanut Rowdy Hardtail</a></li>
                <li><a href="#bikes" onClick={(e) => { e.preventDefault(); scrollTo('#bikes'); }}>Galbraith Gravity DH</a></li>
                <li><a href="#configurator" onClick={(e) => { e.preventDefault(); scrollTo('#configurator'); }}>Interactive Build Estimator</a></li>
              </ul>
            </div>

            {/* Garage Services Column */}
            <div className="footer-links-col">
              <h4 className="footer-col-title">Garage Services</h4>
              <ul className="footer-links-list">
                <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('#services'); }}>Ground-Up Custom Fabrication</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('#services'); }}>Roehrig Shock Dyno Tuning</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('#services'); }}>Monsoon Marine Weatherproofing</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('#services'); }}>Custom Cerakote &amp; Anodizing</a></li>
                <li><a href="#workshop" onClick={(e) => { e.preventDefault(); scrollTo('#workshop'); }}>The Bellingham Proving Ground</a></li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="footer-newsletter-col">
              <h4 className="footer-col-title">Trail &amp; Batch Dispatch</h4>
              <p className="newsletter-text">
                Subscribe for rare titanium tubing drops, seasonal build slot openings, and invitations to our Bellingham garage open houses.
              </p>

              {subscribed ? (
                <div className="news-success">
                  <CheckIcon size={16} className="news-check" />
                  <span>You're on the Cascadia bench dispatch list!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="newsletter-form">
                  <input
                    type="email"
                    required
                    placeholder="rider@cascadiacycles.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="newsletter-input"
                  />
                  <button type="submit" className="btn btn-primary btn-sm">
                    Join
                  </button>
                </form>
              )}

              <div className="footer-coords-row">
                <span>Coordinates: 48.7519° N, 122.4787° W</span>
                <span>Bellingham, Washington</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom-bar">
            <div className="bottom-copy">
              &copy; {new Date().getFullYear()} Cascadia Custom Cycles LLC. Handcrafted in the Pacific Northwest.
            </div>
            <div className="bottom-trail-pledge">
              <span>Forged for wet loam, steep granite, and perpetual rain.</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer-wrapper {
          position: relative;
          background-color: #030605;
          color: var(--text-primary);
          overflow: hidden;
        }

        .mountain-divider {
          width: 100%;
          line-height: 0;
          position: relative;
        }

        .mountain-svg-shape {
          display: block;
          width: 100%;
          height: 60px;
        }

        .footer-main {
          padding: 60px 0 36px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.3fr;
          gap: 40px;
          margin-bottom: 56px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .footer-emblem {
          position: relative;
          width: 40px;
          height: 40px;
          background: rgba(18, 38, 29, 0.9);
          border: 1px solid var(--border-medium);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mountain-icon {
          color: var(--green-bright);
        }

        .pine-icon {
          position: absolute;
          bottom: 3px;
          right: 3px;
          color: var(--bronze);
        }

        .brand-name {
          font-family: var(--font-display);
          font-size: 19px;
          font-weight: 800;
          letter-spacing: 0.08em;
          display: block;
          line-height: 1.1;
        }

        .brand-sub {
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--green-bright);
          letter-spacing: 0.15em;
        }

        .footer-desc {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 22px;
          max-width: 340px;
        }

        .stewardship-box {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(14, 27, 21, 0.7);
          border: 1px solid rgba(56, 178, 108, 0.2);
          padding: 10px 14px;
          border-radius: 8px;
          max-width: 340px;
        }

        .steward-tree {
          color: var(--green-bright);
          flex-shrink: 0;
        }

        .steward-title {
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 700;
          color: var(--text-primary);
          display: block;
        }

        .steward-sub {
          font-size: 11px;
          color: var(--text-muted);
          display: block;
          line-height: 1.3;
        }

        .footer-col-title {
          font-family: var(--font-display);
          font-size: 15px;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: 0.04em;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links-list a {
          font-size: 13.5px;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-links-list a:hover {
          color: var(--green-bright);
        }

        .newsletter-text {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .newsletter-form {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
        }

        .newsletter-input {
          background: rgba(14, 27, 21, 0.85);
          border: 1px solid rgba(56, 178, 108, 0.25);
          border-radius: 8px;
          padding: 10px 12px;
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--text-primary);
          outline: none;
          flex: 1;
        }

        .newsletter-input:focus {
          border-color: var(--green-bright);
        }

        .news-success {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(74, 222, 128, 0.12);
          border: 1px solid rgba(74, 222, 128, 0.3);
          color: var(--green-bright);
          font-size: 12px;
          padding: 10px 12px;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .news-check {
          color: var(--green-bright);
        }

        .footer-coords-row {
          display: flex;
          flex-direction: column;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted);
          gap: 4px;
        }

        .footer-bottom-bar {
          border-top: 1px solid rgba(56, 178, 108, 0.12);
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12.5px;
          color: var(--text-muted);
        }

        .bottom-trail-pledge {
          font-family: var(--font-mono);
          color: var(--green-bright);
          font-size: 11.5px;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom-bar {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};
