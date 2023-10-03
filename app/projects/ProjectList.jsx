import Link from 'next/link';
import projects from '../_data/projects';
import CardProject from '../components/CardProject';

export default function ProjectList() {
  // fetch data from source,
  // map through the data
  // render to the list

  // TODO: Every project has the project card
  return (
    <>
      {projects.map((project) => (
        <Link key={project.id} href={`/projects/${project.id}`}>
          <CardProject project={project} />
        </Link>
      ))}
      {projects.length === 0 && <p>No projects available</p>}
    </>
  );
}
