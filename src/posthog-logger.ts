import posthog from "@/posthog";

export const portfolioLogger = {
  contactFormDelivered() {
    posthog.logger.info("contact form delivered", { delivery_service: "formsubmit" });
  },
  projectDetailsOpened(projectTitle: string) {
    posthog.logger.info("project details opened", { project_title: projectTitle });
  },
  consultationRequested(market: "PKR" | "AED") {
    posthog.logger.info("roi consultation requested", { market });
  },
};
