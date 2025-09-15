import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

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
        const isActivePatch =
          item.href === "/articles"
            ? location.pathname.startsWith("/articles")
            : location.pathname === item.href;

        return (
          <Link
            key={item.href}
            to={item.href}
            className={`flex flex-col items-center px-1 ${
              isActivePatch ? "font-bold" : ""
            }`}
          >
            <motion.span
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
            </motion.span>

            {isActivePatch && (
              <motion.span
                className="mt-1 w-1 h-1 border-x-4 border-x-transparent border-t-0 border-b-4 border-b-blue-500"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
};
