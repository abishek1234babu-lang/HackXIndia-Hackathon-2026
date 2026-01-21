import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Target = (props) => {
    const targetRef = useRef();
    const { nodes, materials } = useGLTF('/models/target.glb');

    useGSAP(() => {
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
        });
    });

    return (
        <group ref={targetRef} {...props} dispose={null}>
            <group scale={0.01}>
                <group position={[7.224, 0, 0]} rotation={[0, -Math.PI / 5, 0]} scale={100}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder_arrow_red_0.geometry}
                        material={materials.arrow_red}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder_target_white_0.geometry}
                        material={materials.target_white}
                    />
                </group>

                <group
                    position={[101.754, 0.021, -0.037]}
                    rotation={[-Math.PI, Math.PI / 5, 0]}
                    scale={130.856}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder001_arrow_red_0.geometry}
                        material={materials.arrow_red}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder001_Gold_0.geometry}
                        material={materials.Gold}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder001_Material002_0.geometry}
                        material={materials['Material.002']}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/target.glb')
export default Target;
