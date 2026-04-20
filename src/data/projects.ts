import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    slug: "scriptmate",
    category: "Mobile",
    featured: true,
    hero: {
      title: "ScriptMate",
      image: "/images/ScriptMate.png",
    },
    sidebar: {
      role: "UX/UI Designer",
      metrics: [
        "Format: Mobile Prototype",
        "Tools: Adobe XD",
      ],
    },
    content: {
      overview:
        "ScriptMate is a mobile app concept designed to help theatre performers manage, annotate, and rehearse their scripts on the go. The brief called for a tool that felt intuitive under the pressures of production — fast to navigate, easy to read, and built around the real habits of working performers.",
      approach:
        "I started by mapping the core user journey: loading a script, highlighting cues, and jumping between scenes quickly. From there I focused on reducing cognitive load — designing clear typographic hierarchy, a minimal colour system that works under stage lighting conditions, and gesture-based interactions that feel natural when you only have one hand free. The result is a 20-screen prototype that covers the key flows from script import through to rehearsal mode.",
      images: [
        "/images/scriptmate-1.jpg",
        "/images/scriptmate-2.jpg",
      ],
    },
  },
  {
    id: 2,
    slug: "hope-mill-theatre-3d",
    category: "3D",
    featured: false,
    hero: {
      title: "Hope Mill Theatre 3D",
      image: "/images/HopeMillTheatre.PNG",
    },
    sidebar: {
      role: "3D Visualiser",
      metrics: [
        "Client: Hope Mill Theatre, Manchester",
        "Format: .gbx",
        "Tools: Blender",
      ],
    },
    content: {
      overview:
        "A fully interactive 3D model of Hope Mill Theatre in Manchester, commissioned as a practical digital tool for theatre companies, venue managers, and production teams. The model allows users to explore the stage, auditorium, and lighting rigs remotely — replacing the need for an in-person site visit when planning a production.",
      approach:
        "I worked directly with the team at Hope Mill to source architectural references and take precise measurements of the space. Accuracy was the priority: the model needed to be a genuinely useful planning tool, not just a visualisation. I built the environment in Blender, carefully matching dimensions and sightlines so that companies could use it to map staging, plan lighting positions, and assess audience views before setting foot in the building.",
      images: [
        "/images/hope-mill-1.jpg",
        "/images/hope-mill-2.jpg",
      ],
    },
  },
  {
    id: 3,
    slug: "small-island",
    category: "Print",
    featured: false,
    hero: {
      title: "Small Island",
      image: "/images/smallisland.png",
    },
    sidebar: {
      role: "Creative Artworker",
      metrics: [
        "Type: Theatre Programme",
        "Client: Birmingham Rep",
        "Deliverables: Print-ready artwork",
      ],
    },
    content: {
      overview:
        "A 32-page theatre programme designed for Birmingham Rep's production of Small Island — Andrea Levy's epic story of identity, migration, and belonging. The brief was to create a publication that felt worthy of the production's scale while remaining clear and readable for a wide audience.",
      approach:
        "The design is built around a strong typographic system and a deliberate balance between editorial imagery and substantial body copy. I used a structured grid throughout to give the programme a sense of authority and calm, allowing the photography and illustration to breathe without competing with the text. All artwork was prepared to print-ready specification for professional production.",
      images: [
        "/images/small-island-1.jpg",
        "/images/small-island-2.jpg",
      ],
    },
  },
  {
    id: 4,
    slug: "dims-dashboard",
    category: "UX/UI",
    featured: false,
    hero: {
      title: "DIMS Dashboard",
      image: "/images/dims-dashboard.png",
    },
    sidebar: {
      role: "UI Designer",
      metrics: [
        "Type: Dashboard Redesign",
        "Client: University of Salford",
        "Deliverables: UX/UI prototype in Figma",
        "Tools: Figma, Claude",
      ],
    },
    content: {
      overview:
        "A proposed redesign of the DIMS (Digital Information Management System) dashboard — a University of Salford tool used by construction teams to monitor and reduce their carbon emissions on-site. The existing interface presented complex environmental data in a way that was difficult to act on quickly. The brief was to make it clearer, faster, and more useful in the field.",
      approach:
        "I audited the existing dashboard, identifying where users were losing time and where key data was buried. The redesign prioritises the most critical metrics at a glance, with a cleaner visual hierarchy and a layout that scales well across screen sizes. I delivered a fully interactive Figma prototype with annotated flows, ready to hand off to a development team.",
      images: [
        "/images/dims-1.jpg",
        "/images/dims-2.jpg",
      ],
    },
  },
  {
    id: 5,
    slug: "harvest-website",
    category: "UX/UI",
    featured: false,
    hero: {
      title: "Harvest — Company Website",
      image: "/images/harvest-website.png",
    },
    sidebar: {
      role: "UX/UI Designer & Front-end Developer",
      metrics: [
        "Type: Website Relaunch",
        "Client: Harvest",
        "Deliverables: Fully built and deployed website",
        "Tools: Figma, React, Vite, TypeScript, OpenAI",
      ],
    },
    content: {
      overview:
        "A ground-up relaunch of the Harvest company website — designed and built in-house to reflect a new direction for the brand. The project spanned the full process from initial design concepts through to a live, production-ready front-end.",
      approach:
        "I led both the design and the development. On the design side, I translated a new brand direction into a cohesive digital experience: clear information architecture, a refined visual language, and layouts that work across devices. On the build side, I structured the project as a modern React and TypeScript application using Vite, keeping the component architecture clean and maintainable.",
      images: [
        "/images/harvest-1.jpg",
        "/images/harvest-2.jpg",
      ],
    },
  },
    {
    id: 6,
    slug: "LOCRN-website",
    category: "UX/UI",
    featured: false,
    hero: {
      title: "LOCRN — Company Website",
      image: "/images/LOCRN-website.png",
    },
    sidebar: {
      role: "UX/UI Designer & Front-end Developer",
      metrics: [
        "Type: Website Relaunch",
        "Client: Harvest",
        "Deliverables: Fully built and deployed website",
        "Tools: Figma, React, Vite, TypeScript, OpenAI",
      ],
    },
    content: {
      overview:
        "A ground-up relaunch of the Harvest company website — designed and built in-house to reflect a new direction for the brand. The project spanned the full process from initial design concepts through to a live, production-ready front-end.",
      approach:
        "I led both the design and the development. On the design side, I translated a new brand direction into a cohesive digital experience: clear information architecture, a refined visual language, and layouts that work across devices. On the build side, I structured the project as a modern React and TypeScript application using Vite, keeping the component architecture clean and maintainable.",
      images: [
        "/images/harvest-1.jpg",
        "/images/harvest-2.jpg",
      ],
    },
  },
];