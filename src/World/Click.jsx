import { Html } from "@react-three/drei";

const Click = (props) => {

    const textStyle = {
        fontSize: "20px",    // Tamaño de fuente
        color: "Gold",       // Color del texto
        fontFamily: "Comic Sans", // Tipo de fuente
        textAlign: "center", // Alineación del texto
    };

    return (
        <Html position={[5, 235, 0]} center style={{ width: "200px" }}>
            <h2 style={textStyle}>
                Click the Cat
                </h2>
        </Html>
    );
};

export default Click;