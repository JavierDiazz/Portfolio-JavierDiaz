import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

const Cat2 = () => {
    const cat2Model = useGLTF('/assets/models/cat2/scene.gltf');
    const { camera } = useThree();

    const handleClick = () => {
        // Cambia la posición de la cámara al hacer clic en el gato
        camera.position.set(0, 0, 5); // Cambia la posición de la cámara
        camera.lookAt(0, 0, 0); // Cambia el punto de enfoque de la cámara

        window.alert("Christmas decorations in October are evil. Enjoy the spooktacular festivities!");
    };

    return (
        <mesh position={[-2.5, -2.13, -25]} rotation-y={-Math.PI * 1.5} scale={0.004} castShadow onClick={handleClick}>
            <primitive object={cat2Model.scene} />
        </mesh>
    );
};

export default Cat2;
useGLTF.preload("/assets/models/cat2/scene.gltf");