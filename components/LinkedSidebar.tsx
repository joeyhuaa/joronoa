import Link from "next/link"

interface Props {
  links: string[],
  selected: string,
  handleClick?: (section: string) => void,
}

export default function LinkedSidebar({ links, handleClick, selected }: Props) {
  return (
    <div className="linked-sidebar">
      {links.map(section => (
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