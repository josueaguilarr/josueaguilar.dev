import type { JSX } from "astro/jsx-runtime";

export type Tech = {
    name: string;
    icon: JSX.Element
}

export type Project = {
    title: string;
    description: string;
    link?: string;
    github?: string;
    image: string;
    tags: Tech[]
}

export type Experience = {
    startYear: string;
    finishYear: string;
    role: string;
    place: string;
    description: string;
}

export type TechKeys = "REACT" | "TYPESCRIPT" | "TAILWIND" | "SUPABASE" | "ASTRO" | "PREACT" | "CSS" | "JEST" | "PHP" | "JS" | "LARAVEL" | "MYSQL" | "VUE" | "MATERIALUI";