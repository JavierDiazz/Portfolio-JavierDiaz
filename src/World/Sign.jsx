import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Sign = (props) => {
    const { nodes, materials } = useGLTF("/assets/models/sign/sign.glb");
    return (
        <group {...props} dispose={null}>
            <group>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_DefaultMaterial_0.geometry}
            material={materials.DefaultMaterial}
            rotation={[-Math.PI / 2, 0, 0]}
            />
        </group>
        {props.children}
    </group>
    );
}
export default Sign

useGLTF.preload("/assets/models/sign/sign.glb");
