import { motion } from "framer-motion";
// import { ProjectItem, ProjectsListData } from "@datas/project-list-datas";
// import { ProjectCard } from "@components/project-card/ProjectCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// const itemVariants = {
//   hidden: { opacity: 0, scale: 0.9 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 150,
//       damping: 15,
//     } as const,
//   },
// };

export const ProjectsList = () => {
  // const projectsList: ProjectItem[] = ProjectsListData;

  return (
    <motion.div
      // className="grid gap-8 max-w-4xl mx-auto"
      className="" // temporario
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* {projectsList.map((project, index) => (
        <motion.div key={index} variants={itemVariants}>
          <ProjectCard project={project} />
        </motion.div>
      ))} */}
      <span>Em contrução...</span>
    </motion.div>
  );
};
