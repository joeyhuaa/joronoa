
export default function Sidebar({ sections, handleClick, selected }) {
  return (
    <div className="sidebar">
      {sections.map(section => (
        <p 
          key={section}
          onClick={() => handleClick(section)}
          style={{ color: selected === section ? 'white' : 'gray' }}
        >{section}</p>)
      )}
    </div>
  )
}