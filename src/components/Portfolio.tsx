import { useState, useEffect } from "react";
import type { Project } from "../types";

import { useNavigate } from "react-router-dom";
import "../styles/Portfolio.css";
import "../styles/Button.css";
import { projects as projectData } from "../data/projects";

type PortfolioProps = {
  onSelect: (project: Project) => void;
};

const Portfolio = ({ onSelect }: PortfolioProps) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filtered, setFiltered] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  useEffect(() => {
    const sorted = [...projectData].sort((a, b) =>
      a.hero.title.localeCompare(b.hero.title)
    );

    setProjects(sorted);
    setFiltered(sorted);
  }, []);

  const categories = [
    "All",
    ...Array.from(
      new Set(projects.map((p) => p.category || "Other"))
    ),
  ];

  const handleFilter = (category: string) => {
    setActiveFilter(category);

    if (category === "All") {
      setFiltered(projects);
    } else {
      setFiltered(
        projects.filter((p) => (p.category || "Other") === category)
      );
    }
  };

  const navigate = useNavigate();

  return (
    <section id="portfolio" className="portfolio-section">
      {/* Filters */}
      <div className="portfolio-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn btn-outline ${
              activeFilter === cat ? "active" : ""
            }`}
            onClick={() => handleFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="portfolio-grid">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="portfolio-card"
            onClick={() => {
  onSelect(project);
  navigate(`/projects/${project.slug}`);
}}
          >
            <div
              className="portfolio-image"
              style={{
                backgroundImage: `url(${project.hero.image})`,
              }}
            >
              <span className={`portfolio-tag ${project.category.toLowerCase()}`}>
  {project.category}
</span>

              <div className="portfolio-overlay">
                <h3>{project.hero.title}</h3>
                <span>View Project →</span>
              </div>
            </div>
            
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