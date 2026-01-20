import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

const RotatingCube = () => {
    const meshRef = useRef();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
            meshRef.current.rotation.z += 0.01;
        }
    });

    return (
        <mesh ref={meshRef}>
            <cylinderGeometry args={[1, 1, 2, 32]} />
            <meshStandardMaterial color="#468585" emissive="#468585" emissiveIntensity={0.3} />
        </mesh>
    );
};

const App = () => {
    return (
        <Canvas style={{ height: "100vh", width: "100vw" }}>
            <OrbitControls enableZoom enablePan enableRotate />
            <directionalLight position={[1, 1, 1]} intensity={2} color={0x9cdba6} />
            <ambientLight intensity={0.5} />
            <color attach="background" args={["#f0f0f0"]} />
            <RotatingCube />
        </Canvas>
    );
};

export default App;
