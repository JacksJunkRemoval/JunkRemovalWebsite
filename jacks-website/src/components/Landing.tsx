import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className='relative'>
      <img src='../MainImage.webp' alt='Junk Removal Truck' className='w-full h-screen object-cover' />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10'>
        <h1 className='text-4xl md:text-6xl text-white font-bold mb-4'>Jack's Junk Removal</h1>
      </div>
    </div>
  );
};

export default LandingPage;
