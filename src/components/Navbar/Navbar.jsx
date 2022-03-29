import { useState } from 'react'
import './Navbar.scss'
import { images } from '../../constants'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import logo from '../../assets/html-logo.png'

const Navbar = () => {
  const [ toggle, setToggle ] = useState(false)

  return (
    <nav className="app__navbar" >
        <div className="app__navbar-logo" >
            <img src={logo} alt="Logo" />
        </div>
        <ul className="app__navbar-links" >
            {['home', 'about', 'work', 'skills', 'contact'].map(item => (
                <li key={`link-${item}`} className="app__flex p-text" >
                    <div />
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>
        <div className="app__navbar-menu">
            <HiMenuAlt4 style={{ cursor: 'pointer' }} onClick={() => setToggle(true)} />
            {
                toggle && (
                    <motion.div
                        whileInView={{ x: [ 300, 0 ] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    ><HiX style={{ cursor: 'pointer' }} onClick={() => setToggle(false)} />
                        <ul className="app__navbar-links" >
                                {['home', 'about', 'work', 'skills', 'contact'].map(item => (
                             <li key={item} >
                                 <a href={`#${item}`} onClick={() => setToggle(false)} >{item}</a>
                             </li>
                            ))}
                        </ul>
                    </motion.div>
                )
            }
        </div>
    </nav>
  )
}

export default Navbar