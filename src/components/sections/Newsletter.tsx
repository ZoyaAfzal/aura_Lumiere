import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [done, setDone] = useState(false);

  return (
    <section className="py-20 bg-sage/30">
      <div className="mx-auto max-w-6xl px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="rose-rule">Stay Close</span>
          <h3 className="font-display italic text-4xl md:text-5xl text-deep-plum mt-4 leading-tight">
            Don't miss exclusive offers
          </h3>
          <p className="mt-3 text-muted-foreground">Subscribe to our newsletter — quiet dispatches, never noise.</p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
            setTimeout(() => setDone(false), 3000);
          }}
          className="relative flex gap-3 bg-soft-white rounded-full p-2 shadow-lg"
        >
          <Input
            required
            type="email"
            placeholder="your@email.com"
            className="border-0 shadow-none focus-visible:ring-0 h-12 bg-transparent px-5"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-deep-plum text-cream text-xs uppercase tracking-[0.25em] rounded-full hover:bg-rose-gold transition-colors whitespace-nowrap"
          >
            Subscribe Now
          </button>

          <AnimatePresence>
            {done && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute -bottom-10 left-0 right-0 text-center text-sm text-rose-gold"
              >
                ✨ Welcome to the journey.
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
}
