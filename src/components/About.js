import React from 'react';

import './About.css'

export default function About({changeToAbout}) {
    return (

        <section ref={changeToAbout} className='content-wrapper about'>
       
        <p className='intro'>
            <span>THE MOMENTS YOU DESERVE ONLY FOR YOU.</span> Escape from everyday busy reality and treat yourselfe with intensive care. 
            Beauty and health go hand in hand. The combination of quality cosmetics and state-of-the-art aesthetic technologies creates an irresistible combination that leaves the skin soft, supple and nourished.
        </p>

        <div className='images'>
                <img src='/images/toa-heftiba-hBLf2nvp-Yc-unsplash.jpg' alt='masage' width='50%'/>
                <img src='/images/juja-han-Z8-6EI2tYtw-unsplash.jpg' alt='pedicure' width='50%'/>
                <img src='/images/pexels-helena-ije-2867899.jpg' alt='hair' width='50%'/>
                <img src='/images/tommy-van-kessel-_tnkR2gu3kw-unsplash.jpg' alt='brows and lashes' width='50%'/>
            </div> 

            <div className='owner'>
                <p id='owner-intro'>Our experience and quality have distinguished us for more than 10 years 
                            in aesthetic needs from head to toe.Our European qualification, training, and our dedication to 
                            providing the best service to our clients are what makes us one of the most desired
                            estheticians/technician/artists in Miami.
                </p>
                <div className='owner-photo'>
                    <img src='/images/owner.jpeg' alt='owner photo'/>
                    <p id='name-photo'>Nafsika K</p>
                </div>
            </div>
        </section>

    )
}
