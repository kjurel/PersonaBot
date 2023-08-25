import Image from 'next/image'
export default function Homepage() {
  const navbarHeight = 4;
  const availableHeight = `calc(100vh - ${navbarHeight}rem)`;
  return (
    <div className='relative' style={{ height: availableHeight }}>
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 absolute left-0 h-full w-[50%]'>
        <div className="flex items-center justify-center flex-col">
        <Image src="/logo.png" alt="Logo" width="250" height="250"/>
        <p className="text-[7rem] font-mono flex-1">
        Persona
        </p>       
        <p className="text-[7rem] font-mono flex-1">
        Bot
        </p>
        </div>
      </div>
      <div className='bg-gradient-to-r from-blue-500 to-indigo-500 absolute right-0 h-full w-[50%]'>
      </div>
  </div>
  )
}
