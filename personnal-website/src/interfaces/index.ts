export interface Product {
  title: string;
  link: string;
  thumbnail: string;
}

export interface Card {
  id: number;
  sentence: string;
  content: React.ReactNode;
}
