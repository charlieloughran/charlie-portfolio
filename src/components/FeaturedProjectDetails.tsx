// src/components/FeaturedProjectDetails.tsx
import { useEffect } from "react";
import type { Project } from "../types";
import "../styles/FeaturedProjectDetails.css";

type Props = {
  project: Project;
  onBack: () => void;
};

export default function FeaturedProjectDetails({ project, onBack }: Props) {
  // Lock body scroll while modal is open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  return (
    <div className="overlay">
      <div className="featured-project-details">
        {/* Hero */}
        <div className="hero-image-container">
          <img src={project.hero.image} alt={project.hero.title} />
        </div>

        <div className="hero-header">
          <button className="back-btn" onClick={onBack}>
            &larr; Back
          </button>
          <h1>{project.hero.title}</h1>
          <p>{project.hero.subtitle}</p>
        </div>

        {/* Content */}
        <div className="project-content">
          {/* Render raw WordPress HTML */}
          <div
            className="content-html"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </div>

        {/* Sidebar */}
        <div className="project-sidebar">
          <p className="hero-role">{project.sidebar.role}</p>
          <ul className="hero-metrics">
            {project.sidebar.metrics.map((metric, idx) => (
              <li key={idx}>{metric}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
