import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import a1 from "@/assets/about1.jpg";
import a2 from "@/assets/about2.jpg";
import a3 from "@/assets/spa7.jpg";
import a4 from "@/assets/spa8.jpg";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-champagne/50">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Layered images */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative h-[600px]"
        >
          <div className="absolute top-0 left-0 w-[65%] h-[380px] rounded-3xl overflow-hidden shadow-2xl z-0">
            <img src={a2} alt="Aura Lumière sanctuary" loading="lazy" className="size-full object-cover" />
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[320px] rounded-3xl overflow-hidden shadow-2xl z-20 ring-4 ring-cream">
            <img src={a3} alt="Choosing the right skincare" loading="lazy" className="size-full object-cover" />
          </div>

          <div className="absolute bottom-0 right-0 w-[55%] h-[300px] rounded-3xl overflow-hidden shadow-2xl z-10 ring-4 ring-cream">
            <img src={a4} alt="Professional ritual" loading="lazy" className="size-full object-cover" />
          </div>

          <div className="absolute -top-6 -right-2 size-28 rounded-full bg-cream flex flex-col items-center justify-center text-rose-gold shadow-xl z-30">
            <span className="font-display italic text-3xl leading-none">Est.</span>
            <span className="font-display text-2xl">2009</span>
          </div>
          <Leaf className="sway absolute bottom-10 left-4 size-14 text-sage z-30" strokeWidth={1} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <span className="rose-rule mb-6">Our Story</span>
          <h2 className="font-display text-5xl md:text-6xl italic text-deep-plum mt-6 leading-[1.05]">
            Embark on a Journey<br />with Aura Lumière
          </h2>
          <p className="mt-8 text-muted-foreground leading-relaxed">
            Founded as a quiet rebellion against the clinical and the cookie-cutter, Aura Lumière
            brings the precision of medical-grade aesthetics into a sanctuary built for the senses.
            Our specialists are clinicians and artisans both are guiding each guest through rituals
            that honor both the science of skin and the slowness of true rest.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every candle, every consultation, every protocol is composed with intention. This is
            beauty as a practice, never a transaction.
          </p>

          <a
            href="#contact"
            className="group mt-10 inline-flex items-center gap-2 px-7 py-4 bg-deep-plum text-cream text-xs uppercase tracking-[0.25em] rounded-full hover:bg-rose-gold transition-all duration-500"
          >
            Book Now
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
