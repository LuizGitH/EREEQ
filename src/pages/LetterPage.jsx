import '../App.css'
import { Baseboard } from '../components/Baseboard'
import {Cabecalho} from '../components/Cabecalho'

function LetterPage() {

  return (
    <>
      <header>
        <Cabecalho/>
      </header>

      <footer>
        <Baseboard />
      </footer>
    </>
  )
}

export default LetterPage
