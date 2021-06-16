import React, { useEffect, useState } from 'react';

import sanityClient from '../../client.js'


export default function ServiceBackend({services}) {
    const [serviceType, setServiceType] = useState(null);




    useEffect(()=>{
        sanityClient
        .fetch(`*[_type == "services"]{
            title,
            slug,
            price,
            serviceType,
            description
        }`)
        .then(res=>{
            const results = res.filter(elem=>elem.serviceType.toLowerCase()===services.current.previousElementSibling.innerText.toLowerCase()).sort((a,b)=>a.title.localeCompare(b.title))
         
            setServiceType(results)   
        })
        .catch(console.error)
    },[])

    return (

    <div className='service-box' ref={services}>


    {!serviceType && <h2>Loading...</h2> ||
    
    serviceType.map((elem,index)=>{
        return (
            <div key={index} className="service-box-info">
                <span>
                    <h4>{elem.title}</h4>
                    <p className='price'>$ {elem.price}.00</p>
                </span>
                <p>{elem.description}</p>
            </div>
)
    }
        )
     
        
        
    }

         

    </div>
    )
}
