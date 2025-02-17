import { TECHS } from "@/utils/consts";
import { type Project, type Experience } from "@/utils/types";

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
            "First platform of indicators on youth in the state of Quintana Roo. Read, view graphs, filter and download information.",
        link: "https://seijuvequintanaroo.com/",
        image: "/projects/seijuve.png",
        tags: [TECHS.LARAVEL, TECHS.REACT, TECHS.MYSQL, TECHS.CSS],
    },
    {
        title: "Google Keep Clone",
        description:
            "Clone in functionality and interface of the Google Keep platform, built as a SPA. Add, archive, pin, edit and delete the notes you want.",
        github: "google-keep-clone",
        image: "/projects/keepclone.png",
        tags: [TECHS.LARAVEL, TECHS.VUE, TECHS.MYSQL, TECHS.MATERIALUI],
    },
    {
        title: "Auth",
        description:
            "Application for registration and authentication of users with validations, secure information in database. Developed without libraries.",
        github: "auth-php",
        image: "/projects/authapp.png",
        tags: [TECHS.PHP, TECHS.JS, TECHS.MYSQL, TECHS.CSS],
    },
    {
        title: "Gif App",
        description:
            "Page that allows you to search for multiple GIFS using the Giphy API. You can keep a history of your searches and navigate between them.",
        link: "https://gif-app-josue.netlify.app/",
        github: "react-gif-expert",
        image: "/projects/gifapp.png",
        tags: [TECHS.REACT, TECHS.CSS, TECHS.JEST],
    },
];

export const EXPERIENCES: Experience[] = [
    {
        startYear: "04/2023",
        finishYear: "Currently",
        role: "FullStack Developer",
        place: "Coppel",
        description: "Code analysis, troubleshooting, unit testing and code proposals for internal and external systems of the organization. Writing documentation and optimizing and updating obsolete code with best practices and technologies."
    },
    {
        startYear: "01/2023",
        finishYear: "04/2023",
        role: "FullStack Developer",
        place: "Autonomous University of Quintana Roo",
        description: "Code analysis, troubleshooting, unit testing and code proposals for internal and external systems of the organization. Writing documentation and optimizing and updating obsolete code with best practices and technologies."
    },
    {
        startYear: "01/2022",
        finishYear: "12/2022",
        role: "FullStack Developer",
        place: "Quintana Roo Youth Institute",
        description: "Code analysis, troubleshooting, unit testing and code proposals for internal and external systems of the organization. Writing documentation and optimizing and updating obsolete code with best practices and technologies."
    },
    {
        startYear: "07/2021",
        finishYear: "12/2021",
        role: "IDAIPQROO",
        place: "Autonomous University of Quintana Roo",
        description: "Code analysis, troubleshooting, unit testing and code proposals for internal and external systems of the organization. Writing documentation and optimizing and updating obsolete code with best practices and technologies."
    },
    {
        startYear: "01/2021",
        finishYear: "06/2021",
        role: "Integral SM2 Consulting",
        place: "Autonomous University of Quintana Roo",
        description: "Code analysis, troubleshooting, unit testing and code proposals for internal and external systems of the organization. Writing documentation and optimizing and updating obsolete code with best practices and technologies."
    },
    
]