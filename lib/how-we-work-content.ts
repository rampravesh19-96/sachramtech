import { processSteps } from "@/lib/site-content";

export type WorkExpectation = {
  title: string;
  description: string;
};

export type CollaborationModel = {
  title: string;
  description: string;
};

export type EngagementFit = {
  title: string;
  description: string;
};

export const deliveryOverview = [
  "Projects usually begin with a short conversation about the business context, the need, and whether the engagement is the right fit on both sides.",
  "From there, we clarify priorities, shape the right scope, and move through design, build, review, and launch with communication that stays practical.",
  "The purpose of the process is simple: make the work easier to understand, easier to review, and easier to deliver properly.",
] as const;

export const deliveryStages = processSteps.map((step, index) => ({
  ...step,
  heading:
    index === processSteps.length - 1 ? "Support and iteration" : step.title,
}));

export const clientExpectations: WorkExpectation[] = [
  {
    title: "Visible progress",
    description:
      "We keep decisions, milestones, and next steps visible so clients are not left guessing where the work stands.",
  },
  {
    title: "Calm decision-making",
    description:
      "We try to make decisions with enough context and enough discipline that the project moves forward without unnecessary churn.",
  },
  {
    title: "Attention to implementation quality",
    description:
      "Design and engineering choices are made with usability, maintainability, and long-term clarity in mind, not just short-term output.",
  },
  {
    title: "Review that improves the outcome",
    description:
      "We expect the work to improve through review and iteration rather than relying on one large reveal at the end.",
  },
] as const;

export const collaborationModels: CollaborationModel[] = [
  {
    title: "Remote-first collaboration",
    description:
      "Most engagements can run effectively through structured remote communication, regular reviews, and clearly captured decisions.",
  },
  {
    title: "Support for existing teams",
    description:
      "We can work alongside internal stakeholders, founders, or in-house product and engineering teams when responsibilities are defined clearly.",
  },
  {
    title: "Scaled to the engagement",
    description:
      "The amount of structure should match the size of the work. Smaller projects do not need heavy process, while broader engagements benefit from clearer staging.",
  },
  {
    title: "Feedback that stays useful",
    description:
      "We prefer review cycles that help refine the product rather than scattered feedback that adds motion without improving the outcome.",
  },
] as const;

export const bestFitEngagements: EngagementFit[] = [
  {
    title: "New product or digital presence work",
    description:
      "A strong fit for teams launching a new website, app, product interface, or internal tool and wanting a more considered delivery process from the start.",
  },
  {
    title: "Improvement work on existing systems",
    description:
      "Useful for businesses refining a current product, redesigning a key experience, or rebuilding part of a system that no longer supports the business well.",
  },
  {
    title: "Teams that value a steady working relationship",
    description:
      "The best engagements usually involve clients who value honest communication, practical decisions, and a partner who stays engaged through the important parts of delivery.",
  },
] as const;
