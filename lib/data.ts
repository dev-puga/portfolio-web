import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
]

export const experiencesData = [
  {
    title: "Graduated Analysis and Systems Development",
    location: "Rio Claro, BR",
    description:
      "I graduated after 2 and a half year of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Developer JR",
    location: "Rio Claro, BR",
    description:
      "Developed the interface for a sales portal targeting large companies in the ceramics industry, resulting in an intuitive and engaging user experience. Worked closely with clients to understand and meet their needs, delivering customized and high-value solutions. Utilized BitBucket for code versioning and Docker to ensure a consistent development environment",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Front-End Developer PL",
    location: "Piracicaba, BR",
    description:
      "Developed responsive and performant interfaces for Pecege products, ensuring an exceptional user experience. Collaborated with multidisciplinary teams using Agile methodologies and Azure DevOps for task definition and refinement. Implemented new features following Git Flow and conducted Code Reviews to ensure code quality",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Rio Claro, BR",
    description:
      "I work in frontend development using React and TypeScript, creating responsive and optimized interfaces. I also engage in backend development with Node.js and PostgreSQL database. I consistently collaborate with teams to ensure seamless integration between frontend and backend. Additionally, I perform maintenance and enhancement of legacy systems in Delphi, identifying and addressing issues",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
]

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Tailwind",
  "MaterialUI",
  "Styled-Components",
  "Node.js",
  "Express",
  "Ruby on Rails",
  "PostgreSQL",
]