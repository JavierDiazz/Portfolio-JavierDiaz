import { OrbitControls } from "@react-three/drei";
import Knight from "./World/Knight";
import Tree from "./World/Tree";
import Cat from "./World/Cat";
import { useTexture } from "@react-three/drei";


const Experience = () => {
    const PATH = "/assets/textures/floor/";

    const propsTexture = useTexture({
        map: PATH + 'floor_diff_1k.jpg',
        displacementMap: PATH + 'floor_arm_1k.jpg',
        normalMap: PATH + 'floor_nor_gl_1k.jpg',
        //roughnessMap: PATH + 'woodRoughness.jpg',
        //aoMap: PATH + 'woodAO.jpg',
    })

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <OrbitControls makeDefault/>
            <Knight/>
            <Tree position={[3, 0.4, -15]} scale={2.05}/>
            <Cat/>

            <mesh position-y={-3} rotation-x={-Math.PI / 2} >
                <planeGeometry attach="geometry" args={[64,96]} />
                <meshStandardMaterial {...propsTexture}/>
            </mesh>
        </>
    )
}

export default Experience;