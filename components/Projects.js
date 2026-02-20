'use client'
import PROJECTS from '../data/projects'

const Project = ({ project }) => {
  const { title, description, link, linkText, image } = project
  const src = image || `https://via.placeholder.com/200x120?text=${encodeURIComponent(title)}`

  return (
    <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
      <h3>{title}</h3>
      <img src={src} alt={title} style={{ width: 200, height: 120 }} />
      <p>{description}</p>
      <a href={link}>{linkText}</a>
    </div>
  )
}

export default function Projects() {
  return (
    <div>
      <h2>Highlighted projects</h2>
      <div>
        {PROJECTS.map(PROJECT => (
          <Project key={PROJECT.id} project={PROJECT} />
        ))}
      </div>
    </div>
  )
}
