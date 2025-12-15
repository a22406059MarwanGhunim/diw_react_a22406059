// app/tecnologias/page.tsx

import tecnologias from '@/app/data/tecnologias.json'
import TecnologiaCard from '@/components/TecnologiaCard'  // ou o caminho certo

export default function TecnologiasPage() {
  return (
    <>
      <h2 className="text-3xl font-bold text-center my-10">Tecnologias Exploradas</h2>

      <div className="flex flex-wrap justify-center gap-8 p-10">
        {tecnologias.map((tech, index) => (
          <TecnologiaCard
            key={index}
            title={tech.title}
            image={tech.image}
            index={index} 
          />
        ))}
      </div>
    </>
  )
}