import { motion } from 'framer-motion'
import './Certificates.css'

const Certificates = () => {
  const certificates = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      icon: '☁️',
      credentialId: 'AWS-2023-001'
    },
    {
      title: 'React Advanced Patterns',
      issuer: 'Frontend Masters',
      date: '2023',
      icon: '⚛️',
      credentialId: 'FM-2023-545'
    },
    {
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      icon: '☁️',
      credentialId: 'GCP-2022-089'
    },
    {
      title: 'JavaScript Algorithms & Data Structures',
      issuer: 'freeCodeCamp',
      date: '2022',
      icon: '📊',
      credentialId: 'FCC-2022-JS'
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'Udacity',
      date: '2021',
      icon: '🌐',
      credentialId: 'UDP-2021-FS'
    },
    {
      title: 'Docker Certified Associate',
      issuer: 'Docker',
      date: '2021',
      icon: '🐳',
      credentialId: 'DOCKER-2021-DCA'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <section id="certificates" className="certificates">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Certifications & Achievements</h2>

        <motion.div
          className="certificates-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="certificate-card"
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 15px 35px rgba(99, 102, 241, 0.2)' }}
            >
              <div className="cert-icon">{cert.icon}</div>
              <h3>{cert.title}</h3>
              <p className="issuer">{cert.issuer}</p>
              <p className="date">{cert.date}</p>
              <p className="credential-id">ID: {cert.credentialId}</p>
              <motion.a
                href="#"
                className="verify-link"
                whileHover={{ x: 5 }}
                aria-label={`Verify ${cert.title} certificate`}
              >
                Verify Credential →
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Certificates
