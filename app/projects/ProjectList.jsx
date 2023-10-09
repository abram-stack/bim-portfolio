import Link from 'next/link';
import projects from '../_data/projects';
import CardProject from '../components/CardProject';

export default function ProjectList() {
  // fetch data from source,
  // map through the data
  // render to the list

  return (
    <>
      {projects.map((project) => (
        <CardProject key={project.id} project={project} />
      ))}
      {projects.length === 0 && <p>No projects available</p>}
    </>
  );
}
