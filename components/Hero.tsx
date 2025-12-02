import ShoeStage from "./ShoeStage";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
            {/* Hero Model Image - Background Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/images/ch-model-hero.jpeg"
                    alt="CH Model"
                    fill
                    className="object-cover opacity-20 blur-sm"
                    priority
                />
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-ch-black via-ch-charcoal/50 to-ch-black opacity-90 z-0" />

            {/* 3D Stage */}
            <ShoeStage />

            {/* Content Overlay */}
            <div className="relative z-10 text-center pointer-events-none">
                <h1 className="font-condensed font-bold text-[12vw] leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 drop-shadow-2xl">
                    DEFY THE HEAT
                </h1>
                <p className="font-mono text-ch-teal mt-4 text-sm md:text-base tracking-[0.2em] uppercase">
                    Advanced Anti-Odour Technology
                </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                <div className="w-[1px] h-12 bg-gradient-to-b from-ch-teal to-transparent" />
            </div>
        </section>
    );
}
