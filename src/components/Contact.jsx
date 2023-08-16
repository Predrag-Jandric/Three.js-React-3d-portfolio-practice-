import Map from './Map'
import React from 'react';

function Contact() {
  return (
    <main className='section'>
      <section className='container'>

        <div className="left">
          <form  className='form'>
            <h3 className='form__h3'>Contact</h3>
            <input className='form__input1' placeholder="Name" />
            <input className='form__input2' placeholder="Email" />
            <textarea className='form__textarea' placeholder="Write your message"
             rows="10"></textarea>
            <button onClick={() => alert('FORM IS NOT OPERATIONAL')} className='form__btn' type="submit">Send</button>
          </form>
        </div>

        <div className="right">
          <Map />
        </div>

      </section>
    </main>
  )
}

export default Contact
