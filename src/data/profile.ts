export interface ExperienceRole {
  period: string;
  title: string;
  stack: string[];
}

export interface Experience {
  company: string;
  roles: ExperienceRole[];
}

export const profile = {
  givenName: 'Gabriel',
  familyName: 'Sousa',
  role: 'Software Engineer',
  linkedin: {
    username: 'gabriel-sousa12',
    href: 'https://www.linkedin.com/in/gabriel-sousa12/',
  },
  github: {
    username: 'gsousa12',
    href: 'https://github.com/gsousa12',
  },
} as const;

export const experiences: Experience[] = [
  {
    company: 'FitBank',
    roles: [
      {
        period: 'mai. de 2024 — out. de 2024',
        title: 'Quality Assurance',
        stack: ['.NET', 'SQL', 'Redis', 'MongoDB', 'K6', 'Azure DevOps'],
      },
      {
        period: 'out. de 2024 — mar. de 2025',
        title: 'Full Stack Developer',
        stack: ['.NET', 'TypeScript/JavaScript', 'React', 'SQL', 'MongoDB', 'Redis', 'Azure DevOps'],
      },
    ],
  },
  {
    company: 'Lawgic',
    roles: [
      {
        period: 'set. de 2025 — o momento',
        title: 'Full Stack Developer',
        stack: [
          'TypeScript/JavaScript',
          'Python',
          'React',
          'Node.js',
          'Express/Fastify',
          'NestJS',
          'SQL',
          'MongoDB',
          'Redis',
          'AWS SQS',
          'RPAs',
        ],
      },
    ],
  },
];
