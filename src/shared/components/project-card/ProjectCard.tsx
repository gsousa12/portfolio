import { ProjectItem } from "@datas/project-list-datas";
import { getStackColors } from "@utils/utils";
import { ActionButton } from "@components/action-button/ActionButton";
import { Badge } from "@components/badge/Badge";
import { GlobeSGV } from "@components/sgvs/GlobeSGV";
import { SquareCodeSGV } from "@components/sgvs/SquareCodeSGV";

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-400 overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="p-4 md:p-6 border-b border-gray-400 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-center md:text-left">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900">
          {project.name}
        </h3>

        <div className="flex gap-2 flex-wrap justify-center md:justify-start">
          {project.stack.map((tech) => {
            const { color, labelColor } = getStackColors(tech);
            return (
              <Badge
                key={tech}
                label={tech}
                color={color}
                labelColor={labelColor}
              />
            );
          })}
        </div>
      </div>

      <div className="p-4 md:p-6 border-b border-gray-400">
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          {project.description}
        </p>
      </div>

      <div className="border-b border-gray-400 hidden md:block">
        <div className="w-full h-64 lg:h-80 xl:h-[324px]">
          <img
            src={project.imageUrl}
            alt={project.name}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex">
        {project.websiteUrl ? (
          <>
            <ActionButton
              href={project.websiteUrl}
              icon={<GlobeSGV />}
              label="Website"
              className="flex-1 rounded-bl-lg border-r-0"
            />
            <ActionButton
              href={project.codeUrl}
              icon={<SquareCodeSGV />}
              label="Source Code"
              className="flex-1 rounded-br-lg"
            />
          </>
        ) : (
          <ActionButton
            href={project.codeUrl}
            icon={<SquareCodeSGV />}
            label="Source Code"
            className="w-full rounded-b-lg"
          />
        )}
      </div>
    </div>
  );
};
