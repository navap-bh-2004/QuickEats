import React from "react";
import scooterIcon from "./scooter.png"; // Import the scooter icon image
import "./ProgressBar.css"; // Import the ProgressBar component styles

const ProgressBar = ({ status }) => {
  const statusIndex = ["Food Processing", "Out for delivery", "Delivered"].indexOf(status);

  return (
    <div className="user-view">
      <div className="progress-container">
        <div className="progress-track">
          <div className="track-line"></div>
          <div className="track-fill" data-progress={statusIndex}></div>

          {/* Scooter Icon */}
          <img
            src={scooterIcon}
            alt="Delivery Guy on Scooter"
            className="scooter-icon"
            data-progress={statusIndex}
          />

          {/* Progress Steps */}
          <div className={`progress-step ${statusIndex >= 0 ? "active" : ""}`}>1</div>
          <div className={`progress-step ${statusIndex >= 1 ? "active" : ""}`}>2</div>
          <div className={`progress-step ${statusIndex >= 2 ? "completed" : ""}`}>3</div>
        </div>

        {/* Step Labels */}
        <div className="step-labels">
          <span className={`step-label ${statusIndex >= 0 ? "active" : ""}`}>Preparing</span>
          <span className={`step-label ${statusIndex >= 1 ? "active" : ""}`}>Out for Delivery</span>
          <span className={`step-label ${statusIndex >= 2 ? "completed" : ""}`}>Delivered</span>
        </div>
      </div>
       
    </div>
  );
};

export default ProgressBar;
