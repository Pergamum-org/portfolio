import { FaReact, FaNodeJs, FaJava, FaPython, FaPhp, FaDocker, FaSass, FaBootstrap } from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { BiLogoCss3, BiLogoPostgresql } from 'react-icons/bi'
import { IoLogoJavascript } from 'react-icons/io'
import { SiTypescript, SiPrisma, SiTailwindcss, SiStorybook, SiMysql } from 'react-icons/si'
import { TbBrandNextjs, TbSql } from 'react-icons/tb'
import { RxStitchesLogo } from 'react-icons/rx'

export function getTecs(){
  return [
    {
      name: 'html',
      icon: <AiFillHtml5 size={32} weight='bold' />,
    },
    {
      name: 'css',
      icon: <BiLogoCss3 size={32} weight='bold' />,
    },
    {
      name: 'Javascript',
      icon: <IoLogoJavascript size={32} weight='bold' />,
    },
    {
      name: 'Typescript',
      icon: <SiTypescript size={32} weight='bold' />,
    },
    {
      name: 'Node.Js',
      icon: <FaNodeJs size={32} weight='bold' />,
    },
    {
      name: 'react.js',
      icon: <FaReact size={32} weight='bold' />,
    },
    {
      name: 'Next.js',
      icon: <TbBrandNextjs size={32} weight='bold' />,
    },
    {
      name: 'Sass',
      icon: <FaSass size={32} weight='bold' />,
    },
    {
      name: 'Stitches',
      icon: <RxStitchesLogo size={32} weight='bold' />,
    },
    {
      name: 'Bootstrap',
      icon: <FaBootstrap size={32} weight='bold' />,
    },
    {
      name: 'Tailwindcss',
      icon: <SiTailwindcss size={32} weight='bold' />,
    },
    {
      name: 'Story-Book',
      icon: <SiStorybook size={32} weight='bold' />,
    },
    {
      name: 'prisma',
      icon: <SiPrisma size={32} weight='bold' />,
    },
    {
      name: 'Java',
      icon: <FaJava size={32} weight='bold' />,
    },
    {
      name: 'Python',
      icon: <FaPython size={32} weight='bold' />,
    },
    {
      name: 'Php',
      icon: <FaPhp size={32} weight='bold' />,
    },
    {
      name: 'Docker',
      icon: <FaDocker size={32} weight='bold' />,
    },
    {
      name: 'Postgres',
      icon: <BiLogoPostgresql size={32} weight='bold' />,
    },
    {
      name: 'Sql',
      icon: <TbSql size={32} weight='bold' />,
    },
    {
      name: 'Mysql',
      icon: <SiMysql size={32} weight='bold' />,
    },
  ]
}