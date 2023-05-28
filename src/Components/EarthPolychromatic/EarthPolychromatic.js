import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './earth.css';

export default function EarthPolychromatic() {
  const [requestApi, setRequestApi] = useState([]);

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
    <div>
      <h1>Earth Polychromatic</h1>
      <p>
        Nos proporciona acceso a imágenes y datos capturados por la cámara EPIC a bordo del satélite DSCOVR (Deep Space
        Climate Observatory).
      </p>

      {requestApi.length > 0 && (
        <Carousel 
            infiniteLoop={true}
            showThumbs={false}
            interval={800}//    el tiempo con el que las img se van a intercambiar
            transitionTime={0}// no se ve la trnasicion de img
            autoPlay={true}// genero un loop inifito
            
            >
          {requestApi.map((el, index) => (
            <div className="container-earth" key={index}>
              <img
                src={`https://epic.gsfc.nasa.gov/archive/natural/2023/05/26/jpg/${el.image}.jpg`}
                alt={index}
              />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
}
