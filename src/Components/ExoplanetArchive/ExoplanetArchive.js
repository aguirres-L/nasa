import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

import './Exoplaneta.css';

const SphereScene = () => {
  const sceneRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Crea una escena, una cámara y un renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 500); // Establece el tamaño de la cámara según tus necesidades
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    // Establece el tamaño del renderizador
    const containerWidth = 600; // Establece el ancho deseado
    const containerHeight = 400; // Establece la altura deseada
    renderer.setSize(containerWidth, containerHeight);

    // Agrega el renderizador al elemento DOM
    sceneRef.current.appendChild(renderer.domElement);

    // Crea una esfera
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x00fff0 });
    const sphere = new THREE.Mesh(geometry, material);

    let animationFrameId;
    setMounted(true);

    // Agrega la esfera a la escena
    scene.add(sphere);

    // Ajusta la posición de la cámara
    camera.position.z = 5;

    // Define la función de animación
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Gira la esfera
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.02;

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
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className='container-exoplaneta'>
      <div className='ver2' ref={sceneRef} />
    </div>
  );
};

export default SphereScene;
