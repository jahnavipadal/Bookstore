import React from 'react'
import list from "../../public/products.json"
import Card from '../components/Card'
import { Link } from 'react-router-dom'
function CourseList() {
  return (
   <>
    <div className='max-w-screen-2xl container dark:bg-slate-900 dark:text-white pt-28  mx-auto md:px-20 px-10 items-center justify-content-center text-center '>
   <h1 className='text-2xl md:text-4xl'>We are delighted to have you
    <span className='text-pink-500'> Here :)</span>
   </h1>
   <p className='mt-4 md:mt-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
   </p>
   <Link to="/">
   <button type='button' className='bg-pink-500 text-white px-6 py-1 rounded-sm mt-4 hover:bg-pink-600 duration-300'> Back</button>
   </Link>
  
  
   </div>
   <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-6 md:mx-0" >
    {list?.map((ele,i)=>{
        return <Card key={i} data={ele} />
    })}
   </div>
   </>
  )
}

export default CourseList