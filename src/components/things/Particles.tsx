"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { motion, useAnimation, AnimationControls } from "framer-motion";

interface ParticlesProps {
  className?: string;
}

const Particles: React.FC<ParticlesProps> = ({ className }) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const controls: AnimationControls = useAnimation(); // Framer Motion animation controls

  useEffect(() => {
    // Set up scene
    if (typeof window == undefined) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      20,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append renderer's DOM element to the sceneRef
    if (sceneRef.current) {
      sceneRef.current.appendChild(renderer.domElement);
    }

    // Set transparent background
    renderer.setClearAlpha(0);

    // Create particles
    const particles = new THREE.Group();
    const particleGeometry = new THREE.BufferGeometry();
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true, // Enable vertex colors
    });

    const numParticles = 500;
    const positions = new Float32Array(numParticles * 3);
    const colors = new Float32Array(numParticles * 3);

    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;

      if (i % 2 === 0) {
        // Set color for every even index particle
        colors[i] = 255 / 255; // Red component
        colors[i + 1] = 255 / 255; // Green component
        colors[i + 2] = 255; // Blue component
      } else {
        // Set color for every odd index particle
        colors[i] = 66 / 255; // Red component
        colors[i + 1] = 118 / 255; // Green component
        colors[i + 2] = 195 / 255; // Blue component
      }
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    particles.add(particleSystem);
    scene.add(particles);

    // Set up camera position
    camera.position.z = 5;

    // Mouse movement interaction
    const mouse = new THREE.Vector2(0, 0);
    const targetMouse = new THREE.Vector2(0, 0);

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Add animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth wave motion with phase offset
      const time = Date.now() * 0.0001;
      const positions = particleGeometry.attributes.position
        .array as Float32Array;

      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] = Math.sin(i / 100 + time);
      }

      // Update particle system
      particleGeometry.attributes.position.needsUpdate = true;

      // Rotate particles towards the mouse
      targetMouse.x += (mouse.x * 0.2 - targetMouse.x) * 0.02;
      targetMouse.y += (-mouse.y * 0.2 - targetMouse.y) * 0.02;

      // Use Framer Motion to animate particles rotation
      controls.start({
        rotateX: targetMouse.x,
        rotateY: targetMouse.y,
        transition: { duration: 1 },
      });

      renderer.render(scene, camera);
    };

    animate();

    // Resize handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Clean up Three.js resources on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      renderer.dispose();
    };
  }, [controls]);

  return <motion.div className={className} ref={sceneRef} />;
};

export default Particles;
