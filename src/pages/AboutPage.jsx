import { motion } from 'framer-motion'
import './AboutPage.css'
import PageRobots from '../components/PageRobots'

const AboutPage = () => {
  const skills = ['React', 'Node.js', 'JavaScript', 'MongoDB', 'Express', 'Firebase', 'Tailwind CSS', 'Git']

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="about-page">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>About Me</h1>
        <p>Get to know me better</p>
      </motion.div>

      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2>Who I Am</h2>
          <p>
            I'm John Dogmoc, a passionate Full Stack Developer from Libertad, Butuan City, Agusan del Norte, Philippines. With 5+ years of experience in web development, I specialize in building scalable applications that solve real-world problems.
          </p>
          
          <h3>My Journey</h3>
          <p>
            My journey in web development started with a curiosity about how websites work. What began as a hobby has evolved into 
            a professional career where I get to work on challenging projects with talented teams. I believe in continuous learning 
            and staying updated with the latest technologies in the ever-evolving tech landscape.
          </p>

          <h3>What I Do</h3>
          <p>
            I develop full-stack web applications using modern technologies like React, Node.js, and MongoDB. I'm passionate about 
            writing clean, maintainable code and creating user experiences that are both intuitive and delightful. From frontend 
            design to backend architecture, I enjoy the entire development process.
          </p>

          <h3>My Philosophy</h3>
          <p>
            I believe that great software is built on a foundation of clear communication, thorough planning, and continuous 
            improvement. I work closely with clients and teams to understand requirements and deliver solutions that exceed expectations. 
            Every project is an opportunity to learn something new and improve my craft.
          </p>
        </motion.div>

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="image-placeholder">
            <div className="icon">👨‍💻</div>
            <p>Full Stack Developer</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="about-stats"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="stat-card" variants={itemVariants}>
          <h3>5+</h3>
          <p>Years of Experience</p>
        </motion.div>
        <motion.div className="stat-card" variants={itemVariants}>
          <h3>20+</h3>
          <p>Projects Completed</p>
        </motion.div>
        <motion.div className="stat-card" variants={itemVariants}>
          <h3>15+</h3>
          <p>Happy Clients</p>
        </motion.div>
        <motion.div className="stat-card" variants={itemVariants}>
          <h3>100%</h3>
          <p>Satisfaction Rate</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="about-skills"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2>Key Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="about-cta"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2>Ready to Work Together?</h2>
        <p>Let's collaborate on your next project</p>
        <motion.a
          href="/contact"
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch →
        </motion.a>

        <PageRobots page="about" />
      </motion.div>
    </div>
  )
}

export default AboutPage
