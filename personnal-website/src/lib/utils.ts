import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PRODUCTS = [
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
