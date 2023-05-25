/**
Mars Rover Photos API: Proporciona acceso a las imágenes tomadas 
por los rovers en Marte. 
Puedes buscar imágenes basadas en la fecha en que fueron tomadas.

*/

import React from 'react';
import { useState,useEffect } from 'react';
import Component from '../ComponentUniveral/Component';

export default function RoverPhotos(){

    let saludos ="Hola",
        hola = "RoverPhoto"
    
    const [Photos, setPhotos] = useState();
    
    useEffect(()=>{
        
        const Fetch =async()=>{
            let url ='https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY'
            
            let res = await fetch(url),
                json = await res.json()
            
           // console.log(json.photos[0])
           // console.log(json.photos[6].img_src)
           // console.log(json.photos[0].rover.name)
            setPhotos(json.photos)
        }
        
        Fetch()
    },[])

    return(
   <div>
       <h1>Hola RoverPhotos </h1>
      {Photos && <Component info={Photos} titel={saludos} context={hola}/>}
   </div> 
    )
}