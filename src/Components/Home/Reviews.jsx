import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Reviews = () => {
    const [reviews,setReviews] =useState([])
   
    useEffect(()=>{
      fetch('http://localhost:5000/Reviews')
      .then(res=>res.json())
      .then(data=>setReviews(data))
    },[])
    return (
        <div className='my-12 px-4'>
            <div className="flex items-center justify-between gap-2">
            <h1 className='text-5xl font-bold text-center'>Our Customers</h1>
            <FontAwesomeIcon className="pt-3" icon={faQuoteLeft} style={{color: "#0047AB",height:"50"}} /> 
            </div>
           
            <div className="my-8">
            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        {
            reviews.map(review=> <SwiperSlide
            key={review._id}
            >
                <div className="px-4 py-8 rounded-lg h-96 border md:m-5 bg-indigo-100 shadow-2xl flex flex-col items-start text-start">
                
                <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
                   
                    <p className="py-5">{review.details}</p>
                    <div className="avatar">
  <div className="w-14 rounded-full">
    <img src={review.imageURL} />
  </div>
</div>
                    <p className="text-orange-400 text-2xl">{review.name}</p>
                </div>

            </SwiperSlide>)
        }
      </Swiper>
    
            </div>
        </div>
    );
};

export default Reviews;