import React, { useState } from 'react'

import joey1 from '../public/assets/joey1.jpg'
import joey2 from '../public/assets/joey2.jpeg'
import joey3 from '../public/assets/joey3.jpg'
import joey4 from '../public/assets/joey4.jpg'
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
    <img id='random-pic' src={pics[picIndex].src} alt='pic' onClick={changePic} width={300} />
  )
}