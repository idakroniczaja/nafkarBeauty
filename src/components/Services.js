import React, {useState, useEffect, useRef} from 'react';


import './Services.css'

import ServiceBackend from './serviceBackend/ServiceBackend'

export default function Services({changeToServices}) {
const [showing, setShowing] = useState('')
const [clicked, setClicked] = useState(false);

const services = useRef(null);



    const showDiv = async (e) => {
        e.preventDefault();
setShowing(e.target.innerText);
setClicked(!clicked)
}







    return (

            <div ref={changeToServices} className='content-wrapper services'>

                <h2>Services</h2>
         
                <div className='button-list' >

                    

                <button   id="nail-care" onClick={(e)=>showDiv(e)}>
                
                <div className="button-image" id='nail-image'>
                        <img  src='/images/service/nails.jpg'/>
                     </div>
                     Nail Care
                </button>

                 {(showing === "Nail Care" && clicked) &&
            <ServiceBackend services={services}/>
            }
                
                <button  id="paraffin" onClick={(e)=>showDiv(e)}>
                <div className="button-image" id='paraffin-image'>
                        <img  src='/images/service/paraffin.jpg'/>
                </div>
                Paraffin
                </button>
                {(showing === "Paraffin" && clicked) &&
                <>
            <ServiceBackend services={services}/>
                </>
            }

            

                <button id="massage" onClick={(e)=>showDiv(e)}>
                <div className="button-image" id='massage-image'>
                            <img  src='/images/service/masage.jpg'/>
                    </div>
                
                Massage
                </button>
                {(showing === "Massage"&& clicked) &&
                <>
            <ServiceBackend services={services}/>
                </>
            }

                <button id="makeup" onClick={(e)=>showDiv(e)} >
                    <div className="button-image" id="makeup-image">
                        <img  src='/images/service/makeup.jpg'/>
                </div>
                
                Makeup
                </button>
                {(showing === "Makeup" && clicked) &&
                <>
            <ServiceBackend services={services}/>
                </>
            }

                <button id="skincare" onClick={(e)=>showDiv(e)}>
                <div className="button-image" id="skincare-image">
                        <img  src='/images/service/skincare.png'/>
                </div>
                
                Skincare
                </button>
                {(showing === "Skincare" && clicked) &&
                <>
            <ServiceBackend services={services}/>
                </>
            }

                <button id="eyelashes" onClick={(e)=>showDiv(e)}>
                 <div className="button-image" id="eyelashes-image">
                        <img  src='/images/service/browslashes.jpg'/>
                </div>
            
                Eyelashes and Brows
                </button>
                
                {(showing === "Eyelashes and Brows" && clicked) &&
                <>
            <ServiceBackend services={services}/>
                </>
            }
    
     

                <button id="permanent-makeup" onClick={(e)=>showDiv(e)}>
               <div className="button-image" id="permanent-makeup-image">
                        <img  src='/images/service/permanentmakeup.jpg'/>
                </div>
                
                Permanent Makeup
                </button>
                {(showing === "Permanent Makeup" && clicked) &&
                <>
            <ServiceBackend services={services}/>
                </>
            }

                <button id="waxing" onClick={(e)=>showDiv(e)}>
                <div className="button-image" id="waxing-image">
                        <img  src='/images/service/waxing.jpg'/>
                </div>
                
                Waxing
                </button>
                {(showing === "Waxing" && clicked) &&
                <>
            <ServiceBackend services={services}/>
                </>
            }

                <button id="threading" onClick={(e)=>showDiv(e)}>
                <div className="button-image" id="threading-image">
                        <img  src='/images/service/threading.jpg'/>
                </div>
                
                Threading
                </button>
                {(showing === "Threading" && clicked) &&
                <>
            <ServiceBackend services={services}/>
                </>
            }

                <button id="hair" onClick={(e)=>showDiv(e)}>
               <div className="button-image" id="hair-image">
                        <img  src='/images/service/hair.jpg'/>
                </div>
                Hair Care
                </button>

                {(showing === "Hair Care" && clicked ) &&
            <ServiceBackend services={services}/>
            }
                </div>
            </div>

    )
}
