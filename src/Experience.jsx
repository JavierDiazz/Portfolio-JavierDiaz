import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Experience = () => {
    useFrame((state, delta) => {
        boxRef.current.rotation.y += 1 * delta;
    });

    const boxRef = useRef();
    console.log(boxRef.current);
    return <>
    <OrbitControls makeDefault />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <mesh position={[0, 0, 1]} ref={boxRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="Tomato" />
        </mesh>
    </>
}
export default Experience;



