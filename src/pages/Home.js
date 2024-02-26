import React from 'react';
import { Link } from 'react-router-dom';


export const Home = () => {
  return (
    <div className='mx-auto border-solid border-2 border-yellow-500 rounded-lg m-4 md:px-72 p-20 '>
    <div className=' bg-crna-100 min-h-full flex justify-center items-center flex-col '>
      <div className='bg-crna-100 flex justify-center flex-row mb-11'>
        <Link to="/hrana">
          <button type="button" className="px-6 py-3.5 text-xl font-medium text-white bg-yellow-500 rounded-lg text-center" style={{textShadow: '1px 2px 1px black',color: 'white'}}>HRANA</button>
        </Link>
      </div>
      <div className='bg-crna-100 flex justify-center flex-row '>
        <Link to="/pice">
        <button type="button" className="px-6 py-3.5 text-xl font-medium text-white bg-yellow-500 rounded-lg text-center" style={{textShadow: '1px 2px 1px black',color: 'white'}} >PIĆE</button>
        </Link>
      </div>
    </div>
    </div>
  );
};