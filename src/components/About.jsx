import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems. 
              With experience in modern web technologies, I craft responsive and intuitive digital experiences.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or mentoring aspiring developers. I believe in continuous learning and pushing the boundaries of what's possible.
            </p>
          </motion.div>

          <motion.div
            className="about-highlights"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="highlight-item">
              <h3>5+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="highlight-item">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="highlight-item">
              <h3>30+</h3>
              <p>Happy Clients</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
