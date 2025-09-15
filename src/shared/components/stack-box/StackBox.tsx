import { motion } from "framer-motion";

export interface Stack {
  category: string;
  techs: string[];
}

interface StackBoxProps {
  stacks: Stack[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export const StackBox = ({ stacks }: StackBoxProps) => (
  <section aria-labelledby="stacks-title">
    <h2
      id="stacks-title"
      className="mb-6 text-lg md:text-xl font-semibold tracking-tight text-gray-900"
    >
      Technology Stack:
    </h2>
    <motion.div
      className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {stacks.map(({ category, techs }) => (
        <motion.article
          key={category}
          variants={itemVariants as any}
          className="group relative rounded-xl border border-gray-300
                     bg-white/60 
                     backdrop-blur p-4 transition-shadow hover:shadow-md"
        >
          <h3 className="flex items-center mb-2 text-xs font-semibold uppercase tracking-widest text-gray-900">
            <span className="block h-1.5 w-1.5 rounded-full bg-white" />
            {category}
          </h3>

          <ul className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-indigo-50 text-gray-700
                           px-2.5 py-0.5 text-xs font-medium"
              >
                {tech.trim()}
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </motion.div>
  </section>
);
