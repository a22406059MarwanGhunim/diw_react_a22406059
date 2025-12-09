import tecnologias from '@/app/data/tecnologias.json'
import Image from 'next/image'

export default function TecnologiasPage() {
  return (
    <>
      <h2>Tecnologias Exploradas</h2>
      
      {tecnologias.map((tech, index) => (
        <div key={index}>
          <Image
            src={`/tecnologias/${tech.image}`}
            alt={tech.title}
            width={200}
            height={200}
          />
          
          <h3>{tech.title}</h3>
          <p>{tech.description}</p>
          <p>Rating: {tech.rating}/5</p>
        </div>
      ))}
    </>
  )
}