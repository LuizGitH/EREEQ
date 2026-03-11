import './App.css'

function App() {

  return (
    <main>
      <header>
        <div className='header'>
          <div className='logo'>
            <h1>I EREEQ-CO</h1>
          </div>
          <div>
            <nav className='menu'>
            <a href="#" className='ativo'>Sobre o Evento</a>
            <a href="#" >Participantes</a>
            <a href="#" >Carta do I EREEQ-CO</a>
          </nav>
          </div>
        </div>
      </header>

      <section>
        <img src="/banner.jpg" alt="" />
      </section>
    </main>
  )
}

export default App
