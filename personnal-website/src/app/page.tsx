import { Parallax } from "./components/Parallax";
import { MacbookScroll } from "./components/MacBoockScroll";

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
      <section className="h-screen">
        <MacbookScroll title="Scroll to contact me" />
      </section>
      <div></div>
    </>
  );
}
