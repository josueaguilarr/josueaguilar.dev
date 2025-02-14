import { type TechKeys, type Tech, type Project } from "@/utils/types";
import React from "@icons/React.svg";
import TypeScript from "@icons/TypeScript.svg";
import Tailwind from "@icons/Tailwind.svg";
import Supabase from "@icons/Supabase.svg";
import AstroIcon from "@icons/Astro.svg";
import Preact from "@icons/Preact.svg";
import CSS from "@icons/CSS.svg";
import Jest from "@icons/Jest.svg";
import PHP from "@icons/PHP.svg";
import JS from "@icons/JavaScrip.svg";
import Laravel from "@icons/Laravel.svg";
import MySQL from "@icons/Mysql.svg";
import MaterialUI from "@icons/MaterialUI.svg";
import Vue from "@icons/Vue.svg";


export const TECHS: Record<TechKeys, Tech> = {
  REACT: {
    name: "React",
    icon: React,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    icon: TypeScript,
  },
  TAILWIND: {
    name: "Tailwind",
    icon: Tailwind,
  },
  SUPABASE: {
    name: "Supabase",
    icon: Supabase,
  },
  ASTRO: {
    name: "Astro",
    icon: AstroIcon,
  },
  PREACT: {
    name: "Preact",
    icon: Preact,
  },
  CSS: {
    name: "CSS",
    icon: CSS
  },
  JEST: {
    name: "Jest",
    icon: Jest
  },
  PHP: {
    name: "PHP",
    icon: PHP
  },
  JS: {
    name: "JavaScript",
    icon: JS
  },
  LARAVEL: {
    name: "Laravel",
    icon: Laravel
  },
  MYSQL: {
    name: "MySQL",
    icon: MySQL
  },
  VUE: {
    name: "Vue",
    icon: Vue,
  },
  MATERIALUI: {
    name: "Material UI",
    icon: MaterialUI,
  }
};

export const PROJECTS: Project[] = [
  {
    title: "NotEz",
    description:
      "Notes platform, a simpler and more efficient way to organize your notes with groups and filters. Authentication integration and organize to your liking.",
    link: "https://notez-me.vercel.app",
    github: "NotEz",
    image: "/projects/notez.png",
    tags: [TECHS.REACT, TECHS.TYPESCRIPT, TECHS.SUPABASE, TECHS.TAILWIND],
  },
  {
    title: "DiscoverAI",
    description:
      "Free artificial intelligences with benefits for various sectors of daily life. Find tools that will improve your daily life.",
    link: "https://discover-ai.vercel.app/",
    github: "DiscoverAI",
    image: "/projects/discoverai.png",
    tags: [TECHS.ASTRO, TECHS.PREACT, TECHS.TYPESCRIPT, TECHS.TAILWIND],
  },
  {
    title: "SEIJUVE",
    description:
      "Free artificial intelligences with benefits for various sectors of daily life. Find tools that will improve your daily life.",
    link: "https://seijuvequintanaroo.com/",
    image: "/projects/seijuve.png",
    tags: [TECHS.LARAVEL, TECHS.REACT, TECHS.MYSQL, TECHS.CSS],
  },
  {
    title: "Google Keep Clone",
    description:
      "Inteligencias artificiales gratuitas con beneficios para diversos sectores de la vida diaria. Encuentra herramientas que mejorarán tu día a día.",
    github: "google-keep-clone",
    image: "/projects/keepclone.png",
    tags: [TECHS.LARAVEL, TECHS.VUE, TECHS.MYSQL, TECHS.MATERIALUI],
  },
  {
    title: "Auth",
    description:
      "Inteligencias artificiales gratuitas con beneficios para diversos sectores de la vida diaria. Encuentra herramientas que mejorarán tu día a día.",
    github: "auth-php",
    image: "/projects/authapp.png",
    tags: [TECHS.PHP, TECHS.JS, TECHS.MYSQL, TECHS.CSS],
  },
  {
    title: "Gif App",
    description:
      "Inteligencias artificiales gratuitas con beneficios para diversos sectores de la vida diaria. Encuentra herramientas que mejorarán tu día a día.",
    link: "https://gif-app-josue.netlify.app/",
    github: "react-gif-expert",
    image: "/projects/gifapp.png",
    tags: [TECHS.REACT, TECHS.CSS, TECHS.JEST],
  },
];