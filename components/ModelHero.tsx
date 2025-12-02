"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ModelHero() {
    return (
        <section className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-ch-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-condensed font-bold text-white uppercase tracking-tighter mb-4">
                        Urban Kinetic Lifestyle
                    </h2>
                    <p className="text-gray-400 font-mono text-sm md:text-base">
                        Engineered for the grind. Built for confidence.
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full aspect-[21/9] overflow-hidden"
            >
                <Image
                    src="/assets/images/ch-model-hero.jpeg"
                    alt="CH Model Hero"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Text overlay */}
                <div className="absolute bottom-8 left-8 right-8 z-10">
                    <p className="text-white font-condensed text-2xl md:text-4xl font-bold uppercase tracking-wider drop-shadow-lg">
                        Shoes Off. Confidence On.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
