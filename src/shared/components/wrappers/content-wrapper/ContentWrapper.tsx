import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ContentWrapperProps {
  children: ReactNode;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

export const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return (
    <motion.section
      className="mt-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.section>
  );
};
