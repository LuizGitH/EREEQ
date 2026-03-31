import '../App.css'
import { Baseboard } from '../components/Baseboard'
import { Cabecalho } from '../components/Cabecalho'
import { EventParticipants } from '../components/EventParticipants'
import { EventImages } from '../components/EventImages'

function ParticipantsPage() {

  return (
    <>
      <header>
        <Cabecalho />
      </header>

      <main>
        <EventParticipants />
        <EventImages />
      </main>

      <footer>
        <Baseboard />
      </footer>
    </>
  )
}

export default ParticipantsPage
