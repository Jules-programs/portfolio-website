import TechLabel from "./techLabel"

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="py-10 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

        <div className="flex justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-lg border border-gray-200">
            Tech Stack
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">

          <TechLabel name="JavaScript" color="bg-[#f7df1d]" textColor="text-black" />
          <TechLabel name="Python" color="bg-[#ffd040]" textColor="text-black" />
          <TechLabel name="Java" color="bg-[#f89917]" textColor="text-black" />
          <TechLabel name="Node.js" color="bg-[#458d41]" />
          <TechLabel name="React" color="bg-[#087da3]" />
          <TechLabel name="TypeScript" color="bg-[#2e79c7]" />
          <TechLabel name="Dart" color="bg-[#36bcf9]" />
          <TechLabel name="C#" color="bg-[#7b0c79]" />
          <TechLabel name="Next.js" color="bg-black" />

        </div>

      </div>
    </section>
  )
}