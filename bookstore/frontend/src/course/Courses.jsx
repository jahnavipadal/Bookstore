import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CourseList from './CourseList'
function Courses() {
  return (
    <>
    <Navbar />
    <div className='min-h-screen dark:bg-slate-900 dark:text-white'>
    <CourseList  />
    </div>
    <Footer />
    </>
  )
}

export default Courses