import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../../not-found-page/NotFoundPage";
import { HomePage } from "@home/home-page/HomePage";
import { ArticlesPage } from "@articles/articles-page/ArticlesPage";
import { ProjectsPage } from "@projects/projects-page/ProjectsPage";
import { RateLimitLeakyBucket } from "@articles/contents/rate-limit-with-leaky-bucket/RateLimitLeakyBucket";

export const AppRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route
          path="/articles/rate-limit-with-leaky-bucket"
          element={<RateLimitLeakyBucket />}
        />
      </Routes>
    </main>
  );
};
