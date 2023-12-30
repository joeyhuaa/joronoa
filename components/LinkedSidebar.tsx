import Link from "next/link"

interface Props {
  sections: string[],
  handleClick?: (section: string) => void
  selected: string,
}

export default function LinkedSidebar({ sections, handleClick, selected }: Props) {
  return (
    <div className="linked-sidebar">
      {sections.map(section => (
        <p 
          key={`${section}-link`}
          onClick={() => handleClick && handleClick(section)}
          style={{ color: selected === section ? 'white' : 'gray' }}
        >
          <Link href={`/${section}`}>{section}</Link>
        </p>
      ))}
    </div>
  )
}