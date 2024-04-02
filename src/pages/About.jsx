const About = () => {
  return (
    <main className="about">
      <div className="pg-header">
        <div className="container">
        <br/>
        <br/>
        <br/>
          <h1>Quem Somos</h1>
        </div>
      </div>
      <div className="container content">
                {/* "row" é usada para criar uma linha que contém as três colunas. */}
        <div className="row">
                    {/* Coluna de 4 partes de 12 em uma grade, Bootstrap. */}
          <div className="col-lg-4">
            <h2>Por que Escolher Nós.</h2>
            <p>Somos apaixonados por proporcionar conforto e estilo. Venha experienciar calçados excepcionais, feitos com dedicação e qualidade. Valorizamos a sua satisfação e queremos caminhar ao seu lado, oferecendo o melhor em cada passo.</p>
          </div>
          <div className="col-lg-4">
            <h2>Nossa Missão.</h2>
            <p>Buscamos criar mais do que simples calçados; queremos ser parte das suas jornadas diárias. Nossa missão é entregar não apenas produtos de alta qualidade, mas também uma experiência que faça você se sentir especial a cada passo que der.</p>
          </div>
          <div className="col-lg-4">
            <h2>O Que Fazemos.</h2>
            <p>Nosso trabalho vai além de simplesmente vender calçados. Estamos comprometidos em oferecer soluções para as suas necessidades de moda e conforto. Cada par de sapatos conta uma história, e queremos que a sua seja repleta de estilo, conforto e confiança.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
