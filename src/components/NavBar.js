import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useTransition, animated} from 'react-spring'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './NavBar.css'



export default function NavBar({active, setActive, goToHome, goToAbout, goToServices, goToContact, goToGallery}) {

    const [toggle, setToggle] = useState(false);
    const [windowWidt, setWindowWidth] = useState(window.innerWidth)

    const transition = useTransition(toggle,(p)=>p,{
        from: {opacity: 0,  transform: 'translateY(-30px)'  },
        enter: {opacity: 1, transform: 'translateY(0px)',},
        leave: { opacity: 0, transform: 'translateY(-60px)' },
     
    });





const handleResize = () => {
    setWindowWidth(window.innerWidth);
    handleToggle()
}

const handleToggle = ()=> {
     if(window.innerWidth<1000){
                  setToggle(false)
                     }
    if(window.innerWidth>=1000){
        setToggle(true)
    }
}

useEffect(() => {
  handleResize()
    window.addEventListener('resize', handleResize)

},[window.innerWidth])


    return (
      
        <nav>

        <div className='burger-menu' >
        {toggle ?  <FontAwesomeIcon icon={faTimes} onClick={()=>setToggle(!toggle)} />
        :<FontAwesomeIcon icon={faBars} onClick={()=>setToggle(!toggle)}/> 
       
        }
           
        </div>

        
         {transition.map(({ item, props, key })=>{
             return item && <animated.ul style={props}>
                    <li onClick={goToHome}><Link>Home</Link></li>
                    <li onClick={goToAbout}><Link>About</Link></li>
                    <li onClick={goToServices}><Link>Services</Link></li>
                    <li onClick={goToGallery}><Link >Gallery</Link></li>
                    <li onClick={goToContact}><Link>Contact</Link></li>
                </animated.ul>
         })}                   
  
        </nav>
       

    )
}
