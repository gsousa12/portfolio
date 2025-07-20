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
    name: "Rate Limit with Leaky Bucket",
    description:
      "API de estudo de rate-limiting com o algoritmo Leaky Bucket, utilizando Elysia (Bun), Redis e TypeScript. Permite limitar requisições por chave de API de forma simples e rápida, com suporte a Docker e fallback automático em caso de falha no Redis.",
    stack: ["Bun", "ElysiaJs", "Redis", "TypeScript"],
    imageUrl: "https://redis.io/icon.png?306aa16e3a9db3c0",
    websiteUrl: null,
    codeUrl: "https://github.com/gsousa12/leaky-bucket",
  },
];
