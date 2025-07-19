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
      "A rate limit implementation using the leaky bucket algorithm.",
    stack: ["ElysiaJs", "Redis", "TypeScript"],
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1358/1*8DxENfn29bzwA00jFUTCFA.png",
    websiteUrl: null,
    codeUrl: "https://github.com/gsousa12/leaky-bucket",
  },
];
