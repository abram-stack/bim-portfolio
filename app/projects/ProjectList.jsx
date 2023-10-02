import Link from 'next/link';
import projects from '../_data/projects';

export default function ProjectList() {
  // fetch data from source,
  // map through the data
  // render to the list
  return (
    <>
      {projects.map((pro) => (
        <Link key={pro.id} href={`/projects/${pro.id}`}>
          <h3>{pro.title}</h3>
        </Link>
      ))}
      {projects.length === 0 && <p>No projects available</p>}
    </>
  );
}
