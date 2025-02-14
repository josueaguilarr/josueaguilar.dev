import { type TechKeys, type Tech } from "./types";
import React from "@icons/React.svg";
import TypeScript from "@icons/TypeScript.svg";
import Tailwind from "@icons/Tailwind.svg";
import Supabase from "@icons/Supabase.svg";
import AstroIcon from "@icons/Astro.svg";
import Preact from "@icons/Preact.svg";

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
  }
};

export const PROJECTS = [
  {
    title: "NotEz",
    description:
      "Plataforma de notas, una forma más simple y eficiente de organizar tus notas con grupos y filtros. Integración de autenticación y organizar a tu gusto.",
    link: "https://notez-me.vercel.app",
    github: "NotEz",
    image: "/projects/note.png",
    tags: [TECHS.REACT, TECHS.TYPESCRIPT, TECHS.SUPABASE, TECHS.TAILWIND],
  },
  {
    title: "DiscoverAI",
    description:
      "Inteligencias artificiales gratuitas con beneficios para diversos sectores de la vida diaria. Encuentra herramientas que mejorarán tu día a día.",
    link: "https://discover-ai.vercel.app/",
    github: "DiscoverAI",
    image: "/projects/discoverai.png",
    tags: [TECHS.ASTRO, TECHS.PREACT, TECHS.TYPESCRIPT, TECHS.TAILWIND],
  },
];