import Link from 'next/link';
import { RiMoonFoggyFill } from 'react-icons/ri';
import { PiTreeDuotone } from 'react-icons/pi';
export default function Navbar() {
  return (
    <>
      {/* <header className='py-10 flex justify-between container'> */}
      <header>
        <Link href='/' className='site-logo font-grotesk'>
          <h1>
            Bram <br /> Bimo
          </h1>
        </Link>
        <nav className='navbar'>
          {/* <Link href={'/about'}>About</Link> */}
          <Link href={'/projects'}>Projects</Link>
          <Link href={'https://brambimo.netlify.app/'}>Resume</Link>
        </nav>
      </header>
    </>
  )
}

{/* <ul className='flex gap-3 items-center '>
  <li>
    <Link href={`/about`} className='about flex  px-4 py-2 '>
      <PiTreeDuotone className='text-2xl' />
      About Me
    </Link>
  </li>
  <li>
    <Link
      href='https://brambimo.netlify.app/'
      className='bg-gradient-to-r from-cyan-500 to-teal-500  px-4 py-2 rounded-md text-white'
    >
      Resume
    </Link>
  </li>
</ul> */}