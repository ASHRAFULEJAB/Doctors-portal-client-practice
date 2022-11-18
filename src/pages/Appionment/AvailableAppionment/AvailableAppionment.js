import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import React, { useState } from 'react'
import Loading from '../../../shared/Loading/Loading'
import BookingModal from '../BookingModal/BookingModal'
import AppionmentOptions from './AppionmentOptions'

const AvailableAppionment = ({ selectDate }) => {
  const [treatment, setTreatment] = useState(null)
  const date = format(selectDate, 'PP')

  const {
    data: appionmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['appionmentOptions', date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appionmentOptions?date=${date}`
      )
      const data = await res.json()
      return data
    },
  })
  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div className='my-10'>
      <h2 className='text-3xl text-center font-bold text-secondary'>
        Available Appointments on {format(selectDate, 'PP')}
      </h2>
      <div className=' gap-6 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
        {appionmentOptions.map((options) => (
          <AppionmentOptions
            key={options._id}
            options={options}
            setTreatment={setTreatment}
          ></AppionmentOptions>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          setTreatment={setTreatment}
          selectDate={selectDate}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  )
}

export default AvailableAppionment
