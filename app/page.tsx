import Introduction from "./components/Layout/introductoryParagraph";
import SVGwaves from "./background/SVGwaves";
import ProjectContainer from "./components/projectContainer";
import TechStackSection from "./components/techStack";
import ProjectsSection from "./components/projectSection";

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
