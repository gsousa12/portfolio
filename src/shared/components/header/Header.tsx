import { menuItemsData } from "../../datas/header-datas";
import { HeaderLogo } from "../header-logo/HeaderLogo";
import { HeaderMenuItems } from "../header-menu-items/HeaderMenuItems";

export const Header = () => {
  return (
    <div className="flex justify-between">
      <HeaderLogo label="<Gabriel Sousa />" />
      <HeaderMenuItems menuItems={menuItemsData} />
    </div>
  );
};
