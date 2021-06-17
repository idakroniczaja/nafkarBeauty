import React, {useState} from 'react';

import './Content.css';

import Home from './Home'
import About from './About'
import Services from './Services'
import Gallery from './Gallery'
import Contact from './Contact'



export default function Content({active, changeToHome, changeToAbout, changeToServices, changeToContact, changeToGallery}) {




    return (
 
      
        <div className='container content'>

        <Home changeToHome={changeToHome}/>
        <About changeToAbout={changeToAbout}/>
        <Services changeToServices={changeToServices} />
        {active && <Gallery changeToGallery={changeToGallery}/>}
        
        <Contact changeToContact={changeToContact}/>

        </div>
      
    )
}
