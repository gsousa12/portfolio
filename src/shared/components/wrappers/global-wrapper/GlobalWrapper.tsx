import { ReactNode } from "react";

interface GlobalWrapperProps {
  children: ReactNode;
}

export const GlobalWrapper = ({ children }: GlobalWrapperProps) => {
  return (
    <div className="mx-auto p-5 max-w-[79ch] text-left break-words overflow-wrap-break leading-normal text-sm">
      {children}
    </div>
  );
};
