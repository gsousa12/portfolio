export type ArticleData = {
  title: string;
  data: string;
  navigateTo: string;
};

export const articlesListData: ArticleData[] = [
  {
    title: "Criando um Rate Limit com Leaky Bucket",
    data: "20 Jun, 2025",
    navigateTo: "/articles/rate-limit-with-leaky-bucket",
  },
];
