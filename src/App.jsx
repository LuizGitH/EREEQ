import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage'
import LetterPage from './pages/LetterPage'
import ParticipantsPage from './pages/ParticipantsPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Letter" element={<LetterPage/>} />
        <Route path="/Participants" element={<ParticipantsPage/>} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </Router> 
  )
}

export default App
