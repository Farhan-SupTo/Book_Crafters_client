import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBlog } from "react-icons/fa";

const Navbar = () => {
  const [isSticky,setIsSticky] =useState(false)


  // for scrollbar
   useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY > 100){
        setIsSticky(true)
      }else{
        setIsSticky(false)
      }
    }
    window.addEventListener("scroll",handleScroll)
    return ()=>{
      window.addEventListener("scroll",handleScroll)
    }
   },[]) 

  const navOption = (
    <>
      <li>
        <Link className="hover:text-blue-700" to="/">Home</Link>
      </li>
      <li>
        <Link className="hover:text-blue-700" to="/menu">About</Link>
      </li>
      <li>
        <Link className="hover:text-blue-700" to="/order/salad">Shop</Link>
      </li>
      <li>
        <Link className="hover:text-blue-700" to="/order/salad">Sell Book</Link>
      </li>
      <li>
        <Link className="hover:text-blue-700" to="/order/salad">Blog</Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30 p-0 max-w-screen-xl bg-red-500">
      <div className={`navbar-start py-4   lg:px-24 ${isSticky ? "sticky top-0  left-0 right-0 bg-blue-300" : ''}`}>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu font-medium text-base  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32"
          >
            {navOption}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl text-blue-600 font-bold"><FaBlog></FaBlog>Book Crafters</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-medium items-center  px-1">{navOption}</ul>
      </div>
    </div>
  );
};

export default Navbar;
