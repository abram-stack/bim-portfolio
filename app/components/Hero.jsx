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
          Ei Gude! I&apos;m
          <br />
          <span className='text-[#abc7dd] logo'>Bram</span>
        </h2>

        <div className='profile mt-10 flex flex-col  gap-2 lg:justify-between lg:flex-row '>
          <div className='profile-content flex flex-col justify-evenly'>
            <h2 className='subtitle mb-3 md:max-w-lg'>Frontend Explorer</h2>
            {/* TODO: input rangebar here, JS for bio length  */}
            <p className='text-xl py-5 leading-7 md:text-xl max-w-2xl '>
              Just scratched the surface of the frontend world, amazed and
              heading forward to discover the rest of the web dev world.
            </p>
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
          </div>
          <div className='profile-img relative border border-teal-500  w-80 h-80 self-center rounded-full overflow-hidden'>
            <Image src={bims} layout='fill' objectFit='cover' />
          </div>
        </div>
      </div>
    </section>
  );
}
