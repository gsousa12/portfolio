import { useMobileDetect } from "../../hooks/useMobileDetect";

export const Footer = () => {
  const isMobile = useMobileDetect();
  const year = new Date().getFullYear();

  return (
    <footer
      className={`flex flex-col gap-1  text-sm ${
        isMobile ? " items-start mt-4" : " items-center py-8 mt-15"
      }`}
    >
      <div className="flex gap-4">
        <a
          href="https://github.com/gsousa12/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:underline"
        >
          Code
        </a>

        <a
          href="https://x.com/gabzin_dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:underline"
        >
          @gabzin_dev
        </a>
      </div>
      <span className="text-gray-900 mt-2">© {year} Gabriel Sousa</span>
    </footer>
  );
};
