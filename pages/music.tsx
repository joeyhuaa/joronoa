import MusicPostCard from "@/components/MusicPostCard"
import grace from '@/public/assets/Grace-Art.jpg'
import { useState, useEffect } from "react"
import { PageLoading } from "./loading"

export default function Music() {
  const [loading, setLoading] = useState(true)

  // to avoid spotify embed loading flash
  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false)
      clearTimeout(delay)
    }, 2000)
  }, [])

  return (
    <div className="section">
      {/* <h1 className="text-4xl">music</h1> */}
      {/* <br />
      {[1,1,1].map(x => (
        <div className="mb-4" key={x}>
          <MusicPostCard 
            title='GRACE (feat. Halim)'
            subtitle='asdfasdf'
           flex;eSrc={grace.src}
            link='/music/grace'
          />
        </div>
      ))} */}
      <div id="spotify-iframe" className="flex flex-center-page" style={{width:'100%', height:'100%'}}>
        {/* under construction! */}
        {loading ? (
          <>
            <PageLoading /> 
            <iframe style={{visibility:'hidden', position:'absolute'}} src="https://open.spotify.com/embed/playlist/1gGNIYx0GECzfgeaKo5kAS?utm_source=generator" width="100%" height="352"allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </>
        ) : (
          <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/playlist/1gGNIYx0GECzfgeaKo5kAS?utm_source=generator" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        )}
      </div>
    </div>
  )
}