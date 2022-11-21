import { useQuery } from '@tanstack/react-query'
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
  // const { SignUp, updateDoctorProfile, setLoader } = useContext(DoctorContext)
  const navigate = useNavigate()
  const imgebbKEY = process.env.REACT_APP_IMGBB_KEY
  

  const { data: specialties = [] } = useQuery({
    queryKey: ['specialty'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/appionmentspecialty')
      const data = await res.json()
      return data
    },
  })

  const handleDoctor = (data) => {

    const image = data.image[0]
    const formData = new FormData()
    formData.append('image', image)
    // formData.append('img', img)
    const url = `https://api.imgbb.com/1/upload?key=${imgebbKEY}`
   
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData)
        if (imgData.success) {
          console.log(imgData.data.url)

        //save doctors info
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image:imgData.data.url
          }

          fetch('http://localhost:5000/doctors', {
            method: 'post',
            headers: {
              'content-type': 'application/json',
              authorization:`bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify(doctor)
          })
            .then(res => res.json())
            .then(docData => {
              alert(`${data?.name}doctor added`)
              navigate('/dashboard/mangedoctors')
          })
        }
      })
  }

  return (
    <div>
      <h2 className='text-3xl'>Add A Doctor</h2>
      <div className='h-[600px] flex justify-center items-center'>
        <div className='w-96 p-8'>
          <h1 className='text-3xl text-center '>Add A Doctor</h1>
          <form onSubmit={handleSubmit(handleDoctor)} className='mx-auto'>
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
                <span className='label-text'>Specialty</span>
              </label>
              <select
                {...register('specialty')}
                className='select select-bordered w-full max-w-xs'
              >
                <option disabled selected>
                  Pick a Treatment?
                </option>
                {specialties.map((specialty) => (
                  <option key={specialty._id} value={specialty.name}>
                    {specialty?.name}
                  </option>
                ))}
              </select>
              <label className='label'></label>
            </div>
            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Photo</span>
              </label>
              <input
                type='file'
                className='input input-bordered w-full max-w-xs'
                {...register('image')}
                placeholder='Enter Your Photo'
              />
            </div>
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
