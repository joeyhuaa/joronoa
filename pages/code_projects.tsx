import styled from 'styled-components'
import Project from '../components/Project'

export default function CodeProjects() {
  return (
    <div className="section">
      <Project
        imgSrc='/assets/supertonic-login.png'
        description={
          <>
            <p>
              <b>SuperTonic</b> is a web app that I envision could revolutionize workflow and collaboration for musical artists, producers, and just musicians in general who need a dedicated platform to work together on music projects with other musicians.
              Designed and developed for musicians by a musician (myself), my goal is to combine features from 
              <ColorTxt color='#498af4'> Google Drive</ColorTxt>, 
              <ColorTxt color='white'> GitHub</ColorTxt>, and 
              <ColorTxt color='#1DB954'> Spotify</ColorTxt> into an app that allows musicians to 
              <ColorTxt color='#498af4'> upload song files</ColorTxt>, 
              <ColorTxt color='white'> manage project versions and branches</ColorTxt>, and 
              <ColorTxt color='#1DB954'> stream music aesthetically</ColorTxt>. 
              Inspired by how GitHub provides easy version control and collaboration, and Spotify provides aesthetic music streaming.
            </p><br />
            <p>
              Currently, I'm in the process of overhauling SuperTonic. I made a prototype using React/Rails/Postgres/Heroku, but I've decided 
              to switch to Next/DynamoDB/Vercel. Will update this page with updates!
            </p>
          </>
        }
      />
      <Project 
        imgSrc='/assets/flopper.png'
        description={
          <>
            <p>
              <Link href='https://flopper.vercel.app/' target="_blank"><b>Flopper</b></Link> is a Texas Hold'em preflop equity calculator for 2 players. You can select hand ranges
              for 2 players, then click a button and Flopper will calculate the preflop equity for both players. I built
              Flopper using React, and I really enjoyed the challenges of figuring out how to do the math to calculate
              best hands/hand ranks/winning conditions, how to run Monte Carlo simulations to calculate winning percentages for each player, 
              and how to do all of this without overloading the web app.
            </p>
            <p>
              Currenty, Flopper runs 5000 Monte Carlos to calculate player equities, and it takes about a second to run.
              Doing more simulations would make the results more accurate, but calculation time increases pretty significantly,
              so I've decided to keep the simulations at 5000 in the interest of balancing performance and precision. If I were to improve this app,
              I'd make the algorithms more efficient and add the option to add more players, but I've decided to focus on other more important projects.
            </p>
          </>
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

