import React, { useState } from 'react'

import supernova_art from '../public/assets/supernova.jpg'
import soulfection_art from '../public/assets/soulfection.jpg'
import prof_pic from '../public/assets/prof-pic-square.jpg'
import headlightsnight from '../public/assets/headlightsnight.jpg'
import tylerbgb from '../public/assets/tylerbluegreenblack.jpg'
import tylerbp from '../public/assets/tylerbluepinkoutline.jpg'
import tylerog from '../public/assets/tylerorangegreenoutline.jpg'
import tylerrb from '../public/assets/tylerredblkpoints.jpg'
import { StaticImageData } from 'next/image'

const pics: StaticImageData[] = [prof_pic, tylerbgb, tylerog, tylerbp, tylerrb]

export default function Pics() {
  let [picIndex, setPicIndex] = useState(0)

  let changePic = () => {
    let newIndex = picIndex + 1
    if (newIndex < pics.length) setPicIndex(newIndex)
    else setPicIndex(0)
  }

  return (
    <img id='random-pic' src={pics[picIndex].src} alt='pic' onClick={changePic} width={200} height={200} />
  )
}