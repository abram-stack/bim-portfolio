// fetch single object based on the params
// static generation can be used for detail. Pre render ahead of times
// after that; render to projectDetails

import { notFound } from 'next/navigation';
import projects from '../../_data/projects';

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
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </>
  );
}
