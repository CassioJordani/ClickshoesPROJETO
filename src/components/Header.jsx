import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from '../firebaseConnection';
import '../perfil.css'; // Importando o estilo.
import minhaImagem from '../images/perfil-imagem.png';
import { useTheme } from './../ThemeProvider';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState(false);
  const [userDetail, setUserDetail] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(true);
        setUserDetail({
          uid: user.uid,
          email: user.email
        });
        navigate('/perfil'); // Redirecionar para /tarefas após o login
      } else {
        setUser(false);
        setUserDetail(null);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  async function novoUsuario() {
    if (!email || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      console.log("CADASTRADO COM SUCESSO!");
      setEmail('');
      setSenha('');
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  }

  async function logarUsuario() {
    if (!email || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      console.log("USER LOGADO COM SUCESSO");
      setEmail('');
      setSenha('');
      setError(null);
    } catch (error) {
      alert(error.message);
    }
  }

  async function fazerLogout() {
    await signOut(auth);
    setUser(false);
    setUserDetail(null);
    navigate('/'); // Redirecionar para a página inicial após o logout
  }

  return (
    <header>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='logo'>
            <Link to='/' className='brand'>Clickshoes</Link>
          </div>
          {/* Links de navegação do cabeçalho */}
          <nav className='nav nav-pills'>
            <NavLink to='/' className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
            <NavLink to='about' className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>Sobre</NavLink>
            <NavLink to='products' className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>Produtos</NavLink>
            <NavLink to='contatos' className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>Contatos</NavLink>
            <button onClick={toggleTheme} className="btn btn-link" style={{ color: theme === 'light' ? '#000' : '#fff' }}>
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle-fill" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8"/>
                </svg>
              )}
            </button>
            <img src={minhaImagem} alt="Descrição da imagem" style={{ width: '60px', height: '60px'}} className='imagem-nav' />
          </nav>
          {/* Componente de autenticação */}
          <div className='login'>
            {user ? (
              <>
                <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: 'white'  }}>ID: {userDetail.uid}</span> <br />
                <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: 'white' }}>Email: {userDetail.email}</span>
                <br />
                <button onClick={fazerLogout} className="login-button">SAIR</button>
              </>
            ) : (
              <>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite um email"
                /> <br />

                <input
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="Informe sua senha"
                /> <br />
                {error && <div className="error">{error}</div>}
                <div className='dolado'>
                  <div className="button-group">
                    <button onClick={novoUsuario} className="login-button">CADASTRAR</button>
                    <button onClick={logarUsuario} className="login-button">FAZER LOGIN</button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
