import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import '../../App.css';

interface HeaderProps {
  toggleNavbar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleNavbar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      // Set up to trigger slideUp animation
      const dropdownMenu = document.querySelector('.dropdown-menu');
      if (dropdownMenu) {
        dropdownMenu.classList.add('dropdown-exit');
        setTimeout(() => {
          setIsOpen(false);
          const dropdownMenuAfterTimeout = document.querySelector('.dropdown-menu');
          if (dropdownMenuAfterTimeout) {
            dropdownMenuAfterTimeout.classList.remove('dropdown-exit');
          }
        }, 100); // Duration of the slideUp animation
      }
    } else {
      setIsOpen(true);
    }
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      toggleNavbar();
      toggleMenu();
    }
  };

  const handleButtonClick = () => {
    toggleMenu();
    toggleNavbar();
  };

  const location = useLocation();

  const specialPages = ['/ourwork', '/faq', '/contact'];

  const borderColor = specialPages.includes(location.pathname) ? '#014421' : '#fff';




  return (
    <>
      <header
        className={`header flex w-screen min-h-[90px] h-[8vh] justify-center bg-[rgba(0,0,0,0.5)] px-4 py-1 relative z-20 ${
          isOpen
            ? 'bg-[rgba(0,0,0,0.5)] backdrop-blur-md border-none'
            : `border-b-4 border-${borderColor}`
        }`}
        style={{ borderBottomColor: borderColor }}
      >
        <nav className="flex justify-between w-[90%] max-w-[1200px] items-center">
          <div className="Logo flex justify-center w-[80px] h-[80px]">
            <Link to="/" className="hover:text-black block">
              <img
                src="../JackLogoWhite.png"
                alt="Jacks Junk Removal Logo"
                className="h-[100%]"
              />
            </Link>
          </div>

          <div className="block lg:hidden">
            <button
              onClick={handleButtonClick}
              className={`menu-button ${isOpen ? 'is-active' : ''}`}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex justify-evenly text:lg text-center items-center text-white w-full lg:w-[60%]">
            <li>
              <Link
                to="/"
                className="link hover:text-[#014421] block py-2 lg:py-0 font-bold"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/ourwork"
                className="link hover:text-[#014421] block py-2 lg:py-0 font-bold"
                onClick={handleLinkClick}
              >
                Our Work
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="link hover:text-[#014421] block py-2 lg:py-0 font-bold"
                onClick={handleLinkClick}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="link hover:text-[#014421] block py-2 lg:py-0 font-bold"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul
          className={`header-mobile items-center justify-evenly h-[45vh] bg-[rgba(0,0,0,0.5)] text-white text-center backdrop-blur-md text-2xl absolute top-[90px] left-0 right-0 flex flex-col z-20 border-b-4 dropdown-enter dropdown-menu`}
          style={{ borderBottomColor: borderColor }}
        >
          <li>
            <Link
              to="/"
              className="link hover:text-[#014421] block py-2 font-bold"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/ourwork"
              className="link hover:text-[#014421] block py-2 font-bold"
              onClick={handleLinkClick}
            >
              Our Work
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className="link hover:text-[#014421] block py-2 font-bold"
              onClick={handleLinkClick}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="link hover:text-[#014421] block py-2 font-bold"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Header;