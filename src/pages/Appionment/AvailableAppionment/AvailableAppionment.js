import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import BookingModal from '../BookingModal/BookingModal'
import AppionmentOptions from './AppionmentOptions'

const AvailableAppionment = ({ selectDate }) => {
  const [appionmentOptions, setAppionmentOptions] = useState([])
  const [treatment,setTreatment]=useState(null)

  useEffect(() => {
    fetch('services.json')
      .then((res) => res.json())
      .then((data) => setAppionmentOptions(data))
  }, [])
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
      {treatment && <BookingModal treatment={treatment} selectDate={selectDate}></BookingModal>}
    </div>
  )
}

export default AvailableAppionment
