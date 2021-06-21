import React, {useState, useEffect} from 'react';
import './Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import BlockContent from '@sanity/block-content-to-react'
import {useTransition, animated} from 'react-spring'


export default function Details({project, toggle, setToggle}) {
    
    const [projectDetails, setProjectDetails] = useState(null);


const transition = useTransition(toggle,(p)=>p,{
    from: {opacity: 0, transform: 'translateY(-50%)'},
    enter: {opacity: 1, transform: 'translateY(0px)'},
    leave: { opacity: 0, transform: 'translateY(+150%)'},
    delay:2000,
});


    
    return (
        <>
        {transition.map(({ item, props, key })=>{
        return item && 
      <animated.div className='details' style={props}>
                    <p id='name-x'>Author: <span id='name'>{project.authorsName}</span> <span role="img" aria-label="cross" id="x">⤬</span></p>
                    <h3>{project.title}</h3>
                    <p>Date: <span id='date'>{new Date(project.publishedAt).toLocaleDateString()}</span></p>
                    <BlockContent blocks={project.body} projectId="jr0ifr78" dataset='production'/>
        </animated.div>
          
    })}       
    
</>

    )
}
