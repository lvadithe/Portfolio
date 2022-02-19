import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import './footer.css'

export default function Footer() {
  return (
    <footer>
      <a href="#footer" className='footer__logo'>Vadith Gomez</a>

      <ul className="permalinks">
        <li><a href='#header'>HOME</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/vadith-gomez-21808a223/'><BsLinkedin /></a>
        <a href='https://github.com/lvadithe'><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Vadith Gomez </small>
      </div>
    </footer>
  )
}
