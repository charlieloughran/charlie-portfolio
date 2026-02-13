import { useState, useEffect } from "react";
import type { Project } from "../types";
import { motion } from "framer-motion";
import "../styles/Featured.css";
import { getAllPosts } from "../api/wordpress";

type FeaturedProps = {
  onSelect: (project: Project) => void;
};

const Featured = ({ onSelect }: FeaturedProps) => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getAllPosts()
      .then((posts) => setProjects(posts.filter((p) => p.featured)))
      .catch(console.error);
  }, []);

  if (!projects.length) return null;

  return (
    <section id="featured" className="featured-section">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          className={`featured-row ${index % 2 === 0 ? "normal" : "reverse"}`}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          {/* Hero Image */}
          <div
            className="featured-image"
            style={{ backgroundImage: `url(${project.hero.image})` }}
          />

          {/* Content */}
          <div className="featured-content">
            <h3>{project.hero.title}</h3>

            {/* Excerpt rendered as HTML */}
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: project.summary }}
            />

            <a onClick={() => onSelect(project)} className="featured-link">
              View Project &rarr;
            </a>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Featured;
