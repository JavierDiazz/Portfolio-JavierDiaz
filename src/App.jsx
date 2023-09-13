import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import Info from "./Info/Info"

const App = () => {
    // Camera settings
    const cameraSettings = {
        position: [0, 0, 5],
        fov: 60
    }

    return (
        <>
            <Info name={"Javier Díaz"} biography={"Web 3D Developer in Progress"} />
            <Canvas
                camera={cameraSettings}
            >
                <Experience />
            </Canvas>
        </>
    )
}
export default App