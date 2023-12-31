import { useState } from 'react'

import joey1 from '../public/assets/joey1.jpeg'
import joey2 from '../public/assets/joey2.jpeg'
import joey3 from '../public/assets/joey3.jpeg'
import joey4 from '../public/assets/joey4.jpeg'
import { StaticImageData } from 'next/image'

const pics: StaticImageData[] = [
  joey1,
  joey2,
  joey3,
  joey4,
]

export default function Pics() {
  let [picIndex, setPicIndex] = useState(0)

  let changePic = () => {
    let newIndex = picIndex + 1
    if (newIndex < pics.length) setPicIndex(newIndex)
    else setPicIndex(0)
  }

  return (
    <div id='profile-pics' style={{
      marginLeft:'auto',
      marginRight:'50px',
    }}>
      <img 
        id='random-pic' 
        className='fade-in'
        src={pics[picIndex].src} 
        alt='pic' 
        onClick={changePic} 
        style={{
          cursor: 'pointer',
          objectFit: 'cover',
          width: '200px',
          height: '200px',
        }}
      />
    </div>
  )
}