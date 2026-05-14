import { Flower2, Instagram, Facebook, Twitter, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80 border-t border-rose-gold/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2 text-cream">
            <Flower2 className="size-5 text-rose-gold" strokeWidth={1.5} />
            <span className="font-display italic text-2xl">Aura Lumière</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cream/60">
            A med spa where science meets serenity — a sanctuary for the modern pursuit of radiance.
          </p>
        </div>

        <div>
          <h4 className="text-cream text-xs uppercase tracking-[0.3em] mb-5">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="size-4 text-rose-gold shrink-0 mt-0.5" /> 12 Rue des Lumières, Paris 75008</li>
            <li className="flex gap-3"><Mail className="size-4 text-rose-gold shrink-0 mt-0.5" /> hello@auralumiere.com</li>
            <li className="flex gap-3"><Phone className="size-4 text-rose-gold shrink-0 mt-0.5" /> +33 1 84 00 00 00</li>
          </ul>
        </div>

        <div>
          <h4 className="text-cream text-xs uppercase tracking-[0.3em] mb-5">Useful Links</h4>
          <ul className="space-y-3 text-sm">
            {["About", "Team", "Style Guide", "Licensing", "Careers"].map((l) => (
              <li key={l}><a href="#" className="story-link hover:text-rose-gold">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-cream text-xs uppercase tracking-[0.3em] mb-5">Opening Hours</h4>
          <ul className="space-y-2 text-sm">
            <li>Mon – Sat: 10AM – 12PM</li>
            <li>Sunday: Closed</li>
          </ul>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="size-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-rose-gold hover:border-rose-gold hover:scale-110 transition-all"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-cream/50">
          <span>
            powered by{" "}
            <a
              href="https://axistechgroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-gold transition-colors underline-offset-4 hover:underline"
            >
              AxisTechGroup
            </a>
          </span>
          <span className="font-display italic">Where Science Meets Serenity</span>
        </div>
      </div>
    </footer>
  );
}
