const Lights = () => {
    return <>
            <ambientLight intensity={1.2} color={0xF9FEC9} />

            <pointLight position={[-15, 10, -20]} intensity={300} color={0xF7FFA4} distance={40} decay={2} castShadow/>

            <directionalLight position={[10, 20, 5]} intensity={2} color={"red"} castShadow />
        </>
}
export default Lights;