import { motion } from 'framer-motion'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Tech Company Inc.',
      period: '2023 - Present',
      location: 'Remote',
      description: 'Developed and maintained web applications using React, Node.js, and PostgreSQL. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
      achievements: [
        'Increased application performance by 40%',
        'Led a team of 3 junior developers',
        'Implemented CI/CD pipelines'
      ]
    },
    {
      title: 'Frontend Developer Intern',
      company: 'StartupXYZ',
      period: '2022 - 2023',
      location: 'San Francisco, CA',
      description: 'Built responsive user interfaces and improved user experience. Worked on multiple client projects using modern JavaScript frameworks.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
      achievements: [
        'Reduced page load time by 30%',
        'Improved accessibility scores',
        'Mentored 2 new interns'
      ]
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: '2021 - 2022',
      location: 'Remote',
      description: 'Created custom websites and web applications for small businesses. Managed full project lifecycle from design to deployment.',
      technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL'],
      achievements: [
        'Completed 15+ client projects',
        'Maintained 100% client satisfaction',
        'Built reusable component library'
      ]
    }
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience</h2>

          <div className="timeline">
            <motion.div
              className="timeline-container"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  variants={itemVariants}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <motion.div
                      className="experience-card"
                      whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)' }}
                    >
                      <div className="experience-header">
                        <div>
                          <h3>{exp.title}</h3>
                          <h4>{exp.company}</h4>
                          <div className="experience-meta">
                            <span className="experience-period">{exp.period}</span>
                            <span className="experience-location">📍 {exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <p className="experience-description">{exp.description}</p>
                      <div className="experience-tech">
                        <strong>Technologies:</strong>
                        <div className="tech-tags">
                          {exp.technologies.map((tech, i) => (
                            <span key={i} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="experience-achievements">
                          <strong>Key Achievements:</strong>
                          <ul>
                            {exp.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
