import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Clock, Sparkles, Wind, Droplets, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import spa1 from "@/assets/spa1.jpg";
import spa2 from "@/assets/spa2.jpg";
import spa3 from "@/assets/spa3.jpg";
import spa4 from "@/assets/spa4.jpg";
import spa5 from "@/assets/spa5.jpg";
import spa6 from "@/assets/spa6.jpg";

export const Route = createFileRoute("/treatment/$id")({
  component: TreatmentDetail,
});

const treatmentData: Record<string, any> = {
  "salt-therapy": {
    name: "Salt Therapy",
    tag: "Breathe in pink Himalayan calm",
    price: "$120",
    duration: "45 min",
    img: spa6,
    description: "Our signature Himalayan salt cave experience. Micronized salt particles are dispersed in a temperature-controlled sanctuary to cleanse the respiratory system and revitalize the skin's surface.",
    benefits: ["Improved lung function", "Enhanced skin barrier", "Stress reduction"],
    icon: Wind
  },
  "geothermal-stone": {
    name: "Geothermal Stone",
    tag: "Heat that melts every tension",
    price: "$210",
    duration: "90 min",
    img: spa3,
    description: "Ancient basalt stones, born from volcanic heat, are smooth-carved and placed along the body's energy meridians to melt away deep-seated muscular tension and ground the spirit.",
    benefits: ["Deep muscle relaxation", "Increased circulation", "Mental grounding"],
    icon: Sparkles
  },
  "hair-spa": {
    name: "Hair Spa & Scalp",
    tag: "Renewal from root to ribbon",
    price: "$145",
    duration: "60 min",
    img: spa5,
    description: "A Japanese-inspired head spa ritual. Focuses on scalp detoxification, hair strand restoration, and precision pressure point massage to relieve the mental weight of the modern world.",
    benefits: ["Hair growth stimulation", "Deep hydration", "Migraine relief"],
    icon: Droplets
  },
  "spinal-alignment": {
    name: "Backbone & Spinal",
    tag: "Realign. Restore. Rise",
    price: "$180",
    duration: "75 min",
    img: spa1,
    description: "A specialized therapy focused on the posterior chain. We combine manual myofascial release with corrective heat to restore your natural posture and alleviate chronic spinal discomfort.",
    benefits: ["Posture correction", "Pain management", "Increased flexibility"],
    icon: Sparkles
  },
  "aroma-essence": {
    name: "Aroma & Essence",
    tag: "Botanical alchemy in bloom",
    price: "$160",
    duration: "60 min",
    img: spa4,
    description: "A multisensory journey tailored to your energetic state. We blend custom botanical oils to create a scent landscape that guides your mind into deep meditation while nourishing the skin.",
    benefits: ["Emotional balance", "Skin nourishment", "Nervous system calm"],
    icon: Leaf
  },
  "advanced-facials": {
    name: "Advanced Facials",
    tag: "Light-led skin reverence",
    price: "$195",
    duration: "75 min",
    img: spa2,
    description: "Where clinical results meet holistic ritual. This treatment utilizes medical-grade actives and non-invasive LED technology to target specific skin concerns for an immediate, lit-from-within glow.",
    benefits: ["Collagen stimulation", "Texture refinement", "Immediate radiance"],
    icon: Sparkles
  }
};

function TreatmentDetail() {
  const { id } = useParams({ from: "/treatment/$id" });
  const treatment = treatmentData[id] || treatmentData["salt-therapy"];

  return (
    <main className="bg-cream min-h-screen flex flex-col font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full">
        <div className="absolute inset-0">
          <img 
            src={treatment.img} 
            alt={treatment.name} 
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-deep-plum/30 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
        </div>

        <div className="relative h-full mx-auto max-w-7xl px-6 md:px-10 flex flex-col justify-end pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold">Back to Rituals</span>
            </Link>
            
            <h1 className="font-display text-6xl md:text-8xl italic text-deep-plum leading-none mb-4">
              {treatment.name}
            </h1>
            <p className="text-deep-plum/80 text-xl md:text-2xl font-display italic">
              {treatment.tag}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-cream relative z-10">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-xs uppercase tracking-[0.3em] text-rose-gold font-bold mb-6">The Ritual Experience</h2>
                <p className="text-deep-plum/80 text-lg md:text-xl leading-relaxed font-light">
                  {treatment.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 gap-8"
              >
                <div>
                  <h3 className="text-deep-plum font-display text-2xl mb-6 italic">Expected Benefits</h3>
                  <ul className="space-y-4">
                    {treatment.benefits.map((benefit: string) => (
                      <li key={benefit} className="flex items-center gap-3 text-deep-plum/70">
                        <div className="size-1.5 rounded-full bg-rose-gold" />
                        <span className="font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-champagne/40 p-8 rounded-3xl border border-rose-gold/20">
                  <treatment.icon className="size-8 text-rose-gold mb-4" strokeWidth={1.5} />
                  <p className="text-deep-plum/60 text-sm leading-relaxed italic">
                    "Every touch is intentional. Every moment is yours. This treatment is more than a service; it is a realignment of self."
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar - Booking Info */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-deep-plum/5 border border-cream sticky top-32"
              >
                <div className="flex justify-between items-center mb-10 pb-10 border-b border-cream">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-deep-plum/40 mb-1">Investment</p>
                    <p className="text-4xl font-display text-deep-plum italic">{treatment.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-widest text-deep-plum/40 mb-1">Duration</p>
                    <div className="flex items-center gap-2 text-deep-plum justify-end">
                      <Clock className="size-4 text-rose-gold" />
                      <span className="font-semibold">{treatment.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mb-10">
                  <div className="flex gap-4">
                    <div className="size-10 rounded-full bg-cream flex items-center justify-center shrink-0">
                      <Sparkles className="size-5 text-rose-gold" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-deep-plum uppercase tracking-wide">Pure Serenity</h4>
                      <p className="text-xs text-deep-plum/60 mt-1">Includes complimentary access to our herbal tea lounge.</p>
                    </div>
                  </div>
                </div>

                <button className="w-full py-5 bg-deep-plum text-cream text-[10px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-rose-gold transition-all duration-500 shadow-xl shadow-deep-plum/20">
                  Schedule Your Session
                </button>
                
                <p className="text-center mt-6 text-[10px] text-deep-plum/40 uppercase tracking-[0.2em]">
                  Available Monday – Saturday
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
