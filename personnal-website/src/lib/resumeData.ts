import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFile, faMailBulk } from "@fortawesome/free-solid-svg-icons";

export const projectsData = [
  {
    title: "FlowVerse Assessment",
    description:
      "Application using IA for the companies. With it, you can evaluate a candidat's softskills. IA asks questions, analyze answers, and return statistics to the HR. You can give the candidat's documents, so the IA can have a context before asking questions. Worked with a company named CoderQuest.",
    imgRef: "/assets/FlowVerseAssessment.png",
    labels: ["TypeScript", "IA", "ReactJS", "TailwindCSS"],
    link: "https://github.com/VenomXsX/gpt-personality-codecamp",
  },
  {
    title: "World View",
    description:
      "Web application using the World View's API. Displays all the countries in the world and allows to the user to search and consults country's data.",
    imgRef: "/assets/world-view.png",
    labels: ["TypeScript", "NextJS", "API", "Responsive", "Axios"],
    link: "https://world-view-five.vercel.app/",
  },
  {
    title: "Python Financial Dashboard",
    description:
      "Web application using Python to analyze two markets curves. Using bokeh, numpy and yfinance.",
    imgRef: "/assets/pythonFinance.png",
    labels: ["Python", "Web", "Bokeh", "Numpy", "Yfinance"],
    link: "https://github.com/vo-olivier250405/pythonFinancialDashboard",
  },
  {
    title: "TypeScript Mail Automation App",
    description:
      "Application using the terminal and TypeScript to get unread mails and open them in the default browser.",
    imgRef: "/assets/TypeScriptAutomationApp.png",
    labels: ["TypeScript", "Node", "Gmail API", "Terminal"],
    link: "https://github.com/vo-olivier250405/TypeScriptAutomationApp",
  },
];

export const experiencesData = [
  {
    date: "2023 -- PRESENT",
    title: "Etna computer sciences School",
    description:
      "School based on projects, I work on many web, mobiles projects. So I can do front and back end. Improve my teamwork, and work with many companies.",
    labels: [
      "NextJS",
      "TypeScript",
      "Bash",
      "Docker",
      "Web",
      "Client",
      "Server",
    ],
    link: "https://etna.io/",
  },
  {
    date: "2020 -- 2023",
    title: "Henri Moissan High School",
    description:
      "During those years, I worked on computer sciences, and I specifically made games, and OOP.",
    labels: [
      "Baccalauréat",
      "Distinction",
      "Mathematics",
      "Computer Sciences",
      "Python",
    ],
    link: "https://www.lyceemoissan.fr/",
  },
];

export const contactMe = [
  {
    link: "https://github.com/vo-olivier250405",
    name: "Github",
    icon: faGithub,
  },
  {
    link: "https://www.linkedin.com/in/voolivier/",
    name: "Linkedin",
    icon: faLinkedinIn,
  },
  {
    link: "mailto:oliviervo.pro@gmail.com?",
    name: "Mail",
    icon: faMailBulk,
  },
  // {
  //   link: "/assets/CV-Vo-Olivier.pdf",
  //   name: "CV",
  //   icon: faFile,
  // },
];
