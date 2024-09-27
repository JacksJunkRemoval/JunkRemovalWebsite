import React from 'react';
import { Link } from 'react-router-dom';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import './Landing.css'

interface LandingPageProps {
  isNavbarOpen: boolean;
}

const LandingPage: React.FC<LandingPageProps> = ({ isNavbarOpen}) => {

  const JOB1_BEFORE = { imageUrl: '/before+after/1Before.png' };
  const JOB1_AFTER = { imageUrl: '/before+after/1After.png' };

  const JOB2_BEFORE = { imageUrl: '/before+after/2Before.png' };
  const JOB2_AFTER = { imageUrl: '/before+after/2After.png' };

  const scrollToContent = () => {
    document.getElementById('additional-content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <div className='landing relative w-full h-[92vh] border-b-4 border-[#014421]'>
      <div className={`absolute border-4 flex flex-col items-center justify-evenly text-center min-h-{35vh]} px-12 py-4 bg-[rgba(0,0,0,0.75)] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ${isNavbarOpen ? 'visible' : ''}`}>
        <h1 className='text-4xl md:text-6xl text-white font-bold mb-4'>Jack's Junk Removal</h1>
        <p className='text-xl text-white font-bold mb-4'>Scroll to see some of our work!</p>
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
    
    <div id='additional-content' className='additional-content bg-white'>
      <section className='p-8 flex flex-col text-center items-center justify-center'>
        <h2 className='text-3xl font-bold mb-[20px] text-[#014421]'>See some examples of our previous work!</h2>

        <div className='all-work-container-main lg:w-[80%]'>

        <div className={`slider-container-main ${isNavbarOpen ? 'visible' : 'visible'}`}>
          <ReactBeforeSliderComponent
            firstImage={JOB1_AFTER}
            secondImage={JOB1_BEFORE}
          />
        </div>

        <div className={`slider-container-main ${isNavbarOpen ? 'visible' : 'visible'}`}>
          <ReactBeforeSliderComponent
            firstImage={JOB2_AFTER}
            secondImage={JOB2_BEFORE}
          />
        </div>

        </div>

        <Link to="/ourwork">
          <button className='bg-[#014421] mt-[40px] px-8 py-4 rounded-lg text-xl font-bold text-white transform transition-transform duration-300 ease-in-out hover:scale-105'>
            Click Here For More!
          </button>
        </Link>

      </section>
    </div>
    </>
  );
};

export default LandingPage;
