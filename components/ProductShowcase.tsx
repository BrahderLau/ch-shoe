"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
    { name: "Teal Edition", image: "/assets/images/Teal.png", color: "bg-teal-500" },
    { name: "Black Edition", image: "/assets/images/Black.png", color: "bg-gray-900" },
    { name: "Cream Edition", image: "/assets/images/Cream.png", color: "bg-amber-100" },
    { name: "Red Edition", image: "/assets/images/Red.png", color: "bg-red-600" },
    { name: "Executive Comfort", image: "/assets/images/Executive Comfort.png", color: "bg-slate-700" },
];

export default function ProductShowcase() {
    return (
        <section className="relative w-full py-24 px-6 md:px-12 bg-ch-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-condensed font-bold text-white uppercase tracking-tighter mb-4">
                        Explore The Collection
                    </h2>
                    <p className="text-gray-400 font-mono text-sm md:text-base">
                        Five distinct colorways. One revolutionary technology.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative aspect-square bg-ch-charcoal rounded-lg overflow-hidden cursor-pointer border border-white/10 hover:border-ch-teal/50 transition-all duration-300"
                        >
                            {/* Color Badge */}
                            <div className={`absolute top-3 right-3 w-4 h-4 rounded-full ${product.color} border-2 border-white/30 z-10`} />

                            {/* Shoe Image */}
                            <div className="relative w-full h-full p-6 flex items-center justify-center">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                <h3 className="text-white font-condensed font-bold uppercase tracking-wider text-sm md:text-base">
                                    {product.name}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <button className="group relative px-8 py-3 bg-transparent border border-ch-teal text-ch-teal font-bold uppercase tracking-widest text-sm overflow-hidden hover:text-black transition-colors duration-300">
                        <div className="absolute inset-0 bg-ch-teal translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out -z-10" />
                        See All Models
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
