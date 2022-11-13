import React from 'react'
import img1 from '../../../assets/images/fluoride.png'
import img2 from '../../../assets/images/cavity.png'
import img3 from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard'

const Services = () => {
  const newServices = [
    {
      id: 1,
      name: 'Fluoride Treatment',
      description: 'lorem fgvughkcvjhnhbkj kjnvkjcvnbckjvn kjnvxkcjcnbkj',
      img: img1,
    },
    {
      id: 2,
      name: 'Cavity Filling',
      description:
        'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      img: img2,
    },
    {
      id: 3,
      name: 'Teeth Whitening',
      description:
        'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      img: img3,
    },
  ]
  return (
    <div>
      <h1 className='text-primary text-center text-2xl'>Our Services</h1>
      <p className='text-accent text-3xl text-center'>Services We Provide</p>
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 grid-cols-1'>
        {newServices.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  )
}

export default Services
