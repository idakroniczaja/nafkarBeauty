import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import sanityClient from '../client.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import Details from './Details'

import './Gallery.css';


export default function Gallery({changeToGallery}) {
const [projects, setProjects] = useState(null);
const [details, setDetails] = useState('')



useEffect(()=>{
    sanityClient
    .fetch(`*[_type == "project"]{
        title,
        slug,
        author,
        projectType,
        mainImage{
            asset->{
                _id,
                url
            }
        },
        publishedAt,
        body,
        "authorsName":author->name,
        "authorImage":author->image
    }`)
    .then(res=>{
        setProjects(res)
    })
    .catch(console.error)
},[])


const changeToDetails = (e) =>{
    if(e.target.innerText){
        setDetails(e.target.innerText )
    }else setDetails(e.target.nextSibling.firstChild.firstChild.data)
    
    
}

const showData = () => {
    return projects.map((project, index)=>{
        return (
            < >
            {console.log(project.body)}
            <div key={index}  className="project"  onClick={(e)=>changeToDetails(e)}>
                <img  src={project.mainImage.asset.url} className="project-img" />
                <span  className="project-span">
                    <h3 >{project.title} </h3>
                </span>
                {details.includes(project.title) && <Details project={project}/>}
            </div>

            </>
        )
    })
}
    


    return (

        
        <section ref={changeToGallery} className='gallery' >
       
            <div  className='grid-container'>
                {!changeToGallery.current && <div  style={{background:"#BACACB", textAlign:"center"}}><FontAwesomeIcon icon={faSpinner} className="spinner"/> </div> || 
                showData()
                }
                
            </div>
        </section>
    

        
    )
}
