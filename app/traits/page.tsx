import React from 'react';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='flex'>

      <input
        type="text"
        style={{
          width: '70%',
          padding: '12px 20px',
          margin: '8px 0',
          boxSizing: 'border-box',
        }}
        />
      <div>
        <button className="bg-green-500 hover:bg-green-600 text-white py-4 px-8 text-center text-lg font-semibold rounded ">
          Click me
        </button>
      </div>
      </div> 
    </div>
  );
}