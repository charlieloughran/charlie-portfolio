import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HopeMillImage from "../assets/charlie.png";
import Button from "../components/Button";

type Project = {
  id: number;
  title: string;
  role: string;
  description: string;
  image?: string;
  featured?: boolean;
};

export default function FrontPage() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Theatre Programmes",
      role: "Creative Artworker · LOCRN / HTDL",
      description:
        "Redesigned layout systems and typography to improve readability, accessibility, and visual consistency across theatre programmes.",
      image: HopeMillImage,
      featured: true,
    },
    {
      id: 2,
      title: "ScriptMate",
      role: "UX Design · Mobile",
      description:
        "Designed core user flows and onboarding for a sustainability-focused mobile app concept.",
      image: HopeMillImage,
      featured: true,
    },
    {
      id: 3,
      title: "Worcester Warriors Website",
      role: "UX · Web Design",
      description:
        "Improved navigation and page hierarchy to better support content-heavy sports and event information.",
      image: HopeMillImage,
      featured: true,
    },

    {
      id: 4,
      title: "Hope Mill Theatre",
      role: "3D Environment · Blender",
      description:
        "Created a detailed 3D environment for theatre visualisation and client communication.",
      image: HopeMillImage,
      featured: true,
    },

        // Gallery-only projects

    {
      id: 5,
      title: "Hope Mill Theatre",
      role: "3D Environment · Blender",
      description:
        "Created a detailed 3D environment for theatre visualisation and client communication.",
      image: HopeMillImage,
    },

    {
      id: 6,
      title: "Hope Mill Theatre",
      role: "3D Environment · Blender",
      description:
        "Created a detailed 3D environment for theatre visualisation and client communication.",
      image: HopeMillImage,
    },

    {
      id: 7,
      title: "ScriptMate",
      role: "Mobile App Prototype",
      description:
        "Early-stage mobile prototype focused on writing workflows and usability.",
      image: HopeMillImage,
    },
    {
      id: 8,
      title: "Jack Grealish",
      role: "Motion Design",
      description:
        "Short-form motion graphic exploring typography, rhythm, and animation.",
      image: HopeMillImage,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const galleryProjects = projects.filter(p => !p.featured);

  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);
  const activeProject = projects.find(p => p.id === activeProjectId);

  return (
    <div id="home" className="bg-neutral-950 text-neutral-100">
      <div style={{ height: "140px" }} />


{/* HERO */}
<section id="hero"  className="hero-section">
  <div className="hero-inner">
    <motion.h1
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl md:text-6xl font-bold tracking-tight"
    >
      UX & Digital Designer
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mt-6 text-xl text-neutral-400 max-w-2xl"
    >
      Designing clear, usable digital experiences across web, mobile,
      motion, and interactive media.
    </motion.p>

    <div className="hero-buttons mt-8">
      <a href="#featured" ><Button type= 'button' variant="primary">View Work</Button></a>
      <a href="#contact"><Button type= 'button' variant="outline" >Contact Me</Button></a>
    </div>
  </div>
</section>


  


<div className="content">
{/* FEATURED WORK */}
<section  id="featured"  className="featured-section">
  {featuredProjects.map((project, index) => (
    <motion.div
      key={project.id}
      className={`featured-row ${index % 2 === 0 ? "normal" : "reverse"}`}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      {/* IMAGE */}
      <div
        className="featured-image"
        style={{ backgroundImage: `url(${project.image})` }}
      />

      {/* CONTENT */}
      <div className="featured-content">
        <h3>{project.title}</h3>
        <p className="role">{project.role}</p>
        <p className="description">{project.description}</p>

        {/* Minimal View Project link */}
      <a href={`/featured-work/${project.id}`} className="featured-link">
        View Project &rarr;
      </a>

      </div>
    </motion.div>
  ))}
</section>





      {/* PROJECT GALLERY */}
      <section id="projects"  className="featured-section mx-auto px-6 py-24 border-t border-neutral-800">

        <div className="portfolio-grid">
          {galleryProjects.map(project => (
            <div
              key={project.id}
              className="portfolio-card"
              onClick={() => setActiveProjectId(project.id)}
            >
              <div
                className="portfolio-image"
                style={{
                  backgroundImage: project.image
                    ? `url(${project.image})`
                    : undefined,
                }}
              />
              <div className="portfolio-info">
                <h3>{project.title}</h3>
                <p>{project.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK PREVIEW MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProjectId(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setActiveProjectId(null)}
              >
                ×
              </button>

              <div
                className="modal-image"
                style={{
                  backgroundImage: activeProject.image
                    ? `url(${activeProject.image})`
                    : undefined,
                }}
              />

              <h3 className="text-xl font-semibold">
                {activeProject.title}
              </h3>
              <p className="text-sm text-neutral-400">
                {activeProject.role}
              </p>
              <p className="text-sm text-neutral-500">
                {activeProject.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

{/* ABOUT */}
<section id="about" className="about-section">
  <div className="about-inner">
    {/* Image on the left */}
    <div className="about-image" />

    {/* Content on the right */}
    <div className="about-content">
      <h2>About Me</h2>
      <p>
        I’m a UX & Digital Designer passionate about creating intuitive and delightful experiences.
        With experience across web, mobile, and interactive media, I focus on clarity, usability, 
        and design that connects with users.
      </p>
      <p>
        I love turning complex problems into simple, elegant solutions, and constantly learning 
        new tools and techniques to stay at the forefront of design and technology.
      </p>
    </div>
  </div>
</section>




{/* CONTACT / CTA */}
<section id="contact" className="contact-section-minimal">
  <div className="contact-inner-minimal">
    <h2>Get In Touch</h2>
    <p>I’m always open to discussing new projects, collaborations, or ideas.</p>
    
    <div className="contact-buttons-minimal">
        <a href="mailto:charlie.loughran@outlook.com" ><Button type= 'button' variant="primary">Email me</Button></a>
        <a href="https://linkedin.com/in/charlie-loughran"><Button type= 'button' variant="outline" >LinkedIn</Button></a>
    </div>
  </div>
</section>




  </div>
  );
}


