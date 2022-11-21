import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { DoctorContext } from '../../context/AuthProvider'

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { SignUp, updateDoctorProfile, setLoader } = useContext(DoctorContext)
  const [loginError, setLoginError] = useState('')
  const navigate = useNavigate()
  return (
    <div>
      <h2 className='text-3xl'>Add A Doctor</h2>
      <div className='h-[600px] flex justify-center items-center'>
        <div className='w-96 p-8'>
          <h1 className='text-3xl text-center '>Add A Doctor</h1>
          <form className='mx-auto'>
            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='text'
                className='input input-bordered w-full max-w-xs'
                {...register('name', {
                  required: 'Name is required',
                })}
                placeholder='Enter Your Name'
              />
            </div>
            {errors.name && (
              <p className='text-red-700'>{errors.name?.message}</p>
            )}
            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                className='input input-bordered w-full max-w-xs'
                {...register('email', { required: 'Email is required' })}
                placeholder='Enter Your Email'
              />
            </div>
            {errors.email && (
              <p className='text-red-700'>{errors.email?.message}</p>
            )}

            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                className='input input-bordered w-full max-w-xs'
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be 6 characrters',
                  },

                  pattern: {
                    value:
                      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])/,
                    message:
                      'Password must be oneUpper&SmallLetter,one number and one special characters ',
                  },
                })}
                placeholder='Enter Your Password'
              />
              <label className='label'></label>
            </div>
            {errors.password && (
              <p className='text-red-700'>{errors.password?.message}</p>
            )}
            {loginError && <p className='text-red-700'>{loginError}</p>}

            <input
              className='btn btn-accent w-full '
              value='Add Doctor'
              type='submit'
            />
          </form>
          
          
         
        </div>
      </div>
    </div>
  )
}

export default AddDoctor
