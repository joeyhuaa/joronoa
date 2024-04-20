import styled from "styled-components";
import { useState } from "react";

export default function HoverText({ hoverText, unhoverText }) {
  const [hovered, setHovered] = useState(false)

  return (
    <span onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {hovered ? <Hover>{hoverText}</Hover> : <UnHover>{unhoverText}</UnHover>}
    </span>
  )
}

const Hover = styled.span`
  animation: fadeIn 0.3s ease-in-out;
  color: pink;
`
const UnHover = styled.span`
  animation: fadeIn 0.3s ease-in-out;
`