import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './NavBar.css'



export default function NavBar({active, setActive, goToHome, goToAbout, goToServices, goToContact, goToGallery}) {

    const [toggle, setToggle] = useState(false);
    const [windowWidt, setWindowWidth] = useState(window.innerWidth)





const handleResize = () => {
    setWindowWidth(window.innerWidth);
    handleToggle()
}

const handleToggle = ()=> {
    if(window.innerWidth>1000){
          setToggle(true)
             }
        else setToggle(false)
}

useEffect(() => {
    setToggle(true)
    window.addEventListener('resize', handleResize)

    return ()=>{
        window.removeEventListener('resize', handleResize)
        
    }
},[])


    return (
        <nav>

        <div className='burger-menu' >
        {!toggle &&  <FontAwesomeIcon icon={faBars} onClick={()=>setToggle(true)}/>}
            
            {toggle && <FontAwesomeIcon icon={faTimes} onClick={()=>setToggle(false)}/>}
            
        </div>

                {toggle  &&
                                    <ul style={toggle===true ? {animationFillMode:'forwards'} : {animationFillMode:'both'}}>
                                        <li onClick={goToHome}><Link>Home</Link></li>
                                        <li onClick={goToAbout}><Link>About</Link></li>
                                        <li onClick={goToServices}><Link>Services</Link></li>
                                        <li onClick={goToGallery}><Link >Gallery</Link></li>
                                        <li onClick={goToContact}><Link>Contact</Link></li>
                                    </ul>
                }
           
            
        

        </nav>
    )
}
