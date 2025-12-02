"use client";

import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import Hotspot from "./Hotspot";
import VapourEffect from "./VapourEffect";

export default function ShoeModel() {
    const texture = useTexture("/assets/images/Teal.png");
    const meshRef = useRef<THREE.Group>(null);
    const [activeFeature, setActiveFeature] = useState<string | null>(null);

    useFrame((state) => {
        if (!meshRef.current) return;

        // Mouse parallax effect
        const { x, y } = state.mouse;

        // Smooth rotation based on mouse position
        meshRef.current.rotation.y = THREE.MathUtils.lerp(
            meshRef.current.rotation.y,
            x * 0.2, // Max rotation amount
            0.1 // Smoothing factor
        );
        meshRef.current.rotation.x = THREE.MathUtils.lerp(
            meshRef.current.rotation.x,
            -y * 0.2,
            0.1
        );
    });

    const handleHotspotClick = (feature: string) => {
        setActiveFeature(prev => prev === feature ? null : feature);
    };

    return (
        <group ref={meshRef} scale={[3, 3, 1]}>
            {/* Vapour Effect Layer - Behind the shoe */}
            <VapourEffect active={activeFeature === "Anti-Odour"} />

            <mesh>
                <planeGeometry args={[3, 2]} />
                <meshBasicMaterial
                    map={texture}
                    transparent
                    toneMapped={false}
                />
            </mesh>

            {/* Hotspots - Positioned relative to the shoe image */}
            <Hotspot
                position={[0.8, 0.2, 0.1]}
                label="Anti-Odour"
                description="Activated carbon layer neutralizes bacteria instantly."
                onClick={() => handleHotspotClick("Anti-Odour")}
            />
            <Hotspot
                position={[-0.5, 0.3, 0.1]}
                label="Breathability"
                description="Micro-mesh upper allows maximum airflow."
                onClick={() => handleHotspotClick("Breathability")}
            />
            <Hotspot
                position={[0.2, -0.5, 0.1]}
                label="Ergonomics"
                description="Adaptive foam sole for 24/7 urban comfort."
                onClick={() => handleHotspotClick("Ergonomics")}
            />
        </group>
    );
}
