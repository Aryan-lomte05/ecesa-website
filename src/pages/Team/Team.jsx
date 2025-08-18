import React from "react";
import "./Team.css";

const Team = () => {
  return (
    <div className="team-container">
      <h1 className="team-title">Our Team</h1>

      <div className="team-grid">
        {/* LEFT COLUMN */}
        <div className="team-column">
          {/* Leadership */}
          <div className="section-title left">LEADERSHIP - LEFT</div>
          <div className="team-card">
            <img src="/images/alex.jpg" alt="Alex Chen" />
            <div>
              <h3>Alex Chen</h3>
              <p>General Secretary</p>
            </div>
          </div>
          <div className="team-card">
            <img src="/images/sarah.jpg" alt="Sarah Johnson" />
            <div>
              <h3>Sarah Johnson</h3>
              <p>Joint General Secretary</p>
            </div>
          </div>

          {/* Operations */}
          <div className="section-title left">OPERATIONS</div>
          <div className="team-card">
            <img src="/images/david.jpg" alt="David Kim" />
            <div>
              <h3>David Kim</h3>
              <p>Operations Head</p>
            </div>
          </div>
          <div className="team-card">
            <img src="/images/lisa.jpg" alt="Lisa Wang" />
            <div>
              <h3>Lisa Wang</h3>
              <p>Joint Operations Head</p>
            </div>
          </div>

          {/* Literary */}
          <div className="section-title left">LITERARY</div>
          <div className="team-card">
            <img src="/images/gabriel.jpg" alt="Gabriel Wright" />
            <div>
              <h3>Gabriel Wright</h3>
              <p>Literary Head</p>
            </div>
          </div>
          <div className="team-card">
            <img src="/images/nora.jpg" alt="Nora Phillips" />
            <div>
              <h3>Nora Phillips</h3>
              <p>Literary Head</p>
            </div>
          </div>

          {/* Tech */}
          <div className="section-title left">TECH</div>
          <div className="team-row">
            <div className="team-card">
              <img src="/images/ryan.jpg" alt="Ryan Patel" />
              <div>
                <h3>Ryan Patel</h3>
                <p>Tech Head</p>
              </div>
            </div>
            <div className="team-card">
              <img src="/images/jessica.jpg" alt="Jessica Liu" />
              <div>
                <h3>Jessica Liu</h3>
                <p>Tech Head</p>
              </div>
            </div>
          </div>
          <div className="team-row">
            <div className="team-card">
              <img src="/images/marcus.jpg" alt="Marcus Johnson" />
              <div>
                <h3>Marcus Johnson</h3>
                <p>Joint Tech Head</p>
              </div>
            </div>
            <div className="team-card">
              <img src="/images/sofia.jpg" alt="Sofia Chen" />
              <div>
                <h3>Sofia Chen</h3>
                <p>Joint Tech Head</p>
              </div>
            </div>
          </div>
          <div className="team-row">
            <div className="team-card">
              <img src="/images/james.jpg" alt="James Wilson" />
              <div>
                <h3>James Wilson</h3>
                <p>Joint Tech Head</p>
              </div>
            </div>
            <div className="team-card">
              <img src="/images/maya.jpg" alt="Maya Singh" />
              <div>
                <h3>Maya Singh</h3>
                <p>Joint Tech Head</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="team-column">
          {/* Leadership */}
          <div className="section-title right">LEADERSHIP - RIGHT</div>
          <div className="team-card">
            <img src="/images/michael.jpg" alt="Michael Rodriguez" />
            <div>
              <h3>Michael Rodriguez</h3>
              <p>Joint General Secretary</p>
            </div>
          </div>
          <div className="team-card">
            <img src="/images/emma.jpg" alt="Emma Thompson" />
            <div>
              <h3>Emma Thompson</h3>
              <p>Treasurer</p>
            </div>
          </div>

          {/* PR */}
          <div className="section-title right">PR</div>
          <div className="team-card">
            <img src="/images/amanda.jpg" alt="Amanda Foster" />
            <div>
              <h3>Amanda Foster</h3>
              <p>PR Head</p>
            </div>
          </div>
          <div className="team-card">
            <img src="/images/nathan.jpg" alt="Nathan Parker" />
            <div>
              <h3>Nathan Parker</h3>
              <p>Joint PR Head</p>
            </div>
          </div>
          <div className="team-card">
            <img src="/images/olivia.jpg" alt="Olivia Adams" />
            <div>
              <h3>Olivia Adams</h3>
              <p>Joint PR Head</p>
            </div>
          </div>

          {/* Marketing */}
          <div className="section-title right">MARKETING</div>
          <div className="team-row">
            <div className="team-card">
              <img src="/images/kevin.jpg" alt="Kevin Turner" />
              <div>
                <h3>Kevin Turner</h3>
                <p>Marketing Head</p>
              </div>
            </div>
            <div className="team-card">
              <img src="/images/rachel.jpg" alt="Rachel Green" />
              <div>
                <h3>Rachel Green</h3>
                <p>Marketing Head</p>
              </div>
            </div>
          </div>
          <div className="team-row">
            <div className="team-card">
              <img src="/images/tyler.jpg" alt="Tyler Brooks" />
              <div>
                <h3>Tyler Brooks</h3>
                <p>Joint Marketing Head</p>
              </div>
            </div>
            <div className="team-card">
              <img src="/images/zoe.jpg" alt="Zoe Carter" />
              <div>
                <h3>Zoe Carter</h3>
                <p>Joint Marketing Head</p>
              </div>
            </div>
          </div>

          {/* Creative */}
          <div className="section-title right">CREATIVE</div>
          <div className="team-row">
            <div className="team-card">
              <img src="/images/isabella.jpg" alt="Isabella Moore" />
              <div>
                <h3>Isabella Moore</h3>
                <p>Creative Head</p>
              </div>
            </div>
            <div className="team-card">
              <img src="/images/lucas.jpg" alt="Lucas Davis" />
              <div>
                <h3>Lucas Davis</h3>
                <p>Creative Head</p>
              </div>
            </div>
          </div>
          <div className="team-row">
            <div className="team-card">
              <img src="/images/chloe.jpg" alt="Chloe Martin" />
              <div>
                <h3>Chloe Martin</h3>
                <p>Joint Creative Head</p>
              </div>
            </div>
            <div className="team-card">
              <img src="/images/ethan.jpg" alt="Ethan Cooper" />
              <div>
                <h3>Ethan Cooper</h3>
                <p>Joint Creative Head</p>
              </div>
            </div>
          </div>
          <div className="team-card">
            <img src="/images/sophia.jpg" alt="Sophia Adams" />
            <div>
              <h3>Sophia Adams</h3>
              <p>Joint Creative Head</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
