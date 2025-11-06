import { type TechKeys, type Tech } from "@/utils/types";
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
import Stripe from "@icons/Stripe.svg";
import Zod from "@icons/Zod.svg";
import Vite from "@icons/Vite.svg";
import Zustand from "@icons/Zustand.svg";

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
  },
  STRIPE: {
    name: "Stripe",
    icon: Stripe,
  },
  ZOD: {
    name: "Zod",
    icon: Zod,
  },
  VITE: {
    name: "Vite",
    icon: Vite,
  },
  ZUSTAND: {
    name: "Zustand",
    icon: Zustand
  }
};