import React from 'react';

const Footer: React.FC = () => {
    return (
      <div className="text-center bg-[#014421] h-[20vh] flex flex-col justify-evenly">
        <div className="col-span-2">
          <h1 className="text-3xl font-bold text-white">Jack's Junk Removal, LLC</h1>
        </div>
        <div className="col-span-2">
          <p className="text-white">Milwaukie, OR 97222</p>
        </div>
        <div className="flex flex-row items-center justify-evenly">
          <p className="text-white">(503) 305 0068</p>
          <p className="text-white">jack@jacksremoval.com</p>
        </div>
        <div className="col-span-2">
          <p className="text-[lightgray]">&copy; 2024 Jack's Junk Removal LLC All rights reserved</p>
        </div>
      </div>
    );
  };
  
  export default Footer;