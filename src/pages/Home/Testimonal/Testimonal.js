import React from 'react'
import icon from '../../../assets/icons/quote.svg'
import image1 from '../../../assets/images/people1.png'
import image2 from '../../../assets/images/people2.png'
import image3 from '../../../assets/images/people3.png'
import TestimonalDetails from './TestimonalDetails'

const Testimonal = () => {
  const newTestimonal = [
    {
      id: 1,
      name: 'Winson Herry',
      state: 'California',
      description:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: image1,
    },
    {
      id: 2,
      name: 'Cavity Filling',
      state: 'California',
      description:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: image2,
    },
    {
      id: 3,
      name: 'Teeth Whitening',
      state: 'California',
      description:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: image3,
    },
  ]
  return (
    <section className='my-6'>
      <div className='flex justify-between'>
        <div>
          <h2 className='text-primary font-bold'>Testimonial</h2>
          <h1 className='text-4xl font-bold'>What Our Patients Says</h1>
        </div>
        <div>
          <img src={icon} className='h-36 w-24 lg:w-48' alt='' />
        </div>
      </div>
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {newTestimonal.map((testimonal) => (
          <TestimonalDetails
            key={testimonal.id}
            testimonal={testimonal}
          ></TestimonalDetails>
        ))}
      </div>
    </section>
  )
}

export default Testimonal
