import React from 'react'

const DisplayProjects = (props) =>{

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
      <div className="project-item">
          <img src= {props.img} alt={props.alt} width={props.width} height={props.height} />
          <h3 className="project-name">{props.name}</h3>
          <p className="project-tech">{props.technologies}</p>
          <div className="desc-div">
            <p className="project-desc">{props.description}</p>
          </div>
          <button onClick={() => openInNewTab(`${props.live}`)} className="live-btn" >Live</button>
          <button onClick={() => openInNewTab(`${props.github}`)} className="github-btn">Github</button>
      </div>
     
  )
}
export default DisplayProjects;