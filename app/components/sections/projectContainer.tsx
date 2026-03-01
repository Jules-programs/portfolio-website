/*

How I want it to look

Title: <title>
Description:
<GIF /> or <Image></Image>
(tools, programs, languages) - Labels

*/

import TechLabel from "./techLabel"

type Tech = {
  name: string
  color: string
  textColor?: string
}

type ProjectContainerProps = {
  title: string
  description: string
  image?: string
  techStack: Tech[]
}

export default function ProjectContainer({
  title,
  description,
  image,
  techStack,
}: ProjectContainerProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>

      <img
        src={image}
        alt={title}
        className="rounded-xl mb-6 w-full object-cover h-48"
      />

      <div className="flex flex-wrap gap-3">
        {techStack.map((tech, index) => (
          <TechLabel
            key={index}
            name={tech.name}
            color={tech.color}
            textColor={tech.textColor}
          />
        ))}
      </div>
    </div>
  )
}