import type { Project } from "../types";
import "../styles/ProjectDetail.css";

type Props = {
  project: Project;
  onBack: () => void;
};

const ProjectDetail = ({ project, onBack }: Props) => {
  return (
    <section className="project-detail">
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

          {project.sidebar.timeline && (
            <>
              <h4>Timeline</h4>
              <p>{project.sidebar.timeline}</p>
            </>
          )}

          <h4>Details</h4>
          <ul>
            {project.sidebar.metrics.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </aside>

        {/* MAIN CONTENT */}
        <div className="project-content">

          {project.content.problem && (
            <section className="project-problem">
              <p>{project.content.problem}</p>
            </section>
          )}

          <section>
            <h2>Overview</h2>
            <p>{project.content.overview}</p>
          </section>

          <section>
            <h2>Design Approach</h2>
            <p>{project.content.approach}</p>
          </section>

          {project.content.decisions && project.content.decisions.length > 0 && (
            <section className="project-decisions">
              <h2>Key Decisions</h2>
              {project.content.decisions.map((d, i) => (
                <div key={i} className="decision-item">
                  <h3>{d.question}</h3>
                  <p>{d.answer}</p>
                </div>
              ))}
            </section>
          )}

          {project.content.outcome && (
            <section>
              <h2>Outcome</h2>
              <p>{project.content.outcome}</p>
            </section>
          )}

          {project.content.nextSteps && project.content.nextSteps.length > 0 && (
            <section className="project-next-steps">
              <h2>What I'd Do Next</h2>
              <ul>
                {project.content.nextSteps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </section>
          )}

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