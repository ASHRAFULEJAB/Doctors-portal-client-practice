import React from 'react'
import chair from '../../../assets/images/chair.png'
import img from '../../../assets/images/bg.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton'

const Banner = () => {
  return (
    <div style={{background:`url(${img})`}}>
      <div className='hero'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img src={chair} alt='' className=' lg:w-1/2 rounded-lg shadow-2xl' />
          <div>
            <h1 className='text-5xl font-bold'>Your New Smile Starts Here</h1>
            <p className='py-6'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            </p>
            <PrimaryButton>Getting Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
