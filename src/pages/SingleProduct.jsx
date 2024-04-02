import { Link, useNavigate , useParams } from 'react-router-dom'
import PRODUCTS from '../data.js'

const SingleProduct = () => {

  //página dos detalhes dos produtos

  // navigate para navegação entre páginas a partir dos botões (Hook)
  const navigate = useNavigate();

  // extrair o produto especifico na tabela de produtos por meio do ID e renderizar (Hook)
  const { productId } = useParams();
  const singleProduct = PRODUCTS.find(product => product.id === parseInt(productId))
  const { name, price, image, details } = singleProduct

  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>{name}</h1>
            </div>
            {/*breadcrumb é um recurso para informar onde ele está*/}
            <div className="col-lg-5">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/products">Produtos</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">{name}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container content">
        <div className="row">
          <div className="col-lg-5">
            <img src={image} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-7">
            <h2>{name}</h2>
            <p className="price"><strong>{price}</strong></p>
            <p>{details} {details} {details} {details} {details} </p>

            <br />
            <button className="btn btn-primary btn-sm" onClick={() => navigate(-1)}>VOLTAR</button> &nbsp; 
            <button className="btn btn-primary btn-sm" onClick={() => navigate('/products')}>NAVEGAR PELOS PRODUTOS</button> &nbsp;
            <Link to="/products" className="btn btn-primary btn-sm">ADICIONAR AO CARRINHO</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SingleProduct