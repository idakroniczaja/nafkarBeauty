import React from 'react';
import './Clock.css'

export default function Clock({secondRatio, minuteRatio, hourRatio}) {
    return (


        <div className='clock'>
            <div className='hand hour' style={{transform:`rotate(${hourRatio * 360}deg)`}}></div>
            <div className='hand minute' style={{transform:`rotate(${minuteRatio * 360}deg)`}}></div>  
            <div className='hand second' style={{transform:`rotate(${secondRatio * 360}deg)`}}></div>
            <div className="number number1">1</div>
            <div className="number number2">2</div>
            <div className="number number3">3</div>
            <div className="number number4">4</div>
            <div className="number number5">5</div>
            <div className="number number6">6</div>
            <div className="number number7">7</div>
            <div className="number number8">8</div>
            <div className="number number9">9</div>
            <div className="number number10">10</div>
            <div className="number number11">11</div>
            <div className="number number12">12</div>
        </div> 

    )
}
