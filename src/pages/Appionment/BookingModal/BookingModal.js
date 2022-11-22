import { format } from 'date-fns'
import React, { useContext } from 'react'
import { DoctorContext } from '../../../context/AuthProvider'

const BookingModal = ({ treatment, selectDate, setTreatment, refetch }) => {
  const { user } = useContext(DoctorContext)
  const { name: treatmentName, slots,price } = treatment
  const date = format(selectDate, 'PP')
  const handleBooking = (e) => {
    e.preventDefault()
    const form = e.target
    const slot = form.slot.value
    const name = form.name.value
    const email = form.email.value
    const phone = form.phone.value
    const booking = {
      appionmentDate: date,
      treatment: treatmentName,
      patient: name,
      email,
      slot,
      phone,
      price
    }
    fetch('http://localhost:5000/bookings', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.acknowledged) {
          alert('Booking Done')
          setTreatment(null)
          refetch()
        } else {
          alert(data.message)
        }
      })
  }
  return (
    <>
      <input type='checkbox' id='booking-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='booking-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <h3 className='text-lg font-bold'>{treatmentName}</h3>
          <form
            onSubmit={handleBooking}
            className='grid grid-cols-1 gap-5 mt-10'
          >
            <input
              type='text'
              disabled
              value={date}
              className='input input-bordered w-full '
            />
            <select name='slot' className='select select-bordered w-full '>
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type='text'
              name='name'
              defaultValue={user?.displayName}
              readOnly
              placeholder='Full Name'
              className='input input-bordered w-full '
            />
            <input
              type='email'
              name='email'
              defaultValue={user?.email}
              readOnly
              placeholder='Enter your email'
              className='input input-bordered w-full '
            />
            <input
              type='text'
              name='phone'
              required
              placeholder='Enter your Phone'
              className='input input-bordered w-full '
            />
            <input
              className='btn btn-accent w-full'
              type='submit'
              value='Submit'
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default BookingModal
