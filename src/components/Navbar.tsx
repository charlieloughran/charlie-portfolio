import { useState, useEffect } from "react";

import "../styles/Navbar.css";
import SiteLogoDark from "../assets/CharlieLogo2026_CL.png";
import SiteLogoLight from "../assets/CharlieLogo2026_CL-light.png";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Init theme
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initial = saved ?? (prefersLight ? "light" : "dark");
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

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

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Logo left */}
      <div className="logo">
        <a href="#home" onClick={closeMenu}>
          <img src={theme === "dark" ? SiteLogoLight : SiteLogoDark} alt="Logo" className="logo-image"/>
        </a>
      </div>

      {/* Center links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        {/* <a href="/#featured" onClick={closeMenu}>Featured</a> */}
        <a href="/#portfolio" onClick={closeMenu}>Portfolio</a>
        <a href="/#about" onClick={closeMenu}>About</a>
        <a href="/#contact" onClick={closeMenu}>Contact</a>


        {/* Theme toggle only inside mobile menu */}
        {isOpen && (
          <div className="mobile-theme-toggle">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        )}
      </div>

      {/* Right side: desktop toggle + hamburger */}
      <div className="nav-right">
        {/* Desktop toggle */}
        <div className="desktop-theme-toggle">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* Hamburger */}
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
