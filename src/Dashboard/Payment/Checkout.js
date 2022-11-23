import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'

const Checkout = ({ data }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [cardError, setCardError] = useState('')
  const [sucess, setSucess] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const [processing, setProcessing] = useState(false)
  const [clientSecret, setClientSecret] = useState('')
  const { price, email, patient,_id } = data

  useEffect(() => {
    fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [price])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)
    if (card === null) {
      return
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })
    if (error) {
      console.log(error)
      setCardError(error?.message)
    } else {
      setCardError('')
    }
    setSucess('')
    setTransactionId('')
    setProcessing(true)
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patient,
            email: email,
          },
        },
      })
    if (confirmError) {
      setCardError(confirmError?.message)
      return
    }
      const payment = {
          price,
          transactionId: paymentIntent?.id,
          email,
          bookingId:_id
    }
    if (paymentIntent.status === 'succeeded') {
      fetch('http://localhost:5000/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.insertedId) {
            setSucess('Congratulation you payment has been completed')
            setTransactionId(paymentIntent?.id)
          }
        })
    }
    setProcessing(false)
    console.log(paymentIntent)
  }

  return (
    <>
      {' '}
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          className='btn btn-xs btn-primary mt-4'
          type='submit'
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className='text-red-700'>{cardError}</p>
      {sucess && (
        <div>
          <p className='text-green-700'>{sucess}</p>
          <p>
            Your Transaction id is <strong>{transactionId}</strong>
          </p>
        </div>
      )}
    </>
  )
}

export default Checkout
