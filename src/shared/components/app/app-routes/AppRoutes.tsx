import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../../not-found-page/NotFoundPage";
import { HomePage } from "../../../../sections/home/home-page/HomePage";

export const AppRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </main>
  );
};
