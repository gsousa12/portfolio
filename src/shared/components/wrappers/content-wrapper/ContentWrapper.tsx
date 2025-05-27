import { ReactNode } from "react";

interface ContentWrapperProps {
  children: ReactNode;
}

export const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return <section className="mt-8">{children}</section>;
};
