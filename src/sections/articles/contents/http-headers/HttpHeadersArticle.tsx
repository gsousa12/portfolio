import { ArticleHeader } from "@/shared/components/article/article-header/ArticleHeader";
import { ArticleWrapper } from "@/shared/components/wrappers/article-wrapper/ArticleWrapper";
import { articlesListData } from "@/shared/datas/articles-data";

export const HttpHeadersArticle = () => {
  const articleData = articlesListData[0];
  return (
    <ArticleWrapper>
      <ArticleHeader
        data={articleData.data}
        title={articleData.title}
        tags={["http,api"]}
      />
    </ArticleWrapper>
  );
};
