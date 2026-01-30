import { motion } from 'framer-motion'
import './CurrentlyLearning.css'

const CurrentlyLearning = () => {
    const learningItems = [
        {
            name: 'TypeScript',
            icon: '📘',
            description: 'Adding type safety to React applications',
            progress: 70,
            category: 'Language'
        },
        {
            name: 'Next.js',
            icon: '⚡',
            description: 'Server-side rendering and static site generation',
            progress: 60,
            category: 'Framework'
        },
        {
            name: 'Three.js',
            icon: '🎮',
            description: 'Creating immersive 3D web experiences',
            progress: 45,
            category: 'Library'
        },
        {
            name: 'GraphQL',
            icon: '🔷',
            description: 'Modern API query language',
            progress: 55,
            category: 'Backend'
        },
        {
            name: 'Docker',
            icon: '🐳',
            description: 'Containerization and deployment',
            progress: 50,
            category: 'DevOps'
        },
        {
            name: 'AWS',
            icon: '☁️',
            description: 'Cloud infrastructure and services',
            progress: 40,
            category: 'Cloud'
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        },
    }

    return (
        <section className="currently-learning">
            <div className="learning-bg-glow"></div>

            <motion.div
                className="learning-container"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="section-header">
                    <motion.div
                        className="glass-badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Growth Mindset
                    </motion.div>

                    <h2 className="section-title">Currently Learning</h2>
                    <p className="section-subtitle">
                        Continuously expanding my skill set to stay future-proof in the ever-evolving tech landscape
                    </p>
                </div>

                <motion.div
                    className="learning-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {learningItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="learning-card"
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="card-glow"></div>

                            <div className="learning-icon">{item.icon}</div>

                            <div className="learning-content">
                                <div className="learning-header">
                                    <h3>{item.name}</h3>
                                    <span className="category-badge">{item.category}</span>
                                </div>

                                <p className="learning-description">{item.description}</p>

                                <div className="progress-container">
                                    <div className="progress-info">
                                        <span className="progress-label">Learning Progress</span>
                                        <span className="progress-value">{item.progress}%</span>
                                    </div>
                                    <div className="progress-bar">
                                        <motion.div
                                            className="progress-fill"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.progress}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="learning-footer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <p className="growth-quote">
                        "The only way to do great work is to love what you do and never stop learning."
                    </p>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default CurrentlyLearning
