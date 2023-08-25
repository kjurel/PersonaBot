import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='w-full bg-gradient-to-r from-black to-grey-800 font-mono'>
      <nav className='flex items-center justify-between h-16 px-4'>
        <div className='text-white text-xl font-bold select-none'>PersonaBot<span className='text-2xl'>
          🔬
          </span>
          </div>
        <ul className='flex space-x-4'>
          <li>
            <Link href='/abstract' className='text-white hover:text-blue-500'>
              Abstract
            </Link>
          </li>
          <li>
            <Link href='/traits' className='text-white hover:text-blue-500'>
              Traits
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
