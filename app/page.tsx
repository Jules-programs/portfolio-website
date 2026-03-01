import Introduction from "./components/Layout/introductoryParagraph";
import SVGwaves from "./background/SVGwaves";
import ProjectContainer from "./components/sections/projectContainer";
import TechStackSection from "./components/sections/techStack";
import ProjectsSection from "./components/sections/projectSection";

export default function Home() {
  return (
    
    <div className="">
      <h1>Welcome</h1>

      < SVGwaves />

      < ProjectsSection />

      < TechStackSection />

    </div>
  );
}
