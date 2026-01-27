import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Co.',
      content: 'John delivered an exceptional e-commerce platform that increased our sales by 45%. His attention to detail and problem-solving skills are outstanding.',
      image: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, Digital Solutions',
      content: 'Working with John was a game-changer for our project. His expertise in full-stack development and communication made everything seamless.',
      image: '👨‍💼'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, Creative Agency',
      content: 'John is not just a great developer, but also a wonderful team player. He went above and beyond to make sure our project was perfect.',
      image: '👩‍🔬'
    },
    {
      name: 'David Williams',
      role: 'CTO, Innovation Labs',
      content: 'The best developer I\'ve worked with. John\'s code quality and architectural decisions are industry-leading.',
      image: '👨‍💻'
    }
  ]

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="testimonials">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Testimonials</h2>

        <motion.div
          className="testimonials-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="testimonials-carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="testimonial-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="testimonial-content">
                  <div className="testimonial-text">
                    <p className="quote">"{testimonials[activeIndex].content}"</p>
                  </div>
                  <div className="testimonial-author">
                    <span className="author-avatar">{testimonials[activeIndex].image}</span>
                    <div className="author-info">
                      <h4>{testimonials[activeIndex].name}</h4>
                      <p>{testimonials[activeIndex].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="carousel-controls">
            <motion.button
              className="carousel-btn prev"
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous testimonial"
            >
              ←
            </motion.button>

            <div className="carousel-indicators">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`indicator ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </div>

            <motion.button
              className="carousel-btn next"
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next testimonial"
            >
              →
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Testimonials
