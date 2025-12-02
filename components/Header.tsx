"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 transition-all duration-300 ${isScrolled ? "bg-ch-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="relative w-12 h-12 md:w-16 md:h-16">
                    <Image
                        src="/assets/images/ch_logo.png"
                        alt="CH Logo"
                        fill
                        className="object-contain invert" // Invert because logo might be black on transparent, and we are on dark bg
                    />
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    {["Technology", "Design", "Reviews"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-mono uppercase tracking-widest text-gray-400 hover:text-ch-teal transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                    <button className="px-6 py-2 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                        Pre-Order
                    </button>
                </nav>

                {/* Mobile Menu Button (Placeholder) */}
                <button className="md:hidden text-white">
                    <div className="w-6 h-0.5 bg-white mb-1.5" />
                    <div className="w-6 h-0.5 bg-white" />
                </button>
            </div>
        </motion.header>
    );
}
