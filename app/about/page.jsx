import { LiaLinkedinIn, LiaUniversitySolid } from 'react-icons/lia';
import { TfiHtml5, TfiCss3 } from 'react-icons/tfi';
import { FaReact, FaNodeJs, FaTools } from 'react-icons/fa';
import { SiJavascript, SiFirebase } from 'react-icons/si';
import { TbBrandNextjs, TbSql } from 'react-icons/tb';
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
          I appreciate you making it this far. So... <br />
          Welcome to Console Botanesia!
        </p>
        <p className='description mb-2'>
          When I started my journey, I never considered myself clever enough to
          code. Starting my whole new life in my early 20&apos;s, I left my
          beloved country Indonesia in pursuit of my childhood dream:
          <span className='font-bold text-teal-600'> going abroad</span>.
          Continuing my interest in computer science gave me a second chance to
          re-learn everything about
          <span className='font-bold text-teal-600'> the computer world</span>,
          and of course about life.
        </p>

        <p className='description mb-2'>
          You might be wondering what Console Botanesia means? Inspired by one
          of the tribes of elders in Indonesia, my motivation for my career and
          journey as a human being is to give back to the nature and my
          community.
        </p>

        <p className='description mb-2'>
          And at the same time, programmers always have to stay in touch with
          our most beloved debugger, you know what, console.log! There you go.
          Two things that should never be taken for granted.
        </p>

        <div className='character'>
          {/* CHAR-IMG */}
          <div className='char '>
            <div className='py-1'>
              <p className='subtitle-small text-center'>Bramantyo</p>
            </div>
            <div className='char-img--container relative'>
              <Image src={charImg} layout='fill' objectFit='cover' />
            </div>
            <div className='exp-level flex gap-1 p-1'>
              <div className='border border-primary rounded-full p-1'>
                <span className='bg-yellow-400 rounded-full text-center font-bold'>
                  XP
                </span>
              </div>
              <div className='border border-primary rounded-2xl p-1 w-full'>
                <span className='level-bar'>Lvl: 30</span>
              </div>
            </div>
          </div>

          {/* ACADEMIC */}
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

          {/* ABILITY */}
          <div className='skills flex flex-col lg:w-1/2'>
            <h3 className='py-5 text-center font-grotesk '>Skills</h3>
            <div className='skills-container '>
              <div className='skills-element  text-orange-400'>
                <TfiHtml5 className='' />
              </div>
              <div className='skills-element text-blue-500'>
                <TfiCss3 />
              </div>
              <div className='skills-element text-yellow-300 '>
                <SiJavascript />
              </div>
              <div className='skills-element text-blue-500'>
                <FaReact />
              </div>
              <div className='skills-element text-orange-400'>
                <SiFirebase />
              </div>
              <div className='skills-element '>
                <TbSql />
              </div>
              <div className='skills-element text-black'>
                <TbBrandNextjs />
              </div>
            </div>
          </div>
        </div>

        <p className='description mb-2'>
          Awesome, folks! Reach out to me on my LinkedIn
        </p>
        <LiaLinkedinIn />
      </section>
    </>
  );
}
