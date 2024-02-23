import { Card, Product } from "@/interfaces";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PRODUCTS: Product[] = [
  {
    title: "Moissan Fighter",
    link: "https://drive.google.com/file/d/1pCu_qf83LbPwMSwA57ww89hpfxn9TyKJ/view?usp=sharing",
    thumbnail: "/assets/mfZ.png",
  },
  {
    title: "Python Financial DashBoard",
    link: "https://github.com/vo-olivier250405/pythonFinancialDashboard",
    thumbnail: "/assets/pythonFinance.png",
  },
  {
    title: "Gamify-tasks App",
    link: "",
    thumbnail: "/assets/gamifyTasks.png",
  },
  {
    title: "Web-Organization App",
    link: "",
    thumbnail: "/assets/webapp.png",
  },
];

export const WORDS: Card[] = [
  {
    id: 1,
    sentence: "It's often said that I am",
    content: "REGULAR",
  },
  {
    id: 8,
    sentence: "And I love work with a",
    content: "TEAM",
  },
  {
    id: 7,
    sentence: "Finally, I am very",
    content: "STAND-ALONE",
  },
  {
    id: 6,
    sentence: "And a bit",
    content: "STUBBORN",
  },
  {
    id: 5,
    sentence: "My colleagues think I'm very",
    content: "DETERMINED",
  },
  {
    id: 4,
    sentence: "My friends and my family also tell that I am",
    content: "RESPECTFUL",
  },
  {
    id: 3,
    sentence: "I am also very",
    content: "ATTENTIVE",
  },

  {
    id: 2,
    sentence: "But I know that I am",
    content: "CALM",
  },
];
