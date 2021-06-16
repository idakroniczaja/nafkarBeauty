import React from 'react';

import './Home.css'

export default function Home({changeToHome}) {
 
    return (
        <section ref={changeToHome} className='content-wrapper home'>
            <h1>Your best <br/><span>beauty ritual</span></h1>
        </section>
    )
}
