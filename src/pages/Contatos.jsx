import { useState } from 'react';
import '../Contact.css';
import emailjs from '@emailjs/browser';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e.preventDefault();

    if(name === '' || email === '' || message === ''){
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_od97lgk", "template_8wi7466", templateParams, "9wOvOMaTj6Bi6wG3M")
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      setName('')
      setEmail('');
      setMessage('');

    }, (err) => {
      console.log("ERRO: ", err)
    })

  }

  return (    
    <main className='contact'>
      <div className="pg-header">
        <div className="container">
          <br/>
          <br/>
          <h1 className="title">Contato</h1>
          <form className="form" onSubmit={sendEmail}>
            <input 
              className="input"
              type="text"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input 
              className="input"
              type="text"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <textarea 
              className="textarea"
              placeholder="Digite sua mensagem..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />

            <input className="button" type="submit" value="Enviar" />
          </form>

        </div>
      </div>
    </main>
  );
}

export default App;
