import { Header } from "../../header/Header";
import { GlobalWrapper } from "../../wrappers/global-wrapper/GlobalWrapper";
import { AppRoutes } from "../app-routes/AppRoutes";

export const AppLayout = () => {
  return (
    <GlobalWrapper>
      <Header />
      <AppRoutes />
    </GlobalWrapper>
  );
};
