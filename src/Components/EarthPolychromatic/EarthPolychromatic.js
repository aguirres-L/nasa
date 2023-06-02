import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './earth.css';

export default function EarthPolychromatic() {
  const [requestApi, setRequestApi] = useState([]);
  
                // uso el metodo date pra poder acceder a la fechas y poder capturar la fecha del dia anterior
  
     let fechaActual1 = new Date();

     // Restar un día a la fecha actual
     let fechaAyer = new Date();
     fechaAyer.setDate(fechaActual1.getDate() - 1);
     
     // Obtener los componentes de la fecha de ayer
     let diaAyer = fechaAyer.getDate();
  
    //console.log(diaAyer,"gpt dia de ayer")
  
  useEffect(() => {
    const fetchEpicImages = async () => {
      try {
        let res = await fetch('https://epic.gsfc.nasa.gov/api/natural');

        if (!res.ok) {
          throw new Error('Error en la respuesta API');
        }

        let json = await res.json();
        setRequestApi(json);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEpicImages();
  }, []);
  


  return (
    <div className='container-earth'>
    <hr/>
      <div className='header'>
      <h1>Earth Polychromatic</h1>
      <p>
        Nos proporciona acceso a imágenes y datos capturados por la cámara EPIC a bordo del satélite DSCOVR (Deep Space
        Climate Observatory).
      </p>
      </div>

     <div className='body-earth'>
     
     {requestApi.length > 0 && (
        <Carousel 
            infiniteLoop={true}
            showThumbs={false}
            interval={115}//    el tiempo con el que las img se van a intercambiar
            transitionTime={0}// no se ve la trnasicion de img
            autoPlay={true}// genero un loop inifito
            
            >
          {requestApi &&  requestApi.map((el, index) => (
            <div className='earth-div' key={index}>
              <img
                className='earth-img'
                src={`https://epic.gsfc.nasa.gov/archive/natural/2023/05/${diaAyer}/jpg/${el.image}.jpg`} // Tener en cuenta que la url se modifica en consecuencia de la fecha, siempre muestra img del dia anterior 
                alt={index}
              />
            </div>
          ))}
        </Carousel>
      )}
     </div>
    </div>
  );
}
