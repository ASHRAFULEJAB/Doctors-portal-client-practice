import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import { useLoaderData, useNavigation } from 'react-router-dom'
import Checkout from './Checkout'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)


const Payment = () => {
  const data = useLoaderData()
  const navigation = useNavigation()
  const { treatment, price, appionmentDate, slot } = data
  if (navigation.state === 'loading') {
    return <div className='text-center text-red-500'>Loading ....</div>
  }
  return (
    <div>
      <h2 className='text-3xl my-3'>Payment for {treatment}</h2>
      <p>
        Please pay $<strong>{price} </strong> for your appionment on{' '}
        {appionmentDate} on time {slot}{' '}
      </p>
      <div className='w-80 my-6'>
        <Elements stripe={stripePromise}>
          <Checkout data={data} />
        </Elements>
      </div>
    </div>
  )
}

export default Payment
