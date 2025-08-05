import { menuItemsData } from "@datas/menu-items-data";
import { HeaderMenuItems } from "@components/header-menu-items/HeaderMenuItems";
// import { DownloadResumeButton } from "../download-resume/DownloadResumeButton";

export const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <HeaderMenuItems menuItems={menuItemsData} />
      {/* <DownloadResumeButton /> */}
    </header>
  );
};
