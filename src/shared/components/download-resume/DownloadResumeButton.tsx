import { FileDown } from "lucide-react";
import { memo } from "react";

const CV_PATH = "/gabriel-sousa-cv.pdf";

export const DownloadResumeButton = memo(() => {
  return (
    <a
      href={CV_PATH}
      download="gabriel-sousa-cv.pdf"
      className="
        flex items-center gap-1 rounded-md px-2 py-1
        text-sm font-medium bg-sky-500 text-white
        hover:bg-sky-600 
      "
    >
      <FileDown className="w-4 h-4" />
      <span className="hidden sm:inline-block">Baixe meu currículo</span>
    </a>
  );
});

DownloadResumeButton.displayName = "DownloadResumeButton";
