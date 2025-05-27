import { Link } from "react-router-dom";

interface Item {
  label: string;
  href: string;
}

interface HeaderMenuItemsProps {
  menuItems: Item[];
}

export const HeaderMenuItems = ({ menuItems }: HeaderMenuItemsProps) => {
  return (
    <div className="flex gap-5">
      {menuItems.map((item) => (
        <Link to={item.href}>
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
};
