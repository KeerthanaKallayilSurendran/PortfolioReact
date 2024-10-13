import './App.css'
import Nav from './Components/Nav'
import Experience from './Pages/Experience'
import Landing from './Pages/Landing'
import Project from './Pages/Project'
import Skill from './Pages/Skill'
import Contact from './Pages/Contact'
function App() {

  return (
    <>
      <div className='relative top-10 z-10'>
        <Nav />
      </div>
      <div className=' top-0 w-full'>
        <Landing />
      </div>
      <Experience />
      <Skill />
      <Project />
      <Contact />

    </>
  )
}

export default App
