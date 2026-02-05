import type { Project } from "../types";
import "../styles/Portfolio.css";

type PortfolioProps = {
  projects: Project[];
  onSelect?: (project: Project) => void; // pass the full project
};

const Portfolio = ({ projects, onSelect }: PortfolioProps) => {
  // Only include non-featured projects
  const portfolioProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="portfolio-section">
      <div className="portfolio-grid">
        {portfolioProjects.map((project) => (
          <div
            key={project.id}
            className="portfolio-card"
            onClick={() => onSelect?.(project)} // send full project to modal
          >
            <div
              className="portfolio-image"
              style={{
                backgroundImage: project.image
                  ? `url(${project.image})`
                  : undefined,
              }}
            />

            <div className="portfolio-info">
              <h3>{project.title}</h3>
              <p>{project.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
