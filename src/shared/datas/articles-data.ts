export type ArticleData = {
  title: string;
  date: string;
  tags: string[];
  navigateTo: string;
};

export const articlesListData: ArticleData[] = [
  {
    title: "Async Js - Entendendo javascript assíncrono",
    date: "20 Jun, 2025",
    tags: ["#asyncjs", "#callbackfunctions", "#nodejs"],
    navigateTo: "/articles/async-js",
  },
];
