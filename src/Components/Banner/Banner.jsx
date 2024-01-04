import React from 'react';
import BannerCard from '../Home/BannerCard';

const Banner = () => {
    return (
        <div className='px-4 lg:px-24 bg-teal-100 flex  items-center'>
<div className='flex w-full flrx-col md:flex-row justify-between items-center gap-12 py-40'> 
               {/* left side */}
               <div className='w-1/2 space-y-8 h-full'>
<h2 className='text-4xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-blue-700'>for <br /> the Best Prices</span></h2>
<p className='md:w-4/5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus quas optio, omnis a consequatur ipsum similique hic veniam tempora eius officiis sint in, voluptas ratione. Sed incidunt optio aut.</p>
            <div>
                <input type="search" name='search' id='search' placeholder='Search a book' className='py-2 px-2 rounded-s-sm outline-none' />
                <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black translate-all ease-in duration-200'>Search</button>
            </div>
            </div> 
            {/* right side */}
            <div>
                <BannerCard></BannerCard>
            </div>
</div>
        </div>
    );
};

export default Banner;