import React, { useState } from 'react'
import AppionmentBanner from './AppionmentBanner/AppionmentBanner'
import AvailableAppionment from './AvailableAppionment/AvailableAppionment'

const Appionment = () => {
  const [selectDate, setSelectDate] = useState(new Date())
  return (
    <div>
      <AppionmentBanner
        selectDate={selectDate}
        setSelectDate={setSelectDate}
      ></AppionmentBanner>
      <AvailableAppionment selectDate={selectDate}></AvailableAppionment>
    </div>
  )
}

export default Appionment
