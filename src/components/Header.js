import React, {useState} from 'react';

import './Header.css'

import Logo from './Logo';
import NavBar from './NavBar';
import Reservations from './Reservations';

export default function Header({active, setActive, goToHome, goToAbout, goToServices, goToContact, goToGallery}) {

const [header,setHeader] = useState(false)

const changeBackground = () =>{
    if(window.scrollY>=240){
        setHeader(true)
    }else{
        setHeader(false)
    }
}


window.addEventListener('scroll', changeBackground)

    return (
        <div  className='container'>
            <div className={header ? 'header active' : 'header'}>
            <Logo/>
            <NavBar active={active} setActive={setActive} goToHome={goToHome} goToAbout={goToAbout} goToServices={goToServices} goToContact={goToContact} goToGallery={goToGallery}/>
            <Reservations/>
            </div>
        </div>
    )
}
