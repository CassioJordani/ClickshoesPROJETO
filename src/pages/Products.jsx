import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PRODUCTS from '../data.js';
import '../Cart.css'; // Importando a folha de estilo do carrinho
import carrinhoIcon from '../images/carrinho-de-compras.png'; // Importando o ícone do carrinho

const Products = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav>
              <br/>
              <br/>
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item">
                    <Link to="/">Home-</Link>
                  </li>
                  <br/>
                  <br/>
                  <li className="breadcrumb-item active">Produtos</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <button className="cart-icon" onClick={() => setIsCartOpen(!isCartOpen)}>
        <img src={carrinhoIcon} alt="Carrinho de compras" style={{ width: '30px', height: '30px' }} />
      </button>

      {isCartOpen && (
        <div className="cart-popup">
          <div className="cart">
            <h2>Carrinho de Compras</h2>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div>
                    <p>{item.name}</p>
                    <p>Preço: {item.price}</p>
                    <div>
                      <button onClick={() => decreaseQuantity(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                    <p>Subtotal: {item.price * item.quantity}</p>
                    <button onClick={() => removeFromCart(item.id)}>Remover do Carrinho</button>
                  </div>
                </li>
              ))}
            </ul>
            <p>Total: {calculateTotal()}</p>
          </div>
        </div>
      )}

      <div className="container content">
        <div className="row products-row">
          {PRODUCTS.map((product) => {
            return (
              <div className="col-lg-4" key={product.id}>
                <div className="card">
                  <div className="img-wrap">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.details}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>
                        Preço: <strong className="price"> {product.price}</strong>
                      </span>
                      <div>
                        <Link to={`/products/${product.id}`} className="btn btn-primary btn-sm">
                          DETALHES
                        </Link>
                        <button
                          className="btn btn-primary btn-sm ml-2"
                          onClick={() => addToCart(product)}
                        >
                          ADICIONAR AO CARRINHO
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Products;
