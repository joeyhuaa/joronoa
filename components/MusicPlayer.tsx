import React, { useState, useEffect, useRef } from 'react'
import { useMediaQuery } from '@mui/material'
import styled from 'styled-components'
import moment from 'moment'
import { PlayArrow, Pause } from '@mui/icons-material'
import getRandomInt from '@/util/getRandomInt'
import { COLORS } from '@/constants'
import HoverText from './Hovertext'

function MusicPlayer() {
  const music = useRef(null)
  const timeline = useRef(null)
  const timelinePast = useRef(null)
  const pButton = useRef(null)

  const [songs, setSongs] = useState([])
  const [currSong, setCurrSong] = useState(null)
  const [currentTime, setCurrentTime] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [songDuration, setSongDuration] = useState(null)

  const isMobile = useMediaQuery('(max-width:450px)')

  useEffect(() => {
    async function getSongs() {
      try {
        const res = await fetch('/api/songs')
        const data  = await res?.json()
        // console.log(data)
        setSongs(data)
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    }
    getSongs()
  }, [])

  useEffect(() => { if (songs.length > 0) setCurrSong(songs[getRandomInt(songs.length)]) }, [songs])

  //reset start time and timeline when new song is loaded
  useEffect(() => { 
    if (currSong) {
      setCurrentTime(msString(0)) 
      timelinePast.current.style.width = 0
    }
  }, [currSong])

  //todo - an we get song duration in state before pressing play? not working atm, music.current.src is NaN until play is pressed
  useEffect(() => {
    // console.log('music',music.current.src)
    if (music?.current?.src) {
      setSongDuration(music.current.duration)
    }
  }), [music]

  useEffect(() => {
    if (isPlaying) {
      music.current.play()  
    } else {
      music.current.pause()
    }
  }, [isPlaying])

  let playPause = () => setIsPlaying(!isPlaying)

  let getCurrentTime = () => { return music?.current?.currentTime }

  let getDuration = () => { return music?.current?.duration }

  let getTimeLineWidth = () => timeline?.current?.offsetWidth

  let queueNextSong = () => {
      let nextSong = songs[getRandomInt(songs.length)]
      if (nextSong.Key === currSong.Key) queueNextSong()
      else setCurrSong(nextSong)
      console.log('queued ' + nextSong.name)
  }

  let timeUpdate = () => {
    // update the timeline UI
    let playPercent = (music.current.currentTime / getDuration()) * getTimeLineWidth()
    timelinePast.current.style.width = playPercent + 'px'

    // set state
    setCurrentTime( msString(getCurrentTime()) )
    if ( getCurrentTime() === getDuration() ) {
      setIsPlaying(false)
      queueNextSong()
    }
  }

  let timeLineClicked = (e) => {
    let timelineLeft = timeline.current.getBoundingClientRect().left
    let clickPercent = (e.clientX - timelineLeft) / getTimeLineWidth()
    music.current.currentTime = getDuration() * clickPercent
    setCurrentTime(msString(getCurrentTime()))
  }

  let msString = (seconds) => {
    let t = moment.duration(seconds * 1000);
    let m = t.minutes()
    let s = t.seconds() < 10 ? '0' + t.seconds() : t.seconds();
    if (Number.isNaN(m) || Number.isNaN(s)) return null;
    else return `${m}:${s}`
  };

  //styles
  const webStyles = {
    container: { justifyContent:'center' },
    pButton: { width: '20px', height: '20px', marginLeft: '20px', marginRight: '20px' },
    timeline: { width: '400px', height: '5px' }
  }
  const mobileStyles = {
    container: { justifyContent:'space-between' },
    pButton: { justifySelf:'flex-end', paddingRight:'10px' },
    timeline: { width: '100%', height: '2.5px', position: 'fixed', bottom: 0 }
  }

  return (
    <Container id='player_container' style={isMobile ? mobileStyles.container : webStyles.container}>
      {!isMobile &&
        <Blurb>
          Listen to music by 
          <a href='https://open.spotify.com/artist/1zEBlYdwmgdTZAOHE753V2?si=T84NnR93TMOao-aTDgs6ng' target='_blank'>
            <b style={{color: COLORS.scarlett}}> 
              <HoverText hoverText=' Joronoa ' unhoverText=' Joronoa ' />
            </b>
          </a> 
          (me)
        </Blurb>
      }

      <audio
        id='music'
        ref={music}
        onTimeUpdate={timeUpdate}
        src={currSong ? currSong.url : null}
      />

      <SongTitle>
        <span style={{color:'whitesmoke', fontSize:'14px'}}>{currSong ? currSong.name : null}</span>
        {isMobile && <p>Joronoa</p>}
      </SongTitle>

      <PButton ref={pButton} onClick={() => playPause()} style={isMobile ? mobileStyles.pButton : webStyles.pButton}>
        {isPlaying ? (
          <Pause fontSize='large' style={{color:'whitesmoke'}} />
        ) : (
          <PlayArrow fontSize='large' style={{color:'whitesmoke'}} />
        )}
      </PButton>

      {!isMobile && <Timestamp>{currentTime || `-:--`}</Timestamp>}

      <Timeline ref={timeline} onClick={e => timeLineClicked(e)} style={isMobile ? mobileStyles.timeline : webStyles.timeline}>
        <TimelinePast ref={timelinePast} />
      </Timeline>

      {!isMobile && <Timestamp>{msString(getDuration()) || `-:--`}</Timestamp>}
    </Container>
  )
}

const Container = styled.section`
  background-color: #0f0f0f;
  height: 10vh;
  width: 100vw;
  display: flex;
  align-items: center;
  z-index: 1;
  flex: 100%;
  align-self: flex-end;
  margin: -20px;
  position: fixed;
  bottom: 20px;
`
const Blurb = styled.span`
  font-size: 16px;
  color: ${COLORS.lightYellow};
  position: absolute;
  left: 50px;
  top: 50%;
  transform: translateY(-50%); /* Centers the item vertically */
`
const SongTitle = styled.span`
  font-size: 12px;
  // font-weight: bold;
  margin-left: 1em;
`
const PButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:focus { outline: none; }
  &:hover { cursor: pointer; }
`
const Timestamp = styled.span`
  font-size: 12px;
  width: 30px;
  text-align: center;
`
const Timeline = styled.div`
  background: #353535;
  border-radius: 15px;
  display: flex;
  alignItems: center;
  &:hover { cursor: pointer; }
`
const TimelinePast = styled.div`
  height: 5px;
  background: white;
  border-radius: 15px;
`

export default MusicPlayer;

