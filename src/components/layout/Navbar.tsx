import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Flower2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Shop", href: "#shop" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "py-4"
          : "py-6"
      }`}
    >
      <div 
        className={`mx-auto transition-all duration-700 ease-in-out px-6 md:px-10 ${
          scrolled 
            ? "max-w-5xl" 
            : "max-w-full"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-700 px-6 py-3 ${
            scrolled
              ? "bg-white/40 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-full"
              : "bg-transparent"
          }`}
        >
          <Link 
            to="/" 
            className={`flex items-center gap-2 transition-colors duration-700 group ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            <div className="relative">
              <Flower2 className="size-5 text-rose-gold transition-transform duration-500 group-hover:rotate-180" strokeWidth={1.5} />
              <div className="absolute inset-0 bg-rose-gold/20 blur-lg rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
            </div>
            <span className="font-display italic text-2xl tracking-wide">Aura Lumière</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
            {links.map((l) => (
              <a 
                key={l.label} 
                href={l.href} 
                className={`relative py-2 transition-colors duration-700 group ${
                  scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className={`inline-flex items-center px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 rounded-full shadow-lg hover:-translate-y-0.5 ${
                scrolled 
                  ? "bg-rose-gold text-cream hover:bg-deep-plum shadow-rose-gold/20 hover:shadow-deep-plum/20" 
                  : "bg-white text-deep-plum hover:bg-rose-gold hover:text-white shadow-white/10"
              }`}
            >
              Book Now
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className={`lg:hidden p-2 rounded-full transition-colors ${
              scrolled ? "text-foreground hover:bg-black/5" : "text-white hover:bg-white/10"
            }`}
            aria-label="Open menu"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-deep-plum text-cream flex flex-col"
          >
            <div className="flex justify-between items-center px-6 py-5">
              <span className="font-display italic text-2xl">Aura Lumière</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="size-6" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-6 text-3xl font-display">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-rose-gold transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-6 px-8 py-3 text-xs uppercase tracking-[0.25em] border border-rose-gold rounded-full"
              >
                Book Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
