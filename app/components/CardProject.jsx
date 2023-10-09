import Image from 'next/image';
import Link from 'next/link';

export default function CardProject({ project }) {
  return (
    <>
      <div className='card--project '>
        <div className='card--img self-center w-full relative'>
          <Image
            className='object-cover rounded-lg overflow-hidden'
            // width={200}
            // height={150}
            // width={'100%'}
            // height={'100%'}
            layout='fill'
            src={project.imgSrc}
          />
        </div>
        <div className='card--content '>
          <h2 className='project-title'>{project.title}</h2>
          <p className='project-highlight'>{project.highlight}</p>

          <h3 className='font-bold'>Tech</h3>
          <div className='tech-wrapper '>
            {project.tech.map((tech) => (
              <p key={tech} className='tech'>
                {tech}
              </p>
            ))}
          </div>

          <Link href={`/projects/${project.id}`}>
            <button className='px-2 py-1 bg-light border border-primary rounded-md font-bold'>
              Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
