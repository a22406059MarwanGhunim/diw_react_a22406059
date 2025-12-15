import tecnologias from '@/app/data/tecnologias.json'
import TecnologiaDetailsCard from '@/components/TecnologiaDetailsCard'
import Link from 'next/link'

export default function TecnologiaPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id)

  // Se o id for inválido ou fora do range
  if (isNaN(id) || id < 0 || id >= tecnologias.length) {
    return (
      <div className="text-center pt-40 text-4xl">
        404 – Tecnologia não encontrada
      </div>
    )
  }

  const tech = tecnologias[id]

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <TecnologiaDetailsCard
          title={tech.title}
          image={tech.image}
          description={tech.description}
          rating={tech.rating}
        />

        <Link
          href="/tecnologias"
          className="inline-block mt-12 bg-blue-600 hover:bg-blue-800 text-white font-bold py-4 px-12 rounded-full text-xl"
        >
          ← Voltar
        </Link>
      </div>
    </div>
  )
}