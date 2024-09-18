import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import '../../App.css';

interface HeaderProps {
  isNavbarOpen: boolean;
  toggleNavbar: () => void;
}

const Header: React.FC<HeaderProps> = ({ isNavbarOpen, toggleNavbar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      // Set up to trigger slideUp animation
      document.querySelector('.dropdown-menu').classList.add('dropdown-exit');
      setTimeout(() => {
        setIsOpen(false);
        document.querySelector('.dropdown-menu').classList.remove('dropdown-exit');
      }, 100); // Duration of the slideUp animation
    } else {
      setIsOpen(true);
    }
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      toggleMenu();
    }
  };

  const handleButtonClick = () => {
    toggleMenu();
    toggleNavbar();
  };

  return (
    <header className={`header flex w-full h-[8vh] justify-center bg-[rgba(0,0,0,0.5)] px-4 py-1 relative z-20 ${isOpen ? 'border-none' : 'border-b-4 border-[#fff]'}`}>

      <nav className="flex justify-between w-[90%] max-w-[1200px] items-center">

        <div className='Logo flex justify-center w-[80px] h-[80px]'>
          <Link to="/" className="hover:text-black block">
            <img src='../JackLogoWhite.png' alt='Jacks Junk Removal Logo' className='h-[100%]' />
          </Link>
        </div>

        <div className="block lg:hidden">
          <button onClick={handleButtonClick} className={`menu-button ${isOpen ? 'is-active' : ''}`}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
        </div>

        <ul className={`lg:flex justify-evenly text:lg text-center items-center text-white w-full lg:w-[60%] ${isOpen ? 'header-mobile h-[45vh] bg-[rgba(0,0,0,0.5)] text-2xl absolute top-full left-0 right-0 flex flex-col z-20 border-b-4 border-[#fff] dropdown-enter dropdown-menu' : 'hidden'} lg:flex`}>
          <li>
            <Link to="/" className="link hover:text-[#014421] block py-2 lg:py-0 font-bold " onClick={handleLinkClick}>Home</Link>
          </li>
          <li>
            <Link to="/ourwork" className="link hover:text-[#014421] block py-2 lg:py-0 font-bold" onClick={handleLinkClick}>Our Work</Link>
          </li>
          <li>
            <Link to="/faq" className="link hover:text-[#014421] block py-2 lg:py-0 font-bold" onClick={handleLinkClick}>FAQ</Link>
          </li>
          <li>
            <Link to="/contact" className="link hover:text-[#014421] block py-2 lg:py-0 font-bold" onClick={handleLinkClick}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;