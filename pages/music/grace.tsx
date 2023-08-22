import background from '../../public/assets/Grace-Art.jpg'

export default function Grace() {
  console.log(background)
  return (
    <div className="full-background" style={{
      backgroundImage: `url(${background.src})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="content">
        <div className='inline-block'>
          <h1 style={{fontFamily: 'Tilt Prism', display: 'inline', fontSize: '70px'}}>GRACE</h1>
          <span style={{marginLeft: '10px'}}>(feat. Halim)</span>
        </div>
        <p>
        "GRACE" is a song that touches on themes of personal struggles, redemption, spirituality, and the search for meaning. The lyrics explore the internal conflicts and challenges faced by the speaker, as well as their relationship with a higher power or divine presence. The song delves into the complexity of human experiences, including addiction, guilt, the desire for change, and the search for forgiveness.

The repeated mention of "feeding me shit," "methamphetamine," and "human centipede" alludes to a sense of being trapped in negative cycles, both internally and externally. The speaker expresses a desire for self-improvement and a longing to be a better version of themselves, all while grappling with the weight of their past mistakes. The imagery of sneezing and allergies juxtaposed with blessings from God adds a layer of contrast between struggles and gratitude.

The lyrics also showcase the speaker's vulnerability and introspection. The lines "I got bad dreams, I'm feeling like a fiend" and "Demons they fight me, I just bob n weave" depict inner battles and the attempt to overcome personal demons. The reference to God offering peace and the longing for belief underscore the spiritual journey the speaker is undergoing.

The shift in tone toward the end of the song reflects a moment of realization and hope. The lines "I can't believe all this time you been here with me / The way you love me, so unlike me, you believe in me" suggest the discovery of unconditional support and love from a divine presence. This realization prompts the speaker to believe in themselves as well, signifying a potential turning point in their struggle.

Overall, "GRACE" encapsulates the internal struggles, yearning for change, and ultimate search for acceptance and redemption that are universal to the human experience. The song resonates with themes of faith, personal growth, and the power of transformation despite the challenges faced.
        </p>
      </div>
    </div>
  )
}