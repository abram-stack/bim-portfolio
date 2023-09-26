import Link from 'next/link';
import { RiMoonFoggyFill } from 'react-icons/ri';

export default function Navbar() {
  return (
    <>
      <nav className='py-10 flex justify-between mb-8 container'>
        <Link href='/'>
          <h1
            className='text-2xl text-[#abc7dd] font-rubik cursor-pointer'
            style={{
              textShadow: '-2px 4px #24494f',
              webkitTextStrokeWidth: '1px',
              webkitTextStrokeColor: '#151928',
            }}
          >
            Console <br /> Botanist
          </h1>
        </Link>
        <ul className='flex items-center'>
          <li>
            <RiMoonFoggyFill className='cursor-pointer text-2xl' />
          </li>
          <li>
            <Link href={`/about`}> About Me</Link>
          </li>
          <li>
            <Link
              href='/resume'
              className='bg-gradient-to-r from-cyan-500 to-teal-500  px-4 py-2 rounded-md ml-8 text-white'
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
