import { TECHS } from "@/utils/consts";
import { type Project, type Experience, type Contact } from "@/utils/types";
import Linkedin from "@icons/Linkedin.svg";
import Github from "@icons/Github.svg";
import Mail from "@icons/Mail.svg";


export const PROJECTS: Project[] = [
    {
        title: "NotEz",
        description:
            "Notes platform, a simpler and more efficient way to organize your notes with groups and filters. Authentication integration and organize to your liking.",
        link: "https://notez-me.vercel.app",
        github: "NotEz",
        image: "/projects/notez.webp",
        tags: [TECHS.REACT, TECHS.TYPESCRIPT, TECHS.SUPABASE, TECHS.TAILWIND],
    },
    {
        title: "DiscoverAI",
        description:
            "Free artificial intelligences with benefits for various sectors of daily life. Find tools that will improve your daily life.",
        link: "https://discover-ai.vercel.app/",
        github: "DiscoverAI",
        image: "/projects/discoverai.webp",
        tags: [TECHS.ASTRO, TECHS.PREACT, TECHS.TYPESCRIPT, TECHS.TAILWIND],
    },
    {
        title: "SEIJUVE",
        description:
            "First platform of indicators on youth in the state of Quintana Roo. Read, view graphs, filter and download information.",
        link: "https://seijuvequintanaroo.com/",
        image: "/projects/seijuve.webp",
        tags: [TECHS.LARAVEL, TECHS.REACT, TECHS.MYSQL, TECHS.CSS],
    },
    {
        title: "Google Keep Clone",
        description:
            "Clone in functionality and interface of the Google Keep platform, built as a SPA. Add, archive, pin, edit and delete the notes you want.",
        github: "google-keep-clone",
        image: "/projects/keepclone.webp",
        tags: [TECHS.LARAVEL, TECHS.VUE, TECHS.MYSQL, TECHS.MATERIALUI],
    },
    {
        title: "Auth",
        description:
            "Application for registration and authentication of users with validations, secure information in database. Developed without libraries.",
        github: "auth-php",
        image: "/projects/authapp.webp",
        tags: [TECHS.PHP, TECHS.JS, TECHS.MYSQL, TECHS.CSS],
    },
    {
        title: "Gif App",
        description:
            "Page that allows you to search for multiple GIFS using the Giphy API. You can keep a history of your searches and navigate between them.",
        link: "https://gif-app-josue.netlify.app/",
        github: "react-gif-expert",
        image: "/projects/gifapp.webp",
        tags: [TECHS.REACT, TECHS.CSS, TECHS.JEST],
    },
];

export const EXPERIENCES: Experience[] = [
    {
        startYear: "04/2023",
        finishYear: "Currently",
        role: "FullStack Developer",
        place: "Coppel",
        place_web: "https://www.coppel.com/",
        description: "Code analysis, troubleshooting, unit testing and code proposals for internal and external systems of the organization. Writing documentation and optimizing and updating obsolete code with best practices and technologies."
    },
    {
        startYear: "01/2023",
        finishYear: "04/2023",
        role: "FullStack Developer",
        place: "UAQROO",
        place_web: "https://www.uqroo.mx/",
        description: "Contribution of new interfaces, API consumption, code improvement and component optimization. Providing better accessibility to information for teachers of the institution. Obtaining greater attention and response to requests."
    },
    {
        startYear: "01/2022",
        finishYear: "12/2022",
        role: "FullStack Developer",
        place: "IQJ",
        place_web: "https://juventud.qroo.gob.mx/",
        description: "Contribution of ideas, complete creation and deployment of the first indicators platform. In order to provide statistics on relevant indicators in the state of Quintana Roo. Providing opening customized searches with graphs."
    },
    {
        startYear: "07/2021",
        finishYear: "12/2021",
        role: "FullStack Developer",
        place: "IDAIPQROO",
        description: "Database development, complete interface in public and administrative environment. Creation and consumption of APIs. With the purpose of attending the general problems of the city, obtaining a more efficient and optimal attention."
    },
    {
        startYear: "01/2021",
        finishYear: "06/2021",
        role: "FullStack Developer",
        place: "Integral SM2 Consulting",
        description: "Creation of new interfaces, contribution of ideas, deployment of the product on the server. This system enhanced service quality and accelerated response times to requests, ensuring greater efficiency in product management."
    },
    
]

export const CONTACTS: Contact[] = [
    {
        contact: "LinkedIn",
        url: "https://www.linkedin.com/in/josueaguilardev",
        icon: Linkedin
    },
    {
        contact: "Github",
        url: "https://github.com/josueaguilarr",
        icon: Github
    },
    {
        contact: "josueaguilardev@gmail.com",
        url: "mailto:josueaguilardev@gmail.com",
        icon: Mail
    }
]