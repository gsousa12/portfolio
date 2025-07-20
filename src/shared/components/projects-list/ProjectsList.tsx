import { ProjectItem, ProjectsListData } from "@datas/project-list-datas";
import { ProjectCard } from "@components/project-card/ProjectCard";

export const ProjectsList = () => {
  const projectsList: ProjectItem[] = ProjectsListData;

  return (
    <div className="grid gap-8 max-w-4xl mx-auto">
      {projectsList.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};
