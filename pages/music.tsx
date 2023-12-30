import MusicPostCard from "@/components/MusicPostCard"
import grace from '@/public/assets/Grace-Art.jpg'

export default function Music() {
  return (
    <div className="section">
      <h1 className="text-4xl">Music</h1>
      <br />
      {[1,1,1].map(x => (
        <div className="mb-4">
          <MusicPostCard 
            title='GRACE (feat. Halim)'
            subtitle='asdfasdf'
            imageSrc={grace.src}
            link='/music/grace'
          />
        </div>
      ))}
    </div>
  )
}