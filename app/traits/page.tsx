import React from 'react';
import Navbar from '../components/navbar';


export default function Home() {
  const navbarHeight = 4;
  const availableHeight = `calc(100vh - ${navbarHeight}rem)`;
  const user = null; // You can replace null with an actual user object

  return (
    <div>
      <Navbar />
      <div style={{ height: availableHeight }}>
        
        {user ? (
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
        ) : (
          <div>
            <div className="grid grid-cols-4 gap-4" style={{ height: availableHeight }}>
              <div><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Architect</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">INTJ-A / INTJ-T </p></div>
              <div><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Logician</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">INTP-A / INTP-T </p></div>
              <div><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Commander</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">ENTJ-A / ENTJ-T </p></div>
              <div><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Debater</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">ENTP-A / ENTP-T </p></div>
              <div><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Advocate</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">INFJ-A / INFJ-T </p></div>
              <div><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mediator</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">INFP-A / INFP-T </p></div>
              <div><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Protagonists</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">ENFJ-A / ENFJ-T </p></div>
              <div><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Campaigner</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">ENFP-A / ENFP-T </p></div>
              <div><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Logistician</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">ISTJ-A / ISTJ-T </p></div>
              <div><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Defender</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">ISFJ-A / ISFJ-T </p></div>
              <div><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Executive</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">ESTJ-A / ESTJ-T </p></div>
              <div><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Consul</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">ESFJ-A / ESFJ-T </p></div>
              <div><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Virtuoso</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">ISTP-A / ISTP-T </p></div>
              <div><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Adventurer</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">ISFP-A / ISFP-T </p></div>
              <div><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Entrepreneur</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">ESTP-A / ESTP-T </p></div>
              <div><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Entertainer</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">ESFP-A / ESFP-T </p></div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
