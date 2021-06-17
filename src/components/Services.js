import React, {useState, useEffect, useRef} from 'react';


import './Services.css'

import ServiceBackend from './serviceBackend/ServiceBackend'

export default function Services({changeToServices}) {
const [showing, setShowing] = useState('')
const [clicked, setClicked] = useState(false);

const services = useRef(null);

const button1 = useRef(null)
console.log(button1.current)




const showDiv = async (e) => {
await setShowing(e.target.innerText);
}



    return (

            <div ref={changeToServices} className='content-wrapper services'>

                <h2>Services</h2>
         
                <div className='button-list' >
                <button  ref={button1} onClick={(e)=>showDiv(e)}>Nail Care</button>
            {(showing === "Nail Care") &&
            <ServiceBackend services={services}/>
            }
                <button  onClick={(e)=>showDiv(e)}>Paraffin</button>
                {(showing === "Paraffin") &&
                <>
            <ServiceBackend services={services}/>
                </>
            }
                <button onClick={(e)=>showDiv(e)}>Massage</button>
                {(showing === "Massage") &&
                <>
            <ServiceBackend services={services}/>
                </>
            }
                <button onClick={(e)=>showDiv(e)}>Makeup</button>
                {(showing === "Makeup") &&
                <>
            <ServiceBackend services={services}/>
                </>
            }
                <button onClick={(e)=>showDiv(e)}>Skincare</button>
                {(showing === "Skincare") &&
                <>
            <ServiceBackend services={services}/>
                </>
            }
                <button onClick={(e)=>showDiv(e)}>Eyelashes and Brows</button>
                {(showing === "Eyelashes and Brows") &&
                <>
            <ServiceBackend services={services}/>
                </>
            }
                <button onClick={(e)=>showDiv(e)}>Permanent Makeup</button>
                {(showing === "Permanent Makeup") &&
                <>
            <ServiceBackend services={services}/>
                </>
            }
                <button onClick={(e)=>showDiv(e)}>Waxing</button>
                {(showing === "Waxing") &&
                <>
            <ServiceBackend services={services}/>
                </>
            }
                <button onClick={(e)=>showDiv(e)}>Threading</button>
                {(showing === "Threading") &&
                <>
            <ServiceBackend services={services}/>
                </>
            }
                <button onClick={(e)=>showDiv(e)}>Hair Care</button>
                {(showing === "Hair Care" ) &&
            <ServiceBackend services={services}/>
            }
                </div>
            </div>

    )
}
