import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

const Cat = () => {
    const catModel = useGLTF('/assets/models/cat/scene.gltf');
    const { camera } = useThree();

    const handleClick = () => {
        // Cambia la posición de la cámara al hacer clic en el gato
        camera.position.set(10, 0, -35); // Cambia la posición de la cámara
        camera.lookAt(50, 0, -20); // Cambia el punto de enfoque de la cámara

        window.alert("Ghostly Greetings! More important than information about me, is the fact that people tends to ignore the scariest date in the year for a fat capitalist man");
    };

    return (
        <mesh position={[4.5, -2.13, -1.4]} rotation-y={-Math.PI * 0.2} scale={0.004} castShadow onClick={handleClick}>
            <primitive object={catModel.scene} />
        </mesh>
    );
};

export default Cat;
useGLTF.preload("/assets/models/cat/scene.gltf");