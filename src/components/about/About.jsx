import React from 'react'
import './about.css'
import ME from '../../assets/Me-e.jpeg'

export default function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
