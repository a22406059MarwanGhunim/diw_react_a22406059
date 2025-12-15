// app/components/TecnologiaCard.tsx  (ou onde estiver)

import Link from 'next/link'
import Image from 'next/image'

interface TecnologiaCardProps {
  title: string
  image: string
  index: number   
}

export default function TecnologiaCard({ title, image, index }: TecnologiaCardProps) {
  return (
    <Link href={`/tecnologia/${index}`}>
      <div className="w-64 h-80 bg-white rounded-xl shadow-md hover:shadow-xl transition cursor-pointer flex flex-col items-center justify-center p-8">
        <Image
          src={`/tecnologias/${image}`}
          alt={title}
          width={120}
          height={120}
          className="mb-6"
        />
        <h3 className="text-xl font-semibold text-center">{title}</h3>
      </div>
    </Link>
  )
}