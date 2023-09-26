import Image from 'next/image';
import { RiMoonFoggyFill } from 'react-icons/ri';
import { BiLogoTwitter, BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi';

import bims from '../public/avatar.jpg';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import proj1 from '../public/web1.png';
import proj2 from '../public/web2.png';
import proj3 from '../public/web3.png';
import proj4 from '../public/web4.png';
import proj5 from '../public/web5.png';
import proj6 from '../public/web6.png';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <section className='container'>
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2font-medium text-light mb-5 md:text-6xl max-w-xl mx-auto'>
            Bramantyo Bimonugroho
          </h2>
          <h3
            className='text-xl font-rubik text-[#D2C193] py-2 md:max-w-xl mx-auto mb-3'
            style={{
              textShadow: '-2px 4px #5F1C1C',
              webkitTextStrokeWidth: '1px',
              webkitTextStrokeColor: '#011423',
            }}
          >
            Frontend Explorer
          </h3>
          <p className='text-md py-5 leading-6 md:text-lg max-w-xl mx-auto'>
            Just scratched the surface of the frontend world, amazed and heading
            forward for discovering the rest of the web dev world.
          </p>
        </div>
        <div className='text-2xl flex justify-center text-gray-800 gap-5'>
          <a href='#' className='bg-lightPink rounded-md py-1 px-2 '>
            <BiLogoTwitter />
          </a>
          <a
            href='#'
            className='bg-lightPink rounded-md py-1 px-2 text-[#011423]'
          >
            <BiLogoLinkedin />
          </a>
          <a
            href='#'
            className='bg-lightPink rounded-md py-1 px-2 text-[#011423]'
          >
            <BiLogoGithub />
          </a>
        </div>
        <div className='relative border border-teal-500  w-80 h-80 mx-auto mt-20 rounded-full overflow-hidden'>
          <Image src={bims} layout='fill' objectFit='cover' />
        </div>
      </section>

      {/* SECTION: SERVICE */}
      <section>
        <div>
          <h3
            className='text-2xl font-rubik  py-1 text-[#D2C193]'
            style={{
              textShadow: '-2px 4px #5F1C1C',
              webkitTextStrokeWidth: '1px',
              webkitTextStrokeColor: '#011423',
            }}
          >
            What I do
          </h3>
          <p className='text-md py-2 leading-7 text-gray-800'>
            Since the beginning of my journey as a freelancer ive done some of
            work. I like to think of the{' '}
            <span className='text-teal-500'>sustainability</span>.
          </p>
          <p className='text-md py-2 leading-7 text-gray-800'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            explicabo et amet. Molestias beatae odio distinctio dolore? Laborum
            molestias non magnam consequatur magni blanditiis ad? I like to
            think of the <span className='text-teal-500'>sustainability</span>.
          </p>
          <p className='text-md py-2 leading-7 text-gray-800'>
            Since the beginning of my journey as a freelancer ive done some of
            work. I like to think of the{' '}
            <span className='text-teal-500'>sustainability</span>.
          </p>
        </div>

        {/* CARDS */}
        <div className='lg:flex gap-10'>
          {/* card 1 */}
          <div className=' text-center shadow-lg p-10 rounded-xl my-10'>
            <Image src={design} width={100} height={100} className=' mx-auto' />
            <h3 className=' text-lg font-medium pt-8 pb-2'>Beautiful Design</h3>
            <p>Creating elegant designs suited for your design needs.</p>
            <h4 className='py-4 text-teal-600'>Tools I use</h4>
            <p className='text-gray-800 py-1'>Adobe XD</p>
            <p className='text-gray-800 py-1'>Figma</p>
          </div>
          {/* card 2 */}
          <div className=' text-center shadow-lg p-10 rounded-xl my-10'>
            <Image src={code} width={100} height={100} className='mx-auto' />
            <h3 className='border border-orange-400 text-lg font-medium pt-8 pb-2'>
              Coding
            </h3>
            <p>Creating elegant designs suited for your design needs.</p>
            <h4 className='py-4 text-teal-600'>Tools I use</h4>
            <p className='text-gray-800 py-1'>Adobe XD</p>
            <p className='text-gray-800 py-1'>Figma</p>
          </div>
          {/* card 3 */}
          <div className=' text-center shadow-lg p-10 rounded-xl my-10'>
            <Image
              src={consulting}
              width={100}
              height={100}
              className='mx-auto'
            />
            <h3 className='border border-orange-400 text-lg font-medium pt-8 pb-2'>
              Consulting
            </h3>
            <p>Creating elegant designs suited for your design needs.</p>
            <h4 className='py-4 text-teal-600'>Tools I use</h4>
            <p className='text-gray-800 py-1'>Adobe XD</p>
            <p className='text-gray-800 py-1'>Figma</p>
          </div>
        </div>
      </section>

      {/* SECTION: Projects */}
      <section>
        <div>
          <h3 className='text-3xl '>Projects</h3>
          <p className='text-md py-2 leading-7 text-gray-800'>
            This are some of projects i built along the way of my journey as a
            <span className='text-teal-500'>frontend explorer</span>.
          </p>
          <p className='text-md py-2 leading-7 text-gray-800'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            explicabo et amet. Molestias beatae odio distinctio dolore? Laborum
            molestias non magnam consequatur magni blanditiis ad? I like to
            think of the <span className='text-teal-500'>sustainability</span>.
          </p>
        </div>

        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          <div className='basis-1/3 flex-1 max-w-lg mx-auto border border-red-500'>
            <Image
              className='rounded-lg object-cover'
              width={'100%'}
              height={'100%'}
              layout='responsive'
              src={proj1}
            />
          </div>
          <div className='basis-1/3 flex-1 border border-red-500 max-w-lg mx-auto'>
            <Image
              className='rounded-lg object-cover'
              width={'100%'}
              height={'100%'}
              layout='responsive'
              src={proj2}
            />
          </div>
          <div className='basis-1/3 flex-1 max-w-lg mx-auto'>
            <Image
              className='rounded-lg object-cover'
              width={'100%'}
              height={'100%'}
              layout='responsive'
              src={proj3}
            />
          </div>
          <div className='basis-1/3 flex-1 max-w-lg mx-auto'>
            <Image
              className='rounded-lg object-cover'
              width={'100%'}
              height={'100%'}
              layout='responsive'
              src={proj4}
            />
          </div>
          <div className='basis-1/3 flex-1 max-w-lg mx-auto'>
            <Image
              className='rounded-lg object-cover'
              width={'100%'}
              height={'100%'}
              layout='responsive'
              src={proj5}
            />
          </div>
          <div className='basis-1/3 flex-1 max-w-lg mx-auto'>
            <Image
              className='rounded-lg object-cover'
              width={'100%'}
              height={'100%'}
              layout='responsive'
              src={proj6}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
