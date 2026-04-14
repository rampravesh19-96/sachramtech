export const company = {
  name: "Sachram Technologies",
  tagline: "Product engineering, software delivery, and design for ambitious teams.",
  email: "sachramtech@gmail.com",
  phone: "+91 73208 63504",
  whatsapp: "https://wa.me/917320863504",
  linkedin: "https://www.linkedin.com/company/sachram-technologies",
  website: "https://sachramtech.vercel.app",
  address:
    "Hyderabad, Telangana, India",
};

export const heroPillars = [
  "Product strategy that stays grounded in delivery reality",
  "Interface and brand presentation that feels credible from first contact",
  "Engineering quality shaped for launch, iteration, and long-term support",
] as const;

export const primaryNav = [
  { label: "Services", href: "/services" },
  { label: "Process", href: "/#process", sectionId: "process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const serviceCards = [
  {
    title: "Web Development",
    description:
      "Responsive websites, product platforms, dashboards, and internal tools built for speed, clarity, and long-term maintainability.",
    highlights: ["Next.js applications", "Responsive frontends", "Admin dashboards"],
  },
  {
    title: "Mobile App Development",
    description:
      "Mobile experiences designed to feel polished, useful, and reliable across modern iOS and Android usage patterns.",
    highlights: ["Cross-platform builds", "Customer apps", "Operational mobility"],
  },
  {
    title: "UI/UX Design",
    description:
      "Interface systems, product flows, and visual direction that improve usability while keeping the brand credible and refined.",
    highlights: ["Product UX", "Design systems", "Conversion-focused layouts"],
  },
  {
    title: "Custom Software Solutions",
    description:
      "Tailored systems for teams that have outgrown generic tools and need software aligned to the way their business actually works.",
    highlights: ["Workflow automation", "Internal systems", "Operational software"],
  },
  {
    title: "Product Development",
    description:
      "From initial concept to launch-ready product, with support across planning, design, engineering, and release execution.",
    highlights: ["MVP development", "Feature delivery", "Launch readiness"],
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing improvements, issue resolution, performance tuning, and post-launch support that keep products stable and evolving.",
    highlights: ["Bug resolution", "Enhancement cycles", "Technical stewardship"],
  },
] as const;

export const differentiators = [
  {
    title: "Structured delivery",
    description:
      "We work with clear milestones, defined ownership, and practical communication so projects stay organized from start to finish.",
  },
  {
    title: "Business-aware execution",
    description:
      "We do not just ship screens and features. We pay attention to business goals, workflow reality, and the customer experience behind the build.",
  },
  {
    title: "Design that supports trust",
    description:
      "Our design approach focuses on clarity, usability, and confidence so every product feels credible to the people who use it.",
  },
  {
    title: "Long-term maintainability",
    description:
      "We aim for codebases and product structures that remain understandable and extendable after launch, not just during delivery.",
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
      "Company websites and growth-focused landing pages",
      "Customer-facing SaaS products and portals",
      "Operational dashboards and internal tools",
      "Brand-aligned mobile app experiences",
    ],
  },
  {
    title: "Who we work well with",
    items: [
      "Early-stage founders shaping their first product",
      "Growing businesses modernizing digital operations",
      "Teams that need a design + development partner",
      "Organizations that value clarity and responsiveness",
    ],
  },
  {
    title: "What clients usually need",
    items: [
      "Sharper product positioning and user experience",
      "Reliable execution with regular communication",
      "Systems that scale beyond quick prototypes",
      "A partner who can stay involved after launch",
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
    description: "For project discussions, briefs, and first conversations.",
  },
  {
    title: "Phone",
    value: company.phone,
    href: `tel:${company.phone.replace(/\s+/g, "")}`,
    description: "For direct conversations when you want to move quickly.",
  },
  {
    title: "WhatsApp",
    value: "Message Sachram Technologies",
    href: company.whatsapp,
    description: "A convenient option for quick questions and early discussions.",
  },
  {
    title: "LinkedIn",
    value: "Sachram Technologies",
    href: company.linkedin,
    description: "Follow the company and connect professionally.",
  },
] as const;
