import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import { ThemeProvider } from './context/ThemeContext'
// import Resume from './components/Resume'

function App() {

  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <div className='bg-white dark:text-white dark:bg-slate-950'>
        <About />
        <Projects />
        {/* <Resume /> */}
        <Contact />
      </div>
    </ThemeProvider>
  )
}

export default App
