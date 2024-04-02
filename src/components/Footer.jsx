import {Link, NavLink} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>

      {/* Links de navegação do Footer */}
        <nav className='d-flex justify-content-center'>
            <NavLink to='/' 
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Home</NavLink>
            <NavLink to='about'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Sobre</NavLink>
            <NavLink to='products'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Produtos</NavLink>
            <NavLink to='contatos'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Contatos</NavLink>
        </nav>
        <div className="copyrights">
          &copy; 2023 <Link to="/"> Clickshoes</Link> - Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer