import React from 'react'

const TestimonalDetails = ({ testimonal }) => {
  const { name, state, description, img } = testimonal
  return (
    <div>
      <div className='card bg-base-100 shadow-xl p-5 my-16'>
        <div className='card-body'>
          <p>{description}</p>
        </div>
        <div className='flex mx-8 items-center avatar'>
          <div className='w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
            <img src={img} alt='Shoes' className='h-16 ' />
          </div>
          <div className='mx-3'>
            <h1 className='font-bold mt-6'>{name}</h1>
            <h3>{state}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonalDetails
