import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../types";
import "../styles/ProjectModal.css";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-container"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose}>
              ×
            </button>

            {/* Hero Image */}
            {project.hero.image && (
              <div
                className="modal-image"
                style={{ backgroundImage: `url(${project.hero.image})` }}
              />
            )}
            <div className="modal-content">
            {/* Title */}
            <h3 className="text-xl font-semibold">{project.hero.title}</h3>

            {/* Description / Excerpt */}
            {project.summary && (
              <div
                className="text-sm text-neutral-500"
                dangerouslySetInnerHTML={{ __html: project.summary }}
              />
            )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
