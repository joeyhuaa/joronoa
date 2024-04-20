import React from 'react'
import styled from 'styled-components'
import { COLORS } from '@/constants'

interface Project {
  title: string,
  description: HTMLParagraphElement,
  technologies: string[],
  links?: string[]
}

const Project: React.FC<Project> = ({
  title,
  description,
  technologies,
  links,
}) => {
  return (
    <div style={{
      width: '100%',
      marginBottom: '30px',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Title><b>{title}</b></Title>
      <Technologies>
        {technologies?.map(tech => <Technology key={`${title}-${tech}`}>{tech}</Technology>)}
      </Technologies>
      <Description>{description}</Description>
    </div>
  )
}

export default Project

const Title = styled.p`
  font-size: 20px;
  color: ${COLORS.lightYellow}
`
const Technologies = styled.div`
  display: flex;
`
const Technology = styled.mark`
  color: whitesmoke;
  background-color: ${COLORS.scarlett};
  margin-right: 5px;
  padding-right: 5px;
  padding-left: 5px;
  font-size: 14px;
`
const Description = styled.p`
  margin-top: 10px;
`