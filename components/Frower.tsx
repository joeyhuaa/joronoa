import Link from 'next/link'
import Image from 'next/image'
import frower from '../public/assets/frower.svg'

export default function Frower({ width, position }) {
  return (
    <div style={{ position, marginTop: '20px' }}>
      <Link href='/home'>
        <Image src={frower} alt='' width={width} />
      </Link>
    </div>
  )
}