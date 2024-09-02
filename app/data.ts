import { BiSolidEnvelope } from 'react-icons/bi';
import {
  SiCloudflare,
  SiCss3,
  SiDocker,
  SiGit,
  SiGithub,
  SiLinkedin,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiX,
} from 'react-icons/si';

export const helpCommand = [
  {
    title: 'bio',
    info: 'Show my bio information',
  },
  {
    title: 'skills',
    info: 'List out all my skills',
  },
  {
    title: 'projects',
    info: 'List out my projects',
  },
  {
    title: 'contact',
    info: 'Show my contact details',
  },
  {
    title: 'exit',
    info: 'Exit the dev mode',
  },
  {
    title: 'clear',
    info: 'Clear the terminals',
  },
];

export const skillsCommand = [
  {
    title: 'React',
    Icon: SiReact,
    level: 80,
  },
  {
    title: 'Nextjs',
    Icon: SiNextdotjs,
    level: 90,
  },
  {
    title: 'Tailwind',
    Icon: SiTailwindcss,
    level: 85,
  },
  {
    title: 'MongoDB',
    Icon: SiMongodb,
    level: 70,
  },
  {
    title: 'Postgres',
    Icon: SiPostgresql,
    level: 75,
  },
  {
    title: 'Prisma',
    Icon: SiPrisma,
    level: 65,
  },
  {
    title: 'Nodejs',
    Icon: SiNodedotjs,
    level: 80,
  },
  {
    title: 'Git',
    Icon: SiGit,
    level: 85,
  },
  {
    title: 'Docker',
    Icon: SiDocker,
    level: 60,
  },
];

export const projectsCommand = [
  {
    title: 'Lyric Web App',
    tech: [SiNextdotjs, SiTailwindcss, SiPrisma, SiPostgresql],
    link: 'https://www.bisaric.com',
    cover: '/project-4.png',
    background: 'bg-green-500',
  },
  {
    title: 'Portfolio',
    tech: [SiNextdotjs, SiTailwindcss, SiPrisma, SiMongodb],
    link: '#',
    cover: '/project-1.png',
    background: 'bg-indigo-500',
  },
  {
    title: 'Blogging Website',
    tech: [SiReact, SiTailwindcss, SiPrisma, SiPostgresql, SiCloudflare],
    link: 'https://blog-serverless-backend.vercel.app/',
    cover: '/project-2.png',
    background: 'bg-indigo-500',
  },
  {
    title: 'Renewable Resource',
    tech: [SiNextdotjs, SiCss3],
    link: 'https://renewable-resources.vercel.app/',
    cover: '/project-3.png',
    background: 'bg-green-500',
  },
];

export const contactCommand = [
  {
    title: 'Github',
    icon: SiGithub,
    username: '@thapasijan171',
    link: 'https://github.com/thapasijan171',
  },
  {
    title: 'Twitter',
    icon: SiX,
    username: '@sijanthapa',
    link: 'https://twitter.com/thapasijan171',
  },
  {
    title: 'LinkedIn',
    icon: SiLinkedin,
    username: '@sijanthapa',
    link: 'https://www.linkedin.com/in/sijanlamichhanemagar171/',
  },
  {
    title: 'Email',
    icon: BiSolidEnvelope,
    username: 'sijanlamichhanemagar906@gmail.com',
    link: 'mailto:sijanlamichhanemagar906@gmail.com',
  },
];
