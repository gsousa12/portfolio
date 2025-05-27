import { ReactNode } from "react";
import { GithubSGV } from "../sgvs/GithubSGV";
import { LinkedinSGV } from "../sgvs/LinkedinSGV";

type SocialIconName = "github" | "linkedin";

export interface SocialItem {
  title: string;
  icon: SocialIconName;
  href: string;
}

interface SocialBoxProps {
  socialItems: SocialItem[];
}

const iconComponents: Record<SocialIconName, ReactNode> = {
  github: <GithubSGV />,
  linkedin: <LinkedinSGV />,
};

export const SocialBox = ({ socialItems }: SocialBoxProps) => {
  return (
    <div className="flex items-center gap-4">
      {socialItems.map((item) => (
        <a
          key={item.title}
          href={item.href}
          title={item.title}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          {iconComponents[item.icon]}
        </a>
      ))}
    </div>
  );
};
