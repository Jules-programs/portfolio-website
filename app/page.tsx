import Introduction from "./components/Layout/introductoryParagraph";
import NightSky from "./background/nightSky";
import SVGwaves from "./background/SVGwaves";
import TechStackSection from "./components/sections/techStack";
import ProjectsSection from "./components/sections/projectSection";

export default function Home() {
  return (
    
    <div className="">
      <h1>Welcome</h1>

      < NightSky />

      < SVGwaves />

      < ProjectsSection />

      < TechStackSection />

    </div>
  );
}
