import React from "react";
import "./PortfolioLinks.css";

const PortfolioLinks = () => {
  // Define developers array inside the component
  const developers = [
    {
      name: "Dhanush Goudra",
      link: "https://sites.google.com/view/dhanushgoudra/home",
      usn: "01FE22BCS191",
      rollNumber: "302",
    },
    {
      name: "Ayaan Dhamnekar",
      link: "https://sites.google.com/view/ayaan-web-tech-portfolio/home",
      usn: "01FE22BCS150",
      rollNumber: "325",
    },
    {
      name: "Anirudh Dambal",
      link: "https://sites.google.com/view/anirudh-webtech-portfolio/home",
      usn: "01FE22BCS171",
      rollNumber: "328",
    },
    {
      name: "Harish Patil",
      link: "https://sites.google.com/kletech.ac.in/web-tech-portfolio/home",
      usn: "01FE22BCS173",
      rollNumber: "329",
    },
    {
      name: "Pavan H Bhakta",
      link: "https://sites.google.com/kletech.ac.in/mywebtech-portfolio?usp=sharing",
      usn: "01FE22BCS175",
      rollNumber: "331",
    },
    {
      name: "Anusha Adarakatti",
      link: "https://sites.google.com/view/anusha-web-tech/home",
      usn: "01FE22BCS186",
      rollNumber: "334",
    },
  ];

  return (
    <div className="portfolio-container">
      <h2>Portfolios</h2>
      <div className="portfolio-cards">
        {developers.map((developer, index) => (
          <div key={index} className="portfolio-card">
            <a href={developer.link} target="_blank" rel="noopener noreferrer">
              <h3 className="portfolio-name">{developer.name}</h3>
              <p className="portfolio-usn">
                <strong>USN:</strong> {developer.usn}
              </p>
              <p className="portfolio-usn">
                <strong>Email:</strong> {developer.usn.toLowerCase()}
                {"@kletech.ac.in"}
              </p>
              <p className="portfolio-roll">
                <strong>Roll Number:</strong> {developer.rollNumber}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioLinks;
