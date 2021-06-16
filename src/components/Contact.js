import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'


import './Contact.css'

import Clock from './Clock'

export default function Contact({changeToContact}) {

    const [secondRatio, setSecondRatio] = useState(0)
    const [minuteRatio, setMinuteRatio] = useState(0)
    const [hourRatio, setHourRatio] = useState(0)


const setClock = () =>{
    const currentDate = new Date;
    setSecondRatio(currentDate.getSeconds() / 60);
    setMinuteRatio((secondRatio + currentDate.getMinutes()) / 60);
    setHourRatio((minuteRatio + currentDate.getHours()+0.2) / 12)
   
}

useEffect(() => {
    setInterval(()=>{
        setClock()
    },1000)
  },[]);

    return (
 

        <section ref={changeToContact} className='content-wrapper contact'>

            <div className='working-hours'>

                <div className="working-hours-clock">
                    <Clock secondRatio={secondRatio} minuteRatio={minuteRatio} hourRatio={hourRatio}/> 

                 
                </div>
                <div className='working-hours-info'>

  {(new Date().getDay()!==0 && new Date().getDay()!==6 && new Date().getHours()>8 && new Date().getHours() < 18) ? <p>We are currently open.</p>
                        : (new Date().getDay()===6 && new Date().getHours()>9 && new Date().getHours() < 16) ? <p>We are currently open.</p>
                        : <p>Sorry, we are closed now.</p>
                        } 
                    <h3>Our working hours:</h3>
                    <ul>
                        <li>working days 9am - 6pm</li>
                        <li>Saturday 10am - 4pm</li>
                        <li>Sunday closed</li>
                    </ul>
                </div>

            </div>

            <div className='contact-info'>
                <p><a href="tel:7863958506">(786)395-8506</a></p>
                <p><a id='book-now' href='https://www.vagaro.com/nafkarbeauty/book-now'>www.vagaro.com</a></p>
            </div>


            <div className="direction">
                <h2>Where to find us?</h2>
                <div className='address'>
                    <p>400 Alton Road suite 105<br/>Miami Beach, FL 33139</p>
                    <p><a href='https://goo.gl/maps/5tgKM23w8Lb4tds78'><FontAwesomeIcon icon={faMapMarkerAlt}/>  google maps</a></p>

                    
                </div>
            </div>

        </section>
  
    )
}
