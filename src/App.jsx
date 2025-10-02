import './App.css'
import { Link,  Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './components/navigation/Navbar'
import FullScreenNav from './components/navigation/FullScreenNav'
import { useContext } from 'react'
import { NavBarContext } from './context/NavContext'

function App() {

  const [NavOpen] = useContext(NavBarContext);

  return (
    <div className='overflow-x-hidden w-screen'>
      <Navbar />
      {NavOpen && <FullScreenNav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agency" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
