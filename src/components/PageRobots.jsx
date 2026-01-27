import { motion } from 'framer-motion'
import './PageRobots.css'

const PageRobots = ({ page = 'default' }) => {
  const robotVariants = {
    default: [
      { id: 1, emoji: '🤖', name: 'Code Bot', color: 'cyan' },
      { id: 2, emoji: '🦾', name: 'AI Helper', color: 'pink' },
    ],
    hero: [
      { id: 1, emoji: '🤖', name: 'Welcome Bot', color: 'cyan', size: 'large' },
      { id: 2, emoji: '🧠', name: 'Smart AI', color: 'pink', size: 'large' },
      { id: 3, emoji: '⚙️', name: 'Tech Master', color: 'purple', size: 'medium' },
    ],
    about: [
      { id: 1, emoji: '📚', name: 'Learning Bot', color: 'cyan', size: 'medium' },
      { id: 2, emoji: '🎯', name: 'Goal Setter', color: 'pink', size: 'medium' },
      { id: 3, emoji: '💡', name: 'Idea Bot', color: 'purple', size: 'small' },
    ],
    projects: [
      { id: 1, emoji: '🚀', name: 'Launch Bot', color: 'cyan', size: 'large' },
      { id: 2, emoji: '⚡', name: 'Power Bot', color: 'pink', size: 'medium' },
      { id: 3, emoji: '🎨', name: 'Design Bot', color: 'purple', size: 'small' },
    ],
    skills: [
      { id: 1, emoji: '🔧', name: 'Skill Master', color: 'cyan', size: 'medium' },
      { id: 2, emoji: '📊', name: 'Analytics Bot', color: 'pink', size: 'medium' },
      { id: 3, emoji: '🎓', name: 'Expert Bot', color: 'purple', size: 'small' },
    ],
    contact: [
      { id: 1, emoji: '📞', name: 'Connect Bot', color: 'cyan', size: 'large' },
      { id: 2, emoji: '✉️', name: 'Message Bot', color: 'pink', size: 'medium' },
    ],
  }

  const robots = robotVariants[page] || robotVariants.default
  const isHeroPage = page === 'hero'
  const containerClass = isHeroPage ? 'page-robots-hero' : 'page-robots-container'

  return (
    <div className={containerClass}>
      {robots.map((robot, index) => (
        <motion.div
          key={robot.id}
          className={`page-robot page-robot-${robot.size} robot-color-${robot.color}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
        >
          {/* Main Robot */}
          <motion.div
            className="page-robot-body"
            animate={{
              y: [0, isHeroPage ? -30 : -15, 0],
              rotate: [0, isHeroPage ? 2 : 1, 0],
            }}
            transition={{
              duration: isHeroPage ? 3 : 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{ scale: 1.15 }}
          >
            {/* Head with Eyes */}
            <motion.div
              className="page-robot-head"
              animate={{
                rotateY: [0, 180, 360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <span className="page-robot-emoji">{robot.emoji}</span>
              <div className="page-robot-eyes">
                <motion.span
                  className="page-robot-eye"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ●
                </motion.span>
                <motion.span
                  className="page-robot-eye"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ●
                </motion.span>
              </div>
            </motion.div>

            {/* Arms */}
            <motion.div
              className="page-robot-arms"
              animate={{ rotate: [-15, 15, -15] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="page-robot-arm">═</span>
              <span className="page-robot-arm">═</span>
            </motion.div>

            {/* Body Bar */}
            <div className="page-robot-torso">█</div>

            {/* Legs */}
            <motion.div
              className="page-robot-legs"
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="page-robot-leg">│</span>
              <span className="page-robot-leg">│</span>
            </motion.div>
          </motion.div>

          {/* Name Label */}
          <motion.p
            className="page-robot-label"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {robot.name}
          </motion.p>

          {/* Floating Particles */}
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="page-robot-spark"
              animate={{
                x: [0, Math.random() * 30 - 15],
                y: [0, Math.random() * -30],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                delay: i * 0.7,
                repeat: Infinity,
              }}
            >
              ✨
            </motion.div>
          ))}

          {/* Energy Aura */}
          <motion.div
            className="page-robot-aura"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default PageRobots
