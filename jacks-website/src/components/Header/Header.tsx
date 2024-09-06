import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // Ensure this path is correct

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 300); // Duration of the slide-up animation
    } else {
      setIsOpen(true);
    }
  };

  return (
    <header className="flex justify-center border-b-2 border-gray-200 px-4 py-1 bg-[#014421] relative z-20">
      <nav className="flex justify-between w-[90%] max-w-[1200px] items-center">
        <div className='Logo flex justify-center w-[65px] h-[65px]'>
          <Link to="/" className="hover:text-black block">
            <img src='../JackLogoWhite.png' alt='Jacks Junk Removal Logo' className='h-[100%]' />
          </Link>
        </div>

        <div className="block lg:hidden">
          <button onClick={toggleMenu} className={`menu-button ${isOpen ? 'is-active' : ''}`}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
        </div>

        <ul className={`lg:flex justify-evenly text-center items-center text-white w-full lg:w-[60%] ${isOpen ? 'absolute top-full left-0 right-0 bg-[#014421] flex flex-col z-20 dropdown-enter' : isAnimating ? 'absolute top-full left-0 right-0 bg-[#014421] flex flex-col z-20 dropdown-exit' : 'hidden'} lg:flex`}>
          <li>
            <Link to="/" className="hover:text-black block py-2 lg:py-0">Home</Link>
          </li>
          <li>
            <Link to="/ourwork" className="hover:text-black block py-2 lg:py-0">Our Work</Link>
          </li>
          <li>
            <Link to="/faq" className="hover:text-black block py-2 lg:py-0">FAQ</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-black block py-2 lg:py-0">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

/*

import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="flex justify-center border-b-2 border-gray-200 px-4 py-1 bg-[#014421]">

      <nav className="flex justify-between w-[90%] max-w-[1200px]">

        <div className='Logo flex justify-center w-[65px] h-[65px]'>
            <img src='../JackLogoWhite.png' alt='Jacks Junk Removal Logo' className='h-[100%]' />
        </div>


        <ul className="flex justify-evenly text-center items-center text-white w-[60%]">
            <li>
                <Link to="/" className="hover:text-black">Home</Link>
            </li>
            <li>
                <Link to="/ourwork" className="hover:text-black">Our Work</Link> 
            </li>
            <li>
                <Link to="/faq" className="hover:text-black">FAQ</Link> 
            </li>
            <li>
                <Link to="/contact" className="hover:text-black">Contact</Link> 
            </li>
        </ul>

      </nav>

    </header>
  );
};


export default Header;

*/