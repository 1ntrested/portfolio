import React from 'react'
import "./ProjectCard.css";
function ProjectCard(props) {
  const movetogithub = () => {
    // window.location.href=props.link;
    window.open(props.link, '_blank');
  }
  const str = "</> Source Code"
  return (
      <div className='project-card'>
        <img className="card-img" src={props.src}></img>
        <div className='project-card-heading'>
          <p style={{marginTop:'0.5rem'}}>{props.heading}</p>
          <button className='buttons' onClick={movetogithub}>{str}</button>
        </div>
      </div>
  )
}

export default ProjectCard