import React, {useState, useEffect} from 'react';
import './Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import BlockContent from '@sanity/block-content-to-react'



export default function Details({project}) {
    
    const [projectDetails, setProjectDetails] = useState(null);

    
    console.log(project)
    return (
        <div className='details'>
                    <p id='name-x'>Author: <span id='name'>{project.authorsName}</span> <span role="img" aria-label="cross" id="x">⤬</span></p>
                    <h3>{project.title}</h3>
                    <p>Date: <span id='date'>{new Date(project.publishedAt).toLocaleDateString()}</span></p>
                    <BlockContent blocks={project.body} projectId="jr0ifr78" dataset='production'/>
        </div>
    )
}
