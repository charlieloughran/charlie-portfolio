import { useState, useEffect } from "react";
import "../styles/Navbar.css";
import SiteLogoDark from "../assets/CharlieLogo2026_CL.png";
import SiteLogoLight from "../assets/CharlieLogo2026_CL-light.png";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <a href="#home" onClick={closeMenu}>
          <img
            src={theme === "dark" ? SiteLogoLight : SiteLogoDark}
            alt="Logo"
            className="logo-image"
          />
        </a>
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="/#portfolio" onClick={closeMenu}>Portfolio</a>
        <a href="/#about" onClick={closeMenu}>About</a>
        <a href="/#contact" onClick={closeMenu}>Connect</a>

        {isOpen && (
          <div className="mobile-theme-toggle">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        )}
      </div>

      <div className="nav-right">
        <div className="desktop-theme-toggle">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
}