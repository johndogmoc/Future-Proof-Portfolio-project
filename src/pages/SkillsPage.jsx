import { motion } from 'framer-motion'
import './SkillsPage.css'

const SkillsPage = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript/ES6+', level: 95 },
        { name: 'CSS3/Tailwind', level: 90 },
        { name: 'HTML5', level: 95 },
        { name: 'Framer Motion', level: 85 },
        { name: 'Redux', level: 85 }
      ]
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 90 },
        { name: 'MongoDB', level: 88 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Firebase', level: 85 },
        { name: 'REST APIs', level: 92 }
      ]
    },
    {
      category: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', level: 92 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 78 },
        { name: 'Vite', level: 88 },
        { name: 'Webpack', level: 82 },
        { name: 'CI/CD', level: 85 }
      ]
    },
    {
      category: 'Soft Skills',
      icon: '💼',
      skills: [
        { name: 'Project Management', level: 90 },
        { name: 'Team Leadership', level: 88 },
        { name: 'Problem Solving', level: 95 },
        { name: 'Communication', level: 92 },
        { name: 'Agile/Scrum', level: 88 },
        { name: 'Mentoring', level: 85 }
      ]
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
    <div className="skills-page">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>My Skills</h1>
        <p>Technologies and expertise I bring to the table</p>
      </motion.div>

      <motion.div
        className="skills-categories"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            className="category-card"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h2>{category.category}</h2>
            </div>

            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="skill-progress"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 + i * 0.05, duration: 0.5 }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="skills-highlights"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2>Key Competencies</h2>
        <div className="highlights-grid">
          <div className="highlight-item">
            <h3>Full Stack Development</h3>
            <p>End-to-end development of scalable web applications</p>
          </div>
          <div className="highlight-item">
            <h3>Database Design</h3>
            <p>SQL and NoSQL database architecture and optimization</p>
          </div>
          <div className="highlight-item">
            <h3>API Development</h3>
            <p>RESTful and modern API design patterns</p>
          </div>
          <div className="highlight-item">
            <h3>Performance Optimization</h3>
            <p>Code optimization and application performance tuning</p>
          </div>
          <div className="highlight-item">
            <h3>Responsive Design</h3>
            <p>Mobile-first and responsive UI development</p>
          </div>
          <div className="highlight-item">
            <h3>Deployment & DevOps</h3>
            <p>CI/CD pipelines and cloud deployment strategies</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="skills-cta"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2>Let's Build Something Amazing</h2>
        <p>Put my skills to work on your project</p>
        <motion.a
          href="/contact"
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start a Project →
        </motion.a>
      </motion.div>
    </div>
  )
}

export default SkillsPage
