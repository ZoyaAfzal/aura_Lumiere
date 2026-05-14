import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import bg from "@/assets/video-bg.jpg";

export function VideoBanner() {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      <img src={bg} alt="Aura Lumière in motion" loading="lazy" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-deep-plum/60" />
      <div className="relative h-full flex flex-col items-center justify-center text-cream text-center px-6">
        <span className="rose-rule text-cream/70 mb-8">Beauty in Motion</span>
        <h2 className="font-display italic text-5xl md:text-7xl max-w-3xl">
          Explore Beauty in Motion
        </h2>

        <button
          onClick={() => setOpen(true)}
          className="mt-12 relative size-20 md:size-24 rounded-full bg-cream/15 backdrop-blur-md border border-cream/30 flex items-center justify-center pulse-ring hover:bg-cream/25 transition-all"
          aria-label="Play video"
        >
          <motion.span
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full"
          />
          <Play className="size-8 text-cream fill-cream ml-1" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[60] bg-charcoal/90 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-charcoal rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 z-10 size-10 rounded-full bg-cream/10 hover:bg-cream/20 text-cream flex items-center justify-center"
              >
                <X className="size-5" />
              </button>
              <iframe
                className="size-full"
                src="https://www.youtube.com/embed/XHOmBV4js_E?autoplay=1"
                title="Spa video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
