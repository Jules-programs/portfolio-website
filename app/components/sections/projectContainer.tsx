import TechLabel from "./techLabel"
import Link from "next/link"

type Tech = {
  name: string
  color: string
  textColor?: string
}

type ProjectContainerProps = {
  title: string
  description: string
  source?: boolean // Open/Closed Sourced ? button!
  sourceLink?: string // Optional link for source code
  image?: React.ReactNode
  techStack: Tech[]
}

export default function ProjectContainer({
  title,
  description,
  source,
  sourceLink,
  image,
  techStack,
}: ProjectContainerProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition opacity-80 min-w-0">
      <h3 className="text-xl sm:text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">{description}</p>

      {source !== undefined && (
        <div className="mb-4">
          {source ? (
            <a
              href={sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-1.5 bg-green-500 text-white rounded-2xl hover:bg-green-600 transition"
            >
              <span>Open Source</span>
              {sourceLink && (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              )}
            </a>
          ) : (
            <a
              href={sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-1.5 bg-red-500 text-white rounded-2xl hover:bg-red-600 transition"
            >
              <span>Closed Source</span>
              {sourceLink && (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              )}
            </a>
          )}
        </div>
      )}

      {image && (
        <div className="mb-4 sm:mb-6 rounded-xl overflow-hidden min-w-0">
          {typeof image === 'string' ? (
            <img
              src={image}
              alt={title}
              className="rounded-xl w-full object-cover h-40 sm:h-48 max-h-48"
            />
          ) : (
            <div className="[&_img]:rounded-xl [&_img]:w-full [&_img]:object-contain [&_img]:max-h-48 [&_img]:min-w-0">
              {image}
            </div>
          )}
        </div>
      )}

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
