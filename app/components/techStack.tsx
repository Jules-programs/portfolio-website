import TechLabel from "./techLabel"

export default function TechStackSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-12 text-grey">
          Tech Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-4">

          <TechLabel name="Node.js" color="bg-green-600" />
          <TechLabel name="React" color="bg-cyan-500" />
          <TechLabel name="Python" color="bg-yellow-500" textColor="text-black" />
          <TechLabel name="TypeScript" color="bg-blue-600" />
          <TechLabel name="Dart" color="bg-sky-400" />
          <TechLabel name="Next.js" color="bg-black" />
          <TechLabel name="Java" color="bg-orange-600" />
          <TechLabel name="JavaScript" color="bg-yellow-400" textColor="text-black" />
          <TechLabel name="C#" color="bg-purple-600" />

        </div>

      </div>
    </section>
  )
}