import { motion } from 'framer-motion'
import './ExperiencePage.css'

const ExperiencePage = () => {
  const experienceData = [
    {
      company: 'Tech Innovations Co.',
      position: 'Senior Full Stack Developer',
      duration: '2022 - Present',
      location: 'Remote (Based in Libertad, Butuan City, Philippines)',
      description: 'Led development of 10+ full-stack applications using React and Node.js. Mentored 3+ junior developers and conducted code reviews.',
      responsibilities: [
        'Led development of 10+ full-stack applications using React and Node.js',
        'Mentored 3+ junior developers and conducted code reviews',
        'Optimized database queries reducing load time by 40%',
        'Implemented CI/CD pipelines using GitHub Actions',
        'Designed and implemented microservices architecture',
        'Managed team of 5 developers on multiple projects'
      ],
      achievements: [
        'Improved application performance by 40%',
        'Reduced deployment time from 2 hours to 15 minutes',
        'Mentored 3 junior developers',
        'Led migration to microservices'
      ]
    },
    {
      company: 'Digital Solutions Ltd.',
      position: 'Full Stack Developer',
      duration: '2020 - 2022',
      location: 'Remote',
      description: 'Built and maintained e-commerce platforms for 5+ clients. Developed REST APIs and microservices architecture.',
      responsibilities: [
        'Built and maintained e-commerce platforms for 5+ clients',
        'Developed REST APIs and microservices architecture',
        'Implemented real-time features using WebSockets',
        'Collaborated with UI/UX designers to improve user experience',
        'Implemented automated testing reducing bugs by 50%',
        'Managed PostgreSQL and MongoDB databases'
      ],
      achievements: [
        '5+ successful client projects',
        'Reduced bug count by 50%',
        'Implemented real-time features',
        'Improved code coverage to 85%'
      ]
    },
    {
      company: 'StartUp Hub',
      position: 'Junior Developer',
      duration: '2019 - 2020',
      location: 'Remote',
      description: 'Developed frontend features using React and Vue.js. Created responsive designs for mobile and desktop.',
      responsibilities: [
        'Developed frontend features using React and Vue.js',
        'Created responsive designs for mobile and desktop',
        'Fixed bugs and improved code quality',
        'Participated in agile development sprints',
        'Implemented component library for reusability',
        'Contributed to open-source projects'
      ],
      achievements: [
        'Built 10+ reusable components',
        'Improved page load time by 30%',
        'Contributed to open-source',
        'Received employee of the month twice'
      ]
    },
    {
      company: 'Web Design Agency',
      position: 'Frontend Developer Intern',
      duration: '2018 - 2019',
      location: 'Remote',
      description: 'Built responsive websites using HTML, CSS, and JavaScript. Assisted in designing user interfaces.',
      responsibilities: [
        'Built responsive websites using HTML, CSS, and JavaScript',
        'Assisted in designing user interfaces',
        'Optimized website performance',
        'Implemented cross-browser compatibility',
        'Created landing pages for various clients',
        'Learned and applied web development best practices'
      ],
      achievements: [
        '15+ client websites delivered',
        'Learned React and modern web development',
        'Improved website speed by 25%',
        'Maintained 100% client satisfaction'
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="experience-page">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>My Experience</h1>
        <p>Professional journey and career highlights</p>
      </motion.div>

      <motion.div
        className="experience-timeline-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-item-full"
            variants={itemVariants}
          >
            <div className="timeline-marker"></div>
            <motion.div
              className="experience-card-full"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="experience-header">
                <div>
                  <h3>{exp.position}</h3>
                  <p className="company">{exp.company}</p>
                  <p className="location">📍 {exp.location}</p>
                </div>
                <span className="duration">{exp.duration}</span>
              </div>

              <p className="description">{exp.description}</p>

              <div className="responsibilities">
                <h4>Key Responsibilities:</h4>
                <ul>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div className="achievements">
                <h4>Achievements:</h4>
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>
                      <span className="achievement-icon">⭐</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="experience-summary"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2>Experience Summary</h2>
        <div className="summary-stats">
          <div className="stat">
            <h3>5+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat">
            <h3>20+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <h3>15+</h3>
            <p>Clients Worked With</p>
          </div>
          <div className="stat">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ExperiencePage
