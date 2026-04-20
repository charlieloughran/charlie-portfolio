import type { Project } from "../types";
import "../styles/ProjectDetail.css";

type Props = {
  project: Project;
  onBack: () => void;
};

const ProjectDetail = ({ project, onBack }: Props) => {
  return (
    <section className="project-detail">
      {/* Back button */}
      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>

      {/* HERO */}
      <div className="project-hero">
        <div className="project-hero-text">
          <h1>{project.hero.title}</h1>
          <p>{project.category}</p>
        </div>
         <img src={project.hero.image} alt={project.hero.title} />

      </div>

      {/* CONTENT */}
      <div className="project-layout">
        {/* SIDEBAR */}
        <aside className="project-sidebar">
          <h4>Role</h4>
          <p>{project.sidebar.role}</p>

          <h4>Details</h4>
          <ul>
            {project.sidebar.metrics.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </aside>

        {/* MAIN CONTENT */}
        <div className="project-content">
        <section>
        <h2>Overview</h2>
        <p>{project.content.overview}</p>
        </section>

        <section>
        <h2>Design Approach</h2>
        <p>{project.content.approach}</p>
        </section>

        <section className="project-images">
        {project.content.images.map((img, i) => (
            <img key={i} src={img} alt="" />
        ))}
        </section>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;