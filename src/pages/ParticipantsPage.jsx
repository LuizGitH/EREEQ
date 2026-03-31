import '../App.css'
import { Baseboard } from '../components/Baseboard'
import { Cabecalho } from '../components/Cabecalho'
import { EventParticipants } from '../components/EventParticipants'

function ParticipantsPage() {

  return (
    <>
      <header>
        <Cabecalho />
      </header>

      <main>
        <EventParticipants />
      </main>

      <footer>
        <Baseboard />
      </footer>
    </>
  )
}

export default ParticipantsPage
