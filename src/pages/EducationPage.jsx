import { motion } from 'framer-motion'
import './EducationPage.css'

const EducationPage = () => {
  const educationData = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      year: '2018 - 2022',
      location: 'Philippines',
      gpa: '3.8/4.0',
      description: 'Comprehensive study of computer science fundamentals, algorithms, data structures, and software engineering.',
      achievements: [
        'Graduated with Honors',
        'Dean\'s List all semesters',
        'President of Computer Science Club',
        'Published research paper on machine learning'
      ],
      coursework: ['Data Structures', 'Algorithms', 'Web Development', 'Database Systems', 'Software Engineering', 'AI & Machine Learning']
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'Tech Academy',
      year: '2018',
      location: 'Online (Philippines)',
      gpa: 'Completed',
      description: 'Intensive 12-week bootcamp covering modern web development technologies and best practices.',
      achievements: [
        'Completed 5 capstone projects',
        'Built e-commerce platform from scratch',
        'Received Job Placement Assistance',
        'Certified in React & Node.js'
      ],
      coursework: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'Git & GitHub']
    },
    {
      degree: 'Advanced JavaScript & React Specialization',
      institution: 'Coursera',
      year: '2019',
      location: 'Online',
      gpa: 'Completed',
      description: 'Specialized courses in advanced JavaScript techniques and modern React development patterns.',
      achievements: [
        'Completed 4-course specialization',
        'Built production-ready React applications',
        'Learned state management with Redux',
        'Certificate of Completion'
      ],
      coursework: ['Advanced JavaScript', 'React Hooks', 'State Management', 'Performance Optimization']
    },
    {
      degree: 'Cloud Architecture & DevOps',
      institution: 'AWS Training',
      year: '2020 - 2021',
      location: 'Online',
      gpa: 'Completed',
      description: 'Training in cloud computing, DevOps practices, and AWS services for scalable application deployment.',
      achievements: [
        'AWS Certified Solutions Architect',
        'Deployed 10+ applications to AWS',
        'Implemented CI/CD pipelines',
        'Managed containerization with Docker'
      ],
      coursework: ['AWS EC2', 'Lambda', 'RDS', 'Docker', 'CI/CD', 'Kubernetes']
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="education-page">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Education & Certifications</h1>
        <p>My learning journey and professional development</p>
      </motion.div>

      <motion.div
        className="education-timeline-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="education-item-full"
            variants={itemVariants}
          >
            <div className="timeline-marker"></div>
            <motion.div
              className="education-card-full"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="education-header">
                <div>
                  <h3>{edu.degree}</h3>
                  <p className="institution">{edu.institution}</p>
                  <p className="location">📍 {edu.location}</p>
                </div>
                <div className="education-meta">
                  <span className="year">{edu.year}</span>
                  <span className="gpa">{edu.gpa}</span>
                </div>
              </div>

              <p className="description">{edu.description}</p>

              <div className="achievements">
                <h4>Highlights:</h4>
                <ul>
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>
                      <span className="achievement-icon">✨</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="coursework">
                <h4>Relevant Coursework:</h4>
                <div className="courses-list">
                  {edu.coursework.map((course, i) => (
                    <span key={i} className="course-badge">{course}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="education-summary"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2>Learning Path</h2>
        <div className="summary-stats">
          <div className="stat">
            <h3>4</h3>
            <p>Degrees & Certifications</p>
          </div>
          <div className="stat">
            <h3>1500+</h3>
            <p>Hours of Learning</p>
          </div>
          <div className="stat">
            <h3>20+</h3>
            <p>Technologies Mastered</p>
          </div>
          <div className="stat">
            <h3>∞</h3>
            <p>Continuous Learner</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="education-cta"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2>Ready to Learn More?</h2>
        <p>Explore my skills and see what I can build for you</p>
        <div className="cta-buttons">
          <motion.a
            href="/skills"
            className="cta-button primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Skills →
          </motion.a>
          <motion.a
            href="/projects"
            className="cta-button secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See My Projects →
          </motion.a>
        </div>
      </motion.div>
    </div>
  )
}

export default EducationPage
