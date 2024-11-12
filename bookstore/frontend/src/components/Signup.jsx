import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form';
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className='flex  h-screen items-center justify-center '>
    <div className='md:w-[600px]' >
  <div className="modal-box dark:bg-slate-900 dark:text-white shadow-2xl p-5 border-[2px]">
  <form method="dialog" onSubmit={handleSubmit((data) => console.log(data))}>
  <Link to="/"className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    <h3 className="font-bold text-lg">signUp</h3>
    <div className='mt-4 space-y-2'>
      <span className="">Name</span> <br />
      <input type="text" className="w-80 px-2 py-1 outline-none" placeholder='Enter your Name'  {...register('name', { required: true })} /><br />
      {errors.name && <span className='text-sm text-red-500'> Name is required.</span>}
    </div>
    <div className='mt-4 space-y-2'>
      <span className="">Email</span> <br />
      <input type="email" className="w-80 px-2 py-1 outline-none" placeholder='Enter your email'  {...register('email', { required: true })} /><br />
      {errors.email && <span className='text-sm text-red-500'> Email is required.</span>}
    </div>
    <div className='mt-4 space-y-2'>
      <span className="">Password</span> <br />
      <input type="password" className="w-80 px-2 py-1 outline-none" placeholder='Enter your Password' {...register('password', { required: true })}  /><br />
      {errors.password && <span className='text-sm text-red-500'> Password is required.</span>}
    </div>
    <div className='flex justify-around mt-3'>
        <button type='submit' className="px-3 py-1 bg-pink-500 text-white rounded-md hover:bg-pink-700 duration-300" >SignUp</button>
        <p className='px-3 py-1'>Already Registered? <span  className='underline text-blue-500 cursor-pointer' onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</span></p>
    </div>
   </form>
  </div>
</div>
    </div>
    <Login />
    </>
  )
}

export default Signup