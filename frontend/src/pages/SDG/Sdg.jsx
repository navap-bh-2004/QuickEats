import React from "react";
import "./Sdg.css";

const SDGPage = () => {
  return (
    <div className="sdg-container">
      <header className="sdg-header">
        <h1>Our Commitment to Sustainable Development Goals</h1>
        <p>
          At QuickEats, we strive to align with the United Nations’ Sustainable
          Development Goals (SDGs) to create a positive impact on society and
          the environment.
        </p>
      </header>

      <div className="sdg-grid">
        {/* Goal 1 */}
        <div className="sdg-card">
          <img
            src="src\pages\SDG\hung.png"
            alt="Zero Hunger"
            className="sdg-icon"
          />
          <h2>Zero Hunger</h2>
          <p>
            We work to eliminate food waste by donating surplus food to
            charities and ensuring every meal counts.
          </p>
        </div>

        {/* Goal 2 */}
        <div className="sdg-card">
          <img
            src="src\pages\SDG\resc.png"
            alt="Responsible Consumption"
            className="sdg-icon"
          />
          <h2>Responsible Consumption</h2>
          <p>
            Promoting eco-friendly packaging and encouraging customers to opt
            for sustainable choices.
          </p>
        </div>

        {/* Goal 3 */}
        <div className="sdg-card">
          <img
            src="src\pages\SDG\dw.png"
            alt="Decent Work and Economic Growth"
            className="sdg-icon"
          />
          <h2>Decent Work</h2>
          <p>
            Empowering local farmers and vendors by sourcing fresh produce and
            providing fair compensation.
          </p>
        </div>

        {/* Goal 4 */}
        <div className="sdg-card">
          <img
            src="src\pages\SDG\cli.png"
            alt="Climate Action"
            className="sdg-icon"
          />
          <h2>Climate Action</h2>
          <p>
            Reducing our carbon footprint through optimized delivery routes and
            electric vehicles.
          </p>
        </div>
      </div>

      <footer className="sdg-footer">
        <p>Join us in making the world a better place, one meal at a time!</p>
      </footer>
    </div>
  );
};

export default SDGPage;
