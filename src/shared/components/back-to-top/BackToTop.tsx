import { useMobileDetect } from "@/shared/hooks/useMobileDetect";
import { useEffect, useState } from "react";

export const BackToTop = () => {
  const isMobile = useMobileDetect();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <button
        onClick={() => window.scrollTo({ top: 0 })}
        aria-label="Scroll to top"
        className={`${
          isVisible ? "opacity-100" : "opacity-0"
        } fixed z-10 items-center gap-2 rounded bg-zinc-50 py-2 pl-4
         pr-4 ring-1 ring-zinc-400 transition-all hover:cursor-pointer hover:bg-zinc-100 ${
           isMobile ? " bottom-8 right-8" : "right-8 top-8 flex"
         }`}
      >
        ▲ {!isMobile && "Voltar ao topo"}
      </button>
    </>
  );
};
