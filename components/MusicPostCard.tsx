import Image from "next/image"
import Link from "next/link"

interface Props {
  title: string,
  subtitle: string,
  imageSrc: string,
  link: string,
}

export default function MusicPostCard({ title, subtitle, imageSrc, link }: Props) {
  return (
    <div className="card lg:card-side w-96 image-full">
      <figure><Image src={imageSrc} alt="pic" height={250} width={250} /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{subtitle}</p>
        <div className="card-actions justify-end">
          <Link href={link}>
            <button className="btn btn-primary">Read</button>
          </Link>
        </div>
      </div>
    </div>
  )
}