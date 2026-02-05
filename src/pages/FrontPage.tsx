import { useState } from "react";

import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Contact from "../components/Contact";
import ProjectModal from "../components/ProjectModal";
import FeaturedProjectDetails from "../components/FeaturedProjectDetails";


// src/pages/FrontPage.tsx
import projectsDataRaw from "../data/projects.json";
import type { Project } from "../types";

// Cast JSON to Project[]


export default function FrontPage() {
  const [activePortfolioProject, setActivePortfolioProject] = useState<Project | null>(null);
  const [activeFeaturedProject, setActiveFeaturedProject] = useState<Project | null>(null);

const projects: Project[] = projectsDataRaw as Project[];

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
