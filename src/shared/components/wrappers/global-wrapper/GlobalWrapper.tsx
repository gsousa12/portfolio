import { ReactNode } from "react";

interface GlobalWrapperProps {
  children: ReactNode;
}

export const GlobalWrapper = ({ children }: GlobalWrapperProps) => {
  return (
    <div className="bg-white text-gray-900 min-h-screen mx-30 my-5">
      {children}
    </div>
  );
};
