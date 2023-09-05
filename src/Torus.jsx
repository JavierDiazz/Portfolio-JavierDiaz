import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import React, { useState } from "react";
import * as THREE from "three";

const Torus = () => {
    const torusGeometry = new THREE.TorusGeometry(2, 0.4, 16, 100); // (radioMayor, radioTubo, segmentosRadiales, segmentosTubo)
    const torusMaterial = new THREE.MeshLambertMaterial({ color: "White" });

    const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);

    useFrame(() => {
        torusMesh.rotation.x += 0.01;
        torusMesh.rotation.y += 0.01;
    });

    return <primitive object={torusMesh} />;
};
export default Torus;