export type ProjectItem = {
  name: string;
  description: string;
  stack: string[];
  imageUrl: string;
  websiteUrl: string | null;
  codeUrl: string;
};

export const ProjectsListData: ProjectItem[] = [
  {
    name: "Beuni Challenge",
    description:
      "Full-stack project organized as a monorepo using pnpm workspace, enabling efficient package sharing across services (client, API, and services). The API is designed for integration with external services, featuring a worker implemented with BullMQ for asynchronous processing. The front-end is built with React and styled using TailwindCSS, delivering modern and responsive interfaces. Additional features include scheduled tasks (cronjobs), messaging via Redis and BullMQ, simulated communication with external APIs, and comprehensive project documentation to support maintenance and future development.",
    stack: ["NodeJs", "Fastify", "Redis", "Postgres", "React"],
    imageUrl: "https://i.imgur.com/G3vZF5G.png",
    websiteUrl: null,
    codeUrl: "https://github.com/gsousa12/desafio-beuni",
  },
];
