import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { DoctorContext } from '../context/AuthProvider'


const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(DoctorContext)
  const location = useLocation()
  if (loader) {
    return (
      <div
        className='w-16 h-16 my-5 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-violet-400'
        bis_skin_checked='1'
      ></div>
    )
  } 
  if (user) {
    return children
  }
  return (
    <Navigate
      Navigate
      to='/login'
      state={{ from: location }}
      replace
    ></Navigate>
  )
 
}

export default PrivateRoute
