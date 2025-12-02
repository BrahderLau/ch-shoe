import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-ch-black overflow-x-hidden">
      <Header />
      <Hero />
      <Features />
      <ProductShowcase />

      {/* CTA Section */}
      <section className="w-full py-32 flex flex-col items-center justify-center bg-gradient-to-t from-ch-black to-ch-charcoal text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/Teal.png')] bg-cover bg-center opacity-5 blur-xl scale-110" />

        <div className="relative z-10 max-w-4xl px-6">
          <h2 className="text-5xl md:text-7xl font-condensed font-bold text-white mb-8 uppercase tracking-tighter">
            Experience the <span className="text-ch-teal text-glow">Future</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-mono mb-12 max-w-2xl mx-auto">
            Join the waitlist for the first drop. Limited quantities available for early adopters.
          </p>
          <button className="group relative px-12 py-4 bg-transparent border border-ch-teal text-ch-teal font-bold uppercase tracking-widest overflow-hidden hover:text-black transition-colors duration-300">
            <div className="absolute inset-0 bg-ch-teal translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out -z-10" />
            Pre-Order Now
          </button>
        </div>
      </section>
    </main>
  );
}
