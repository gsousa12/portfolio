import { Fragment } from "react/jsx-runtime";
import { Footer } from "@components/footer/Footer";
import { Header } from "@components/header/Header";
import { GlobalWrapper } from "@components/wrappers/global-wrapper/GlobalWrapper";
import { AppRoutes } from "@components/app/app-routes/AppRoutes";
import { BackToTop } from "@components/back-to-top/BackToTop";

export const App = () => {
  return (
    <Fragment>
      <BackToTop />
      <GlobalWrapper>
        <Header />
        <AppRoutes />
        <Footer />
      </GlobalWrapper>
    </Fragment>
  );
};
