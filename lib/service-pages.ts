export type ServicePageContent = {
  slug:
    | "web-development"
    | "mobile-app-development"
    | "ui-ux-design"
    | "custom-software-development";
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  intro: string;
  whatWeOffer: {
    title: string;
    description: string;
  }[];
  expectations: string[];
  process: {
    title: string;
    description: string;
  }[];
  bestFit: string[];
  whyUs: {
    title: string;
    description: string;
  }[];
  relatedLinks: {
    label: string;
    href: string;
  }[];
};

export const servicePages: ServicePageContent[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Development",
    metaTitle: "Web Development Services",
    metaDescription:
      "Professional web development services for company websites, web applications, dashboards, and portals built for performance, usability, and maintainability.",
    heroTitle: "Web development services for businesses that need more than a basic website.",
    heroDescription:
      "We design and develop websites, web applications, dashboards, and portals that communicate clearly, perform reliably, and support real business needs over time.",
    intro:
      "Our web development work is shaped around clarity, usability, and long-term maintainability. Whether the priority is a stronger company website or a more capable web platform, the focus stays on making the end result easier to trust and easier to use.",
    whatWeOffer: [
      {
        title: "Company websites",
        description:
          "Modern marketing websites and brand websites that communicate clearly, load well, and present the business with confidence.",
      },
      {
        title: "Web applications",
        description:
          "Customer-facing and internal web applications designed around real workflows, cleaner interfaces, and maintainable engineering.",
      },
      {
        title: "Dashboards and portals",
        description:
          "Operational dashboards, admin panels, and partner or customer portals that help teams work more effectively.",
      },
      {
        title: "Frontend refinement and modernization",
        description:
          "Improving existing web products through interface upgrades, better responsiveness, cleaner structure, and stronger UX consistency.",
      },
    ],
    expectations: [
      "A web product that feels sharp, dependable, and professionally structured",
      "Clear communication around scope, implementation, and project decisions",
      "Attention to performance, responsiveness, and maintainable code structure",
      "Delivery choices guided by both business goals and real user experience",
    ],
    process: [
      {
        title: "Scope and requirements",
        description:
          "We align on the business context, audience, required features, content structure, and practical success criteria.",
      },
      {
        title: "Experience and interface planning",
        description:
          "We shape the information architecture, interaction flow, and interface approach before full implementation begins.",
      },
      {
        title: "Build and review",
        description:
          "We develop the website or web app in structured stages, reviewing functionality, responsiveness, and clarity as we go.",
      },
      {
        title: "Launch and support",
        description:
          "We help prepare the product for release and remain available for refinement, fixes, and post-launch improvement.",
      },
    ],
    bestFit: [
      "Businesses that need a more credible company website",
      "Teams building customer-facing portals or dashboards",
      "Companies replacing outdated or difficult-to-maintain web systems",
      "Founders and operators who need a practical delivery partner for web products",
    ],
    whyUs: [
      {
        title: "Design-aware engineering",
        description:
          "We care about how the product looks and how it works, which helps create web experiences that feel cohesive rather than fragmented.",
      },
      {
        title: "Practical delivery",
        description:
          "We focus on what the website or platform needs to achieve for the business instead of adding complexity for its own sake.",
      },
      {
        title: "Maintainable structure",
        description:
          "We aim for web solutions that remain understandable and workable after launch, not just during development.",
      },
    ],
    relatedLinks: [
      { label: "Mobile app development", href: "/mobile-app-development" },
      { label: "UI/UX design", href: "/ui-ux-design" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile App Development",
    metaTitle: "Mobile App Development Services",
    metaDescription:
      "Mobile app development services for businesses building customer apps, operational mobile tools, and modern product experiences across Android and iOS.",
    heroTitle: "Mobile app development focused on usability, clarity, and product confidence.",
    heroDescription:
      "We help businesses shape mobile app experiences that feel clear, aligned to product goals, and dependable in real-world use across modern mobile environments.",
    intro:
      "Mobile products need more than feature coverage. They need strong flow, responsive interfaces, and a delivery approach that reflects how people actually use mobile experiences. Our goal is to help teams build apps that feel considered from the first screen onward.",
    whatWeOffer: [
      {
        title: "Customer-facing mobile apps",
        description:
          "Apps designed to support product adoption, service delivery, and smoother customer interaction on mobile devices.",
      },
      {
        title: "Operational mobile tools",
        description:
          "Internal or team-facing mobile experiences that help staff work on the move with less friction.",
      },
      {
        title: "Cross-platform delivery strategy",
        description:
          "Practical planning and implementation for teams that want to move efficiently without sacrificing experience quality.",
      },
      {
        title: "App UX refinement",
        description:
          "Improving navigation, flow clarity, and screen-level usability in existing mobile products that need a stronger experience.",
      },
    ],
    expectations: [
      "Mobile experiences that feel clear, fast, and consistent",
      "Feature decisions shaped around real user behavior and product needs",
      "A structured delivery approach from planning through release readiness",
      "Support for both product quality and ongoing app evolution",
    ],
    process: [
      {
        title: "Product and user context",
        description:
          "We start by understanding the users, the journey, and the practical reason the app needs to exist.",
      },
      {
        title: "Flow and interface definition",
        description:
          "We shape screen flows, navigation logic, and interface priorities to reduce friction before deeper implementation begins.",
      },
      {
        title: "Development and iteration",
        description:
          "We build and refine the app in stages with ongoing review of usability, structure, and delivery quality.",
      },
      {
        title: "Launch support",
        description:
          "We help prepare for rollout and follow-up improvements so the app is not left without support after initial release.",
      },
    ],
    bestFit: [
      "Businesses launching a mobile companion to their product or service",
      "Teams that need a customer app with a more polished experience",
      "Operational teams that need mobile workflows in the field",
      "Founders shaping an early product experience for mobile-first usage",
    ],
    whyUs: [
      {
        title: "Product-minded design",
        description:
          "We approach mobile work as a product experience, not just a sequence of screens.",
      },
      {
        title: "Clarity in execution",
        description:
          "We help teams make practical decisions about scope, priorities, and app structure rather than overcomplicating delivery.",
      },
      {
        title: "Focus on real usage",
        description:
          "Mobile quality depends on context, flow, and responsiveness. We keep those realities central to the work.",
      },
    ],
    relatedLinks: [
      { label: "Web development", href: "/web-development" },
      { label: "UI/UX design", href: "/ui-ux-design" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortTitle: "UI/UX Design",
    metaTitle: "UI/UX Design Services",
    metaDescription:
      "UI/UX design services for websites, web apps, mobile apps, and product interfaces with a focus on usability, clarity, and stronger digital presentation.",
    heroTitle: "UI/UX design that makes products easier to use and businesses easier to trust.",
    heroDescription:
      "We help shape interfaces, product flows, and design systems that improve usability while making the overall experience feel clearer and more refined.",
    intro:
      "Good UI/UX design is not only about aesthetics. It is about helping users understand the product faster, move through it with confidence, and make sense of the experience with less friction. Our design work focuses on clarity, flow, and coherence.",
    whatWeOffer: [
      {
        title: "Website experience design",
        description:
          "Structuring marketing pages, landing pages, and company websites so they communicate more clearly and convert more confidently.",
      },
      {
        title: "Product interface design",
        description:
          "Designing the screens, flows, and interaction patterns behind web apps, SaaS products, portals, and operational tools.",
      },
      {
        title: "Design systems and UI direction",
        description:
          "Creating visual systems that improve consistency, scalability, and the overall quality of the interface language.",
      },
      {
        title: "UX refinement",
        description:
          "Improving usability in existing products by reworking flows, reducing friction, and clarifying the user journey.",
      },
    ],
    expectations: [
      "Cleaner user journeys and more understandable interfaces",
      "Design choices that support both conversion and usability",
      "A stronger visual system that feels credible and maintainable",
      "Closer alignment between product goals and user experience quality",
    ],
    process: [
      {
        title: "Context and user understanding",
        description:
          "We define the goals of the product or page, the audience, and the friction points affecting clarity or conversion.",
      },
      {
        title: "Flow and structure",
        description:
          "We shape the user journey, information hierarchy, and interaction logic before refining visual detail.",
      },
      {
        title: "Interface design",
        description:
          "We develop the UI direction, key screens, states, and supporting patterns needed for a coherent experience.",
      },
      {
        title: "Refinement and handoff",
        description:
          "We refine the design for usability, consistency, and implementation readiness so it can move cleanly into development.",
      },
    ],
    bestFit: [
      "Teams improving an existing product experience",
      "Businesses that need a more credible website or landing page",
      "Founders shaping a first product interface or MVP direction",
      "Companies that need design structure before development accelerates",
    ],
    whyUs: [
      {
        title: "Design with business context",
        description:
          "We connect interface decisions to the actual role the product or website plays for the business.",
      },
      {
        title: "Clarity over decoration",
        description:
          "Our goal is a stronger, more usable experience rather than visual excess that does not help the user.",
      },
      {
        title: "Better handoff into delivery",
        description:
          "We think about how design will live in implementation, which helps the final result stay coherent.",
      },
    ],
    relatedLinks: [
      { label: "Web development", href: "/web-development" },
      { label: "Custom software development", href: "/custom-software-development" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortTitle: "Custom Software Development",
    metaTitle: "Custom Software Development Services",
    metaDescription:
      "Custom software development services for businesses that need tailored workflows, internal systems, operational tools, and software aligned to real business processes.",
    heroTitle: "Custom software development for businesses that need systems built around the way they actually work.",
    heroDescription:
      "We design and build tailored software for teams that have outgrown generic tools and need workflows, operations, and internal systems that fit the business more closely.",
    intro:
      "Custom software is often the right path when a business has processes, internal coordination needs, or service workflows that do not fit neatly into off-the-shelf tools. Our role is to help shape software that is practical, understandable, and genuinely useful to the teams relying on it.",
    whatWeOffer: [
      {
        title: "Internal business systems",
        description:
          "Custom operational tools, internal portals, dashboards, and management systems designed around day-to-day business processes.",
      },
      {
        title: "Workflow and process software",
        description:
          "Software built to reduce manual work, improve handoffs, and bring more structure to recurring operational tasks.",
      },
      {
        title: "Custom admin and reporting tools",
        description:
          "Systems that help teams manage data, monitor activity, and make better decisions through clearer interfaces and tailored reporting.",
      },
      {
        title: "Software modernization support",
        description:
          "Helping businesses rethink older systems or fragmented tools through better structure and more maintainable delivery.",
      },
    ],
    expectations: [
      "Software shaped around actual operational needs instead of generic templates",
      "Closer alignment between business workflows and the tools supporting them",
      "A more maintainable and understandable system architecture",
      "A practical partner who can help define the software before simply building it",
    ],
    process: [
      {
        title: "Workflow discovery",
        description:
          "We map the current process, identify friction, and clarify what the software needs to improve in practical terms.",
      },
      {
        title: "Solution planning",
        description:
          "We define the most important functional blocks, priorities, and delivery structure before implementation begins.",
      },
      {
        title: "Build and review",
        description:
          "We develop the system in stages, reviewing usability, logic, and process fit as the product takes shape.",
      },
      {
        title: "Rollout and support",
        description:
          "We support launch readiness, operational handover, and post-launch refinement as the system moves into real usage.",
      },
    ],
    bestFit: [
      "Businesses that rely on spreadsheets, scattered tools, or manual handoffs",
      "Teams needing tailored operational software rather than generic platforms",
      "Organizations improving internal process visibility and control",
      "Companies looking to build long-term workflow infrastructure",
    ],
    whyUs: [
      {
        title: "We start with the workflow",
        description:
          "The best software decisions come from understanding how the work actually happens, not from forcing the business into a template.",
      },
      {
        title: "Practical delivery without inflated complexity",
        description:
          "We focus on the parts of the system that will matter most to the business and the people using it every day.",
      },
      {
        title: "Maintainability matters",
        description:
          "Custom software should stay usable and manageable after launch, so we pay close attention to clarity and structure.",
      },
    ],
    relatedLinks: [
      { label: "Web development", href: "/web-development" },
      { label: "UI/UX design", href: "/ui-ux-design" },
      { label: "Contact us", href: "/contact" },
    ],
  },
];

export function getServicePageBySlug(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}

export function getRequiredServicePage(slug: ServicePageContent["slug"]) {
  const service = getServicePageBySlug(slug);

  if (!service) {
    throw new Error(`Missing service page content for ${slug}.`);
  }

  return service;
}
