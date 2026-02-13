import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Contact from "../components/Contact";
import ProjectModal from "../components/ProjectModal";
import FeaturedProjectDetails from "../components/FeaturedProjectDetails";

import type { Project } from "../types";
import { useState } from "react";

export default function FrontPage() {
  const [activePortfolioProject, setActivePortfolioProject] = useState<Project | null>(null);
  const [activeFeaturedProject, setActiveFeaturedProject] = useState<Project | null>(null);

  const handleOpenFeatured = (project: Project) => setActiveFeaturedProject(project);
  const handleCloseFeatured = () => setActiveFeaturedProject(null);

  return (
    <>
      <Hero />

      <Featured onSelect={handleOpenFeatured} />
      <Portfolio onSelect={setActivePortfolioProject} />

      <About />
      <Contact />

      {activeFeaturedProject && (
        <FeaturedProjectDetails
          project={activeFeaturedProject}
          onBack={handleCloseFeatured}
        />
      )}

      {activePortfolioProject && (
        <ProjectModal
          project={activePortfolioProject}
          onClose={() => setActivePortfolioProject(null)}
        />
      )}
    </>
  );
}
