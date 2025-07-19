import { Link, useLocation } from "react-router-dom";

interface Item {
  label: string;
  href: string;
}

interface HeaderMenuItemsProps {
  menuItems: Item[];
}

export const HeaderMenuItems = ({ menuItems }: HeaderMenuItemsProps) => {
  const location = useLocation();

  return (
    <nav className="flex gap-3">
      {menuItems.map((item) => {
        const isActive = location.pathname === item.href;

        return (
          <Link
            key={item.href}
            to={item.href}
            className={`flex flex-col items-center px-1 ${
              location.pathname === item.href ? "font-bold" : ""
            }`}
          >
            <span>{item.label}</span>

            {isActive && (
              <span
                className="
                  mt-1               
                  w-1 h-1            
                  border-x-4 border-x-transparent
                  border-t-0        
                  border-b-4 border-b-blue-500
                "
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
};
