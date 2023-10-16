import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";


const Knight = () => {
    const knightRef = useRef();
    const knightModel = useGLTF('/assets/models/knight/scene.gltf')
    const {animations} = knightModel;

    const { actions } = useAnimations(animations, knightRef);
    useEffect(() => {
        const action = actions["Take 001"]
        action.play()
    }, [])


    return (
        <mesh ref={knightRef} position={[1, -0.85, 0]} rotation-y={-Math.PI * 0.15} scale={1.3} castShadow>
            <primitive object={knightModel.scene} />
        </mesh>
    )
}
export default Knight;
useGLTF.preload("/assets/models/knight/scene.gltf");