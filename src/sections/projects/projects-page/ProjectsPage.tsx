import { ContentWrapper } from "@components/wrappers/content-wrapper/ContentWrapper";
import { SectionTitle } from "@components/section-title/SectionTitle";
import { ProjectsList } from "@components/projects-list/ProjectsList";

export const ProjectsPage = () => {
  return (
    <ContentWrapper>
      <div className="flex flex-col">
        <SectionTitle label="Projetos" />
        <ProjectsList />
      </div>
    </ContentWrapper>
  );
};
