import ProjectContainer from "./projectContainer"
import SchedulifyGIF from "../../../public/SchedulifyGIF.gif"
import Image from "next/image"
import TypeRacerPNG from "../../../public/TypeRacerPNG.png"
import MusicDepotGIF from "../../../public/MusicDepotGIF.gif"

export default function ProjectsSection() {

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center">
          <h2 className="text-4xl font-bold text-center mb-16 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200">
            Projects
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-25">

          <ProjectContainer
            title="Schedulify - Demo"
            description="Schedulify is an AI‑powered scheduling platform designed to greatly reduce the time spent Scheduling. Created with simplicity and user in mind"
            source={false}
            image={<Image unoptimized src={SchedulifyGIF} alt="Schedulify Demo" />}
            techStack={[
              { name: "TypeScript", color: "bg-[#2e79c7]" },
              { name: "React", color: "bg-[#087da3]" },
              { name: "Node.js", color: "bg-[#458d41]" },
              { name: "Next.js", color: "bg-black" }
            ]}
          />

          <ProjectContainer
            title="Music Depot Database"
            description='Collaborative development of a real‑world scheduling system for small business use cases. Implemented CRUD operations, triggers, and business logic to support real‑time scheduling.'
            source={true}
            sourceLink="https://github.com/Jules-programs/Your-Music-Depot-Project"
            image={<Image unoptimized src={MusicDepotGIF} alt="MusicDepot"/>}
            techStack={[
              { name: "TypeScript", color: "bg-[#2e79c7]" },
              { name: "React", color: "bg-[#087da3]" },
              { name: "Python", color: "bg-[#ffd040]", textColor: "text-black"},
              { name: "Next.js", color: "bg-black" }
            ]}
          />

          <ProjectContainer
            title="Type Racer"
            description="A Mobile Application created in Andriod Studio using Flutter. This is just as it seems, Type as fast as you can. WIN!"
            source={true}
            sourceLink="https://github.com/Jules-programs/Type-Racer"
            image={<Image unoptimized src={TypeRacerPNG} alt="Type Racer"/>}
            techStack={[
              { name: "Dart", color: "bg-[#36bcf9]" },
            ]}
          />

        </div>

      </div>
    </section>
  )
}