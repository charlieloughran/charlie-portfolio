import { useState, useEffect } from "react";
import type { Project } from "../types";
import "../styles/Portfolio.css";
import { getAllPosts } from "../api/wordpress";

type PortfolioProps = {
  onSelect: (project: Project) => void;
};

const Portfolio = ({ onSelect }: PortfolioProps) => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getAllPosts()
      .then((posts) => {
        // Sort alphabetically by title
        const sorted = posts.sort((a, b) =>
          a.hero.title.localeCompare(b.hero.title)
        );
        setProjects(sorted);
      })
      .catch(console.error);
  }, []);

  if (!projects.length) return null;

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="portfolio-card"
            onClick={() => onSelect(project)}
          >
            {/* Image as div for consistent aspect ratio */}
            <div
              className="portfolio-image"
              style={{
                backgroundImage: `url(${project.hero.image})`,
              }}
            />

            {/* Info section */}
            <div className="portfolio-info">
              <h3>{project.hero.title}</h3>
              <p>{project.sidebar.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
