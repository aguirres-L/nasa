import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState ,useRef} from 'react';

import "./Carosule.css"
// import img 
import img1 from "../img/rover.webp"
import img2  from "../img/NASALibrary.jpg"
import img3 from "../img/EarthPolychromatic.webp"
import img4 from "../img/ExoplanetArchive.webp"
import img5 from "../img/NeoWs.jpg"
import RoverPhotos from './RoverPhotos/RoverPhotos';
import ImgAndVide from './IandV/ImgAndVide';
import EarthPolychromatic from './EarthPolychromatic/EarthPolychromatic';
import ExoplanetArchive from './ExoplanetArchive/ExoplanetArchive';
import NeoWs from './NeoWs/NeoWs';


//const imgs =[img1,img2,img3,img4,img5]

const MyCarousel = () => {
  
  const [interaccion, setInteraccion] = useState(true);
  
  const [visible1, setVisible1] = useState();
  const [visible2, setVisible2] = useState();
  const [visible3, setVisible3] = useState();
  const [visible4, setVisible4] = useState();
  const [visible5, setVisible5] = useState();
  console.log(interaccion)
  
  const myElementRef = useRef(null);
  
  
  

  
  const handelUser1=()=> {
    const element = myElementRef.current;
    
    setVisible1(element.alt)
    
    if(interaccion === true){
      setInteraccion(false);
    }
    
    if(interaccion === false){
      setInteraccion(true);
      setVisible1(null)
    }
    alert('gola')
    console.log(interaccion)
    
    
   //console.log(element.alt) // Obtengo info de la img que se ve en pantalla 
  }
  
  const handelUser2=()=> {
    const element = myElementRef.current;
    
    setVisible2(element.alt)
    
    if(interaccion === true){
      setInteraccion(false);
    }
    if(interaccion === false){
    setInteraccion(true);
    setVisible2(null)
    
    }
    alert('gola')
    console.log(interaccion)
    
   //console.log(element.alt) // Obtengo info de la img que se ve en pantalla 
  }
  
  const handelUser3=()=> {
    
    const element = myElementRef.current;
    
    setVisible3(element.alt)
    
    if(interaccion === true){
      setInteraccion(false);
    }
    if(interaccion === false){
      setInteraccion(true);
      setVisible3(null)
    }
    alert('gola')
    console.log(interaccion)
   //console.log(element.alt) // Obtengo info de la img que se ve en pantalla 
  }
  
  const handelUser4=()=> {
    const element = myElementRef.current;
    
    setVisible4(element.alt)
  
    if(interaccion === true){
      setInteraccion(false);
    }
    if(interaccion === false){
    setInteraccion(true);
    setVisible4(null)
    
    }
    alert('gola')
    console.log(interaccion)
    
   
   //console.log(element.alt) // Obtengo info de la img que se ve en pantalla 
  }
  
  const handelUser5=()=> {
    const element = myElementRef.current;
    
    setVisible5(element.alt)
  
    if(interaccion === true){
      setInteraccion(false);
    }
    if(interaccion === false){
    setInteraccion(true);
    setVisible5(null)
    
    }
    alert('gola')
    console.log(interaccion)
    
   
   //console.log(element.alt) // Obtengo info de la img que se ve en pantalla 
  }
  
  
  
  
  return (
   <div>
     <Carousel
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      infiniteLoop
      autoPlay={interaccion}
      interval={3000} // Cambia el tiempo de espera entre imágenes
      transitionTime={1300} // Cambia el tiempo de transición entre imágenes     Ver con el code de react router para pdoer usar el browusers para poder navergar 
      
    >
   
       <div className='container'  >
        <img src={img1} ref={myElementRef} alt=" 1" />
        <h1> Rover Photos </h1>
        <p> Proporciona acceso a las imágenes tomadas por los rovers en Marte</p>
        <button className='ver-mas' onClick={handelUser1} >{interaccion?"Ver mas":"Cerrar"}</button>
      </div>
      
      <div className='container' >
        <img src={img2} ref={myElementRef} alt=" 2" />
        <h1> NASA Image and Video</h1>
        <p>Permite buscar imágenes, videos y archivos de audio relacionados con la NASA.</p>
        <button className='ver-mas' onClick={handelUser2} >{interaccion?"Ver mas":"Cerrar"}</button>
      </div>
      
      <div className='container' >
        <img src={img3} ref={myElementRef} alt=" 3" />
        <h1> Earth Imaging </h1>
        <p> Ofrece acceso a imágenes diarias de la Tierra tomadas por el del satélite DSCOVR.</p>
        <button className='ver-mas' onClick={handelUser3} >{interaccion?"Ver mas":"Cerrar"}</button>
      </div>
      
      <div className='container' >
        <img src={img4} ref={myElementRef} alt=" 4" />
        <h1> Exoplanet Archive </h1>
        <p> Proporciona datos y metadatos sobre exoplanetas información sobre sus órbita y características físicas .</p>
        <button className='ver-mas' onClick={handelUser4} >{interaccion?"Ver mas":"Cerrar"}</button>
      </div>
      
      <div className='container' >
        <img src={img5} ref={myElementRef} alt=" 5" />
        <h1> Near Earth Object </h1>
        <p> Ofrece información sobre objetos cercanos a la Tierra, como asteroides y cometas</p>
        <button className='ver-mas' onClick={handelUser5} >{interaccion?"Ver mas":"Cerrar"}</button>
      </div>
   
   </Carousel>
    
   
   {visible1  && <RoverPhotos/>}
   {visible2  && <ImgAndVide/>}
   {visible3  && <EarthPolychromatic/>}
   {visible4  && <ExoplanetArchive/>}
   {visible5  && <NeoWs/>}
  {/** 
   <RoverPhotos/>
   <ImgAndVide/>
   
   <EarthPolychromatic/>
    
    <ExoplanetArchive/>
    
    <NeoWs/>
  */}
   
   </div>
  );
};

export default MyCarousel;
