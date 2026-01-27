import { motion } from 'framer-motion'
import './AnimatedRobots.css'

const AnimatedRobots = () => {
  const robots = [
    {
      id: 1,
      name: 'Code Bot',
      emoji: '🤖',
      position: 'left',
      color: 'var(--color-accent-cyan)',
      animation: {
        y: [0, -20, 0],
        rotate: [-5, 5, -5],
      },
    },
    {
      id: 2,
      name: 'AI Assistant',
      emoji: '🦾',
      position: 'right',
      color: 'var(--color-accent-pink)',
      animation: {
        y: [0, 20, 0],
        rotate: [5, -5, 5],
      },
    },
  ]

  return (
    <div className="robots-container">
      {robots.map((robot) => (
        <motion.div
          key={robot.id}
          className={`robot robot-${robot.position}`}
          animate={robot.animation}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="robot-body">
            <motion.div
              className="robot-head"
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <span className="robot-emoji">{robot.emoji}</span>
              <div className="robot-eyes">
                <motion.span
                  className="robot-eye"
                  animate={{
                    opacity: [1, 0.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  ●
                </motion.span>
                <motion.span
                  className="robot-eye"
                  animate={{
                    opacity: [1, 0.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  ●
                </motion.span>
              </div>
            </motion.div>

            <motion.div
              className="robot-arms"
              animate={{
                rotateZ: [-10, 10, -10],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <span className="arm left-arm">═</span>
              <span className="arm right-arm">═</span>
            </motion.div>

            <motion.div
              className="robot-legs"
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <span className="leg">│</span>
              <span className="leg">│</span>
            </motion.div>
          </div>

          <motion.p
            className="robot-name"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            {robot.name}
          </motion.p>

          {/* Floating particles around robot */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="robot-particle"
              animate={{
                x: [0, Math.random() * 40 - 20],
                y: [0, Math.random() * -40],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.6,
                repeat: Infinity,
              }}
            >
              ✨
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  )
}

export default AnimatedRobots
