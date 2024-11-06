import React, {useRef} from 'react'
import "./projects.css"
import projects from './projects-listing.js'

const Projects = () => {

  return (
    <div className='projects'>
      <h1 className='title'>Projects</h1>
      <ul className='deck'>
        {projects.map((project, index) => (
            <a key={index} className='' href={project.link} target='blank' onMouseEnter={(event) =>{
                const card = event.target.closest(".card")
                const text  = card.querySelector(".project-text")
                text.style.height = "100%";
            }}
            onMouseLeave={(event) => {
                const card = event.target.closest(".card")
                const text  = card.querySelector(".project-text")
                text.style.height = "0%";
            }}>
                <li className="card">
                    <img src={project.image} alt={project.name} className='project-img'/>
                    <p className="project-text">{project.message}</p>
                </li>
            </a>
        ))}
      </ul>
    </div>
  )
}

export default Projects
