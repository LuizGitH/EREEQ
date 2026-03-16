import './cabecalho.estilos.css'
export function Cabecalho() {
  return (

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

  )
}