import ProjectContainer from "./projectContainer"

export default function ProjectsSection() {
  return (
    <section className=" py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center">
          <h2 className="text-4xl font-bold text-center mb-16 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200">
            Projects
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">

          <ProjectContainer
            title="Schedulify"
            description="A scheduling platform for instructors and clients."
            /*image="/project-image.jpg"*/
            techStack={[
              { name: "TypeScript", color: "bg-[#2e79c7]" },
              { name: "React", color: "bg-[#087da3]" },
              { name: "Node.js", color: "bg-[#458d41]" },
            ]}
          />

          <ProjectContainer
            title="Portfolio Website"
            description="Personal developer portfolio built with modern tools."
            /*image="/project-image.jpg"*/
            techStack={[
              { name: "Next.js", color: "bg-black" },
              { name: "Tailwind", color: "bg-sky-400" },
              { name: "TypeScript", color: "bg-[#2e79c7]" },
            ]}
          />

          <ProjectContainer
            title="Type Racer"
            description="Personal developer portfolio built with modern tools."
            /*image="/project-image.jpg"*/
            techStack={[
              { name: "Dart", color: "bg-[#36bcf9]" },
            ]}
          />

        </div>

      </div>
    </section>
  )
}