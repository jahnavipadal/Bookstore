import React from 'react'

function Card(props) {
  return (
    <>
    <div>
    <div className="card w-72 bg-base-100 shadow-xl mx-12 mt-6 mb-6 md:mt-8 md:mb-8 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src={props.data.image} alt="Shoes" className='w-62' /></figure>
  <div className="card-body">
    <h2 className="card-title">
    {props.data.name}
      <div className="badge badge-secondary">{props.data.category}</div>
    </h2>
    <p>{props.data.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline p-3">$ {props.data.price}</div> 
      <div className="badge badge-outline hover:text-pink-500 duration-2000 p-3 cursor-pointer ">Buy Now</div>
    </div>
  </div>
</div>
    </div>

    </>
  )
}

export default Card