import React from 'react';
import favImage from '../../assets/favoritebook.jpg'
import { Link } from 'react-router-dom';

const Favbook = () => {
    return (
        <div className='my-20 px-4 flex flex-col md:flex-row justify-between gap-12 items-center'>
           <div className='md:w-1/2'>
            <img src={favImage} alt="" className='rounded md:w-10/12'/>
           </div>
           <div className='md:w-1/2 space-y-6'> 
<h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favorite <span className='text-blue-700'>Book here!</span></h2>
<p className='mb-10 text-lg w-5/6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, ex esse. Commodi quo amet earum unde repudiandae. In laboriosam obcaecati accusantium, aspernatur iure corrupti! Nisi fugit rem est praesentium architecto.</p>
<div className='flex flex-col sm:flex-row justify-between gap-6 w-3/4'>
  <div>
  <h3 className='text-3xl font-bold'>550+</h3>
  <p className='text-base'>Register Users</p>
  </div>
  <div>
  <h3 className='text-3xl font-bold'>800+</h3>
  <p className='text-base'>Book Listing</p>
  </div>
  <div>
  <h3 className='text-3xl font-bold'>1200+</h3>
  <p className='text-base'>PDF Downloads</p>
  </div>
</div>
<Link to='/shop' className='mt-8 block'><button className='text-white bg-blue-700 px-5 py-2 rounded font-semibold hover:bg-black transition-all duration-300'>Explore More</button></Link>
           </div>
        </div>
    );
};

export default Favbook;