import React, { useEffect, useRef, useState } from "react";
import { useGLTF, OrthographicCamera } from "@react-three/drei";
import { MeshLambertMaterial, MeshPhongMaterial } from "three";
import { useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion/three";
import { useAnimation } from "framer-motion";
import * as THREE from 'three'
import { useFrame } from "@react-three/fiber";

export default function Model({ colorMode }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("models/shapes_dark_mode.gltf");
  const controls = useAnimation();
  const [direction, setDirection] = useState({
    cy: 1,
    py: -1,
    ico: 1
  })

  const variants = {
    rest: { scale: 0 },
    hover: { scale: 1 },
  };

  const cyRef = useRef()
  const pyRef = useRef()
  const icoRef = useRef();
  
  useFrame(({clock}) => {
    pyRef.current.rotation.y = direction.py * clock.getElapsedTime()/4
    pyRef.current.rotation.x = Math.cos(clock.getElapsedTime() / 2)
    icoRef.current.rotation.y = clock.getElapsedTime()/1.7
    icoRef.current.rotation.z = clock.getElapsedTime()/2.4
    cyRef.current.rotation.z = clock.getElapsedTime()/4
    cyRef.current.rotation.x = Math.sin(clock.getElapsedTime()/4)
  })

  useEffect(() => {
    controls.start("hover");
  }, []);

  return (
    <motion.group ref={group} dispose={null}>
      <OrthographicCamera
        makeDefault={true}
        far={50000}
        near={-50000}
        position={[0, 320, 4000]}
      ></OrthographicCamera>
      <motion.mesh
        ref={cyRef}
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_copy.geometry}
        position={[-73.63, 634.62, -116.5]}
        variants={variants}
        initial="rest"
        animate={controls}
      >
        {colorMode === "dark" ? (
          <meshNormalMaterial />
        ) : (
          <meshLambertMaterial color={"#48bf84"} emissive={"#48bf84"} />
        )}
      </motion.mesh>
      <motion.mesh
        ref={pyRef}
        castShadow
        receiveShadow
        geometry={nodes.Pyramid_copy.geometry}
        position={[304.88, 245, 11]}
        variants={variants}
        initial="rest"
        animate={controls}
      >
        {colorMode === "dark" ? (
          <meshNormalMaterial />
        ) : (
          <meshLambertMaterial color={"#4299e1"} emissive={"#4299e1"} />
        )}
      </motion.mesh>
      <motion.mesh
        ref={icoRef}
        castShadow
        receiveShadow
        geometry={nodes.Icosahedron_copy.geometry}
        position={[628.38, 517.12, -56.5]}
        variants={variants}
        initial="rest"
        animate={controls}
      >
        {colorMode === "dark" ? (
          <meshNormalMaterial />
        ) : (
          <meshLambertMaterial color={"#ef767a"} emissive={"#ef767a"} />
        )}
      </motion.mesh>
    </motion.group>
  );
}

useGLTF.preload("models/shapes_dark_mode.gltf");
