import type { Project } from "../types";

export const projects: Project[] = [
{
    id: 1,
    slug: "scriptmate",
    category: "Mobile",
    featured: false,
    hero: {
      title: "ScriptMate",
      image: "/images/ScriptMate.png",
    },
    sidebar: {
      role: "UX/UI Designer",
      timeline: "",
      metrics: [
        "Format: Mobile Prototype",
        "Tools: Adobe XD, Adobe Illustrator",
      ],
    },
    content: {
      problem:
        "Amateur theatre performers struggle to find time to rehearse lines outside of group sessions, and when attendance at rehearsals is poor, there is no good way to practise with a scene partner remotely. Existing tools — like coldRead and Line Learner — addressed parts of this, but none combined line learning, collaborative rehearsal, and company communication in one place.",
      overview:
        "ScriptMate is a mobile app concept designed to help theatre performers learn, rehearse, and improve their lines on the go. Built around the real habits of actors and directors, the app combines a line learning mode, a virtual rehearsal feature using voice recording and transcription, a group communication space, and a task and calendar system for keeping productions on track.",
      approach:
        "I began with competitor research across existing apps (coldRead, Line Learner) and tools already used by theatre companies (Facebook Groups), identifying what worked and what was missing. I then defined the problem through user personas — an aspiring actor, an amateur director, a student performer, and a film director — before mapping requirements for both actor and director roles. From there I moved through sitemap, lo-fi wireframes, and hi-fi screens in Adobe Illustrator, before building the interactive prototype in Adobe XD. The project went through two rounds of user testing with ten actors, with significant design changes made between rounds in response to feedback.",
      decisions: [
        {
          question: "Why combine Learn, Rehearse, and Improve into a single Practice mode?",
          answer:
            "All three flows started the same way, so keeping them separate created unnecessary friction. Merging them into one entry point simplified the navigation and reduced the cognitive load of deciding which mode to use.",
        },
        {
          question: "Why move away from a full scrolling script to a line-by-line format?",
          answer:
            "Presenting one line at a time kept the performer focused on delivery rather than scanning ahead. It also made voice transcription — which validates each line before moving to the next — more reliable and natural to interact with.",
        },
        {
          question: "Why change the colour scheme after user testing?",
          answer:
            "The initial dark purple made the interface feel flat and heavy, with too much empty space. User testing flagged design and accessibility as average. Shifting to a lighter background with purple as an accent immediately improved legibility and the perceived quality of the prototype.",
        },
      ],
      outcome:
        "Delivered a 20-screen interactive prototype in Adobe XD covering onboarding, practice mode, virtual and in-person rehearsal, groups, tasks, calendar, and profile. A second round of user testing after the colour and layout changes showed a marked improvement in feedback, with testers responding positively to the redesign and the overall quality of the prototype.",
      nextSteps: [
        "Add custom script/scene upload for auditions and new writing",
        "Assign tasks to individual group members",
        "Re-record specific lines within a completed scene",
        "Live rehearsal mode with hidden line prompts",
        "Type-out-lines accessibility option",
        "Multiple calendars for different productions",
      ],
      images: [

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
      timeline: "October 2021 - December 2021",
      metrics: [
        "Client: Hope Mill Theatre, Manchester",
        "Format: .gbx",
        "Tools: Blender",
      ],
    },
content: {
      problem:
        "Production teams had no way to plan staging and lighting without visiting the venue in person — an expensive, time-consuming step that becomes impossible when companies are based elsewhere.",
      overview:
        "A fully interactive 3D model of Hope Mill Theatre in Manchester, built as a practical planning tool for theatre companies, venue managers, and production teams. The model lets users explore the stage, auditorium, and lighting rigs remotely, removing the need for an in-person site visit before a production begins.",
      approach:
        "I worked directly with the Hope Mill team to source architectural references and take precise measurements of the space. Accuracy was the priority throughout — the model needed to function as a genuine planning tool, not just a visualisation. Built in Blender, the environment closely matches the real dimensions and sightlines of the venue, so companies can map staging, position lighting, and assess audience views before setting foot in the building.",
      decisions: [
        {
          question: "Why prioritise accuracy over aesthetics?",
          answer:
            "The model's value is entirely practical. If the dimensions are wrong, companies make bad production decisions — so precise measurements mattered far more than photorealism.",
        },
        {
          question: "Why export to .gbx format?",
          answer:
            "The .gbx format allows the model to be imported directly into Unity, opening the door to interactive user controls — something I had already explored in a separate modern bedroom project.",
        },
      ],
      outcome:
        "An accurate digital replica of Hope Mill Theatre's auditorium, usable as a remote planning tool for staging, lighting, and audience sightlines.",
      nextSteps: [
        "Add interactive user controls via Unity",
        "User testing with set designers and lighting designers",
        "Introduce VR capabilities for immersive walkthroughs",
      ],
      images: [

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
      image: "/images/small-island.png",
    },
    sidebar: {
      role: "Creative Artworker",
      timeline: "March 2026",
      metrics: [
        "Type: Theatre Programme",
        "Client: Birmingham Rep",
        "Deliverables: Print-ready artwork",
      ],
    },
    content: {
      problem:
        "The production needed a programme that matched the scale and ambition of the story; one that felt substantial without overwhelming readers with visual noise.",
      overview:
        "A 32-page theatre programme designed for Birmingham Rep's production of Small Island — Andrea Levy's epic story of identity, migration, and belonging. The brief was to create a publication that felt worthy of the production's scale while remaining clear and readable for a wide audience.",
      approach:
        "The design is built around a strong typographic system and a deliberate balance between editorial imagery and substantial body copy. I used a structured grid throughout to give the programme a sense of authority and calm, allowing the photography and illustration to breathe without competing with the text. All artwork was prepared to print-ready specification for professional production.",
      decisions: [
        {
          question: "Why a structured grid?",
          answer:
            "With 32 pages of varied content including editorial, cast biographies and photography; a consistent grid was the only way to maintain visual cohesion across the whole publication.",
        },
        {
          question: "Which aspects of the artwork did you pull into your overall design?",
          answer:
            "I extended the production's visual identity throughout the programme — drawing on the show's typography, artwork colours, and water motif to create a cohesive theme, while adhering to Birmingham Rep's brand guidelines where required.",
        },
      ],
      outcome:
        "An excellent client review and the continued privilege of designing programmes for Birmingham Rep; with their production of 'A Midsummers Night's Dream' to follow...",

      images: [
  
      ],
    },
  },
  {
    id: 4,
    slug: "dims-dashboard",
    category: "UX/UI",
    featured: true,
    hero: {
      title: "DIMS Dashboard",
      image: "/images/dims-dashboard.png",
    },
    sidebar: {
      role: "UI Designer",
      timeline: "March 2026",
      metrics: [
        "Type: Dashboard Redesign",
        "Client: University of Salford",
        "Deliverables: UX/UI prototype in Figma",
        "Tools: Figma, Claude",
      ],
    },
        content: {
      problem:
        "The existing DIMS dashboard was structurally inconsistent and difficult to use — prioritising user management over the tool's core purpose. With no clear visual hierarchy and key emissions data buried or absent, construction teams had no reliable way to monitor and act on their CO2 output in the field.",
      overview:
        "A redesign of the DIMS (Digital Information Management System) dashboard, as part of an ongoing initiative to help the construction sector reduce CO2 emissions on-site. Brought on by a professor at the University of Salford, the brief was to take the existing interface and rebuild it into something users could actually understand and act on.",
      approach:
        "With no existing user research to draw from, I worked from a hypothesis-led approach — establishing a strong structural baseline that could be validated and adjusted through future testing sessions. I audited the original dashboard, identified where the interface was prioritising the wrong things, and rebuilt the layout around the data that matters most. I applied the project's brand colours, introduced a colour-coordinated system to communicate status and urgency at a glance, and standardised the navigation — which had previously varied inconsistently across different sections. The result will soon be a clean, minimal prototype in Figma, ready to be tested with real users and iterated on through ongoing meetings with the client.",
      decisions: [
        {
          question: "Why lead with emissions data rather than user management?",
          answer:
            "The original dashboard had drifted towards admin functionality, but the product's entire value is in helping teams reduce CO2. Recentering the interface around that data was the most fundamental change — everything else followed from it.",
        },
        {
          question: "Why standardise navigation into a persistent left-hand menu?",
          answer:
            "The original interface had inconsistent menus — some sections used the toolbar, others didn't, which made it easy to lose track of where you were in the application. Moving all navigation into a single, persistent left-hand menu means the user always has the same point of reference regardless of which section they're in. It removes a source of confusion without adding any complexity.",
        },
      ],
      outcome:
        "A clean, minimal Figma prototype that replaces the original interface with a structured, usable baseline. The project is ongoing — regular sessions with the University of Salford team are planned, with user testing with construction professionals informing the next phases of the design.",
      nextSteps: [
        "User testing with construction team users in the field",
        "Iterate on layout and hierarchy based on test findings",
        "Expand the dashboard to cover additional data sets as the project develops",
        "Handoff to development team",
      ],
      images: [

      ],
    },
  },
  {
    id: 5,
    slug: "harvest-website",
    category: "UX/UI",
    featured: true,
    hero: {
      title: "Harvest — Company Website",
      image: "/images/harvest-website.png",
    },
    sidebar: {
      role: "UX/UI Designer & Front-end Developer",
      timeline: "February 2026 - Present",
      metrics: [
        "Type: Website Relaunch",
        "Deliverables: Fully built and deployed MVP",
        "Tools: Figma, React, Vite, TypeScript, OpenAI",
      ],
    },
 content: {
      problem:
        "Following a change in leadership, Harvest had a new direction — but the existing Weebly site didn't reflect it. The business needed a digital presence that communicated its positioning clearly, worked as a live channel for leads, and could grow as the brand developed.",
      overview:
        "A ground-up relaunch of the Harvest company website — designed and built in-house to reflect the brand's new direction as a fully integrated design and print service for the arts. The project ran from initial design concepts through to a live, production-ready front-end, with a focus on cleanliness, simplicity, and a foundation that can be iterated on using real user data.",
      approach:
        "I led both the design and the development. On the design side, I translated the new brand direction into a cohesive digital experience — clear information architecture, a refined visual language consistent with Harvest's print output, and layouts that meet WCAG accessibility standards without sacrificing aesthetics. On the build side, I structured the project as a component-based React and TypeScript application using Vite. The component model was a deliberate reflection of how print is structured: in sections, each self-contained but part of a coherent whole. The site launched as an intentional MVP — live, reachable, and ready to collect analytical data to inform the next phase of design.",
      decisions: [
        {
          question: "Why a bespoke React build over a CMS or website builder?",
          answer:
            "Weebly had already shown the limitations of off-the-shelf tools for a brand with specific design requirements. A bespoke React and TypeScript build gave full control over layout, performance, and visual consistency with Harvest's print work. A CMS integration is planned for the next phase, but getting a quality site live quickly was the right call for an MVP.",
        },
        {
          question: "Why prioritise WCAG accessibility alongside the visual language?",
          answer:
            "Harvest works in the arts — a sector with a strong commitment to inclusion. A site that compromised accessibility for aesthetics would have been at odds with the brand's values. The two don't have to conflict, and making them work together was a core design constraint from the start.",
        },
      ],
      outcome:
        "A live MVP website that replaced the Weebly build, giving Harvest a digital presence that reflects the new brand direction. The team responded positively to its cleanliness and simplicity. The site is currently in development at harvest-arts.co.uk, with analytical data now being collected to inform the next phase of UX improvements and content updates.",
      nextSteps: [
        "Integrate a CMS to make content maintainable without a developer",
        "Analyse site data to identify drop-off points and improve lead conversion",
        "Iterate on UX based on real traffic patterns",
        "Extend the design system to cover additional pages and services",
      ],
      images: [

      ],
    },
  },
  {
    id: 6,
    slug: "LOCRN-website",
    category: "UX/UI",
    featured: true,
    hero: {
      title: "LOCRN — Company Website",
      image: "/images/LOCRN-website.png",
    },
    sidebar: {
      role: "UX/UI Designer & Front-end Developer",
      timeline: "January 2026 - Present",
      metrics: [
        "Type: Website Relaunch",
        "Live Site: locrn.co.uk",
        "Deliverables: Fully built and deployed website",
        "Tools: Figma, React, Vite, TypeScript, OpenAI",
      ],
    },
    content: {
      problem:
        "LOCRN had no digital presence — as a freelance creative services business, that meant no way for potential clients to find or evaluate the work. Between other commitments, building a site had never made it to the top of the list. That needed to change.",
      overview:
        "The first website for LOCRN — a creative services business offering design on a flexible basis. Built as a deliberate MVP to establish a digital presence quickly, the site was designed and developed entirely self-directed, from initial Figma concepts through to a live React and TypeScript front-end. The intention from the start was to get something quality online, then use real user data to inform where the design goes next.",
      approach:
        "With no previous site and no existing data to work from, the design process was led by instinct, experience, and hypothesis. I began in Figma, exploring the layout and pushing its design-to-code capabilities — before quickly running into the realities of responsiveness, which Figma alone couldn't solve. That led me to learn React and TypeScript properly, building the site as a component-led architecture with a headless CMS integration in mind from the outset. AI tools were used to accelerate the more repetitive, generic parts of the build, keeping focus on the design and structural decisions that actually required judgment. Getting the site live demanded patience — knowing when to stop refining and ship was as much a part of the process as the design itself.",
      decisions: [
        {
          question: "Why build in React and TypeScript rather than using a website builder?",
          answer:
            "A website builder would have been faster, but it would have imposed constraints on the design and made a future CMS integration messier. Building in React and TypeScript kept the architecture clean and extensible — and was also a deliberate opportunity to develop skills that directly inform the way I design for other clients.",
        },
        {
          question: "Why launch as an MVP rather than waiting for the finished vision?",
          answer:
            "Perfectionism had already delayed the site for too long. An imperfect site live is more valuable than a perfect site that doesn't exist — it establishes a presence, starts collecting data, and gives something real to iterate on. The MVP framing made it possible to ship.",
        },
      ],
      outcome:
        "A live company website giving LOCRN a digital presence for the first time. The site is now a working playground for testing design theories — with analytical tools to be integrated so that real user behaviour can inform future improvements to layout, content, and conversion.",
      nextSteps: [
        "Integrate analytics to understand how users move through the site",
        "Connect a headless CMS — likely WordPress or Sanity — for maintainable content",
        "Use traffic and engagement data to validate or challenge design decisions",
        "Iterate on layout and messaging based on what the data shows",
      ],
      images: [

      ],
    },
  },
    // {
    // id: 7,
    // slug: "unity-bedroom",
    // category: "3D",
    // featured: false,
    // hero: {
    //   title: "Unity Bedroom",
    //   image: "/images/unity-bedroom",
    // },
    // sidebar: {
    //   role: "3D Visualiser",
    //   timeline: "March 2022 - May 2022",
    //   metrics: [
    //     "Type: Website Relaunch",
    //     "Client: LOCRN",
    //     "Deliverables: Fully built and deployed website",
    //     "Tools: Figma, React, Vite, TypeScript, OpenAI",
    //   ],
    // },
    // content: {
    //   problem:
    //     "Add the core problem here — what was wrong or missing before you started this project?",
    //   overview:
    //     "A ground-up relaunch of the LOCRN company website — designed and built in-house to reflect a new direction for the brand. The project spanned the full process from initial design concepts through to a live, production-ready front-end.",
    //   approach:
    //     "I led both the design and the development. On the design side, I translated a new brand direction into a cohesive digital experience: clear information architecture, a refined visual language, and layouts that work across devices. On the build side, I structured the project as a modern React and TypeScript application using Vite, keeping the component architecture clean and maintainable.",
    //   decisions: [
    //     {
    //       question: "Add your first decision here",
    //       answer:
    //         "What did you choose and why? What alternatives did you consider?",
    //     },
    //     {
    //       question: "Add your second decision here",
    //       answer:
    //         "Think about a design, layout, or technical choice that shaped the outcome.",
    //     },
    //   ],
    //   outcome:
    //     "Add your outcome here — live URL, client feedback, or what you delivered.",
    //   nextSteps: [
    //     "Add next steps here",
    //   ],
    //   images: [
    //     "/images/harvest-1.jpg",
    //     "/images/harvest-2.jpg",
    //   ],
    // },
  // },
];