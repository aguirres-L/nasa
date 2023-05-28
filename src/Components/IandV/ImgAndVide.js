/**
NASA Image and Video Library API: Permite buscar imágenes, videos y 
archivos de audio relacionados con la NASA.
Puedes realizar búsquedas por palabras clave, fechas y otros parámetros.
*/


import React, { useState ,useEffect} from 'react';


import "./ImagYVideos.css"
import Loader from "../../img/Loader/loader.gif"




const NasaImageGallery = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState();

 
  const [urlmp4, setUrlmp4] = useState([]);
  const [urljpg, setUrljpg] = useState([]);
  const [resMp4, setResMp4] = useState(false);
  const [resJpg, setResJpg] = useState(false);


 // const API_KEY = 'f9tnbtViAdiRDE1R6u9ijRwTn8yVFYkIOC03x9gx';
  const API_URL = `https://images-api.nasa.gov/search?q=${search}`;
  
  const title = "NASA  Library",
        context ="Es un servicio proporcionado por la NASA que permite acceder y buscar una gran variedad de imágenes y videos relacionados con el espacio, la exploración espacial, planetas, estrellas, galaxias y otros temas astronómicos.";


  const handleSearchTermChange=(e)=>{
    setSearch(e.target.value);
    setResMp4(null);
    setResJpg(null);
    
    
    urljpg.splice(0,urljpg.length)    // Dentro del Search handle borro el contenido de los array, de esta forma tendrian que borrarse al monete de que se genere un cambio en el input search 
    urlmp4.splice(0,urlmp4.length)
  
  }
  
  

  
  
  const handleSubmit= async(e)=>{   // En esta prinera request me devuelve url en fornato json y lego debo de hacer una segunda request para poder usar las url que me devuelve el primer js  
    e.preventDefault();
   // console.log(search)
    
    try {
       
      if(search){
       const response = await fetch(API_URL);
       
       if(!response.ok){ /* controlo el error */
         throw new Error("Error en la repuesta API ")
     }
       const data = await response.json();
         console.log(data.collection.items)
       setImages(data.collection.items);
       
        SegundoFecht();// indico que solo se ejecute cuando img exista
        // Llamad de la segunda requesta a la api
        
      }
      
     
      setSearch(" ");
      
     } catch (error) {
       console.error('Error fetching images:', error);
     }
     
    // console.log(images[0].href)
    
  }


  const SegundoFecht = async () => {
    try {

      
      let url = images[0].href;
      
      
      let res = await fetch(url);
      if (!res.ok) {
        throw new Error("Error al capturar las imagenes solicitas");
      }

      let json = await res.json();

      const mp4Urls = [];
      const jpgUrls = [];

      json.forEach((el) => {
        if (el.slice(-3) === "mp4") {
          mp4Urls.push(el);
        }
        if (el.slice(-3) === "jpg") {
          jpgUrls.push(el);
        }
      });

      setUrlmp4(mp4Urls);
      setUrljpg(jpgUrls);
      setResMp4(mp4Urls.length > 0);
      setResJpg(jpgUrls.length > 0);

    } catch (error) {
      console.log("No hay img:", error);
    }
  };

  useEffect(() => {
    SegundoFecht();
  }, [images]);

  

  
  // Darle estylo a este retun 
  return (
    <div className='container-Imagen-Video'>
      
      <div className='header'>
         <h1>{title}</h1>
         <p>{context}</p>
      </div>
  
      <div className='body'>
        
        <div>
          <input type='text' placeholder='Buscar' onChange={handleSearchTermChange} />
          <button onClick={handleSubmit}>🔎</button>
        </div>
        
      { urljpg.length > 0 
        
        ?(urljpg.map((el, index) => (
            <img className='resApi' src={el} alt={`img${index}`} />
          )))
        :(<img className='Planeta' src={Loader} alt='1' /> // Ver el tema del loadin debo de usar un estado para poder mostrarlo antes de que la resp sea enviada, y al momneto de que la res se envia el lodare debe de desaparecer 
            )
      }
      
      </div>
      
      

    </div>
  );
};

export default NasaImageGallery;
