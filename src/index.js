import { createRoot} from "react-dom/client";
import Experience from "./Experience";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import Info from "./Info";
import * as THREE from "three";
import { Html } from "@react-three/drei";
import Sphere from "./Sphere";
import Cone from "./Cone";
import Torus from "./Torus";


const root = createRoot(document.getElementById('root'));
root.render(
    <Canvas
        camera={{ position: [2, 0, 5] }}
        >
            <Experience/>
            <Sphere/>
            <Cone/>
            <Torus/>
    </Canvas>
);

const texto = createRoot(document.getElementById('texto'));
texto.render(
    <Canvas>
        <Html style={{ width: "400px", height: "200px" }}>
            <Info
                title={"Portfolio - Javier Diaz"}
                info={"Web 3D Developer in progress"}
                title2={"Test de biografia \ncon saltos de linea"}
            />
        </Html>          
    </Canvas>

);
