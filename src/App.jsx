import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Statistics from './components/Statistics'
import Testimonials from './components/Testimonials'
import Certificates from './components/Certificates'
import ScrollProgress from './components/ScrollProgress'
import ProjectsPage from './pages/ProjectsPage'
import ExperiencePage from './pages/ExperiencePage'
import AboutPage from './pages/AboutPage'
import EducationPage from './pages/EducationPage'
import SkillsPage from './pages/SkillsPage'
import ContactPage from './pages/ContactPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <ScrollProgress />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Statistics />
              <Testimonials />
              <Certificates />
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
