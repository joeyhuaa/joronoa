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
      <span className="text-xl">music blog coming soon!</span>
    </div>
  )
}