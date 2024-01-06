import { useEffect, useState } from "react";

const Shop = () => {
    const [books,setBooks] =useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/all-books')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div className="px-4">
        
            <h2  className="text-5xl text-center font-bold">All Books are here</h2>
          <div className="grid my-12 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
            {
                books.map(book=><card key={book._id} className="card w-96 bg-base-100 shadow-xl mt-10">
                <figure><img src={book.imageURL} alt=""className="h-80 w-2/3"/></figure>
                <div className="card-body">
                  <h2 className="card-title">{book.bookTitle}</h2>
                  <p>{book.bookDescription.slice(0,100)}...</p>
                  <button className="py-2 rounded bg-blue-700 text-white">Buy Now</button>
                </div>
              </card>)
            }
          </div>
        </div>
    );
};

export default Shop;