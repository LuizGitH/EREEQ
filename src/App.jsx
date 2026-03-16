import './App.css'
import { Baseboard } from './components/Baseboard'
import { Cabecalho } from './components/Cabecalho'
function App() {

  return (
    <main>
      <header>
        <Cabecalho />
        <section>
          <img src="/banner.jpg" alt="" />
        </section>

        <Baseboard/>

      </header>


    </main>
  )
}

export default App
