"use client";

import { Html } from "@react-three/drei";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HotspotProps {
    position: [number, number, number];
    label: string;
    description: string;
    onClick?: () => void;
}

export default function Hotspot({ position, label, description, onClick }: HotspotProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <group position={position}>
            <Html center distanceFactor={10} zIndexRange={[100, 0]}>
                <div className="relative group">
                    {/* Pulse Ring */}
                    <div className="absolute -inset-4 bg-ch-teal rounded-full opacity-20 animate-ping pointer-events-none" />

                    {/* Button */}
                    <button
                        onClick={() => {
                            setIsOpen(!isOpen);
                            onClick?.();
                        }}
                        className="relative w-6 h-6 bg-ch-teal rounded-full border-2 border-white shadow-[0_0_15px_rgba(0,240,255,0.8)] transition-transform hover:scale-125 flex items-center justify-center"
                        aria-label={label}
                    >
                        <div className="w-2 h-2 bg-white rounded-full" />
                    </button>

                    {/* Tooltip */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                className="absolute left-1/2 -translate-x-1/2 bottom-10 w-48 bg-ch-charcoal/90 backdrop-blur-md border border-ch-teal/30 p-3 rounded-lg text-left shadow-2xl"
                            >
                                <h3 className="text-ch-teal font-condensed font-bold uppercase tracking-wider text-sm mb-1">
                                    {label}
                                </h3>
                                <p className="text-xs text-gray-300 font-mono leading-relaxed">
                                    {description}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </Html>
        </group>
    );
}
