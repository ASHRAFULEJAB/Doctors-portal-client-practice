import React from 'react'
import imageContact from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton'

const ContactForm = () => {
  return (
    <section
      className='my-6 p-24'
      style={{
        background: `url(${imageContact})`
      }}
    >
      <div className='text-center'>
        <h className='text-primary font-bold'>Contact Us</h>
        <h2 className='text-3xl text-white'>Stay connected with us</h2>

        <div className='inline-block '>
          <input
            type='text'
            placeholder='Type Your Address'
            className='input input-bordered input-md w-full max-w-xs mb-3'
          />
          <input
            type='text'
            placeholder='Subject'
            className='input input-bordered input-md w-full max-w-xs mb-3'
          />
          <div className='form-control'>
            <textarea
              className='textarea textarea-bordered h-24 max-w-xs md:ml-8 lg:ml-8 mb-3'
              placeholder='Your Message'
            ></textarea>
          </div>
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
