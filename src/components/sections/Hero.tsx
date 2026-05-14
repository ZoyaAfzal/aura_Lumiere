import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

const headline = "Rediscover the Art of You";

export function Hero() {
  const words = headline.split(" ");
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden grain">
      <div className="absolute inset-0 gradient-mesh opacity-90" />
      <div className="relative grid lg:grid-cols-2 min-h-screen pt-24 lg:pt-8">
        {/* Left image */}
        <div className="relative h-[55vh] lg:h-screen overflow-hidden order-2 lg:order-1">
          <img
            src={heroImg}
            alt="Woman receiving luxury spa treatment in serene candlelit room"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cream/20" />
          {/* Floating petals */}
          <span className="absolute top-1/4 left-10 size-2 rounded-full bg-rose-gold/70 float-slow" />
          <span className="absolute top-2/3 left-1/3 size-3 rounded-full bg-blush/80 float-slow" style={{ animationDelay: "1.5s" }} />
          <span className="absolute top-1/2 right-12 size-1.5 rounded-full bg-champagne float-slow" style={{ animationDelay: "3s" }} />
        </div>

        {/* Right text */}
        <div className="relative bg-deep-plum text-cream flex items-center order-1 lg:order-2 px-8 md:px-16 lg:px-20 py-16 lg:py-0">
          <div className="absolute inset-0 grain pointer-events-none" />
          <div className="relative max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="rose-rule mb-8"
            >
              Where Science Meets Serenity
            </motion.span>

            <h1 className="font-display italic text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              {words.map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block mr-3"
                >
                  {w}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-8 text-cream/70 text-base md:text-lg leading-relaxed font-light max-w-md"
            >
              Scientifically advanced. Serenely experienced. Aura Lumière is your
              sanctuary for transformative beauty and wellness.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-4 bg-rose-gold text-cream text-xs uppercase tracking-[0.25em] rounded-full hover:bg-cream hover:text-deep-plum transition-all duration-500"
              >
                Book a Consultation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center px-7 py-4 border border-cream/40 text-cream text-xs uppercase tracking-[0.25em] rounded-full hover:bg-cream/10 transition-all duration-500"
              >
                Explore Services
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
