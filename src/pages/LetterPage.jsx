import '../App.css'
import { Baseboard } from '../components/Baseboard'
import { Cabecalho } from '../components/Cabecalho'
import { ErrecLetter } from '../components/ErrecLetter'

function LetterPage() {

  return (
    <>
      <header>
        <Cabecalho />
      </header>

      <main>
        <ErrecLetter />
      </main>

      <footer>
        <Baseboard />
      </footer>
    </>
  )
}

export default LetterPage
