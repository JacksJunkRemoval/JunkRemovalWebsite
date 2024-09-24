import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

interface LandingPageProps {
  isNavbarOpen: boolean;
}

const LandingPage: React.FC<LandingPageProps> = ({ isNavbarOpen}) => {

  const scrollToContent = () => {
    document.getElementById('additional-content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <div className='relative w-full h-[92vh] border-b-4 border-[#014421]'>
      <div className={`absolute border-4 flex flex-col items-center justify-evenly text-center min-h-{35vh]} px-12 py-4 bg-[rgba(0,0,0,0.75)] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ${isNavbarOpen ? 'visible' : ''}`}>
        <h1 className='text-4xl md:text-6xl text-white font-bold mb-4'>Jack's Junk Removal</h1>
        <p className='text-xl text-white font-bold'>Scroll to see some of our work!</p>
        <Link to="/contact">
          <button className='bg-[#014421] px-8 py-4 rounded-lg text-xl font-bold text-white transform transition-transform duration-300 ease-in-out hover:scale-105'>
            Get A Quote
          </button>
        </Link>
      </div>
        <button onClick={scrollToContent} className='absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 text-white hover:cursor-pointer hover:scale-190 transition-transform duration-300 ease-in-out'>
          <FontAwesomeIcon icon={faAnglesDown} bounce className='size-[4rem] hover:animate-none '/>
        </button>  
    </div>
    
    <div id='additional-content' className='additional-content bg-white h-[100vh]'>
      <section className='p-8'>
        <h2 className='text-3xl font-bold mb-4'>Our Services</h2>
        <p className='text-lg mb-4'>We offer a wide range of junk removal services to meet your needs.</p>
      </section>
    </div>
    </>
  );
};

export default LandingPage;
