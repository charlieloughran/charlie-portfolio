import { useState } from "react";
import type { Project } from "../types";

import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Contact from "../components/Contact";
import ProjectModal from "../components/ProjectModal";
import FeaturedProjectDetails from "../components/FeaturedProjectDetails";

import projectsData from "../data/projects.json";

export default function FrontPage() {
  const [activePortfolioProject, setActivePortfolioProject] = useState<Project | null>(null);
  const [activeFeaturedProject, setActiveFeaturedProject] = useState<Project | null>(null);

  const projects: Project[] = projectsData;

  const handleOpenFeatured = (project: Project) => {
    setActiveFeaturedProject(project);
  };

  const handleCloseFeatured = () => setActiveFeaturedProject(null);

  return (
    <>
      {/* Always render front page */}
      <Hero />
      <Featured projects={projects} onSelect={handleOpenFeatured} />
      <Portfolio projects={projects} onSelect={setActivePortfolioProject} />
      <About />
      <Contact />

      {/* Render modal on top */}
      {activeFeaturedProject && (
        <FeaturedProjectDetails
          title={activeFeaturedProject.title}
          role={activeFeaturedProject.role}
          content={activeFeaturedProject.content || [
            { type: "paragraph", text: activeFeaturedProject.description || "" },
            { type: "image", src: activeFeaturedProject.image || "", alt: activeFeaturedProject.title }
          ]}
          onBack={handleCloseFeatured}
        />
      )}

      {/* Portfolio modal */}
      {activePortfolioProject && (
        <ProjectModal
          project={activePortfolioProject}
          onClose={() => setActivePortfolioProject(null)}
        />
      )}
    </>
  );
}
