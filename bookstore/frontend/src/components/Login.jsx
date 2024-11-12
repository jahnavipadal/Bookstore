import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
  return (
    <>
    <div>
    <dialog id="my_modal_3" className="modal ">
  <div className="modal-box dark:bg-slate-900 dark:text-white">
    <form method="dialog" onSubmit={handleSubmit((data) => console.log(data))}>
      {/* if there is a button in form, it will close the modal */}
      <button type='button' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>document.getElementById("my_modal_3").close()}>✕</button>
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-4 space-y-2'>
      <span className="">Email</span> <br />
      <input type="email" className="w-80 px-2 py-1 outline-none" placeholder='Enter your email' {...register('email', { required: true })} /><br/>
      {errors.email && <span className='text-sm text-red-500'> Email is required.</span>}
    </div>
    <div className='mt-4 space-y-2'>
      <span className="">Password</span> <br />
      <input type="password" className="w-80 px-2 py-1 outline-none" placeholder='Enter your Password' {...register('password', { required: true })} /> <br />
      {errors.password && <span className='text-sm text-red-500'> Password is required.</span>}
    </div>
    <div className='flex justify-around mt-3'>
        <button type='submit' className="px-3 py-1 bg-pink-500 text-white rounded-md hover:bg-pink-700 duration-300" >Login</button>
        <p className='px-3 py-1'>Not Registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>SignUp</Link></p>
    </div>
    </form>
   

  </div>
</dialog>
    </div>
    </>
  )
}

export default Login