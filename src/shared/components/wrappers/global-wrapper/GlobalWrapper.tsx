import { ReactNode } from "react";
import { useRedirectToHome } from "@hooks/useRedirectToHome";

interface GlobalWrapperProps {
  children: ReactNode;
}

export const GlobalWrapper = ({ children }: GlobalWrapperProps) => {
  useRedirectToHome();
  return (
    <div className="mx-auto p-2 max-w-[95ch] text-left break-words overflow-wrap-break leading-normal text-sm">
      {children}
    </div>
  );
};
