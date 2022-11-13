import React from 'react'

const AppionmentOptions = ({ options }) => {
  const { name, slots } = options
  return (
    <div className='card shadow-xl'>
      <div className='card-body'>
        <h2 className='text-3xl font-bold text-secondary text-center'>{name}</h2>
        <p>{slots.length > 0 ? slots[0] : 'Better luck for next Day'}</p>
        <p>
          {slots.length} {slots.length > 1 ? 'spaces' : 'space'}
        </p>
        <div className='card-actions justify-center'>
          <button className='btn btn-primary text-white'>Book An Appionment</button>
        </div>
      </div>
    </div>
  )
}

export default AppionmentOptions
