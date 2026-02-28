import ProjectContainer from "./projectContainer"

export default function ProjectsSection() {
  return (
    <section className=" py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16 text-white text-outline-black">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <ProjectContainer
            title="Schedulify"
            description="A scheduling platform for instructors and clients."
            /*image="/project-image.jpg"*/
            techStack={[
              { name: "TypeScript", color: "bg-blue-600" },
              { name: "React", color: "bg-cyan-500" },
              { name: "Node.js", color: "bg-green-600" },
            ]}
          />

          <ProjectContainer
            title="Portfolio Website"
            description="Personal developer portfolio built with modern tools."
            /*image="/project-image.jpg"*/
            techStack={[
              { name: "Next.js", color: "bg-black" },
              { name: "Tailwind", color: "bg-sky-400" },
              { name: "TypeScript", color: "bg-blue-600" },
            ]}
          />

        </div>

      </div>
    </section>
  )
}