import React, { useState, useEffect, useRef } from 'react'
// import shallow from 'zustand/shallow'
import styled from 'styled-components'
// import { useStore } from '../data/store'

import moment from 'moment'
import { PlayArrow, Pause } from '@mui/icons-material'

// todo - figure out how to prevent re-rendering
function MusicPlayer() {
  const [currentTime, setCurrentTime] = useState(null) //! this is prob why this component is re-rendering despite React.memo
  // const { currSong, setCurrSong, isSongPlaying, setSongPlaying, playPause, currProject } = useStore(state => ({
  //   currSong: state.currSong,
  //   setCurrSong: state.setCurrSong,
  //   isSongPlaying: state.isSongPlaying,
  //   setSongPlaying: state.setSongPlaying,
  //   playPause: state.playPause,
  //   currProject: state.currProject,
  // }), shallow);
  // const songs = currProject?.songs;

  //! DUMMY VALUES
  let isSongPlaying = false;
  //!

  useEffect(() => {
    console.log('MUSIC PLAYER RENDER')
  }, [])

  // useEffect(() => {
  //   if (isSongPlaying) {
  //     music.current.play()  
  //   } else {
  //     music.current.pause()
  //   }
  // }, [isSongPlaying])

  let music = useRef(null)
  let playhead = useRef(null)
  let timeline = useRef(null)
  let timelinePast = useRef(null)
  let pButton = useRef(null)

  let getCurrentTime = () => { if (music.current) return music.current.currentTime }

  let getDuration = () => { if (music.current) return music.current.duration }

  let getTimeLineWidth = () => timeline.current.offsetWidth

  // let queueNextSong = () => {
  //     let nextSong = songs[Math.floor(Math.random() * songs.length)]
  //     if (nextSong.id === currSong.id) queueNextSong()
  //     else setCurrSong(nextSong)
  //     console.log('queued ' + nextSong.name)
  // }

  let timeUpdate = () => {
    // update the timeline UI
    let playPercent = (music.current.currentTime / getDuration()) * getTimeLineWidth()
    playhead.current.style.marginLeft = playPercent + 'px'
    timelinePast.current.style.width = playPercent + 5 + 'px'

    // set state
    // setCurrentTime( msString(getCurrentTime()) )
    // if ( getCurrentTime() === getDuration() ) {
    //   setSongPlaying(false)
    //   queueNextSong()
    // }
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

  return (
    <Container id='player_container'>
      <audio
        id='music'
        ref={music}
        onTimeUpdate={timeUpdate}
        // src={currSong ? currSong.url : null}
      />

      <SongTitle>
        {/* {currSong ? currSong.name : null} */}
      </SongTitle>

      <PButton ref={pButton} onClick={() => playPause(currSong.id)}>
        {isSongPlaying ? (
          <Pause />
        ) : (
          <PlayArrow />
        )}
      </PButton>

      <Timestamp>
        {music.current ? currentTime : `-:--`} {/* change to if currentSong, not if music.current */}
      </Timestamp>

      <Timeline ref={timeline} onClick={e => timeLineClicked(e)}>
        <div id='timeline_past' ref={timelinePast} />
        <Playhead ref={playhead} />
      </Timeline>

      <Timestamp>
        {music.current ? msString(getDuration()) : `-:--`}
      </Timestamp>
    </Container>
  )
}

const Container = styled.section`
  background-color: #0f0f0f;
  height: 10vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  flex: 100%;
  align-self: flex-end;
  margin: -20px;
  position: fixed;
  bottom: 20px;
`
const PButton = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 20px;
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
const SongTitle = styled.span`
  font-size: 12px;
  font-weight: bold;
  margin-left: 1em;
`
const Timeline = styled.div`
  width: 400px;
  height: 5px;
  background: #353535;
  border-radius: 15px;
  display: flex;
  align-items: center;
  position: relative;
  &:hover { cursor: pointer; }
`
const Playhead = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-top: 1px;
  background-color: white;
`

export default MusicPlayer;

