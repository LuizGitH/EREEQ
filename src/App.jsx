import './App.css'
import { Baseboard } from './components/Baseboard'
import { Cabecalho } from './components/Cabecalho'
import { Banner } from './components/Banner'
import { AboutEvent } from './components/AboutEvent'
import { ObjectivesAndActivities } from './components/ObjectivesAndActivities'
import { TopicsDiscussed } from './components/TopicsDiscussed'
function App() {

  return (
    <>
      <header>
        <Cabecalho />
      </header>

      <main>
        <Banner/>
        <AboutEvent/>
        <ObjectivesAndActivities/>
        <TopicsDiscussed/>        
      </main> 
      <footer>
        <Baseboard />
      </footer>
    </>
  )
}

export default App
/*Os componetes serão:
 AboutEvent
ObjectivesAndActivities
TopicsDiscussed
EventImportance*/