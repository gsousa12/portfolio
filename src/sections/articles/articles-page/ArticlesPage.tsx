import { SectionTitle } from "@components/section-title/SectionTitle";
import { ContentWrapper } from "@components/wrappers/content-wrapper/ContentWrapper";

export const ArticlesPage = () => {
  return (
    <ContentWrapper>
      <div className="flex flex-col">
        <SectionTitle label="Artigos" />
      </div>
    </ContentWrapper>
  );
};
