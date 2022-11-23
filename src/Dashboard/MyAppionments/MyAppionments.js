import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DoctorContext } from '../../context/AuthProvider'

const MyAppionments = () => {
  const { user, setLoader } = useContext(DoctorContext)
  const url = `http://localhost:5000/bookings?email=${user?.email}`
  const { data: bookings = [] } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      const data = await res.json()
      return data
    },
  })
  // if (!isLoading) {
  //     setLoader(false)
  // }
  return (
    <div>
      <h2 className='text-3xl my-3'>My Appionments</h2>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr className='hover' key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking?.patient}</td>
                <td>{booking?.treatment}</td>
                <td>{booking?.appionmentDate}</td>
                <td>{booking?.slot}</td>
                <td>
                  {booking?.price && !booking?.paid && (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      {' '}
                      <button className='btn btn-secondary btn-xs '>Pay</button>
                    </Link>
                  )}
                  {
                    booking?.price && booking?.paid && <h3 className=' text-green-700 font-bold'>Paid</h3>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyAppionments
