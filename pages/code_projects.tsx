import styled from 'styled-components'
import Image from 'next/image'

export default function CodeProjects() {
  return (
    <div className="section">
      <Project>
        <Image 
          src='/assets/supertonic-login.png' 
          alt='supertonic' 
          width={200}
          height={300}
        />
        <Description>
          <b>SuperTonic</b> is a web app that I envision could revolutionize workflow and collaboration for musical artists, producers, and just musicians in general who need a dedicated platform to work together on music projects with other musicians.
          Designed and developed for musicians by a musician (myself), my goal is to combine features from 
          <ColorTxt color='#498af4'> Google Drive</ColorTxt>, 
          <ColorTxt color='white'> GitHub</ColorTxt>, and 
          <ColorTxt color='#1DB954'> Spotify</ColorTxt> into an app that allows musicians to 
          <ColorTxt color='#498af4'> upload song files</ColorTxt>, 
          <ColorTxt color='white'> manage project versions and branches</ColorTxt>, and 
          <ColorTxt color='#1DB954'> stream music aesthetically</ColorTxt>. 
          Inspired by how GitHub provides easy version control and collaboration, and Spotify provides aesthetic music streaming.
          <br /><br />
          Currently, I'm in the process of overhauling SuperTonic. I made a prototype using React/Rails/Postgres/Heroku, but I've decided 
          to switch to Next/DynamoDB/Vercel. Will update this page with updates!
        </Description>
      </Project>
    </div>
  )
}

const Project = styled.div`
  width: 100%;
  // border: 1px solid white;
  display: flex;
`

const Description = styled.p`
  margin-left: 30px;
`

const ColorTxt = styled.span`
  color: ${props => props.color};
`

