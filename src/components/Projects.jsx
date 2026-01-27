import { motion } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      category: 'WEB DESIGN',
      description: 'A modern, responsive portfolio website with dark/light mode',
      tags: ['React', 'Vite', 'CSS', 'Animation'],
      gradient: 'var(--gradient-purple-pink)',
      github: 'https://github.com/johndogmoc/portfolio',
      live: 'https://johndogmoc.com',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      category: 'FULL STACK',
      description: 'Complete e-commerce solution with payment integration',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      gradient: 'var(--gradient-cyan-blue)',
      github: 'https://github.com/johndogmoc/ecommerce-platform',
      live: 'https://ecommerce-demo.johndogmoc.com',
    },
    {
      id: 3,
      title: 'Task Management App',
      category: 'WEB APPLICATION',
      description: 'Real-time collaboration task management tool',
      tags: ['React', 'Firebase', 'Tailwind', 'Socket.io'],
      gradient: 'var(--gradient-orange-red)',
      github: 'https://github.com/johndogmoc/task-manager',
      live: 'https://task-manager-demo.johndogmoc.com',
    },
    {
      id: 4,
      title: 'Analytics Dashboard',
      category: 'DATA VISUALIZATION',
      description: 'Interactive analytics dashboard with real-time data',
      tags: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      gradient: 'var(--gradient-blue-red)',
      github: 'https://github.com/johndogmoc/analytics-dashboard',
      live: 'https://analytics-demo.johndogmoc.com',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-label">CASE STUDY</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card glass"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="project-image" style={{ background: project.gradient }}>
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github-link"
                    whileHover={{ scale: 1.1 }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link live-link"
                    whileHover={{ scale: 1.1 }}
                  >
                    Live Demo <span className="arrow">→</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
