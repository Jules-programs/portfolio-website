type TechLabelProps = {
  name: string
  color: string
  textColor?: string
}

export default function TechLabel({
  name,
  color,
  textColor = "text-white",
}: TechLabelProps) {
  return (
    <span
      className={`px-5 py-2 rounded-full font-medium text-sm 
      hover:scale-105 hover:shadow-lg transition duration-200 cursor-default 
      ${color} ${textColor}`}
    >
      {name}
    </span>
  )
}