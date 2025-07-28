import { ReactNode } from "react";

interface ArticleWrapperProps {
  children: ReactNode;
}

export const ArticleWrapper = ({ children }: ArticleWrapperProps) => {
  return <section className="mt-8">{children}</section>;
};
