import React from 'react'
import heroimg from '../assets/race.png'

function Who() {
  return (
    <main className='who-container component-container'>

      <section className='who'>
        <img className='who__left' src={heroimg} alt="" />

        <article className='who__right'>
          <h1 className='who__right__h1'>Think. Make. Solve.</h1>
          <p className='who__right__p'>-- what we do</p>
          <p className='who__right__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquam quae a laboriosam error. Atque, non laborum?</p>
          <button className='who__right__btn'>learn more</button>
        </article>
      </section>

    </main>
  )
}

export default Who
