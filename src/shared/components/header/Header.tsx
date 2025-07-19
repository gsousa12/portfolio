import { menuItemsData } from "../../datas/header-datas";
import { HeaderMenuItems } from "../header-menu-items/HeaderMenuItems";

export const Header = () => {
  return (
    <div className="flex justify-between">
      <HeaderMenuItems menuItems={menuItemsData} />
    </div>
  );
};
