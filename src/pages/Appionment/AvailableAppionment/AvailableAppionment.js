import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import AppionmentOptions from './AppionmentOptions'

const AvailableAppionment = ({ selectDate }) => {
  const [appionmentOptions, setAppionmentOptions] = useState([])

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
          ></AppionmentOptions>
        ))}
      </div>
    </div>
  )
}

export default AvailableAppionment
