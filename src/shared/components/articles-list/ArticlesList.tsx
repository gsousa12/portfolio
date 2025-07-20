import { articlesListData } from "@/shared/datas/articles-data";
import { Fragment } from "react/jsx-runtime";

export const ArticlesList = () => {
  const articlesList = articlesListData;
  return (
    <Fragment>
      {articlesList.map((article, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 p-4 border border-gray-400 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <h3 className="text-lg font-semibold">{article.title}</h3>
          <p className="text-sm text-gray-600">{article.data}</p>
          <a
            href={article.navigateTo}
            className="text-blue-600 hover:underline"
          >
            Ler mais
          </a>
        </div>
      ))}
    </Fragment>
  );
};
