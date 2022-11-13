import React from 'react'
import chair from '../../../assets/images/chair.png'
import { format } from 'date-fns'
import { DayPicker } from 'react-day-picker'
import appionment from '../../../assets/images/appointment.png'

const AppionmentBanner = ({selectDate,setSelectDate}) => {

  return (
      <header style={{
          background: `url(${appionment})`
          
    }}>
      <div className='hero my-6'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img
            src={chair}
            alt='dentists Chair'
            className='lg:w-1/2 rounded-lg shadow-2xl'
          />
          <div className='mr-10 text-white'>
            <DayPicker
              mode='single'
              selected={selectDate}
              onSelect={setSelectDate}
            ></DayPicker>
            <p className='ml-3 text-2xl font-bold text-primary'>You have Selected {format(selectDate, 'PP')}</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppionmentBanner
