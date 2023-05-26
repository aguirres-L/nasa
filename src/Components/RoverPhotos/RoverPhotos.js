/**
Mars Rover Photos API: Proporciona acceso a las imágenes tomadas 
por los rovers en Marte. 
Puedes buscar imágenes basadas en la fecha en que fueron tomadas.

*/

import React from 'react';

import { useState,useEffect } from 'react';

import Component from '../ComponentUniversal/Component';
import ErrorComponent from "../Error Component/ErrorComponent";



export default function RoverPhotos(){

    let title ="Rover Photos",
        infoRover = " Rover Photos es una API proporcionada por la NASA que ofrece acceso a imágenes capturadas por los rovers en Marte. Estas imágenes son tomadas por los rovers de la NASA, que son vehículos robóticos diseñados para explorar la superficie marciana."
    
    const [Photos, setPhotos] = useState();
    
    const [error, setError] = useState();
    
    useEffect(()=>{
        
        const Fetch =async()=>{
           try {
            let url ='https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY'
            
            let res = await fetch(url);
            if(!res.ok){
            throw new Error("Error en la repuesta API ")
        }
        
             let   json = await res.json();
             setPhotos(json.photos)
             
             // console.log(json.photos[0])
             // console.log(json.photos[6].img_src)
             // console.log(json.photos[0].rover.name)
            } catch (error) {
                console.error("Errro al llamar la api:",error)
                setError(true)
           }
        }
        
        Fetch()
    },[])

    return(
   <div>
        {error && <ErrorComponent/>}
      {Photos && !error && <Component info={Photos} title={title} context={infoRover}/>}
   </div> 
    )
}