"use client";

import { motion } from "framer-motion";

export default function PromoVideo() {
    return (
        <section className="relative w-full py-24 px-6 md:px-12 bg-ch-charcoal">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-condensed font-bold text-white uppercase tracking-tighter mb-4">
                        See It In Action
                    </h2>
                    <p className="text-gray-400 font-mono text-sm md:text-base">
                        Experience the future of footwear technology.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative aspect-video w-full max-w-5xl mx-auto rounded-lg overflow-hidden border border-white/10 shadow-2xl"
                >
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/assets/ch-promotional-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Overlay gradient for aesthetics */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}
