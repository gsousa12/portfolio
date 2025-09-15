import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ArticleWrapperProps {
  children: ReactNode;
}

const articleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8,
    } as const,
  },
};

export const ArticleWrapper = ({ children }: ArticleWrapperProps) => {
  return (
    <motion.section
      className="mt-8"
      variants={articleVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.section>
  );
};
