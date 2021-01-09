import React from 'react'
import '../App.css'
import ghIcon from '../assets/logo.svg'

const ProjectCard = ({ title, body, image, additionalStyle, gitHub, deployment }) => {

    const handleAlert = ( x ) => {
        !x && alert('Currently unavailable for this application, sorry.')
    }

    return(
        <div className={'project-card ' + additionalStyle}>
            <img alt="title" src={ image } />
            <div className="project-text">
                <div className="gh-demo-wrapper">
                    <a target='_new' onClick={ () => handleAlert( gitHub ) } href={ gitHub ? gitHub : null}><img className="github-icon" alt="github link" src={ ghIcon } /></a>
                    <a target='_new' onClick={ () => handleAlert( deployment ) } href={ deployment ? deployment : null}><p className="try-it">TRY IT</p></a>
                </div>
                <div className="text">
                    <h1 className="project-title">{ title }</h1>
                    <p>{ body }</p>
                </div>
            </div>
        </div>        
    )
}

export default ProjectCard