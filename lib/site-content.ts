type PrimaryNavItem = {
  label: string;
  href: string;
  sectionId?: string;
};

export const company = {
  name: "Sachram Technologies",
  tagline: "Web, product, and software work shaped with clarity and care.",
  email: "sachramtech@gmail.com",
  phone: "+91 73208 63504",
  whatsapp: "https://wa.me/917320863504",
  linkedin: "https://www.linkedin.com/company/sachram-technologies",
  website: "https://sachramtech.vercel.app",
  address:
    "Hyderabad, Telangana, India",
};

export const heroPillars = [
  "Clear product and website thinking before unnecessary complexity enters the work",
  "Design choices that help the business look credible from the first interaction",
  "Engineering decisions made for launch readiness, stability, and useful iteration",
] as const;

export const primaryNav: readonly PrimaryNavItem[] = [
  { label: "Services", href: "/services" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const serviceCards = [
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Websites, platforms, dashboards, and portals built to communicate clearly and work reliably in day-to-day use.",
    highlights: ["Company websites", "Web platforms", "Admin dashboards"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Mobile product experiences designed around real user flow, practical functionality, and reliable execution.",
    highlights: ["Customer apps", "Operational tools", "Cross-platform delivery"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Interfaces, journeys, and design systems that improve usability while strengthening the overall quality of the experience.",
    highlights: ["Product UX", "Interface systems", "Experience refinement"],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Solutions",
    description:
      "Tailored internal tools and workflow systems for teams that need software shaped around how the business actually runs.",
    highlights: ["Workflow systems", "Internal tools", "Operational software"],
  },
  {
    slug: "product-development",
    title: "Product Development",
    description:
      "From initial concept to launch-ready product, with support across planning, design, engineering, and release execution.",
    highlights: ["MVP development", "Feature delivery", "Launch readiness"],
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    description:
      "Ongoing improvements, issue resolution, performance tuning, and post-launch support that keep products stable and evolving.",
    highlights: ["Bug resolution", "Enhancement cycles", "Technical stewardship"],
  },
] as const;

export const differentiators = [
  {
    title: "Organized from the beginning",
    description:
      "We work with sensible milestones, clear ownership, and practical communication so the project stays understandable as it moves.",
  },
  {
    title: "Business-aware decisions",
    description:
      "We pay attention to the role the product, website, or system needs to play for the business, not just the surface output.",
  },
  {
    title: "Presentation that builds confidence",
    description:
      "Our design approach focuses on clarity and composure so the finished work feels more credible to customers, teams, and stakeholders.",
  },
  {
    title: "Work that holds up after launch",
    description:
      "We aim for products and codebases that remain workable after release, not just during the initial delivery cycle.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We understand the problem, audience, current constraints, and delivery priorities before proposing the right shape of solution.",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "We define scope, technical direction, milestones, and execution order so the project moves with clarity instead of guesswork.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "We shape the user experience, interface direction, and system structure needed to create a product that feels coherent and polished.",
  },
  {
    step: "04",
    title: "Development",
    description:
      "We build with attention to reliability, responsiveness, maintainability, and the actual business context of the product.",
  },
  {
    step: "05",
    title: "Testing",
    description:
      "We review functionality, edge cases, responsiveness, and release readiness to reduce avoidable issues before launch.",
  },
  {
    step: "06",
    title: "Launch & Support",
    description:
      "We help with deployment, final refinement, and post-launch improvements so the product continues to perform in real use.",
  },
] as const;

export const capabilityGroups = [
  {
    title: "What we commonly build",
    items: [
      "Company websites and conversion-minded landing pages",
      "Customer-facing products, portals, and account areas",
      "Operational dashboards and internal software tools",
      "Mobile experiences that support product or service delivery",
    ],
  },
  {
    title: "Who we work well with",
    items: [
      "Founders shaping a stronger first product or website",
      "Growing businesses improving digital operations",
      "Teams that need one partner across design and build",
      "Organizations that value clarity, responsiveness, and follow-through",
    ],
  },
  {
    title: "What clients usually need",
    items: [
      "A clearer digital presence and better first impressions",
      "More dependable execution on an important digital initiative",
      "Systems that feel easier to use and easier to manage",
      "A partner who can continue after the initial launch",
    ],
  },
] as const;

export const principles = [
  "Clear communication over unnecessary complexity",
  "Practical product thinking grounded in business needs",
  "Professional design that builds credibility",
  "Delivery quality that respects timelines and detail",
] as const;

export const contactCards = [
  {
    title: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
    description: "Best for project outlines, requirements, and first discussions.",
  },
  {
    title: "Phone",
    value: company.phone,
    href: `tel:${company.phone.replace(/\s+/g, "")}`,
    description: "Useful when you want to talk through the need directly.",
  },
  {
    title: "WhatsApp",
    value: "Message Sachram Technologies",
    href: company.whatsapp,
    description: "Convenient for quick questions or an early conversation.",
  },
  {
    title: "LinkedIn",
    value: "Sachram Technologies",
    href: company.linkedin,
    description: "Follow the company and connect in a professional context.",
  },
] as const;
