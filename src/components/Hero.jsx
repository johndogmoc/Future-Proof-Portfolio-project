import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="hero-title">
          John Dogmoc
        </motion.h1>
        <motion.p variants={itemVariants} className="hero-subtitle">
          Full Stack Developer | Creative Problem Solver
        </motion.p>
        <motion.p variants={itemVariants} className="hero-description">
          Building beautiful and functional web experiences with modern technologies
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="hero-buttons"
        >
          <button className="btn btn-primary">Explore My Work</button>
          <button className="btn btn-secondary">Get In Touch</button>
        </motion.div>
      </motion.div>
      
      <motion.div
        className="hero-background"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </section>
  )
}

export default Hero
