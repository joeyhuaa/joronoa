import styled from 'styled-components'
import Project from '../components/Project'

export default function CodeProjects() {
  return (
    <div className="section">
      <Project
        title='SuperTonic'
        technologies={['react','ruby on rails','postgres','aws s3']}
        description={
          <p>
            An app to revolutionize workflow and collaboration for musicians who need a dedicated platform to work together on music projects.
            Designed and developed for musicians by a musician (myself), my goal is to combine features from 
            <ColorTxt color='#498af4'> Google Drive</ColorTxt>, 
            <ColorTxt color='white'> GitHub</ColorTxt>, and 
            <ColorTxt color='#1DB954'> Spotify</ColorTxt> into an app that allows musicians to 
            <ColorTxt color='#498af4'> upload song files</ColorTxt>, 
            <ColorTxt color='white'> manage project versions and branches</ColorTxt>, and 
            <ColorTxt color='#1DB954'> stream music aesthetically</ColorTxt>. 
            Currently, I'm in the process of overhauling SuperTonic and it's not deployed in the meantime. Stay tuned for updates!
          </p>
        }
      />
      <Project 
        title='Flopper'
        technologies={['react']}
        description={
          <p>
            <Link href='https://flopper.vercel.app/' target="_blank"><b>Flopper</b></Link> is a Texas Hold'em preflop equity calculator for 2 players. 
            Flopper works by running 5000 Monte Carlos to calculate player equities, and it takes about a second to run.
            Doing more simulations would make the results more accurate, but calculation time increases pretty significantly,
            so I've decided to keep the simulations at 5000 in the interest of balancing performance and precision.
          </p>
        }
      />
      <Project 
        title='SSB_V2'
        technologies={['react','react router']}
        description={
          <p>
            I built a new <Link href='https://ssb-v2.vercel.app/' target="_blank"><b>website for Super Splash Bros Basketball</b></Link>, 
            a youth basketball program that I used to work for as a coach. The goal was to design a site that combined a Mario-themed aesthetic with basketball vibes in order to create a new 
            and eye-catching brand for SSB Basketball. I communicated frequently with the founder to discuss ideas and make sure I was meeting his 
            business needs. This was a really fun project to work on and was my first time creating a website for a client.
          </p>
        }
      />
    </div>
  )
}

const ColorTxt = styled.span`
  color: ${props => props.color};
`
const Link = styled.a`
  text-decoration: underline;
  color: #f07fea;
`

