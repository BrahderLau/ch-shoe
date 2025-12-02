"use client";

import { Wind, Shield, Zap, Droplets } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Shield,
        title: "Odor-Lock Matrix",
        description: "Activated carbon weave traps volatile organic compounds instantly, neutralizing scent at the molecular level."
    },
    {
        icon: Wind,
        title: "Kinetic Airflow",
        description: "Micro-channels engineered into the upper create a venturi effect, cycling fresh air with every step."
    },
    {
        icon: Droplets,
        title: "Hydro-Wick Liner",
        description: "Dual-phase fabric pulls moisture away from the skin 40% faster than standard athletic blends."
    },
    {
        icon: Zap,
        title: "Antimicrobial Shield",
        description: "Silver-ion treatment prevents bacterial growth for the lifespan of the shoe."
    }
];

export default function Features() {
    return (
        <section className="relative w-full min-h-screen bg-ch-charcoal py-24 px-6 md:px-12 z-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 0.1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="font-condensed font-bold text-6xl md:text-8xl text-white uppercase tracking-tighter"
                    >
                        Tech Specs
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-3xl md:text-4xl font-bold text-ch-teal -mt-8 ml-2 uppercase tracking-wide"
                    >
                        CH-Fresh Technology
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 border border-white/10 hover:border-ch-teal/50 transition-colors duration-500 bg-black/20 backdrop-blur-sm"
                        >
                            <feature.icon className="w-12 h-12 text-ch-teal mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                            <h4 className="text-2xl font-bold text-white mb-4 font-condensed uppercase tracking-wider">
                                {feature.title}
                            </h4>
                            <p className="text-gray-400 font-mono leading-relaxed text-sm md:text-base">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
