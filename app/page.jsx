import Image from 'next/image';

import Link from 'next/link';

import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import movielistProj from '../public/movielist-proj.png';
import shoplistProj from '../public/shoplist-proj.png';
import colorpaletteProj from '../public/colorpalette-proj.png';
import spaceProj from '../public/space-proj.png';
import pokeProj from '../public/poke-proj.png';
import landingProj from '../public/landing-proj.png';

// Components
import Hero from './components/Hero';
import projects from './_data/projects';
import ProjectList from './projects/ProjectList';

export default function Home() {
  return (
    <main className=''>
      <Hero />
      {/* SECTION: SERVICE */}
      <section className='container'>
        <div>
          <h3 className='text-2xl subtitle mt-10 mb-8'>My journey</h3>
          <p className='description'>
            Heard of Dreamweaver? Ouf that was somewhere decades ago. At that
            time, where i designed my first ever website at my junior high. Not
            the perfect rocket launch i&apos;d say since that time. However,
            some years later, my older version of me, encourage himself and had
            found the passion, fun and tried to conquer the world where once
            beyond the knowledge.
          </p>
          <p className='description'>
            Growing plants takes time. Good harvest need good care and
            dedication and it creates its own satisfaction same way as i have my
            unique perpective in my Frontend Web Development. As i continued my
            journey in Frankfurt University Applied Science in Germany, as
            Computer Science student, i&apos;ve done work and research of the
            <span className='font-bold text-teal-600'> sustainability</span> aspects of
            the websites.
          </p>
          <p className='description'>
            Trial and errors are not taboo. Learn and re-learn many times until
            it grasps, the A-ha moment that i&apos;ve been waiting for.
          </p>
        </div>

        {/* CARDS */}
        <div className='mx-8 lg:flex gap-10'>
          {/* card 1 */}
          <div className='card'>
            <Image src={design} width={100} height={100} className='mx-auto' />
            <h3 className='card--title'>HTML, CSS</h3>
            <p>Micro Components, Landing Page</p>
            <p className='text-gray-800 py-1'>Adobe XD</p>
            <p className='text-gray-800 py-1'>Figma</p>
            <p className='text-gray-800 py-1'>Figma</p>
          </div>
          {/* card 2 */}
          <div className='card'>
            <Image src={code} width={100} height={100} className='mx-auto' />
            <h3 className='card--title'>JavaScript</h3>
            <p>Interactivity and functionality of website</p>
            <p className='text-gray-800 py-1'>Adobe XD</p>
            <p className='text-gray-800 py-1'>Figma</p>
          </div>
          {/* card 3 */}
          <div className='card'>
            <Image
              src={consulting}
              width={100}
              height={100}
              className='mx-auto'
            />
            <h3 className='card--title'>Library, Framework and Tools</h3>
            <p>Design, develop and ship!</p>
            <p className='text-gray-800 py-1'>React</p>
            <p className='text-gray-800 py-1'>NextJS</p>
            <p className='text-gray-800 py-1'>Firebase</p>
          </div>
        </div>
        {/* TODO: Section of: and many more skills to be conquered*/}
      </section>

      {/* SECTION: Projects showcase*/}
      <section className='container '>
        <div>
          <h3 className='subtitle my-5'>Projects</h3>
          <p className='text-md py-2 leading-7 text-gray-800'>
            This are some of projects i built along the way of my journey as a
            <span className='text-primary'> frontend explorer</span>.
          </p>
        </div>

        <div className=' py-10 grid md:grid-cols-2 gap-14'>
          <ProjectList />
        </div>
      </section>
    </main>
  );
}
