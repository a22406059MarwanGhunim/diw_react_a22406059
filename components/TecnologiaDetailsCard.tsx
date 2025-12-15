

import Image from 'next/image'

interface TecnologiaDetailsCardProps {
  title: string
  image: string
  description: string
  rating: number
}

export default function TecnologiaDetailsCard({ 
  title, 
  image, 
  description, 
  rating 
}: TecnologiaDetailsCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
      <div className="p-10 text-center">
        <Image
          src={`/tecnologias/${image}`}
          alt={title}
          width={220}
          height={220}
          className="mx-auto mb-8"
        />
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <p className="text-lg text-gray-700 mb-8">{description}</p>
        <p className="text-2xl">
          Minha nota: <strong>{rating} / 5</strong> ⭐
        </p>
      </div>
    </div>
  )
}