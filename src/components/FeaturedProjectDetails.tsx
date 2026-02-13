import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../types";

type FeaturedProjectDetailsProps = {
  project: Project | null;
  onBack: () => void;
};

const FeaturedProjectDetails = ({ project, onBack }: FeaturedProjectDetailsProps) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onBack} // clicking outside closes
        >
          <motion.div
            className="featured-project-details"
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            onClick={(e) => e.stopPropagation()} // prevent overlay click
          >
            <button className="back-btn" onClick={onBack}>
              ← Back
            </button>

            {/* Hero Image */}
            {project.hero.image && (
              <div className="hero-image-container">
                <img src={project.hero.image} alt={project.hero.title} />
              </div>
            )}

            {/* Title and role */}
            <div className="hero-header">
              <h1>{project.hero.title}</h1>
              <p className="hero-role">{project.sidebar.role}</p>
            </div>

            {/* Content / excerpt */}
            <div className="content-area">
              <div className="content-left">
                <div
                  className="details-container"
                  dangerouslySetInnerHTML={{ __html: project.summary }}
                />
              </div>

              <div className="content-right">
                {project.sidebar.metrics.length > 0 && (
                  <>
                    <h4>Metrics</h4>
                    <ul className="hero-metrics">
                      {project.sidebar.metrics.map((m, idx) => (
                        <li key={idx}>{m}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FeaturedProjectDetails;
