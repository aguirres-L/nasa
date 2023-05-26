/**
NASA Image and Video Library API: Permite buscar imágenes, videos y 
archivos de audio relacionados con la NASA.
Puedes realizar búsquedas por palabras clave, fechas y otros parámetros.
*/


import React, { useState } from 'react';


import "./ImagYVideos.css"





const NasaImageGallery = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState();

  const [resMp4, setResMp4] = useState();
  const [resJpg, setResJpg] = useState();


 // const API_KEY = 'f9tnbtViAdiRDE1R6u9ijRwTn8yVFYkIOC03x9gx';
  const API_URL = `https://images-api.nasa.gov/search?q=${search}`;
  
  const title = "NASA Image and Video Library",
        context ="Es un servicio proporcionado por la NASA que permite acceder y buscar una gran variedad de imágenes y videos relacionados con el espacio, la exploración espacial, planetas, estrellas, galaxias y otros temas astronómicos.";


  const handleSearchTermChange=(e)=>{
    setSearch(e.target.value);
    setResMp4(null);
    setResJpg(null);
  }
  
  

  
  
  const handleSubmit= async(e)=>{
    e.preventDefault();
   // console.log(search)
    
    try {
       
      if(search){
       const response = await fetch(API_URL);
       
       if(!response.ok){ /* controlo el error */
         throw new Error("Error en la repuesta API ")
     }
       const data = await response.json();
        // console.log(data.collection.items)
       setImages(data.collection.items);
       SegundoFecht()
       
      }
      
      if(!search) return
      
     } catch (error) {
       console.error('Error fetching images:', error);
     }
     
    // console.log(images[0].href)
    
  }


const urlmp4 =[],   // array que contendran a los url deseados
    urljpg=[];

    //console.log(images[0].href)
    const SegundoFecht=async()=>{
      
      try {
      
        let url = images[0].href;
        let res = await fetch(url);
           if(!res.ok){
           throw new Error ("Error al capturar las imagenes solicitas")
             }
        let json = await res.json()
        
        let contador =[];
        json.forEach(el=>{ // genero un forEach para poder caputurar las url que son mp4 y las que son jpg 
   // console.log(el.slice(-3));
        if(el.slice(-3) ==="mp4"){
          console.log(el)
          contador= contador + el
          urlmp4.push(el)             // Creo un nuevo array con las url ya destrucuradas de cada mp4
          setResMp4(true)
        }
        if((el.slice(-3))==="jpg"){
          urljpg.push(el)             // Creo un nuevo array con las url ya destrucuradas de cada jpg
          setResJpg(true)
        }

      })
      //console.log(urlmp4);
      //console.log(urljpg);
      //console.log(resJpg,"jpg");
      //console.log(resMp4,"mp4");
       
      
      } catch (error) {
        console.error("Error:",error)
      }
      
      
  }     // VEr por que no se pueden ver las imagenes 
    
    

  
 
  
  
  return (
    <div>
      <h1>{title}</h1>
      <p>{context}</p>
      
      <input type='text' placeholder='Buscar' onChange={handleSearchTermChange} />
      <button onClick={handleSubmit}>🔎</button>
      
     {search &&  
        <div className='container-img-nasa'>
         {urljpg.forEach((el,i) => (
        <img src={el} alt={i} />
      ))}
        </div>
      }
    </div>
  );
};

export default NasaImageGallery;
