import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import './ProjectModal.css'

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="modal-close"
              onClick={onClose}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="modal-header">
              <div className="modal-icon">{project.image}</div>
              <h2 id="modal-title">{project.title}</h2>
            </div>

            <div className="modal-body">
              <div className="project-details">
                <div className="detail-section">
                  <h3>Description</h3>
                  <p>{project.fullDescription}</p>
                </div>

                <div className="detail-section">
                  <h3>Technologies Used</h3>
                  <div className="tech-list">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-item">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="detail-section">
                  <h3>Features</h3>
                  <ul className="features-list">
                    {project.features?.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {project.liveUrl && (
                  <div className="detail-section">
                    <h3>Links</h3>
                    <div className="project-links">
                      <motion.a
                        href={project.liveUrl}
                        className="link-btn live"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Live →
                      </motion.a>
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          className="link-btn github"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          GitHub Code →
                        </motion.a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
