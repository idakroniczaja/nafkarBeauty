import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import sanityClient from '../client.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import Details from './Details'

import './Gallery.css';


export default function Gallery({changeToGallery}) {
const [projects, setProjects] = useState(null);
const [details, setDetails] = useState(false)

const changeToDetails = useRef(null)

console.log(changeToDetails)


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


const showData = () => {
return projects.map((project, index)=>{
        return (
            <>
            <div key={index}  className="project" onClick={()=>setDetails(true)}>
                <img  src={project.mainImage.asset.url} className="project-img"/>
                <span  className="project-span">
                    <h3 >{project.title}</h3>
                    {/* <p>Author:{project.authorsName}</p>
                    <p>{new Date(project.publishedAt).toLocaleDateString()}</p> */}
                </span>
            </div>
                {details && <Details changeToDetails={changeToDetails}/>}

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
