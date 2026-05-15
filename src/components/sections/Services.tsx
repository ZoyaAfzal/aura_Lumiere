import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import spa1 from "@/assets/spa1.jpg";
import spa2 from "@/assets/spa2.jpg";
import spa3 from "@/assets/spa3.jpg";
import spa4 from "@/assets/spa4.jpg";
import spa5 from "@/assets/spa5.jpg";
import spa6 from "@/assets/spa6.jpg";

const services = [
  { id: "salt-therapy", img: spa6, name: "Salt Therapy", tag: "Breathe in pink Himalayan calm" },
  { id: "geothermal-stone", img: spa3, name: "Geothermal Stone", tag: "Heat that melts every tension" },
  { id: "hair-spa", img: spa5, name: "Hair Spa & Scalp", tag: "Renewal from root to ribbon" },
  { id: "spinal-alignment", img: spa1, name: "Backbone & Spinal", tag: "Realign. Restore. Rise" },
  { id: "aroma-essence", img: spa4, name: "Aroma & Essence", tag: "Botanical alchemy in bloom" },
  { id: "advanced-facials", img: spa2, name: "Advanced Facials", tag: "Light-led skin reverence" },
];

export function Services() {
  return (
    <section id="services" className="py-28 md:py-36 bg-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="rose-rule mb-6">Signature Rituals</span>
          <h2 className="font-display text-5xl md:text-6xl italic text-deep-plum mt-6">
            Our Signature Treatments
          </h2>
          <p className="mt-5 text-muted-foreground">
            A collection of rituals composed for the senses — each one engineered for measurable
            radiance and felt as deep, deliberate calm.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              whileHover={{ y: -12 }}
              className="group relative bg-soft-white rounded-3xl border border-transparent hover:border-rose-gold/40 hover:bg-champagne/60 p-8 text-center transition-all duration-500 shadow-[0_8px_30px_-15px_oklch(0.215_0.038_340/0.15)]"
            >
              <div className="mx-auto size-32 rounded-full overflow-hidden ring-1 ring-rose-gold/30 shadow-xl mb-6">
                <img
                  src={s.img}
                  alt={s.name}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="font-display text-2xl text-deep-plum">{s.name}</h3>
              <p className="mt-3 text-rose-gold italic font-display text-lg">{s.tag}</p>
              <Link
                to="/treatment/$id"
                params={{ id: s.id }}
                className="mt-6 inline-block text-xs uppercase tracking-[0.3em] text-deep-plum/70 story-link"
              >
                Discover →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
