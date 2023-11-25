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
import Journey from './components/Journey';
import Services from './components/Services';
import Experience from './components/Experience';

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <Journey/>
      {/* SECTION: SERVICE */}
      {/* <section className='container'> */}
        {/* <div>
          <h3 className='text-2xl subtitle mt-10 mb-8'>My journey</h3>
          <p className='description'>
            Heard of Dreamweaver? Ouff, that was decades ago. At that time, when
            i designed my first ever website in junior high. Not the perfect
            rocket launch, I&apos;d say. However, some years later, the older
            version of me encouraged himself and found the passion and fun to
            try to conquer the world beyond knowledge.
          </p>
          <p className='description'>
            Growing plants takes time. Good harvest needs good care and
            dedication and it creates its own satisfaction and that is what
            gives me my unique perpective as a frontend web developer. As I
            continued my journey at Frankfurt University of Applied Sciences in
            Germany, where I studied Computer Science, I worked and researched
            of the
            <span className='font-bold text-teal-600'>
              {' '}
              sustainability
            </span>{' '}
            aspects of and possibilites for websites.
          </p>
          <p className='description'>
            Trial and error is no taboo. I learn and re-learn many times until I
            grasp it and have the A-ha moment that I&apos;ve been waiting for.
          </p>
        </div> */}

        {/* CARDS */}
        {/* <div className='mx-8 lg:flex gap-10'>
          <div className='card'>
            <Image src={design} width={100} height={100} className='mx-auto' />
            <h3 className='card--title'>HTML, CSS</h3>
            <p>Micro Components, Landing Page</p>
            <p className='text-gray-800 py-1'>Adobe XD</p>
            <p className='text-gray-800 py-1'>Figma</p>
            <p className='text-gray-800 py-1'>Figma</p>
          </div>
          
          <div className='card'>
            <Image src={code} width={100} height={100} className='mx-auto' />
            <h3 className='card--title'>JavaScript</h3>
            <p>Interactivity and functionality of website</p>
            <p className='text-gray-800 py-1'>Adobe XD</p>
            <p className='text-gray-800 py-1'>Figma</p>
          </div>
          
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
        </div> */}
      {/* </section> */}

      <Services/>
      <Experience/>  

      {/* SECTION: Projects showcase*/}
      <section className='container '>
        <div>
          <h3 className='subtitle my-5'>Projects</h3>
          <p className='text-md py-2 leading-7 text-gray-800'>
            These are some of the projects I have built along my journey as a
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
