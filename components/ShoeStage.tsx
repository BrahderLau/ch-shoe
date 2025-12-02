"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import ShoeModel from "./ShoeModel";

export default function ShoeStage() {
    return (
        <div className="w-full h-full absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <Environment preset="city" />
                    {/* Shoe Model will go here */}

                    <ShoeModel />

                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        enableRotate={false}
                        minDistance={3}
                        maxDistance={7}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}
