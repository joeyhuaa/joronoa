import Link from "next/link"
import styled from "styled-components"

interface Props {
  pages: string[],
  links: {
    [key: string]: string,
  },
  selected: string,
  handleClick?: (section: string) => void,
}

export default function LinkedSidebar({ pages, links, handleClick, selected }: Props) {
  return (
    <_LinkedSidebar>
      {pages.map(section => (
        <p 
          key={`${section}-link`}
          onClick={() => handleClick && handleClick(section)}
          style={{ color: selected === section ? 'white' : 'gray' }}
        >
          <Link href={`/${section}`}>{section}</Link>
        </p>
      ))}
      
      ·

      {Object.keys(links).map(key => (
        <p 
          key={`${key}-link`}
          style={{ color: 'gray' }}
        >
          <a href={links[key]} target="_blank">{key}</a>
        </p>
      ))}
    </_LinkedSidebar>
  )
}

const _LinkedSidebar = styled.div`
  height: 50vh;
  // width: 300px;
  /* border: solid 1px white; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`