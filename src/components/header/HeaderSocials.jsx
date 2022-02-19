import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

export default function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/vadith-gomez-21808a223/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/lvadithe' target='_blank'><FaGithub /></a>
    </div>
  )
}
