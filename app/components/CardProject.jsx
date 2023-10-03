import Image from 'next/image';

export default function CardProject({ project }) {
  return (
    <>
      <div className='card--project flex flex-col justify-between'>
        <div className='rounded-lg border border-blue-400 self-center h-40'>
          <Image
            className='object-cover overflow-hidden'
            width={200}
            height={150}
            // width={'100%'}
            // height={'100%'}
            src={project.imgSrc}
          />
        </div>
        <div className='border border-red-400'>
          <p>{project.title}</p>
          <p>{project.highlight}</p>
        </div>
      </div>
    </>
  );
}
