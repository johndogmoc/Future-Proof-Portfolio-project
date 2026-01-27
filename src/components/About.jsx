import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const services = [
    {
      icon: '🎨',
      title: 'UI/UX & Creative Design',
      description: 'Create beautiful, user-friendly interfaces with modern design principles and attention to detail.',
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Build responsive, high-performance web applications using cutting-edge technologies and best practices.',
    },
    {
      icon: '📱',
      title: 'Full Stack Solutions',
      description: 'End-to-end development from database architecture to frontend implementation with seamless integration.',
    },
  ]

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-label">MY INTEREST</span>
          <h2 className="section-title">
            What I'm <span className="gradient-text">Offering</span>
          </h2>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card glass"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="service-btn">
                Read More <span className="arrow">→</span>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="experience-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="experience-header">
            <span className="experience-label">MY EXPERIENCE</span>
            <h2 className="section-title">Experience</h2>
          </div>
          <p className="experience-text">
            These are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
