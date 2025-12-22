import { SocialItem } from "@components/social-box/SocialBox";

export const socialItemsData: SocialItem[] = [
  { title: "Github", icon: "github", href: "https://github.com/gsousa12/" },
  {
    title: "Linkedin",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/gabriel-sousa12/",
  },
];

export const stacksData = [
  {
    category: "Backend",
    techs: [" NodeJs", "NestJs", "Fastify", "Express"],
  },
  {
    category: "Frontend",
    techs: ["React", "Tailwind", "NextJs", "SCss"],
  },
  {
    category: "Database",
    techs: ["Postgres", "Redis", "Mongo"],
  },
  {
    category: "Ferramentas",
    techs: ["RabbitMQ", "Prisma", "TypeORM", "Docker", "Git", "Jest"],
  },
];
