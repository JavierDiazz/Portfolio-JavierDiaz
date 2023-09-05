import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import React, { useState } from "react";

const Sphere = () => {
    const [direction, setDirection] = useState(1);
    const [xPosition, setXPosition] = useState(0);
    const sineWave = (time) => {
        return Math.sin(time) * 2;
    };
    
    useFrame(({ clock }) => {
        const time = clock.elapsedTime;
    
        let y = sineWave(time);
        let x = xPosition + direction * 0.02;

        if (xPosition > 6) {
            setDirection(-1);
        } else if (xPosition < -6) {
            setDirection(1);
        }

        sphereRef.current.position.y = y;
        sphereRef.current.position.x = x;

        setXPosition(x);
        sphereRef.current.rotation.y += 1;
    });

    const sphereRef = useRef();
    console.log(sphereRef.current);
    return <>
    <OrbitControls makeDefault />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <mesh position={[-1.5, 1, 1]} ref={sphereRef} scale={[0.5, 0.5, 0.5]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshNormalMaterial color="Cyan" />
        </mesh>
    </>
}
export default Sphere;