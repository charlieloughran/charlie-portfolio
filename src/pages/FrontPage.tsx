import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";
import ProjectDetail from "../components/ProjectDetail";

import type { Project } from "../types";
import { projects } from "../data/projects";

import "../styles/project-transition.css"

export default function FrontPage() {
const { slug } = useParams();
const navigate = useNavigate();

const [selectedProject, setSelectedProject] = useState<Project | null>(null);  const [isTransitioning, setIsTransitioning] = useState(false);



const openProject = (project: Project) => {
  setIsTransitioning(true);

  // smooth scroll to top BEFORE switching view
  window.scrollTo({ top: 0, behavior: "smooth" });

  setTimeout(() => {
    setSelectedProject(project);
    setIsTransitioning(false);
  }, 250);
};

useEffect(() => {
  if (!slug) return;

  const project = projects.find((p) => p.slug === slug);

  if (project) {
    setSelectedProject(project);
  }
}, [slug]);

const closeProject = () => {
  setIsTransitioning(true);
  setSelectedProject(null);
  navigate("/");

  // smooth scroll to top when returning to portfolio
  window.scrollTo({ top: 0, behavior: "smooth" });

  setTimeout(() => {
    setSelectedProject(null);
    setIsTransitioning(false);
  }, 250);
};

  const isProjectOpen = selectedProject !== null;

  return (
    <>
      {/* HERO disappears when project is open */}
      {!isProjectOpen && <Hero />}

      {/* MAIN CONTENT */}
      {!isProjectOpen ? (
        <Portfolio onSelect={openProject} />
      ) : (
        <div
          className={`project-wrapper ${
            isTransitioning ? "exiting" : "entering"
          }`}
        >
          <ProjectDetail
            project={selectedProject}
            onBack={closeProject}
          />
        </div>
      )}

      {!isProjectOpen && (
        <>
          <About />
          <Contact />
        </>
      )}
    </>
  );
}