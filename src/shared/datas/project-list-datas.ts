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
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1358/1*8DxENfn29bzwA00jFUTCFA.png",
    websiteUrl: null,
    codeUrl: "https://github.com/gsousa12/leaky-bucket",
  },
];
