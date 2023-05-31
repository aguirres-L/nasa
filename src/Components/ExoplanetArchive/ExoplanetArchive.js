import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

import './Exoplaneta.css';

import luna from "./textura-Planeta/luna.jpg";
import earth from "./textura-Planeta/earth.webp";
import Mars from "./textura-Planeta/Mars.webp";
import sun from "./textura-Planeta/sun.jpg";

const SphereScene = () => {
  const sceneRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0, z: 35 });
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    // Crea una escena, una cámara y un renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(100, 1000 / 600, 0.1, 600);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    // Establece el tamaño del renderizador
    const containerWidth = 1580;
    const containerHeight = 600;
    renderer.setSize(containerWidth, containerHeight);

    // Agrega el renderizador al elemento DOM
    sceneRef.current.appendChild(renderer.domElement);

    // Crea las esferas
    const textureMart = new THREE.TextureLoader().load(Mars);
    const geometry = new THREE.SphereGeometry(2, 52, 52);
    const material = new THREE.MeshBasicMaterial({ map: textureMart });
    const sphere = new THREE.Mesh(geometry, material);

    const textureEarth = new THREE.TextureLoader().load(earth);
    const geometry2 = new THREE.SphereGeometry(1.6, 32, 32);
    const material2 = new THREE.MeshBasicMaterial({ map: textureEarth });
    const sphere2 = new THREE.Mesh(geometry2, material2);

    const textureSun = new THREE.TextureLoader().load(sun);
    const geometry3 = new THREE.SphereGeometry(9, 32, 32);
    const material3 = new THREE.MeshBasicMaterial({ map: textureSun });
    const sphere3 = new THREE.Mesh(geometry3, material3);

    const textureLuna = new THREE.TextureLoader().load(luna);
    const geometry4 = new THREE.SphereGeometry(0.5, 32, 32);
    const material4 = new THREE.MeshBasicMaterial({ map: textureLuna });
    const sphere4 = new THREE.Mesh(geometry4, material4);

    let animationFrameId;
    setMounted(true);

    // Agrega las esferas a la escena
    scene.add(sphere);
    scene.add(sphere2);
    scene.add(sphere3);
    scene.add(sphere4);

    // Ajusta la posición de la cámara
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);

    // Define la función de animación
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Gira las esferas
      sphere.rotation.x += 0.01;
      sphere.rotation.y -= 0.02;
      sphere.position.x = 20;//mart
      

      sphere2.rotation.x += 0.01;
      sphere2.rotation.y -= 0.02;
      sphere2.position.x = 2; // hacer un for para poder modificar la trarectoria de la luna 

      sphere3.rotation.x += 0.01;// sun
      sphere3.rotation.y -= 0.01;
      sphere3.position.x = -40;
      

      sphere4.rotation.x += 0.01;
      sphere4.rotation.y -= 0.02;
      sphere4.position.x = 0.02;
      


      // Renderiza la escena con la cámara
      renderer.render(scene, camera);
    };

    // Inicia la animación
    animate();

    if (mounted && !animationFrameId) {
      animate();
    }

    // Limpia la escena al desmontar el componente
    return () => {
      scene.remove(sphere);
      scene.remove(sphere2);
      scene.remove(sphere3);
      scene.remove(sphere4);

      geometry.dispose();
      material.dispose();

      geometry2.dispose();
      material2.dispose();

      geometry3.dispose();
      material3.dispose();

      geometry4.dispose();
      material4.dispose();

      renderer.dispose();
    };
  }, [cameraPosition]);

  const handleClickL = () => {
    setCameraPosition(prevPosition => ({ ...prevPosition, z: prevPosition.z - 10 }));
    setZoom(prevZoom => prevZoom + 0.1);
  };

  const handleClickR = () => {
    setCameraPosition(prevPosition => ({ ...prevPosition, z: prevPosition.z + 10 }));
    setZoom(prevZoom => Math.max(prevZoom - 0.1, 0.1));
  };

  return (
    <div className='container-exoplaneta'>
      <div onClick={handleClickL} onContextMenu={handleClickR} className='ver2' ref={sceneRef} />
    </div>
  );
};

export default SphereScene;
