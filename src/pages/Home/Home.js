import React from 'react'
import AppionmentDetails from './AppionmentDetails/AppionmentDetails'
import Banner from './Banner/Banner'
import CardDetails from './CardDetails/CardDetails'
import ContactForm from './ContactForm/ContactForm'
import MiddlePart from './MiddlePart/MiddlePart'
import Services from './Services/Services'
import Testimonal from './Testimonal/Testimonal'

const Home = () => {
  return (
    <div className='mx-5'>
      <Banner></Banner>
      <CardDetails></CardDetails>
      <Services></Services>
      <MiddlePart></MiddlePart>
      <AppionmentDetails></AppionmentDetails>
          <Testimonal></Testimonal>
          <ContactForm></ContactForm>
    </div>
  )
}

export default Home
;<h1>home</h1>
