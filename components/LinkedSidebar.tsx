import Link from "next/link"

export default function LinkedSidebar({ sections, handleClick, selected }) {
  return (
    <div className="sidebar">
      {sections.map(section => (
        <p 
          onClick={() => handleClick(section)}
          style={{ color: selected === section ? 'white' : 'gray' }}
        >
          <Link href={`/${section}`}>{section}</Link>
        </p>
      ))}
    </div>
  )
}