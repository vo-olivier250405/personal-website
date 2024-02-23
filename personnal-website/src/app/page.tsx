import { Parallax } from "./components/Parallax";
import { MacbookScroll } from "./components/MacBoockScroll";
import { FloatingNav } from "./components/FloatingBar";
import { PRODUCTS, WORDS } from "@/lib/utils";
import { CardStack } from "./components/CardStack";

export default function Home() {
  return (
    <>
      <Parallax products={PRODUCTS} />
      <hr className="text-white m-8" />

      <section className="h-screen grid">
        <h1 className="text-white relative m-8 text-6xl inset-0">
          <span className="text-border-white">ABOUT ME</span>
        </h1>
        <CardStack items={WORDS} />
      </section>
      <section className="h-screen p-132">
        <MacbookScroll title="Scroll to contact me" />
      </section>
    </>
  );
}
