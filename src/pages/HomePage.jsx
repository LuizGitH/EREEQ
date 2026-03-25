import '../App.css'
import { Baseboard } from '../components/Baseboard'
import {Cabecalho} from '../components/Cabecalho'
import { Banner } from '../components/Banner'
import { AboutEvent } from '../components/AboutEvent'
import { ObjectivesAndActivities } from '../components/ObjectivesAndActivities'
import { TopicsDiscussed } from '../components/TopicsDiscussed'
import { EventImportance } from '../components/EventImportance'
function HomePage() {

  return (
    <>
      <header>
        <Cabecalho/>
      </header>

      <main>
        <Banner/>
        <AboutEvent/>
        <ObjectivesAndActivities/>
        <TopicsDiscussed/>
        <EventImportance/>        
      </main> 
      <footer>
        <Baseboard />
      </footer>
    </>
  )
}

export default HomePage
