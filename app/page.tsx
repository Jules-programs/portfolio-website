import Introduction from "./components/Layout/introductoryParagraph";
import NightSky from "./background/nightSky";
import SVGwaves from "./background/SVGwaves";
import TechStackSection from "./components/sections/techStack";
import ProjectsSection from "./components/sections/projectSection";
import Contact from "./components/sections/Contact";
import NavBar from "./components/Layout/NavBar";

export default function Home() {
  return (
    /*
      `relative` is the stacking context that both NightSky (absolute, -z-20)
      and SVGwaves (absolute, -z-10) anchor to.
      All sections are naturally at z-0+, so they render on top of both backgrounds.
    */
    <div className="relative min-h-screen overflow-x-hidden">

      {/* ── Backgrounds (absolutely positioned, behind everything) ── */}
      <NightSky />
      <SVGwaves />

      {/* ── Sticky nav (z-50, always on top) ── */}
      <NavBar />

      {/* ── Content sections — flow on top of the backgrounds ── */}
      <main className="relative z-10">
        <h1 className="px-4 py-12 sm:py-16 md:p-20 flex justify-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold text-center">
          Welcome
        </h1>

        <Introduction />

        <ProjectsSection />

        <TechStackSection />

        <Contact />
      </main>

    </div>
  );
}
