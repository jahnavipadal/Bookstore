import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '../../public/products.json'
import axios from 'axios';
import Card from './Card'
function FreeBooks() {
  const [freebook,setFreebook]= useState([])
  useEffect(()=>{
    getFreeBooks()
  },[])
  const getFreeBooks=async()=>{
   try {
      const response = await axios.get("http://127.0.0.1:4001/book/")
      setFreebook(response.data.books)
   } catch (error) {
    console.log(error)
   }
   
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
        }
      }
    ]
  };
    
  
  return (
    <>
  <div className='max-w-screen-2xl container mt-8 md:mt-0 mx-auto md:px-20 px-4 '>
<div>
<h1 className='text-xl font-semibold pb-2'> Free Offered Course</h1>
<p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
</div>
<div className="slider-container">
      <Slider {...settings}>
      {freebook.map((ele,i)=>{
        return( <Card key={i} data={ele} />)
      })}
      </Slider>
    </div>

  </div>
    </>
  )
}

export default FreeBooks