import { ContentWrapper } from "../../../shared/components/wrappers/content-wrapper/ContentWrapper";
import { SectionTitle } from "../../../shared/components/section-title/SectionTitle";
import { ProjectsList } from "../../../shared/components/projects-list/ProjectsList";

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
