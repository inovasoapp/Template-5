import Footer3 from "./components/sections/footers/footer-3";
import Hero1 from "./components/sections/heros/hero1";
import CarrouselText from "./components/elements/carrousels/carrousel-text";
import Problems1 from "./components/sections/problems/problems1";
import TimeLine1 from "./components/elements/time-lines/time-line-1";
import { About1 } from "./components/sections/abouts/about1";
import { Solution1 } from "./components/sections/solutions/solution1";
import CarrouselImage1 from "./components/elements/carrousels/carrouse-image1";
import Testimonials1 from "./components/sections/testimonials/testimonials1";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans ">
      <main className="flex min-h-screen w-full flex-col items-center justify-between sm:items-start">
        <Hero1 />
        <CarrouselText />
        <Problems1 />
        <Solution1 />
        <TimeLine1 />
        <About1 />
        <CarrouselImage1 />
        <Testimonials1 />
        <Footer3 />
      </main>
    </div>
  );
}
