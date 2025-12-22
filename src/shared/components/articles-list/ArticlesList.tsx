import { motion } from "framer-motion";
// import { articlesListData } from "@/shared/datas/articles-data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 10,
//     } as const,
//   },
// };

export const ArticlesList = () => {
  // const articlesList = articlesListData;

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      {/* {articlesList.reverse().map((article, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="flex items-center justify-between py-3 px-2 mt-3 hover:bg-gray-50 transition-colors"
          style={{
            borderBottom:
              index !== articlesList.length - 1 ? "1px solid #e5e7eb" : "none",
          }}
        >
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-500">{article.date}</span>
            <h3 className="text-base font-bold text-gray-900">
              {article.title}
            </h3>
          </div>
          <a
            href={article.navigateTo}
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            Ler mais
          </a> */}
      {/* </motion.div>
      ))} */}
      <span>Em construção...</span>
    </motion.div>
  );
};
