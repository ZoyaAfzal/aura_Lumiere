import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import bg from "@/assets/booking-bg.jpg";

export function Booking() {
  return (
    <section id="contact" className="relative py-28 md:py-36">
      <img src={bg} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-deep-plum/70" />
      <div className="relative mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="bg-cream/85 backdrop-blur-2xl border border-cream/40 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="text-center mb-10">
            <span className="rose-rule mb-6">Reservations</span>
            <h2 className="font-display italic text-4xl md:text-5xl text-deep-plum mt-6">
              Book Your Bliss
            </h2>
            <p className="mt-3 text-muted-foreground">
              Schedule your tranquil escape in moments.
            </p>
          </div>

          <form className="grid sm:grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="Full Name" className="h-12 bg-soft-white/80 border-border" />
            <Input type="email" placeholder="Email" className="h-12 bg-soft-white/80 border-border" />
            <Input placeholder="Phone Number" className="h-12 bg-soft-white/80 border-border" />
            <Input type="date" className="h-12 bg-soft-white/80 border-border" />
            <Input type="time" className="h-12 bg-soft-white/80 border-border" />
            <Select>
              <SelectTrigger className="h-12 bg-soft-white/80 border-border">
                <SelectValue placeholder="Service Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="salt">Salt Therapy</SelectItem>
                <SelectItem value="stone">Geothermal Stone</SelectItem>
                <SelectItem value="hair">Hair Spa & Scalp</SelectItem>
                <SelectItem value="back">Backbone & Spinal</SelectItem>
                <SelectItem value="aroma">Aroma & Essence</SelectItem>
                <SelectItem value="facial">Advanced Facial</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              placeholder="A note about your visit (optional)"
              className="sm:col-span-2 min-h-28 bg-soft-white/80 border-border"
            />
            <button
              type="submit"
              className="sm:col-span-2 mt-2 w-full py-4 bg-deep-plum text-cream text-xs uppercase tracking-[0.3em] rounded-full hover:bg-rose-gold hover:shadow-[0_0_40px_oklch(0.71_0.082_55/0.5)] transition-all duration-500"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
