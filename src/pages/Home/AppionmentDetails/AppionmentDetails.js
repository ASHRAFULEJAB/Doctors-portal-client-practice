import React from 'react'
import appionment from '../../../assets/images/appointment.png'
import doctors from '../../../assets/images/doctor.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton'

const AppionmentDetails = () => {
  return (
    <section style={{ background: `url(${appionment})` }} className='hero mt-32'>
      <div className='hero-content flex-col lg:flex-row'>
        <img src={doctors} alt='' className='-mt-36 hidden md:block lg:block lg:w-1/2 rounded-lg shadow-2xl' />
        <div>
          <h2 className='text-primary font-bold'>Appointment</h2>
          <h1 className='text-5xl font-bold text-white'>Make an appointment Today</h1>
          <p className='py-6 text-white'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
         <PrimaryButton>Make Appionment</PrimaryButton>
        </div>
      </div>
    </section>
  )
}

export default AppionmentDetails
