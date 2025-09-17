import type { About, Home, Person, Social } from "@/types";
import { Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Tamim",
  lastName: "Khenissi",
  name: "Tamim Khenissi",
  role: "Élève de 3ème, 13 ans, spécialisé en développement informatique",
  avatar: "/images/avatar.jpg",
  email: "tamim.khenissi@icloud.com",
  location: "Europe/Paris", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Arabe", "Anglais", "Français", "Allemand"], // optional: Leave the array empty if you don't want to display languages
};



const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/glownydev"
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://fr.linkedin.com/in/tamim-khenissi-744743384"
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`
  }
];

const about: About = {
  path: "/about",
  label: "À propos",
  title: `À propos – ${person.name}`,
  description: `Découvrez ${person.name}, ${person.role} basé à ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Profil",
    description: (
      <>
        Élève en 3ème passionné d'informatique, surtout de programmation avec des compétences en développement logiciel. Motivé, sérieux et curieux, je cherche constamment à approfondir mes connaissances techniques et à relever de nouveaux défis. Mon objectif est d'apprendre plus sur le monde du travail au sein d'une entreprise tout en effectuant un stage d'observation.
      </>
    ),
  },
  work: {
    display: true,
    title: "Stages",
    experiences: [
      {
        company: "Développeur FullStack (React et next.js)",
        timeframe: "Déc. 2024 - Mai 2025 | Gomycode",
        role: "Développeur FullStack",
        achievements: [
          <div key="gomycode-fullstack">
            Nous avons appris des bases en next.js et en react. Nous avons programmé un jeu Snake avancé avec un système de multijoueur en ligne.
          </div>,
        ],
        images: [],
      },
      {
        company: "Développeur JavaScript",
        timeframe: "Juil. 2024 - Août 2024 | Digi Activity",
        role: "Développeur JavaScript",
        achievements: [
          <div key="digi-js">
            Nous avons appris des bases en javascript et codé plusieurs projets comme un site qui calcule l'âge automatiquement.
          </div>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false,
    title: "Études",
    institutions: [],
  },
  technical: {
    display: true,
    title: "Compétences techniques",
    skills: [
      {
        title: "HTML/CSS/JS",
        description: "Avancé",
        tags: [
          { name: "HTML", icon: "html" },
          { name: "CSS", icon: "css" },
          { name: "JavaScript", icon: "javascript" },
        ],
        images: [],
      },
      {
        title: "Java (Minecraft)",
        description: "Avancé",
        tags: [ { name: "Java", icon: "java" } ],
        images: [],
      },
      {
        title: "C#",
        description: "Débutant",
        tags: [ { name: "C#", icon: "csharp" } ],
        images: [],
      },
      {
        title: "Next.js / React.js",
        description: "Intermédiaire",
        tags: [ { name: "Next.js", icon: "nextjs" }, { name: "React.js", icon: "react" } ],
        images: [],
      },
      {
        title: "Photoshop",
        description: "Débutant",
        tags: [ { name: "Photoshop", icon: "photoshop" } ],
        images: [],
      },
      {
        title: "Gestion de projets et de dépenses",
        description: "Intermédiaire",
        tags: [ { name: "Gestion", icon: "project" } ],
        images: [],
      },
    ],
  },
};

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Accueil",
  title: `Portfolio de ${person.name}`,
  description: `Site portfolio présentant mon travail en tant que ${person.role}`,
  headline: <Text style={{ color: '#0070f3', fontWeight: 600 }}>Élève de 3ème passionné de dev</Text>,
  featured: {
    display: true,
    title: <>Portfolio avec Once UI</>,
    href: "https://once-ui.com/",
  },
  subline: <>Je suis un élève de 3ème qui aime dev et Minecraft.</>,
};

const work = {
  path: "/work",
  label: "Projets",
  title: `Projets de ${person.name}`,
  description: `Projets de design et développement réalisés par ${person.name}`,
};

export { person, social, home, about, work };
