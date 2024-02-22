import { Parallax } from "./components/Parallax";
import { MacbookScroll } from "./components/MacBoockScroll";
import { FloatingNav } from "./components/FloatingBar";
import { PRODUCTS } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <Parallax products={PRODUCTS} />
      <hr className="text-white m-4" />
      <MacbookScroll title="Scroll to contact me" />
    </>
  );
}
