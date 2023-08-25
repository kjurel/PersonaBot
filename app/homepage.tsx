export default function Homepage() {
  const navbarHeight = 4;
  const availableHeight = `calc(100vh - ${navbarHeight}rem)`;
  return (
    <div className='relative' style={{ height: availableHeight }}>
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 absolute left-0 h-full w-[50%]'>
        <p>
        Persona
        </p>
        <p>
        Bot
        </p>
      </div>
      <div className='bg-gradient-to-r from-blue-500 to-indigo-500 absolute right-0 h-full w-[50%]'>
      </div>
  </div>
  )
}
