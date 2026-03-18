import './App.css'
import { Baseboard } from './components/Baseboard'
import { Cabecalho } from './components/Cabecalho'
import { Banner } from './components/Banner'
function App() {

  return (
    <>
      <header>
        <Cabecalho />
      </header>

      <main>
        <Banner/>
      </main>

      <footer>
        <Baseboard />
      </footer>
    </>
  )
}

export default App
