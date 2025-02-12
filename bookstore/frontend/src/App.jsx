import { Route, Routes } from 'react-router-dom'
import Courses from './course/Courses'
import Home from './home/Home'
import Signup from './components/Signup'
export default function App() {
  return (
   <>
   <div className='dark:bg-slate-900 dark:text-white'>
    {/* <Home />
    <Courses /> */}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
   </div>
   </>
  )
}
