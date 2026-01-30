import { motion } from 'framer-motion'
import { useState } from 'react'
import ProjectModal from '../components/ProjectModal'
import './ProjectsPage.css'

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const allProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      fullDescription: 'A comprehensive e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payment processing with Stripe, user authentication, and admin dashboard for managing products and orders.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express', 'JWT'],
      image: '🛍️',
      category: 'What I Know',
      categoryColor: '#10b981',
      features: [
        'User authentication and authorization',
        'Product search and filtering',
        'Shopping cart and checkout process',
        'Payment gateway integration',
        'Order tracking system',
        'Admin dashboard for inventory management'
      ],
      liveUrl: 'https://example-ecommerce.com',
      githubUrl: 'https://github.com/johndogmoc/ecommerce'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      fullDescription: 'A real-time task management application that enables teams to collaborate efficiently. Built with React and Firebase, it provides instant synchronization across multiple users, project organization, and progress tracking.',
      tech: ['React', 'Firebase', 'Tailwind CSS', 'Redux', 'Firestore'],
      image: '✓',
      category: 'What I Learned',
      categoryColor: '#3b82f6',
      features: [
        'Real-time collaboration',
        'Task creation and assignment',
        'Progress tracking and analytics',
        'Team workspace management',
        'Notifications and reminders',
        'Mobile responsive design'
      ],
      liveUrl: 'https://task-manager-app.com',
      githubUrl: 'https://github.com/johndogmoc/task-manager'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather information with beautiful UI',
      fullDescription: 'An interactive weather dashboard that fetches real-time weather data from multiple sources. Features beautiful visualizations, weather forecasts, and detailed analytics with an intuitive user interface.',
      tech: ['React', 'OpenWeather API', 'Chart.js', 'Axios', 'CSS3'],
      image: '🌤️',
      features: [
        'Real-time weather data',
        '7-day forecast',
        'Interactive weather charts',
        'Location-based weather',
        'Weather alerts',
        'Multi-city support'
      ],
      liveUrl: 'https://weather-dash.app',
      githubUrl: 'https://github.com/johndogmoc/weather-dashboard'
    },
    {
      title: 'Portfolio Website',
      description: 'Professional portfolio with smooth animations',
      fullDescription: 'A stunning portfolio website showcasing projects and skills with smooth animations and modern design. Built with React and Framer Motion for eye-catching visual effects and excellent user experience.',
      tech: ['React', 'Framer Motion', 'Vite', 'CSS3', 'Responsive Design'],
      image: '🎨',
      category: 'What I\'m Aspiring To',
      categoryColor: '#8b5cf6',
      features: [
        'Smooth page transitions',
        'Interactive animations',
        'Dark/Light theme toggle',
        'Responsive mobile design',
        'SEO optimized',
        'Performance optimized'
      ],
      liveUrl: 'https://johndogmoc.com',
      githubUrl: 'https://github.com/johndogmoc/portfolio'
    },
    {
      title: 'Social Media App',
      description: 'Full-featured social networking platform',
      fullDescription: 'A modern social media application with user profiles, post feeds, real-time messaging, and community features. Built with React, Firebase, and leveraging cloud storage for media files.',
      tech: ['React', 'Firebase', 'Redux', 'Material-UI', 'Websockets'],
      image: '👥',
      features: [
        'User profiles and connections',
        'Post creation and feed',
        'Real-time messaging',
        'Like and comment system',
        'Media uploads',
        'Notification system'
      ],
      liveUrl: 'https://social-media-app.com',
      githubUrl: 'https://github.com/johndogmoc/social-app'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Business analytics and reporting tool',
      fullDescription: 'A powerful analytics dashboard for tracking business metrics, generating reports, and visualizing data. Built with React and D3.js for advanced data visualization.',
      tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Recharts'],
      image: '📊',
      features: [
        'Real-time metrics',
        'Custom reports',
        'Data visualization',
        'Export functionality',
        'User permissions',
        'Dashboard customization'
      ],
      liveUrl: 'https://analytics-dash.com',
      githubUrl: 'https://github.com/johndogmoc/analytics'
    }
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="projects-page">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>All Projects</h1>
        <p>Explore my complete portfolio of work</p>
      </motion.div>

      <motion.div
        className="projects-grid-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {allProjects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card-full"
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
            onClick={() => setSelectedProject(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
            aria-label={`View details for ${project.title}`}
          >
            {project.category && (
              <div
                className="big-three-badge"
                style={{
                  background: `linear-gradient(135deg, ${project.categoryColor}22, ${project.categoryColor}44)`,
                  borderColor: `${project.categoryColor}66`
                }}
              >
                <span className="badge-icon">⭐</span>
                {project.category}
              </div>
            )}
            <div className="project-icon">{project.image}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
            <motion.button
              className="view-details-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Details →
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}

export default ProjectsPage
