import Link from 'next/link';
import { BiLogoTwitter, BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi';
import Image from 'next/image';

// images
import bims from '../../public/avatar.jpg';

export default function Hero() {
  return (
    <section className='container min-h-screen'>
      <div className='hero'>
        <h2 className='greeting'>
          Ei Gude! I'am
          <br />
          <span className='text-[#abc7dd] logo'>Bram</span>
        </h2>
        <h2 className='subtitle py-2 md:max-w-xl mx-auto mb-3'>
          Frontend Explorer
        </h2>
        {/* TODO: input rangebar here, JS for bio length  */}
        <p className='text-xl py-5 leading-7 md:text-lg max-w-xl mx-auto'>
          Just scratched the surface of the frontend world, amazed and heading
          forward for discovering the rest of the web dev world.
        </p>
      </div>
      <div className='text-2xl flex justify-center text-gray-800 gap-5'>
        <Link href='#' className='social'>
          <BiLogoTwitter />
        </Link>
        <Link href='#' className='social'>
          <BiLogoLinkedin />
        </Link>
        <Link href='#' className='social'>
          <BiLogoGithub />
        </Link>
      </div>
      <div className='relative border border-teal-500  w-80 h-80 mx-auto mt-20 rounded-full overflow-hidden'>
        <Image src={bims} layout='fill' objectFit='cover' />
      </div>
    </section>
  );
}
