import { motion } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Get In Touch</h2>
        
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="contact-intro">
            I'm always interested in hearing about new projects and opportunities.
          </p>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="form-group"
              whileHover={{ scale: 1.02 }}
            >
              <input type="text" placeholder="Your Name" required />
            </motion.div>

            <motion.div
              className="form-group"
              whileHover={{ scale: 1.02 }}
            >
              <input type="email" placeholder="Your Email" required />
            </motion.div>

            <motion.div
              className="form-group"
              whileHover={{ scale: 1.02 }}
            >
              <textarea
                placeholder="Your Message"
                rows="5"
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>

          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>Or connect with me on:</p>
            <div className="social-icons">
              {['GitHub', 'LinkedIn', 'Email'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="social-icon"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
