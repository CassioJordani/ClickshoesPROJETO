import { useState, useEffect } from 'react';
import { db } from '../firebaseConnection';
import { onSnapshot, collection, addDoc, updateDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';
//import { signOut, onAuthStateChanged } from 'firebase/auth';

function Dados() {
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [idUsuario, setIdUsuario] = useState('');
  //const [user, setUser] = useState(false);
  //const [userDetail, setUserDetail] = useState({});
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "detalhes-perfil"), (snapshot) => {
      let listaDados = [];
      snapshot.forEach((doc) => {
        listaDados.push({
          id: doc.id,
          telefone: doc.data().telefone,
          endereco: doc.data().endereco,        
        })
      })
      setDados(listaDados);
    });
    return () => unsubscribe();
  }, []);


  async function handleAdd() {
    try {
      await addDoc(collection(db, "detalhes-perfil"), {
        telefone: telefone,
        endereco: endereco,
      });
      console.log("CADASTRADO COM SUCESSO")
      setTelefone('');
      setEndereco('');
    } catch (error) {
      console.error("ERRO", error);
    }
  }

  async function buscarDados() {
    try {
      const snapshot = await getDocs(collection(db, "detalhes-perfil"));
      let lista = [];
      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          telefone: doc.data().telefone,
          endereco: doc.data().endereco,
        })
      })
      setDados(lista);
    } catch (error) {
      console.error("DEU ALGUM ERRO AO BUSCAR", error);
    }
  }

  async function editarDados() {
    try {
      const docRef = doc(db, "detalhes-perfil", idUsuario);
      await updateDoc(docRef, {
        telefone: telefone,
        endereco: endereco,
      });
      console.log("POST ATUALIZADO!");
      setIdUsuario('');
      setTelefone('');
      setEndereco('');
    } catch (error) {
      console.error(error);
    }
  }

  async function excluirDados(id) {
    try {
      const docRef = doc(db, "detalhes-perfil", id);
      await deleteDoc(docRef);
      alert("POST DELETADO COM SUCESSO!");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h2>Detalhes de perfil:</h2>
      <label htmlFor="idUsuario">ID do usuário</label>
      <input
        id="idUsuario"
        placeholder='Digite o ID do usuário'
        value={idUsuario}
        onChange={(e) => setIdUsuario(e.target.value)}
      />
      <br/>
      <label htmlFor="telefone">Telefone:</label>
      <textarea
        id="telefone"
        placeholder='Digite o telefone'
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <label htmlFor="endereco">Endereco:</label>
      <input
        id="endereco"
        type="text"
        placeholder="Digite o endereço"
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
      />
      <div className="button-group">
        <button onClick={handleAdd} className="btn btn-primary btn-sm">Adicionar</button>
        <button onClick={buscarDados} className="btn btn-primary btn-sm">Buscar dados</button>
        <button onClick={editarDados} className="btn btn-primary btn-sm">Editar dados</button>
      </div>
      <ul>
        {dados.map((dado) => (
          <li key={dado.id}>
            <strong>ID: {dado.id}</strong> <br/>
            <span>Telefone: {dado.telefone} </span> <br/>
            <span>Endereco: {dado.endereco}</span> <br/>
            <button className="btn btn-primary btn-sm" onClick={() => excluirDados(dado.id)}>Excluir</button> <br/> <br/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dados;
