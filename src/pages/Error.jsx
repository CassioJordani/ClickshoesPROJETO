import { Link } from 'react-router-dom'
          /* Erro 404 quando não localizar a página */
const Error = () => {
  return (
    <main>
       <div className="pg-header">
        <div className="container">
          <h1>404 Error</h1>
        </div>
      </div>
      <div className="container content">
        <p>Página não encontrada...</p>
        {/* Botão voltar para a home */}
        <Link to="/" className="btn btn-primary">Voltar para a página inicial...</Link>
      </div>
    </main>
  )
}

export default Error