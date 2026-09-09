import BackgroundAnimation from './components/BackgroundAnimation'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import achievements from './components/achievements'
export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundAnimation />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
