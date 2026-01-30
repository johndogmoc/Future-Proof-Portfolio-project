import { motion } from 'framer-motion'
import './Education.css'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      year: '2020 - 2024',
      description: 'Specialized in Software Engineering and Web Development. Relevant coursework: Data Structures, Algorithms, Database Systems, Software Engineering.',
      gpa: '3.8/4.0',
      achievements: ['Dean\'s List', 'Outstanding Student Award']
    },
    {
      degree: 'High School Diploma',
      institution: 'High School Name',
      year: '2016 - 2020',
      description: 'Graduated with honors. Active in Computer Science Club and Programming Competitions.',
      achievements: ['Valedictorian', 'National Honor Society']
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Education</h2>

          <motion.div
            className="education-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="education-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="education-icon">🎓</div>
                <div className="education-content">
                  <div className="education-header">
                    <h3>{edu.degree}</h3>
                    <span className="education-year">{edu.year}</span>
                  </div>
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-description">{edu.description}</p>
                  <div className="education-meta">
                    <span className="gpa">GPA: {edu.gpa}</span>
                    <div className="achievements">
                      {edu.achievements.map((achievement, i) => (
                        <span key={i} className="achievement-tag">{achievement}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
