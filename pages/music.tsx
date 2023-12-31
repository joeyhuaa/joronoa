import MusicPostCard from "@/components/MusicPostCard"
import grace from '@/public/assets/Grace-Art.jpg'
import { useEffect } from "react"

export default function Music() {
  return (
    <div className="section">
      {/* <h1 className="text-4xl">music</h1> */}
      {/* <br />
      {[1,1,1].map(x => (
        <div className="mb-4" key={x}>
          <MusicPostCard 
            title='GRACE (feat. Halim)'
            subtitle='asdfasdf'
            imageSrc={grace.src}
            link='/music/grace'
          />
        </div>
      ))} */}
      <div id="spotify-iframe">
        under construction!
      </div>
    </div>
  )
}