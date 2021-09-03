import React from 'react';
import PROJECTS from '../data/projects';

// refactored to be stateless functional component

const Project = props => {
  const { title, description, link, linkText, image } = props.project;

  return (
    <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
      <h3>{title}</h3>
      <img src={image} alt='profile' style={{ width: 200, height: 120 }} />
      <p>{description}</p>
      <a href={link}>{linkText}</a>
    </div>
  )
}

// don't need render() or Component class, not using this.stuff
// don't need return() because it has nothing else but return
const Projects = () => (
  <div>
    <h2>Highlighted projects</h2>
    <div>
      {
        PROJECTS.map(PROJECT => (
          <Project key={PROJECT.id} project={PROJECT} />
        ))
      }
    </div>
  </div>
)

export default Projects;
