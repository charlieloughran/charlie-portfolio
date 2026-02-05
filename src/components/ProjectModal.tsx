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
            className="modal-content"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose}>
              ×
            </button>

            <div
              className="modal-image"
              style={{
                backgroundImage: project.image
                  ? `url(${project.image})`
                  : undefined,
              }}
            />

            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-neutral-400">{project.role}</p>
            <p className="text-sm text-neutral-500">{project.description}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
