// fetch single object based on the params
// static generation can be used for detail. Pre render ahead of times
// after that; render to projectDetails

import { notFound } from 'next/navigation';
import projects from '../../_data/projects';
import Image from 'next/image';
import Link from 'next/link';

// create a static "route" based on param before hand,
export function generateStaticParams() {
  // apparantly id should be string
  return projects.map((pro) => ({
    params: { id: pro.id.toString() },
  }));
}

function getProject(id) {
  const project = projects.filter((project) => {
    return project.id == id;
  });
  return project;
}

export default function ProjectDetails({ params }) {
  const project = getProject(params.id)[0];

  return (
    <>
      {!project && notFound()}
      <section className='container border border-red-300'>
        <div className='w-full max-w-3xl h-[32rem] max-h-96 relative mx-auto border border-blue-400'>
          <Image src={project.imgSrc} layout='fill' objectFit='cover' />
        </div>
        <h2 className='project-title mt-8 mb-4'>{project.title}</h2>
        <p className='project-description mb-10'>{project.description}</p>
        <h3 className='font-bold mb-4'>Tech Used</h3>
        <div className='tech-wrapper gap-4'>
          {project.tech.map((tech) => (
            <p key={tech} className='tech'>
              {tech}
            </p>
          ))}
        </div>

        <div className='flex flex-col gap-3'>
          <h3 className='font-bold mt-6 mb-4'>Links</h3>
          {!project.website ? (
            <Link href={'/'}>
              <button className='btn w-26'>Github</button>
            </Link>
          ) : (
            <>
              <Link href={project.website}>
                <button className='btn'>Demo Live</button>
              </Link>
              <Link href={'/'}>
                <button className='btn'>Github</button>
              </Link>
            </>
          )}
        </div>
      </section>
    </>
  );
}
