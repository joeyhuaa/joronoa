import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import background from '../../public/assets/Grace-Art.jpg'

const summary = 
  "GRACE is a song that explores internal struggle and redemption.\
  It captures one's journey in battling personal demons while seeking peace and holding on to faith in God's love.\
  The lyrics touch on addiction, guilt, the desire for change, and the search for forgiveness—both in oneself and in God.\
  It expresses the experience of feeling trapped in a negative cycle but still holding on to hope; the human experience of admitting one's faults\
  and the pain of living with them, while finding comfort in God's grace despite one's shortcomings.\
  Ultimately, the message of the song is that there is GRACE for everyone, and accepting that GRACE allows you to accept yourself as who you are."

export default function Grace() {
  const [section, setSection] = useState('summary')
  return (
    <div className="full-background" style={{
      backgroundImage: `url(${background.src})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <Sidebar 
        sections={['summary', 'lyrics', 'video']} 
        handleClick={selection => setSection(selection)}
        selected={section}
      />
      <div className="content">
        <iframe 
          src="https://open.spotify.com/embed/track/0WwvJ19ukSTeDHwdV0N4eC?utm_source=generator" 
          width="100%" 
          style={{borderRadius: '12px', marginTop: '0px'}}
          height="78"   
          frameBorder="0" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
        />
        <h1 style={{fontFamily: 'Tilt Prism', display: 'inline', fontSize: '70px'}}>GRACE</h1>
        <span style={{marginLeft: '10px'}}>(feat. Halim)</span>
        <div className='scrollable-content'>
          {section === 'summary' && <p>{summary}</p>}
          {section === 'lyrics' && (
            <p>
              Feedin me shit human centipede<br />
              I wanna be a better me<br />
              World filled methamphetamine<br />
              You know what i mean<br /><br />

              You made a whole mess of me<br />
              My past keep stressing me<br />
              Sneezing got allergies<br />
              God He keep blessing me<br /><br />

              Lately u been testing me<br />
              So heavily<br />
              Just want ur sweet love in me<br />
              No questioning<br /><br />

              Feedin me shit human centipede<br />
              I wanna be a better me<br />
              World filled methamphetamine<br />
              You know what i mean<br /><br />

              I got bad dreams<br />
              Im feelin like a fiend<br />
              Demons they fight me<br />
              I just bob n weave<br /><br />

              Shine bright like lightning<br />
              God gimme peace<br />
              Money don’t love me<br />
              So I don’t love cheese<br /><br />

              God up above me<br />
              Im down on my knees<br />
              I know He loves me<br />
              But how could it be?<br /><br />

              I need somebody<br />
              To help me believe<br />
              Sin and repentance<br />
              Rinse and repeat<br /><br />

              Feedin me shit human centipede<br />
              I wanna be a better me<br />
              World filled methamphetamine<br />
              You know what i mean<br /><br />

              You made a whole mess of me<br />
              My past keep stressing me<br />
              Sneezing got allergies<br />
              God He keep blessing me<br /><br />

              I can’t believe all this time<br />
              you been here with me<br />
              The way you love me, so unlike me<br />
              you believe in me<br /><br />

              You believe in me (So I believe in me)<br /><br />

              I fall down and repent<br />
              You rinse and I repeat<br />
              Can’t help but feel the guilt<br />
              Can’t tell you everything<br /><br />

              I’ve sobered up before, made a million promises<br />
              Feel like I’ve never learned what true forgiveness is<br />
              Truth is I’m just sick<br />
              feel so villainous<br />
              All my demons left a mark inside my consciousness<br />
              Why my life a mess?<br />
              But you never miss<br />
              I was counting pennies but you don’t count my sins<br />
            </p>
          )}
        </div>
      </div>
    </div>
  )
}