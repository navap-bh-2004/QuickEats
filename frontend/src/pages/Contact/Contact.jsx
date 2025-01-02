import "./ContactPage.css";
import { assets } from "../../assets/assets";
import PortfolioLinks from "../../components/Portfolio/Portfolio";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Got a question or need assistance? Reach out to us via the details
          below. We’re here to make your QuickEats experience delightful!
        </p>
      </div>

      <div>
        <PortfolioLinks />
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            <strong>Address:</strong> 81 Building 1, 2nd Floor, 5th Cross,
            Vidyanagar Hubli - 580031, Karnataka, India
          </p>
          <p>
            <strong>Email:</strong> support@quickeats.com
          </p>
          <p>
            <strong>Phone:</strong>7811345678
          </p>
        </div>

        <div className="contact-details">
          <h2>Follow Us</h2>
          <p>Stay connected for updates, offers, and news:</p>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a
              href="https://linkdin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.linkedin_icon} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
