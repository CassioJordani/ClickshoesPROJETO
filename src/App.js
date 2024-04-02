import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* importando scripts das páginas */
import MainLayout from './pages/MainLayout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contatos from './pages/Contatos.jsx';
import Products from './pages/Products.jsx';
import SingleProduct from './pages/SingleProduct.jsx';
import Error from './pages/Error.jsx';
import Perfil from './pages/Perfil.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ThemeProvider } from './ThemeProvider';



function App() {
	return (
		<div className='App'>
			{/* definindo rotas */}
			<BrowserRouter>
				<ThemeProvider>
					<Routes>
						<Route path='/' element={<MainLayout />}>
							<Route index element={<Home />} />
							<Route path='about' element={<About />} />
							<Route path='products' element={<Products />} />
							<Route path='products/:productId' element={<SingleProduct />} />
							<Route path='contatos' element={<Contatos />} />
							<Route path='*' element={<Error />} /> 
							<Route path="perfil" element={<Perfil />}/>  
						</Route>
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
