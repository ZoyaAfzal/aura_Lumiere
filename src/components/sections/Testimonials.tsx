import { motion } from "framer-motion";
import a1 from "@/assets/avatar1.jpg";
import a2 from "@/assets/avatar2.jpg";

const items = [
  {
    quote:
      "I came in for a single facial and left with a relationship. My skin has never looked more like itself — only luminous.",
    name: "Camille Rousseau",
    role: "Editor, Maison Magazine",
    avatar: a1,
    offset: "lg:mt-0",
  },
  {
    quote:
      "Aura Lumière feels like the spa I've been searching for in three cities. Quiet, exact, and completely transformative.",
    name: "Eleanor Hayes",
    role: "Architect",
    avatar: a2,
    offset: "lg:mt-24",
  },
  {
    quote:
      "The salt therapy room alone is worth the journey. I sleep differently the night after a visit.",
    name: "Sienna Park",
    role: "Yoga Teacher",
    avatar: a1,
    offset: "lg:mt-12",
  },
  {
    quote:
      "Every detail considered. The geothermal stone ritual is now a non-negotiable part of my month.",
    name: "Margaux Devereux",
    role: "Gallery Director",
    avatar: a2,
    offset: "lg:mt-4",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28 md:py-36 bg-champagne/40 grain overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="rose-rule mb-6">Voices</span>
          <h2 className="font-display text-5xl md:text-6xl italic text-deep-plum mt-6">
            Stories of Transformation
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotateY: 25, y: 40 }}
              whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
              className={`relative bg-soft-white/60 backdrop-blur-md border border-cream rounded-3xl p-10 shadow-[0_15px_40px_-20px_oklch(0.215_0.038_340/0.2)] ${it.offset}`}
            >
              <span className="absolute top-4 left-6 font-display text-7xl text-rose-gold/70 leading-none select-none">
                "
              </span>
              <p className="font-display italic text-2xl text-deep-plum leading-snug pt-6">
                {it.quote}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img src={it.avatar} alt={it.name} loading="lazy" className="size-12 rounded-full object-cover ring-1 ring-rose-gold/40" />
                <div>
                  <div className="text-deep-plum font-medium">{it.name}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{it.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
