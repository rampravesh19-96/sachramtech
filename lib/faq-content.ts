export type FaqItem = {
  question: string;
  answer: string;
  links?: {
    label: string;
    href: string;
  }[];
};

export type FaqSection = {
  title: string;
  intro: string;
  items: FaqItem[];
};

export type FaqStructuredDataItem = {
  "@type": "Question";
  name: string;
  acceptedAnswer: {
    "@type": "Answer";
    text: string;
  };
};

export const faqSections: FaqSection[] = [
  {
    title: "Company and fit",
    intro:
      "These questions clarify what kind of company Sachram Technologies is and where the fit is usually strongest.",
    items: [
      {
        question: "What does Sachram Technologies help clients with?",
        answer:
          "Sachram Technologies helps clients with websites, web applications, mobile apps, UI/UX design, and custom software for internal or customer-facing use. Most engagements sit where clear design, dependable execution, and practical business needs meet.",
        links: [
          { label: "Services", href: "/services" },
          { label: "About the company", href: "/about" },
        ],
      },
      {
        question: "What kinds of businesses is Sachram Technologies best suited for?",
        answer:
          "We are usually a good fit for startups, growing businesses, and teams that need a dependable partner for websites, product interfaces, mobile experiences, or operational software. The strongest fit tends to be a business that values clear communication and thoughtful execution.",
      },
      {
        question: "Do you work only with startups, or also with growing businesses?",
        answer:
          "Both. We can be a useful partner for early-stage founders shaping an initial product or presence, as well as for established and growing businesses improving an existing website, app, or internal system.",
      },
    ],
  },
  {
    title: "Services",
    intro:
      "These questions explain the main kinds of digital work we take on.",
    items: [
      {
        question: "Do you build websites and web applications?",
        answer:
          "Yes. We work on company websites, landing pages, web applications, dashboards, portals, and other browser-based digital products where performance, clarity, and maintainability matter.",
        links: [{ label: "Web development", href: "/web-development" }],
      },
      {
        question: "Do you develop mobile apps?",
        answer:
          "Yes. We support mobile app development for businesses that need customer-facing app experiences, operational mobile tools, or mobile-first product flows.",
        links: [{ label: "Mobile app development", href: "/mobile-app-development" }],
      },
      {
        question: "Do you provide UI/UX design services?",
        answer:
          "Yes. UI/UX design is one of our core service areas. We help shape journeys, improve interfaces, reduce friction, and make digital experiences easier to understand.",
        links: [{ label: "UI/UX design", href: "/ui-ux-design" }],
      },
      {
        question: "Do you build custom internal software or operational tools?",
        answer:
          "Yes. We help businesses design and build custom software for internal workflows, operational systems, dashboards, reporting tools, and tailored process support where generic tools are no longer a good fit.",
        links: [{ label: "Custom software development", href: "/custom-software-development" }],
      },
    ],
  },
  {
    title: "Process and engagement",
    intro:
      "These questions help visitors understand how a project usually starts and how collaboration is handled.",
    items: [
      {
        question: "How does a project usually begin?",
        answer:
          "A project usually begins with a short discovery conversation. We discuss the business context, the current challenge, the kind of outcome you need, and whether the work is a good fit before moving into planning.",
      },
      {
        question: "What information should I prepare before contacting you?",
        answer:
          "A short summary of the problem, the type of product or service you need, the current situation, and any timeline or delivery priorities is usually enough to start. If the scope is still forming, that is fine too.",
        links: [{ label: "Contact", href: "/contact" }],
      },
      {
        question: "How do you handle project planning and delivery?",
        answer:
          "We usually work in clear phases with sensible milestones and straightforward communication. That means understanding requirements first, shaping the right approach, and then moving through delivery with regular review points.",
        links: [{ label: "How we work", href: "/how-we-work" }],
      },
      {
        question: "Will I have a clear point of contact?",
        answer:
          "Yes. We aim to keep communication organized so you know who to speak to, what is being reviewed, and what comes next.",
      },
      {
        question: "How do you communicate during a project?",
        answer:
          "We communicate through regular updates, milestone reviews, and practical discussions around scope, design, implementation, and delivery decisions. The aim is to keep the project understandable without overloading it with noise.",
      },
    ],
  },
  {
    title: "Timelines, support, and practical questions",
    intro:
      "These answers cover the practical questions that often shape whether someone is ready to enquire.",
    items: [
      {
        question: "How long does a typical project take?",
        answer:
          "That depends on the scope, complexity, and whether the work starts from scratch or improves something that already exists. Smaller website or design engagements may move faster, while broader software work naturally takes longer. We usually clarify timelines after understanding the requirements properly.",
      },
      {
        question: "Can you work on both new projects and improvements to existing products?",
        answer:
          "Yes. We can support both greenfield builds and improvement work on existing websites, interfaces, products, or software systems.",
      },
      {
        question: "Do you handle maintenance and post-launch support?",
        answer:
          "Yes. We can continue supporting the work after launch through fixes, refinements, and follow-on improvements where that makes sense.",
      },
      {
        question: "Can you work with remote clients?",
        answer:
          "Yes. Remote collaboration is completely workable for many projects as long as communication, review, and decision-making remain clear.",
      },
      {
        question: "Can you collaborate with an in-house team?",
        answer:
          "Yes. We can work alongside internal teams where responsibilities, communication, and delivery scope are clearly defined.",
      },
      {
        question: "How do I get started?",
        answer:
          "The simplest way to get started is to contact us with a short project summary. We can then discuss the problem, the likely scope, and whether there is a good fit for the work.",
        links: [
          { label: "Contact us", href: "/contact" },
          { label: "View services", href: "/services" },
        ],
      },
    ],
  },
];

export const faqStructuredDataItems: FaqStructuredDataItem[] = faqSections.flatMap(
  (section) =>
    section.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
);
