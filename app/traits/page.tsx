import React from 'react';
import Navbar from '../components/navbar';

export default function Home() {
  const navbarHeight = 4;
  const availableHeight = `calc(100vh - ${navbarHeight}rem)`;
  return (
    <div >
      <Navbar />
      <div style={{ height: availableHeight }}>
        <div></div>
        <div className='flex inset-x-0 bottom-0'>

        <input
          type="text"
          style={{
            width: '85%',
            padding: '12px 20px',
            margin: '0',
            boxSizing: 'border-box',
          }}
          className="rounded-l-lg"
          />
        <button className="bg-green-500 hover:bg-green-600 text-white py-4 px-8 text-center text-lg font-semibold rounded-r-lg w-[15%]">
          Click me
        </button>
          </div>
      </div>
    </div>
  );
}
