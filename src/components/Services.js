import React, {useState, useEffect, useRef} from 'react';


import './Services.css'

import ServiceBackend from './serviceBackend/ServiceBackend'

export default function Services({changeToServices}) {
const [showing, setShowing] = useState('')
const [clicked, setClicked] = useState(false);

const services = useRef(null);






const showDiv = async (e) => {
await setShowing(e.target.innerText);
setClicked(!clicked)

}



    return (

            <div ref={changeToServices} className='content-wrapper services'>

                <h2>Services</h2>
         
                <div className='button-list' >

                    

                <button   id="nail-care" onClick={(e)=>showDiv(e)}>
                Nail Care
                <div className="button-image" id='nail-image'>
                        <img  src='/images/service/nails.jpg'/>
                     </div>
                </button>

                    
           

                 {(showing === "Nail Care" && clicked) &&
            <ServiceBackend services={services}/>
            }
                
                <button  id="paraffin" onClick={(e)=>showDiv(e)}>
                Paraffin
                <div className="button-image" id='paraffin-image'>
                        <img  src='/images/service/paraffin.jpg'/>
                </div>
                </button>
                {(showing === "Paraffin"&& clicked) &&
                <>
            <ServiceBackend services={services}/>
                </>
            }

            

                <button id="massage" onClick={(e)=>showDiv(e)}>
                Massage
                <div className="button-image" id='massage-image'>
                            <img  src='/images/service/masage.jpg'/>
                    </div>
                
                </button>
                {(showing === "Massage"&& clicked) &&
                <>
            <ServiceBackend services={services}/>
                </>
            }

                <button id="makeup" onClick={(e)=>showDiv(e)} >
                Makeup
                    <div className="button-image" id="makeup-image">
                        <img  src='/images/service/makeup.jpg'/>
                </div>
                
                </button>
                {(showing === "Makeup" && clicked) &&
                <>
            <ServiceBackend services={services}/>
                </>
            }

                <button id="skincare" onClick={(e)=>showDiv(e)}>
                Skincare
                <div className="button-image" id="skincare-image">
                        <img  src='/images/service/skincare.png'/>
                </div>
                
                </button>
                {(showing === "Skincare" && clicked) &&
                <>
            <ServiceBackend services={services}/>
                </>
            }

                <button id="eyelashes" onClick={(e)=>showDiv(e)}>
                Eyelashes and Brows
                 <div className="button-image" id="eyelashes-image">
                        <img  src='/images/service/browslashes.jpg'/>
                </div>
            
                </button>
                {(showing === "Eyelashes and Brows" && clicked) &&
                <>
            <ServiceBackend services={services}/>
                </>
            }
    
     

                <button id="permanent-makeup" onClick={(e)=>showDiv(e)}>
                Permanent Makeup
               <div className="button-image" id="permanent-makeup-image">
                        <img  src='/images/service/permanentmakeup.jpg'/>
                </div>
                
                </button>
                {(showing === "Permanent Makeup" && clicked) &&
                <>
            <ServiceBackend services={services}/>
                </>
            }

                <button id="waxing" onClick={(e)=>showDiv(e)}>
                Waxing
                <div className="button-image" id="waxing-image">
                        <img  src='/images/service/waxing.jpg'/>
                </div>
                
                </button>
                {(showing === "Waxing" && clicked) &&
                <>
            <ServiceBackend services={services}/>
                </>
            }

                <button id="threading" onClick={(e)=>showDiv(e)}>
                Threading
                <div className="button-image" id="threading-image">
                        <img  src='/images/service/threading.jpg'/>
                </div>
                
                </button>
                {(showing === "Threading" && clicked) &&
                <>
            <ServiceBackend services={services}/>
                </>
            }

                <button id="hair" onClick={(e)=>showDiv(e)}>
                Hair Care
               <div className="button-image" id="hair-image">
                        <img  src='/images/service/hair.jpg'/>
                </div>
                
                </button>
                {(showing === "Hair Care" && clicked ) &&
            <ServiceBackend services={services}/>
            }
                </div>
            </div>

    )
}
