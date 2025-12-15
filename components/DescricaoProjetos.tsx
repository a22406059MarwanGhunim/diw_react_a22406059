// app/projetos/DescricaoProjetos.tsx
import Projeto from '@/components/Projeto'

export default function DescricaoProjetos() {
  return (
    <div>
      <p>
        Durante esta disciplina já fiz vários projetos fixes! 
        Podes ver todos os meus trabalhos aqui:{' '}
        <a 
          href="https://marwanghunim.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline font-bold"
        >
          Minha Homepage no GitHub Pages
        </a>
      </p>

      <h3>Alguns dos projetos:</h3>

      <div>
        <Projeto 
          nome="Loja Online" 
          url="https://exemplo.com" 
        />
        <Projeto 
          nome="Site com JavaScript Interativo" 
          url="https://link-do-teu-site-js-aqui.com" 
        />
      </div>
    </div>
  )
}