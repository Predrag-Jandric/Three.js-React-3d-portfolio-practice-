import React from 'react'
import heroimg from '../assets/race.png'

function Works() {
  return (
    <main className='works-container component-container'>
      
      <section className='works'>
        <article className='works__left'>
          <h2 className='works__left__h2'>Web Design</h2>
          <h2 className='works__left__h2'>Development</h2>
          <h2 className='works__left__h2'>Illustration</h2>
          <h2 className='works__left__h2'>Product Design</h2>
          <h2 className='works__left__h2'>Social Media</h2>
        </article>
        

        <img className='works__right' src={heroimg} alt="" />
      </section>

    </main>
  )
}

export default Works
