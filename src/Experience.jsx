import { OrbitControls } from "@react-three/drei";
import { BakeShadows } from "@react-three/drei";
import Knight from "./World/Knight";
import Tree from "./World/Tree";
import Cat from "./World/Cat";
import { useTexture } from "@react-three/drei";
import Lights from "./World/Lights"
import Moon from "./World/Moon"
import Environment from "./World/Environments"
import Truck from "./World/Truck"
import Sign from "./World/Sign"
import WelcomeText from "./World/WelcomeText"
import Click from "./World/Click"
import Cat2 from "./World/Cat2";


const Experience = () => {
    const PATH = "/assets/textures/floor/";

    const propsTexture = useTexture({
        map: PATH + 'floor_diff_1k.jpg',
        displacementMap: PATH + 'floor_arm_1k.jpg',
        normalMap: PATH + 'floor_nor_gl_1k.jpg',
    })

    return (
        <>
            <OrbitControls 
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
                target={[0, 0, 0]}
            />
            <Knight/>
            <Tree position={[3, 0.4, -15]} scale={2.05}/>
            <Cat/>
            <Cat2/>
            <Lights/>
            <BakeShadows/>
            <Moon/>
            <Environment/>
            <Truck position={[-2.5, 5.6, -20]} scale={8} rotation-y={-Math.PI * 0}/>
            <Sign position={[-0.7,-2.1,0]} scale={0.007} rotation-y={-Math.PI * 0.7}>
                <WelcomeText />
                <Click/>
            </Sign>

            <mesh position-y={-3} rotation-x={-Math.PI / 2} receiveShadow>
                <planeGeometry attach="geometry" args={[64,96]} />
                <meshStandardMaterial {...propsTexture} roughness={1}/>
            </mesh>
        </>
    )
}

export default Experience;