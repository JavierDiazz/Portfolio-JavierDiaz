import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import React, { useState } from "react";

const Cone = () => {
    
    const [direction, setDirection] = useState(1);
    const [xPosition, setXPosition] = useState(0);
    const cosineWave = (time) => {
        return Math.cos(time) * 2;
    };
    
    useFrame(({ clock }) => {
        const time = clock.elapsedTime;
    
        let y = cosineWave(time);
        let x = xPosition + direction * 0.02;

        if (xPosition > 6) {
            setDirection(-1);
        } else if (xPosition < -6) {
            setDirection(1);
        }

        coneRef.current.position.y = y;
        coneRef.current.position.x = x;

        setXPosition(x);
    });

    useFrame((state, delta) => {
        coneRef.current.rotation.x += 1 * delta;
    });

    const coneRef = useRef();
    console.log(coneRef.current);
    return <>
    <OrbitControls makeDefault />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <mesh position={[1.3, -0.3, 1]} ref={coneRef} scale={[0.5, 0.5, 0.5]}>
            <coneGeometry args={[1, 2, 32]} />
            <meshToonMaterial color="HotPink" />
        </mesh>
    </>
}
export default Cone;