import { ReactNode } from "react";
import { GithubSGV } from "@components/sgvs/GithubSGV";
import { LinkedinSGV } from "@components/sgvs/LinkedinSGV";
import { motion } from "framer-motion";

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
    <div className="flex items-center gap-4 mt-4 mb-4">
      {socialItems.map((item) => (
        <motion.a
          key={item.title}
          href={item.href}
          title={item.title}
          className="p-2 rounded-full transition-colors"
          target="_blank"
          whileHover={{ scale: 1.2, backgroundColor: "#f3f4f6" }}
        >
          {iconComponents[item.icon]}
        </motion.a>
      ))}
    </div>
  );
};
