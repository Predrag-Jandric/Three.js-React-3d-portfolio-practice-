import React from 'react'

function Contact() {
  return (
    <main className='contact-container component-container'>

      <form className='contact__form' action="">
      <h3 className='contact__form__h3'>Contact</h3>
      <input className='contact__form__input1' type="text" placeholder='Name' />
      <input className='contact__form__input2' type="email" placeholder='Email' />
      <textarea className='contact__form__textarea' name="" placeholder='Write your message' rows="10"></textarea>
      </form>

    </main>
  )
}

export default Contact
