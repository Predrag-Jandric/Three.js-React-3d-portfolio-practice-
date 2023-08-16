import React from 'react'
import Navbar from './Navbar'
import heroimg from '../assets/race.png'

function Hero() {
  return (
    <main className='hero-container component-container'>
      <Navbar/>

      <section className='hero'>
        <article className='hero__left'>
          <h1 className='hero__left__h1'>Think. Make. Solve.</h1>
          <p className='hero__left__p'>-- what we do</p>
          <p className='hero__left__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquam quae a laboriosam error. Atque, non laborum?</p>
          <button className='hero__left__btn'>learn more</button>
        </article>
        

        <img className='hero__right' src={heroimg} alt="" />
      </section>
    </main>
  )
}

export default Hero
