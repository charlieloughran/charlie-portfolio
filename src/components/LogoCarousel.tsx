import React from "react";
import "../styles/LogoCarousel.css";

interface LogoCarouselProps {
  logos?: { src: string; alt: string }[];
}

// Placeholder logos
const placeholderLogos = [
  { src: "/logos/logo1.png", alt: "Company One" },
  { src: "/logos/logo2.png", alt: "Company Two" },
  { src: "/logos/logo3.png", alt: "Company Three" },
  { src: "/logos/logo4.png", alt: "Company Four" },
];

const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos = placeholderLogos }) => {
  if (!logos || logos.length === 0) return null;

  // Duplicate logos enough times to fill the width
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="logo-carousel" aria-label="Companies worked with">
      <div className="logo-track">
        {repeatedLogos.map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoCarousel;
