import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Login = () => {
  const { register, handleSubmit } = useForm()
    const handleLogin = data => {
      console.log(data);
  }
  return (
    <div className='h-[600px] flex justify-center items-center'>
      <div className='w-96 p-8'>
        <h1 className='text-3xl text-center '>login</h1>
        <form
          className='mx-auto'
          onSubmit={handleSubmit(handleLogin)}
        >
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              className='input input-bordered w-full max-w-xs'
              {...register('email')}
              placeholder='Enter Your Email'
            />
          </div>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              type='password'
              className='input input-bordered w-full max-w-xs'
              {...register('password')}
              placeholder='Enter Your Password'
                      />
                      <label className='label'>
              <span className='label-text'>Forget Password?</span>
            </label>
          </div>
       
          <input className='btn btn-accent w-full ' value='LogIn' type='submit' />
              </form>
              <p>New to Doctors Portal ? <Link className='text-secondary' to='/signup'>Create new account</Link></p>
              <div className="divider my-3">OR</div>
              <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  )
}

export default Login
;<h1>login</h1>
