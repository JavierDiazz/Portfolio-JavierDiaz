import { Center, Float, Html, Text, Text3D } from "@react-three/drei"
import { useEffect } from "react";
import { Color } from "three";

const WelcomeText = () => {
    const text = `Welcome to my Tedtalk`

    return (
        <Center
            position={[0, 450, 0]}
        >
            <Float
            rotation-y={-Math.PI * 1.3}
             speed={2} // Animation speed
             rotationIntensity={1.5} // XYZ rotation intensity
             floatIntensity={1.5} // Up/down float intensity
            >
            <Text3D
                font={"/assets/fonts/League.json"}
                bevelEnabled
                bevelSize={0.01}
                bevelThickness={0.1}
                height={0.1}
                lineHeight={0.5}
                letterSpacing={0.05}
                size={50}
            >
                {text}
                <meshStandardMaterial color="White" />
            </Text3D>
            </Float>      
        </Center>

    )
}

export default WelcomeText;