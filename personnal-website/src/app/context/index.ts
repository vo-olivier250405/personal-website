import { ReactNode, createContext } from "react";

type ResumeContextProps = {
  projects: {
    title: string;
    description: string;
    imgRef: string;
    labels?: string[];
    link: string;
  }[];
  experiences: {
    date: string;
    title: string;
    description: string;
    labels?: string[];
    link: string;
  }[];
};

export const ResumeContext = createContext<ResumeContextProps | null>(null);
