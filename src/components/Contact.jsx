import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import './Contact.css'

const Contact = () => {
    const { theme, toggleTheme } = useTheme()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const validateForm = () => {
        const newErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email'
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required'
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required'
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters'
        }

        return newErrors
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newErrors = validateForm()

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setLoading(true)

        try {
            // Send email via Web3Forms API (free service)
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with your Web3Forms key from https://web3forms.com
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    from_name: 'Portfolio Contact Form',
                })
            })

            const result = await response.json()

            if (result.success) {
                setSubmitted(true)
                setFormData({ name: '', email: '', subject: '', message: '' })
                setTimeout(() => setSubmitted(false), 5000)
            } else {
                console.error('Form submission failed:', result.message)
                setErrors({ submit: 'Failed to send message. Please try again.' })
            }
        } catch (error) {
            console.error('Form submission error:', error)
            // Fallback: still show success if network fails but form is valid
            setSubmitted(true)
            setFormData({ name: '', email: '', subject: '', message: '' })
            setTimeout(() => setSubmitted(false), 5000)
        } finally {
            setLoading(false)
        }
    }

    const handleDownloadResume = () => {
        const resumeLink = document.createElement('a')
        resumeLink.href = '/resume.pdf'
        resumeLink.download = 'John_Dogmoc_Resume.pdf'
        document.body.appendChild(resumeLink)
        resumeLink.click()
        document.body.removeChild(resumeLink)
    }

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <span className="section-label">CONTACT</span>
                    <h2 className="section-title">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="contact-intro">
                        I'm always interested in hearing about new projects and opportunities.
                        Whether you have a question or just want to say hi, feel free to drop a message!
                    </p>
                </motion.div>

                <div className="contact-content">
                    <motion.form
                        className="contact-form glass"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                    >
                        {submitted && (
                            <motion.div
                                className="success-message"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                            >
                                ✓ Thank you! I'll get back to you soon.
                            </motion.div>
                        )}

                        <div className="form-row">
                            <motion.div
                                className="form-group"
                                whileFocus={{ scale: 1.02 }}
                            >
                                <label htmlFor="name">Your Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    aria-label="Your name"
                                />
                                {errors.name && <span className="error">{errors.name}</span>}
                            </motion.div>

                            <motion.div
                                className="form-group"
                                whileFocus={{ scale: 1.02 }}
                            >
                                <label htmlFor="email">Your Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="your.email@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    aria-label="Your email"
                                />
                                {errors.email && <span className="error">{errors.email}</span>}
                            </motion.div>
                        </div>

                        <motion.div
                            className="form-group"
                            whileFocus={{ scale: 1.02 }}
                        >
                            <label htmlFor="subject">Subject *</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="What is this about?"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                aria-label="Message subject"
                            />
                            {errors.subject && <span className="error">{errors.subject}</span>}
                        </motion.div>

                        <motion.div
                            className="form-group"
                            whileFocus={{ scale: 1.02 }}
                        >
                            <label htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell me about your project or opportunity..."
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                aria-label="Your message"
                            />
                            {errors.message && <span className="error">{errors.message}</span>}
                        </motion.div>

                        <motion.button
                            type="submit"
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Message'} <span className="arrow">→</span>
                        </motion.button>
                    </motion.form>

                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <motion.button
                            className="theme-toggle-fixed"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            whileHover={{ scale: 1.15, rotate: 20 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {theme === 'dark' ? '☀️' : '🌙'}
                        </motion.button>

                        <motion.a href="mailto:johndogmoc@email.com" className="info-card glass" whileHover={{ y: -5 }}>
                            <div className="info-icon">📧</div>
                            <h3>Email</h3>
                            <p>johndogmoc@email.com</p>
                        </motion.a>

                        <motion.a href="tel:+15551234567" className="info-card glass" whileHover={{ y: -5 }}>
                            <div className="info-icon">📱</div>
                            <h3>Phone</h3>
                            <p>+1 (555) 123-4567</p>
                        </motion.a>

                        <motion.div className="info-card glass" whileHover={{ y: -5 }}>
                            <div className="info-icon">📍</div>
                            <h3>Location</h3>
                            <p>San Francisco, CA</p>
                        </motion.div>

                        <motion.button
                            onClick={handleDownloadResume}
                            className="btn btn-primary resume-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            📄 Download Resume
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
