import React from 'react'
import IMG from '../../assets/project1.jpeg'
import './portfolio.css'

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG} alt='App_Food' />
          </div>
          <div className="portfolio__item-cta">
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/lvadithe/APP-FOOD" className='btn' target='_blank' rel="noreferrer">Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}
