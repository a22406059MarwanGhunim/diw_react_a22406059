// app/projetos/Projeto.tsx
export default function Projeto({ nome, url }: { nome: string; url: string }) {
  return (
    <div>
      <p>
        Fiz o projeto "{' '}"
        <strong>{nome}</strong>
        "{' '}" – podes ver aqui:{' '}
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Ver projeto
        </a>
      </p>
    </div>
  )
}