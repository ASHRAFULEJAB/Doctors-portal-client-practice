import React from 'react'
import { FaRegClock, FaMapMarkerAlt } from 'react-icons/fa'
import icon from '../../../assets/icons/phone.svg'

const CardDetails = () => {
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-2 my-5'>
      <div className='bg-primary border border-r-2 rounded-lg lg:flex md:flex justify-center items-center p-6 '>
        <FaRegClock className='h-24 w-32 text-white'></FaRegClock>
        <div className='mx-2'>
          <h1 className='text-2xl font-bold text-white'>Opening Hours</h1>
          <p className='text-white'>Open daily 10 am to 6 pm</p>
        </div>
      </div>
      <div className='bg-accent border border-r-2 rounded-lg lg:flex md:flex justify-center items-center p-6 '>
        <FaMapMarkerAlt className='h-20 w-28 text-white'></FaMapMarkerAlt>
        <div className='mx-2'>
          <h1 className='text-2xl font-bold text-white'>Visit our location</h1>
          <p className='text-white'>Brooklyn, NY 10036, United States</p>
        </div>
      </div>
      <div className='bg-gradient-to-r from-primary to-secondary border border-r-2 rounded-lg lg:flex  md:flex justify-center items-center p-6 '>
        <img src={icon} alt='' className='ml-0' />
        <div className='mx-2'>
          <h1 className='text-2xl font-bold text-white'>Contact us now</h1>
          <p className='text-white'>+000 123 456789</p>
        </div>
      </div>
    </div>
  )
}

export default CardDetails
