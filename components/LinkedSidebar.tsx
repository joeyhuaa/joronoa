import Link from "next/link"
import styled from "styled-components"

import useMediaQuery from '@mui/material/useMediaQuery';
import { Menu, Close } from '@mui/icons-material'

import { useState } from "react";

// mobile view needs to be collapsed hamburger button

interface Props {
  pages: string[],
  links: {
    [key: string]: string,
  },
  selected: string,
  handleClick?: (section: string) => void,
}

export default function LinkedSidebar({ pages, links, handleClick, selected }: Props) {
  const isMobile = useMediaQuery('(max-width:450px)')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  if (isMobile) {
    return (
      <div 
        style={{position:'absolute', right:20}}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <Close /> : <Menu />}
        {isMobileMenuOpen && (
          <MenuContents>
            {pages.map(section => (
              <p 
                key={`${section}-link`}
                onClick={() => handleClick && handleClick(section)}
                style={{ color:'whitesmoke' }}
              >
                <Link href={`/${section}`}>{section}</Link>
              </p>
            ))}
            
            ·

            {Object.keys(links).map(key => (
              <p 
                key={`${key}-link`}
                style={{ color: 'whitesmoke' }}
              >
                <a href={links[key]} target="_blank">{key}</a>
              </p>
            ))}
          </MenuContents>
        )}
      </div>
    )
  } else {
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
const MenuContents = styled.div`
  border: solid 0.5px white;
  width: 80vw;
  position: absolute;
  right: 0;
  background: #1c2229;
  padding: 20px;
`