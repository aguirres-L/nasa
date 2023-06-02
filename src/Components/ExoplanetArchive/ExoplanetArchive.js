import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

import './Exoplaneta.css';

import luna from "./textura-Planeta/luna.jpg";
import earth from "./textura-Planeta/earth.webp";
import Mars from "./textura-Planeta/Mars.webp";
import sun from "./textura-Planeta/sun.jpg";

const SphereScene = () => {
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [zoom, setZoom] = useState(1);
  
  const [setPlanet, setSetPlanet] = useState(-20);
  
  const [cameraPosition, setCameraPosition] = useState({ x:0, y: 0, z: 35 });
  useEffect(() => {
    const containerWidth = 1580;
    const containerHeight = 600;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(100, containerWidth / containerHeight, 0.1, 600);

    if (!rendererRef.current) {
      rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
      rendererRef.current.setSize(containerWidth, containerHeight);
      sceneRef.current.appendChild(rendererRef.current.domElement);
    }

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
    
    
    // Ver estrellas
    
    const geometry5 = new THREE.SphereGeometry(60, 32, 32);
    const material5 = new THREE.MeshBasicMaterial({ wireframe:true, color: 0xf00});
    const sphere5 = new THREE.Mesh(geometry5, material5);
  


    let animationFrameId;
    setMounted(true);

    scene.add(sphere);
    scene.add(sphere2);
    scene.add(sphere3);
    scene.add(sphere4);
    scene.add(sphere5);

    camera.position.set( cameraPosition.x,cameraPosition.y, cameraPosition.z); // añadp la posicion de la camara incial 

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      sphere.rotation.x += 0.003; // Marte
      sphere.rotation.y -= 0.02;
      sphere.position.x = 1;

      sphere2.rotation.x += 0.003; // Tierra
      sphere2.rotation.y -= 0;
      sphere2.position.x = 25;

      sphere3.rotation.x += 0.003; // Sol
      sphere3.rotation.y -= 0.01;
      sphere3.position.x = -40;

      const orbitRadius = 5; // Radio de la órbita de la luna
      const orbitSpeed = 0.02; // Velocidad de la órbita de la luna

      // Calcula la posición de la luna en la órbita
      const theta = Date.now() * 0.001 * orbitSpeed;
      const x = Math.cos(theta) * orbitRadius;
      const z = Math.sin(theta) * orbitRadius;

      // Actualiza la posición de la luna
      sphere4.position.set(x, 0, z);

      sphere4.rotation.x = 10; // Estrella 
      sphere4.rotation.y = 12;
      sphere4.position.x = 26;
      
      sphere5.rotation.x += 0.0001; // Marte
      sphere5.rotation.y = 0.002;

      rendererRef.current.render(scene, camera);
    };

    animate();

    if (mounted && !animationFrameId) {
      animate();
    }

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
    };
  }, [cameraPosition || zoom ||setPlanet]);

  const handleKeyDown = (event) => {
  
  // zoom
  
    if (event.key === "+") {
      setCameraPosition(prevPosition => ({ ...prevPosition, z: prevPosition.z - 10 }));
      setZoom(prevZoom => prevZoom + 0.1);
    } 
    if (event.key === "-") {
      setCameraPosition(prevPosition => ({ ...prevPosition, z: prevPosition.z + 10 }));
      setZoom(prevZoom => Math.max(prevZoom - 0.1, 0.1));
    }
     
     console.log(event.key);
    
    
    // Puedo moverme 
    if(event.key ==="4"){
      setCameraPosition(prevPosition => ({ ...prevPosition, x: prevPosition.x - 10 }));

    }
    
    if(event.key ==="6"){
      setCameraPosition(prevPosition => ({ ...prevPosition, x: prevPosition.x + 10 }));

    }
    if(event.key ==="8"){
      setCameraPosition(prevPosition => ({ ...prevPosition, y: prevPosition.y + 10 }));

    }
    if(event.key ==="2"){
      setCameraPosition(prevPosition => ({ ...prevPosition, y: prevPosition.y - 10 }));

    }
    
    
    
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className='container-exoplaneta'>
      <div className='container-fixed'>
        <div className='ver2' ref={sceneRef} />
      </div>
    </div>
  );
};

export default SphereScene;
