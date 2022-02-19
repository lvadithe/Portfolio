import React from 'react'
import { useState } from 'react'

import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineBook } from 'react-icons/ai'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import './nav.css'

export default function Nav() {
  const [state, setState] = useState('#header')

  return (
    <nav>
      <a
        href='#header'
        onClick={() => setState('#header')}
        className={state === '#header' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        onClick={() => setState('#about')}
        className={state === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href='#experience'
        onClick={() => setState('#experience')}
        className={state === '#experience' ? 'active' : ''}
      >
        <AiOutlineBook />
      </a>
      <a
        href='#testimonials'
        onClick={() => setState('#testimonials')}
        className={state === '#testimonials' ? 'active' : ''}>
        <RiServiceLine />
      </a>
      <a
        href='#contact'
        onClick={() => setState('#contact')}
        className={state === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}
