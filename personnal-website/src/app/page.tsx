import { Parallax } from "./components/Parallax";

export default function Home() {
  return (
    <>
      <Parallax
        products={[
          {
            title: "Project1",
            link: "https://github.com/",
            thumbnail: "/assets/dogCar.jpg",
          },
          {
            title: "Project1",
            link: "https://github.com/",
            thumbnail: "/assets/dogCar.jpg",
          },
          {
            title: "Project1",
            link: "https://github.com/",
            thumbnail: "/assets/dogCar.jpg",
          },
          {
            title: "Project1",
            link: "https://github.com/",
            thumbnail: "/assets/dogCar.jpg",
          },
          {
            title: "Project1",
            link: "https://github.com/",
            thumbnail: "/assets/dogCar.jpg",
          },
        ]}
      />
      <div className="h-screen text-white">JE SUIS LA</div>
    </>
  );
}
