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
    name: "Notification System",
    description:
      "Sistema de Notificações com Garantia de Entrega. Fastify(Node) + BullMQ (Redis) + Mongo + ReactJs. Filas persistentes e retry de falhas (BullMQ) e client React com real-time via WebSockets.",
    stack: ["NodeJs", "Fastify", "Redis", "Mongo", "React"],
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1400/1*V8vAkYA9QOi-gLKh68mtOg.jpeg",
    websiteUrl: null,
    codeUrl: "https://github.com/gsousa12/notification-system",
  },
  {
    name: "Rate Limit with Leaky Bucket",
    description:
      "API de estudo de rate-limiting com o algoritmo Leaky Bucket, utilizando Elysia (Bun), Redis e TypeScript. Permite limitar requisições por chave de API de forma simples e rápida, com suporte a Docker e fallback automático em caso de falha no Redis.",
    stack: ["Bun", "ElysiaJs", "Redis", "TypeScript"],
    imageUrl: "https://redis.io/icon.png?306aa16e3a9db3c0",
    websiteUrl: null,
    codeUrl: "https://github.com/gsousa12/leaky-bucket",
  },
];
