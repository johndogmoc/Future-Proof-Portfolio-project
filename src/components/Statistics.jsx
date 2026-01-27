import { motion } from 'framer-motion'
import './Statistics.css'

const Statistics = () => {
    const stats = [
        {
            icon: '📊',
            number: '45+',
            label: 'Projects Completed',
            description: 'Delivered successfully'
        },
        {
            icon: '⚡',
            number: '5+',
            label: 'Years Experience',
            description: 'Professional development'
        },
        {
            icon: '🚀',
            number: '20+',
            label: 'Technologies',
            description: 'Proficient & learning'
        },
        {
            icon: '⭐',
            number: '98%',
            label: 'Client Satisfaction',
            description: 'Very satisfied clients'
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    }

    return (
        <section className="statistics">
            <div className="statistics-container">
                <motion.div
                    className="statistics-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="stat-card"
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                        >
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                            <div className="stat-description">{stat.description}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Statistics
