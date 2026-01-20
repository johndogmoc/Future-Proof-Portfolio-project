import { motion } from 'framer-motion'
import './Navbar.css'

const Navbar = () => {
  const menuItems = ['Home', 'About', 'Projects', 'Skills', 'Contact']

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-container">
        <motion.div 
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
        >
          JD
        </motion.div>
        <ul className="nav-menu">
          {menuItems.map((item, index) => (
            <motion.li 
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="nav-item"
            >
              <a href={`#${item.toLowerCase()}`} className="nav-link">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navbar
