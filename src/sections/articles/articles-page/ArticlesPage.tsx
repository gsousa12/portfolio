import { SectionTitle } from "../../../shared/components/section-title/SectionTitle";
import { ContentWrapper } from "../../../shared/components/wrappers/content-wrapper/ContentWrapper";

export const ArticlesPage = () => {
  return (
    <ContentWrapper>
      <div className="flex flex-col">
        <SectionTitle label="Artigos" />
      </div>
    </ContentWrapper>
  );
};
