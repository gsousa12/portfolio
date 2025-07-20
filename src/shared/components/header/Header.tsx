import { menuItemsData } from "@datas/menu-items-data";
import { HeaderMenuItems } from "@components/header-menu-items/HeaderMenuItems";

export const Header = () => {
  return (
    <div className="flex justify-between">
      <HeaderMenuItems menuItems={menuItemsData} />
    </div>
  );
};
