import { motion } from 'framer-motion'
import './Hero.css'
import profileImage from '../assets/profile.png'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-glow"></div>
      
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="glass-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Future-Proof Web Developer
          </motion.div>
          
          <h1 className="hero-title">
            <span className="block">Hello, I'm</span>
            <span className="name-3d" data-text="John Carry Dogmoc">John Carry Dogmoc</span>
          </h1>
          
          <p className="hero-description">
            Crafting immersive digital experiences with modern web technologies.
            Specializing in 3D interfaces, glassmorphism, and futuristic UI/UX.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary glass-button">
              View Portfolio
            </a>
            <a href="#contact" className="btn btn-secondary glass-button">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="profile-glass-card">
            <div className="profile-glow"></div>
            <img src={profileImage} alt="John Carry Dogmoc" className="profile-img" />
            
            {/* Floating UI Cards */}
            <motion.div 
              className="floating-card card-1"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="card-icon">⚛️</div>
              <div className="card-text">React Expert</div>
            </motion.div>
            
            <motion.div 
              className="floating-card card-2"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="card-icon">🎨</div>
              <div className="card-text">UI/UX Design</div>
            </motion.div>
            
            <motion.div 
              className="floating-card card-3"
              animate={{ y: [-5, 15, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="card-icon">🚀</div>
              <div className="card-text">Future Ready</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Ambient particles or shapes */}
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
    </section>
  )
}

export default Hero
