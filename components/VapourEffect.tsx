"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const VapourShaderMaterial = {
    uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color("#00f0ff") },
        uOpacity: { value: 0.0 },
    },
    vertexShader: `
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform float uTime;

    void main() {
      vUv = uv;
      vPosition = position;
      
      // Gentle floating movement
      vec3 pos = position;
      pos.y += sin(uv.x * 10.0 + uTime) * 0.1;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
    fragmentShader: `
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform float uTime;
    uniform vec3 uColor;
    uniform float uOpacity;

    // Simplex noise function (simplified)
    float random (in vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    float noise (in vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    void main() {
      // Flowing noise pattern
      vec2 noiseUV = vUv * 2.0;
      noiseUV.y -= uTime * 0.2; // Flow downwards
      
      float n = noise(noiseUV + vec2(0.0, uTime * 0.1));
      n += noise(noiseUV * 2.0 - vec2(uTime * 0.2)) * 0.5;
      
      // Soft edges
      float alpha = smoothstep(0.0, 0.5, n) * smoothstep(0.0, 0.2, vUv.y) * (1.0 - vUv.y);
      
      // Color gradient
      vec3 finalColor = mix(vec3(1.0), uColor, vUv.y);
      
      gl_FragColor = vec4(finalColor, alpha * uOpacity * 0.6);
    }
  `
};

export default function VapourEffect({ active }: { active: boolean }) {
    const materialRef = useRef<THREE.ShaderMaterial>(null);

    // Create shader material instance
    const material = useMemo(() => new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uColor: { value: new THREE.Color("#00f0ff") },
            uOpacity: { value: 0.0 },
        },
        vertexShader: VapourShaderMaterial.vertexShader,
        fragmentShader: VapourShaderMaterial.fragmentShader,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
    }), []);

    useFrame((state, delta) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value += delta;

            // Smooth fade in/out
            const targetOpacity = active ? 1.0 : 0.0;
            materialRef.current.uniforms.uOpacity.value = THREE.MathUtils.lerp(
                materialRef.current.uniforms.uOpacity.value,
                targetOpacity,
                delta * 2.0
            );
        }
    });

    return (
        <mesh position={[0, -0.5, 0.1]} scale={[4, 2, 1]}>
            <planeGeometry args={[1, 1, 32, 32]} />
            <primitive object={material} ref={materialRef} attach="material" />
        </mesh>
    );
}
