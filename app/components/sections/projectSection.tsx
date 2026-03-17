import ProjectContainer from "./projectContainer"
import SchedulifyGIF from "../../../public/SchedulifyGIF.gif"
import Image from "next/image"
import TypeRacerPNG from "../../../public/TypeRacerPNG.png"
import MusicDepotGIF from "../../../public/MusicDepotGIF.gif"
import DRTPredictiveGIF from "../../../public/DRT-PredictiveGIF.gif"

export default function ProjectsSection() {

  return (
    <section id="projects" className="py-10 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-lg border border-gray-200">
            Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">

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
            title="Durham College 2026 Hackathon 1st Place Winners 🏆"
            description='DRT - Prediction Model: The Maintenence system is underequipped and nonpredictive to the Durham Climate.'
            source={true}
            sourceLink="https://main.d3omt2q10rv48q.amplifyapp.com"
            image={<Image unoptimized src={DRTPredictiveGIF} alt="DRTPredictiveGIF"/>}
            techStack={[
              { name: "TypeScript", color: "bg-[#2e79c7]" },
              { name: "React", color: "bg-[#087da3]" },
              { name: "Next.js", color: "bg-black" }
            ]}


          />

          <ProjectContainer
            title="Database - Music Depot"
            description='Collaborative development of a real‑world scheduling system for small business use cases. Implemented CRUD operations, triggers, and business logic to support real‑time scheduling.'
            source={true}
            sourceLink="https://main.d3omt2q10rv48q.amplifyapp.com"
            image={<Image unoptimized src={MusicDepotGIF} alt="MusicDepot"/>}
            techStack={[
              { name: "TypeScript", color: "bg-[#2e79c7]" },
              { name: "React", color: "bg-[#087da3]" },
              { name: "Python", color: "bg-[#ffd040]", textColor: "text-black"},
              { name: "Next.js", color: "bg-black" }
            ]}
          />

          <ProjectContainer
            title="Type Racer - Mobile Development"
            description={
              <>
                A Mobile Application created in Android Studio using Flutter. This is just as it seems—type as fast as you can. WIN! Big inspiration from{" "}
                <a
                  href="https://play.typeracer.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  https://play.typeracer.com/
                </a>
                .
              </>
            }
            source={true}
            sourceLink="https://github.com/Jules-programs/Type-Racer"
            image={<Image unoptimized src={TypeRacerPNG} alt="Type Racer" />}
            techStack={[
              { name: "Dart", color: "bg-[#36bcf9]" },
            ]}
          />


        </div>

      </div>
    </section>
  )
}