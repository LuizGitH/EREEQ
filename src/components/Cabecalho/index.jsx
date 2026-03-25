import { NavLink } from 'react-router-dom';
import './cabecalho.estilos.css'

export function Cabecalho() {
  return (

    <div className='header'>
      <div className='logo'>
        <NavLink to="/"><h1>I EREEQ-CO</h1></NavLink>
      </div>
      <div>
        <nav className='menu'>
          <NavLink to="/" >Sobre o Evento</NavLink>
          <NavLink to="/Participants" >Participantes</NavLink>
          <NavLink to="/Letter" >Carta do I EREEQ-CO</NavLink>
        </nav>
      </div>
    </div>

  )
}