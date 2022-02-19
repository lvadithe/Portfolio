import React from 'react'

import VTR1 from '../../assets/mathi.jpeg'
import VTR2 from '../../assets/ivan.jpeg'
import VTR3 from '../../assets/gonza.jpeg'
import './testimonials.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";





const data = [
  {
    avatar: VTR3,
    name: 'Gonzalo Muños',
    review: "Vadith trabaja de manera incansable hasta conseguir sus objetivos, siempre atento a cómo puede ayudar a sus compañeros."
  },
  {
    avatar: VTR1,
    name: 'Mathias Ledesma',
    review: "Vadith ha demostrado ser un profesional comprometido y dedicado con las tareas que se le han asignado.Siempre aporta un plus y enriquece su trabajo demostrando compromiso y rigurosidad."
  },
  {
    avatar: VTR2,
    name: 'Ivan Chauca',
    review: "Vadith es una persona muy responsable, comprometida y con una enorme facilidad para retener conocimientos nuevos y compartirlos con sus compañeros. Recomiendo a Vadith para cualquier trabajo en el que se requiere un profesional comprometido y de gran calidad humana."
  }

]

export default function Testimonials() {

  return (
    <section id='testimonials'>
      <h5>Comments from Customers and Colleagues</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable: true}}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="colleague__avatar">
                  <img src={avatar} alt='avatar' />
                </div>
                <h5 className='colleague__name'>{name}</h5>
                <small className='colleague__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}
