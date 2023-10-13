import { LiaUniversitySolid } from 'react-icons/lia';

// image
import Image from 'next/image';
import charImg from '../../public/char.webp';
import me from '../../public/bramPortrait.jpg';

export default function About() {
  return (
    <>
      <section className='container min-h-[90vh]'>
        <div className='profile pt-20 flex flex-col  gap-4 lg:justify-between lg:flex-row '>
          <div className='profile-content flex flex-col justify-evenly text-center lg:text-left'>
            <p className='text-lg'>
              Hey, my name is <br />
              <span className='subtitle'>Bram</span>
            </p>
            <p className='text-lg mt-5'>I&apos;m a </p>
            <h2 className='greeting'>
              <span className='text-[#abc7dd] logo'>Frontend </span>
              <span className='text-[#abc7dd] logo'>Developer</span>
            </h2>
            <p className='text-lg'>based in Frankfurt, Germany</p>
          </div>
          <div className='profile-img relative border border-teal-500  w-80 h-80 self-center rounded-full overflow-hidden'>
            <Image src={me} layout='fill' objectFit='cover' />
          </div>
        </div>
      </section>

      <section className='container mt-10 lg:mt-0'>
        <h2 className='subtitle  mb-10'>My Story</h2>
        <p className='description mb-2'>
          I see, you are going this far. Well... <br />
          Welcome to Console Botanesia
        </p>
        <p className='description mb-2'>
          As I started my journey, I never thought of my self clever enough to
          code. Started a whole new life in my early 20&apos;s as i left my
          beloved country Indonesia, tried to pursue my childhood dreams,
          <span className='font-bold text-teal-600'> going abroad</span>. As i
          came to Germany to pursue my dream, i gave myself a second chance to
          continue re-learn everything about life and of course the
          <span className='font-bold text-teal-600'> computer world</span>.
        </p>

        <p className='description mb-2'>
          Inspired by the one of the indonesian elder tribe, my motivation
          toward my career and journey as human being is to give back to the
          nature and community.
        </p>

        <div className='character border border-red-400 '>
          {/* img and exp */}
          <div className='char border border-orange-400 lg:w-3/12'>
            <div className='char-img--container'>
              {/* <Image
                src={charImg}

              /> */}
            </div>
            <div className='exp-level  border border-black'>
              <span className='w-30%  bg-cyan-400'>level 30</span>
            </div>
          </div>

          {/* academic */}
          <div className='academic lg:w-3/12'>
            <div className='card--academic'>
              <div className='academic--logo '>
                <p className=' text-4xl text-center w-8 h-8 mx-auto'>🎓</p>
              </div>
              <div className='pt-5 px-1'>
                <h3 className='text-lg font-medium'>
                  Frankfurt University of Applied Sciences
                </h3>
                <p className='text-gray-800 py-1'>B. Sc Computer Science</p>
                <p className='text-gray-800 py-1'>B. Sc Computer Science</p>
              </div>
            </div>

            <div className='card--academic'>
              <div className='academic--logo'>
                <p className=' text-4xl text-center w-8 h-8 mx-auto'>💻</p>
              </div>
              <div className='pt-5 px-1'>
                <h3 className='text-lg font-medium'>Frontend Courses</h3>
                <p className='text-gray-800 py-1'>Scrimba</p>
                <p className='text-gray-800 py-1'>Free Code Camp</p>
              </div>
            </div>
          </div>

          {/* SKills */}
          <div className='skills border border-blue-400 lg:w-1/2'>
            <h3>Skills</h3>
            <div className='skills-container'>
              <p>html</p>
              <p>css</p>
              <p>js</p>
              <p>react</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
