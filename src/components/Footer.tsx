import React from "react";
import "../styles/Footer.css";

import SiteLogoDark from "../assets/charlie.png";
import SiteLogoLight from "../assets/charlie-light.png";

interface FooterProps {
  theme: "light" | "dark"; // receive theme from parent
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img
            src={theme === "dark" ? SiteLogoLight : SiteLogoDark}
            alt="Charlie Loughran Logo"
            className="logo-image"
          />
        </div>

        <div className="footer-links">
          <ul className="footer-list">
            {/* Add links here */}
          </ul>
        </div>
      </div>

      <div className="py-10 text-center text-sm text-neutral-500 footer-bottom">
        © {new Date().getFullYear()} Charlie Loughran · UX & Digital Design
      </div>
    </footer>
  );
};

export default Footer;

