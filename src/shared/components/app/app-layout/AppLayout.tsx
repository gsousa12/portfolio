import { Fragment } from "react/jsx-runtime";
import { Footer } from "../../footer/Footer";
import { Header } from "../../header/Header";
import { GlobalWrapper } from "../../wrappers/global-wrapper/GlobalWrapper";
import { AppRoutes } from "../app-routes/AppRoutes";
import { BackToTop } from "../../back-to-top/BackToTop";

export const AppLayout = () => {
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
