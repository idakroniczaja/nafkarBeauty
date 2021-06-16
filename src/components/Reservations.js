import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


import './Reservations.css'

export default function Reservations() {
    return (
        <div>
            <a href='tel:7863958506'><FontAwesomeIcon icon={faPhone} className='icon'/></a> 
            <div className='reservations'>
                <p>RESERVATIONS - (786) 395-8506</p>
            </div>
        </div>
        
    )
}
