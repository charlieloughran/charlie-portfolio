import type { Project } from "../types";
import { motion } from "framer-motion";

import "../styles/Featured.css";

type FeaturedProps = {
  projects: Project[];
  onSelect: (project: Project) => void; // expects full project
};

const Featured = ({ projects, onSelect }: FeaturedProps) => {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="featured" className="featured-section">
      {featuredProjects.map((project, index) => (
        <motion.div
          key={project.id}
          className={`featured-row ${index % 2 === 0 ? "normal" : "reverse"}`}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          {/* Image */}
          <div
            className="featured-image"
            style={{ backgroundImage: `url(${project.image})` }}
          />

          {/* Content */}
          <div className="featured-content">
            <h3>{project.title}</h3>
            <p className="role">{project.role}</p>
            <p className="description">{project.description}</p>

            {/* Fixed: pass full project object */}
            <a
              onClick={() => onSelect(project)}
              className="featured-link"
            >
              View Project &rarr;
            </a>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Featured;
