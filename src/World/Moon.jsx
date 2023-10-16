import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";


const Moon = () => {
    const moonRef = useRef();
    const moonModel = useGLTF('/assets/models/moon/scene.gltf')

    return (
        <mesh  ref={moonRef} position={[-20, 13, -30]} rotation-y={-Math.PI * 0.4} scale={4}>
            <primitive object={moonModel.scene} />
        </mesh>
    )
}
export default Moon;
useGLTF.preload("/assets/models/moon/scene.gltf");