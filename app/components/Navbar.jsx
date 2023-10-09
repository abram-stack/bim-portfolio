import Link from 'next/link';
import { RiMoonFoggyFill } from 'react-icons/ri';
import { PiTreeDuotone } from 'react-icons/pi';
export default function Navbar() {
  return (
    <>
      <nav className='py-10 flex justify-between container'>
        <Link href='/'>
          <h1 className='text-xl text-[#abc7dd] font-rubik cursor-pointer logo'>
            Botanesia <br /> Console
          </h1>
        </Link>
        <ul className='flex gap-3 items-center '>
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
        </ul>
      </nav>
    </>
  );
}
