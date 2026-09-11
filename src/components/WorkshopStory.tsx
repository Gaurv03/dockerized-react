import React from 'react';
import workshopCraftImg from '../assets/workshop-craft.jpg';
import { PineTreeIcon, ShieldCheckIcon, MountainIcon } from './Icons';

interface WorkshopStoryProps {
  onOpenBooking: () => void;
}

export const WorkshopStory: React.FC<WorkshopStoryProps> = ({ onOpenBooking }) => {
  return (
    <section id="workshop" className="section workshop-section">
      <div className="container">
        <div className="story-grid">
          {/* Left: Workshop Image & Floating Badge */}
          <div className="story-image-column">
            <div className="story-image-wrap glass-card">
              <img
                src={workshopCraftImg}
                alt="Bellingham custom bike workshop with mechanic and tools"
                className="story-img"
              />
              <div className="image-overlay-vignette"></div>

              {/* Location Badge */}
              <div className="story-float-badge">
                <PineTreeIcon size={18} className="badge-pine" />
                <div className="badge-content">
                  <span className="badge-title">Cascadia HQ Bench</span>
                  <span className="badge-sub">Bellingham, WA · Elev. 420 ft</span>
                </div>
              </div>
            </div>

            <div className="story-quote-card glass-card">
              <p className="quote-text">
                "In the Pacific Northwest, your equipment is either sealed like a submarine, or the damp loam will dissolve it into metallic paste. We build machines that thrive in the rain."
              </p>
              <div className="quote-author">
                <span className="author-name">— Silas Vance</span>
                <span className="author-title">Founder &amp; Master Frame Builder</span>
              </div>
            </div>
          </div>

          {/* Right: Story & Philosophy */}
          <div className="story-content-column">
            <div className="section-tag">
              <MountainIcon size={16} />
              <span>THE CRAFTSMANSHIP CREED</span>
            </div>
            <h2 className="story-heading">
              BORN IN THE MIST. BUILT FOR THE LOAM.
            </h2>
            <p className="story-intro">
              Bellingham isn't just where we work; it's our proving ground. Galbraith Mountain is three minutes from our garage door. The Chuckanut sandstone drops and wet root webs are where every geometry prototype earns its stripes.
            </p>

            <div className="pillars-list">
              <div className="pillar-item">
                <div className="pillar-number">01</div>
                <div className="pillar-text">
                  <h4 className="pillar-title">Submarine-Grade Weather Sealing</h4>
                  <p className="pillar-desc">
                    We pack all suspension pivot hardware with proprietary low-viscosity marine grease and dual-lip fluorocarbon seals. Ride through 100 rainy days without a squeak or seized bearing.
                  </p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-number">02</div>
                <div className="pillar-text">
                  <h4 className="pillar-title">3D Biomechanical Geometry</h4>
                  <p className="pillar-desc">
                    Your inseam, torso length, and shoulder reach dictate tube angles down to the millimeter. Progressive steep 78° seat angles ensure efficient climbing up steep logging roads, while 63.5° head angles give you ultimate stability down Whistler rock drops.
                  </p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-number">03</div>
                <div className="pillar-text">
                  <h4 className="pillar-title">Trail Stewardship &amp; Preservation</h4>
                  <p className="pillar-desc">
                    We believe in giving back to the soil we shred. 2% of revenue from every custom frame build is donated directly to the Evergreen Mountain Bike Alliance and WMBC for local trail maintenance.
                  </p>
                </div>
              </div>
            </div>

            <div className="story-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onOpenBooking}
              >
                Book a Workshop Visit &amp; Fit Session
              </button>
              <div className="story-cert">
                <ShieldCheckIcon size={18} className="cert-icon" />
                <span>Certified Grade 9 Ti &amp; Columbus Steel Fabricator</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .workshop-section {
          background: linear-gradient(180deg, var(--bg-primary) 0%, #0b1712 50%, var(--bg-primary) 100%);
          border-top: 1px solid rgba(56, 178, 108, 0.15);
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 56px;
          align-items: center;
        }

        .story-image-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .story-image-wrap {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(56, 178, 108, 0.25);
          height: 420px;
        }

        .story-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .image-overlay-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(8, 15, 12, 0.8) 100%
          );
        }

        .story-float-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(10, 20, 16, 0.9);
          border: 1px solid rgba(74, 222, 128, 0.35);
          padding: 10px 16px;
          border-radius: 10px;
          backdrop-filter: blur(10px);
        }

        .badge-pine {
          color: var(--green-bright);
        }

        .badge-content {
          display: flex;
          flex-direction: column;
        }

        .badge-title {
          font-family: var(--font-display);
          font-size: 13.5px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .badge-sub {
          font-family: var(--font-mono);
          font-size: 10.5px;
          color: var(--green-bright);
        }

        .story-quote-card {
          padding: 22px;
          background: rgba(14, 27, 21, 0.75);
          border-left: 3px solid var(--bronze);
        }

        .quote-text {
          font-family: var(--font-body);
          font-style: italic;
          font-size: 14.5px;
          color: var(--text-primary);
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .quote-author {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          color: var(--bronze-light);
        }

        .author-title {
          font-size: 11px;
          color: var(--text-muted);
        }

        /* Story Content */
        .story-heading {
          font-size: 40px;
          letter-spacing: -0.02em;
          margin-bottom: 18px;
          line-height: 1.15;
        }

        .story-intro {
          font-size: 17px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .pillars-list {
          display: flex;
          flex-direction: column;
          gap: 22px;
          margin-bottom: 36px;
        }

        .pillar-item {
          display: flex;
          align-items: flex-start;
          gap: 18px;
        }

        .pillar-number {
          font-family: var(--font-mono);
          font-size: 14px;
          font-weight: 700;
          color: var(--green-bright);
          background: rgba(74, 222, 128, 0.12);
          border: 1px solid rgba(74, 222, 128, 0.3);
          width: 38px;
          height: 38px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pillar-title {
          font-size: 18px;
          margin-bottom: 4px;
          color: var(--text-primary);
        }

        .pillar-desc {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .story-actions {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .story-cert {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          color: var(--text-muted);
        }

        .cert-icon {
          color: var(--green-bright);
        }

        @media (max-width: 1024px) {
          .story-grid {
            grid-template-columns: 1fr;
          }
          .story-heading {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
};
