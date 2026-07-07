import Sidebar from './components/Sidebar.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div className="bg-white dark:bg-navy-950 lg:flex">
      <Sidebar />
      <main className="lg:min-w-0 lg:flex-1">
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
