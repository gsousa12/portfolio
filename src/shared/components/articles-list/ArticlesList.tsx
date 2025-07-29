import { articlesListData } from "@/shared/datas/articles-data";

export const ArticlesList = () => {
  const articlesList = articlesListData;
  return (
    <div>
      {articlesList.map((article, index) => (
        <div
          key={index}
          className="flex items-center justify-between py-3 px-2 mt-3 hover:bg-gray-50 transition-colors"
          style={{
            borderBottom:
              index !== articlesList.length - 1 ? "1px solid #e5e7eb" : "none",
          }}
        >
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-500">{article.date}</span>
            <h3 className="text-base font-bold text-gray-900">
              {article.title}
            </h3>
          </div>
          <a
            href={article.navigateTo}
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            Ler mais
          </a>
        </div>
      ))}
    </div>
  );
};
