import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { DoctorContext } from '../../context/AuthProvider'
import toast from 'react-hot-toast'
import { GoogleAuthProvider } from 'firebase/auth'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { userLogin, GoogleLogin } = useContext(DoctorContext)
  const googleProvider = new GoogleAuthProvider()
  const [loginError, setLoginError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handleLogin = (data) => {
    console.log(data)
    userLogin(data.email, data.password)
      .then((result) => {
        const user = result.user
        alert('User Created')
        navigate(from, { replace: true })
        console.log(user)
        setLoginError('')
      })
      .catch((e) => {
        console.log(e)
        setLoginError(e.message)
      })
  }

  const handleGoogleLogin = () => {
    GoogleLogin(googleProvider)
      .then((result) => {
        const user = result.user

        console.log(user)
        if (user?.uid) {
          navigate(from, { replace: true })
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }
  return (
    <div className='h-[600px] flex justify-center items-center'>
      <div className='w-96 p-8'>
        <h1 className='text-3xl text-center '>login</h1>
        <form className='mx-auto' onSubmit={handleSubmit(handleLogin)}>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              className='input input-bordered w-full max-w-xs'
              {...register('email', { required: 'Email Address is Required' })}
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
                required: 'Password Required',
                minLength: {
                  value: 6,
                  message: 'Password must be 6 characters',
                },
              })}
              placeholder='Enter Your Password'
            />
            <label className='label'>
              <span className='label-text'>Forget Password?</span>
            </label>
          </div>
          {loginError && <p className='text-red-700'>{loginError}</p>}
          {errors.password && (
            <p className='text-red-700'>{errors.password?.message}</p>
          )}

          <input
            className='btn btn-accent w-full '
            value='LogIn'
            type='submit'
          />
        </form>
        <p>
          New to Doctors Portal ?{' '}
          <Link className='text-secondary' to='/signup'>
            Create new account
          </Link>
        </p>
        <div className='divider my-3'>OR</div>
        <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  )
}

export default Login
;<h1>login</h1>
