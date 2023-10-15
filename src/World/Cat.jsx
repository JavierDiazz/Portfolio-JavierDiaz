import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";


const Cat = () => {
    const catRef = useRef();
    const catModel = useGLTF('/assets/models/cat/scene.gltf')

    return (
        <mesh  ref={catRef} position={[3, -2.13, -2]} rotation-y={-Math.PI * 0.2} scale={0.004}>
            <primitive object={catModel.scene} />
        </mesh>
    )
}
export default Cat;
useGLTF.preload("/assets/models/cat/scene.gltf");