import Image from "next/image"
import Link from "next/link"
import prof_pic from '@/public/assets/prof-pic-square.jpg'

export default function About() {
  return (
    <div className='section'>
      <Image src={prof_pic.src} width={200} height={200} alt='profile pic' />
      <br />
      <p>Hi, I'm Joey Hua, welcome to my website :)</p>
      <p>My main interests are software development (fullstack) and making <Link href='/music'>music</Link>.</p>
      <p>
        I majored in Cognitive Science at UC Davis (class of 2022) because I was interested in the intersection of computer science
        and psychology. Also I was indecisive about what major to choose and CogSci was 4 majors blended together, so I decided
        that was the one for me.
      </p>
    </div>
  )
}