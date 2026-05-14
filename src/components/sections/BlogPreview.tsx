import { motion } from "framer-motion";
import b1 from "@/assets/blog1.jpg";
import b2 from "@/assets/blog2.jpg";
import b3 from "@/assets/blog3.jpg";
import b4 from "@/assets/blog4.jpg";

const posts = [
  { img: b1, cat: "Makeup Tips", title: "The autumn palette: warmth without weight", excerpt: "Five rose-gold edits that recalibrate the season's wardrobe." },
  { img: b2, cat: "Beauty Vlog", title: "On waves, weight, and a softer hand", excerpt: "Our lead stylist on the post-blowout era of natural movement." },
  { img: b3, cat: "Skin Science", title: "Dewy is a discipline, not a filter", excerpt: "What it actually takes to wake up to skin that catches light." },
  { img: b4, cat: "Rituals", title: "The five-minute evening ceremony", excerpt: "A short protocol that pays back twelve hours of luminosity." },
];

export function BlogPreview() {
  return (
    <section id="blog" className="py-28 md:py-36 bg-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="rose-rule mb-6">Journal</span>
          <h2 className="font-display text-5xl md:text-6xl italic text-deep-plum mt-6">
            Beauty{" "}
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-2 h-3 bg-blush/60 -z-10" />
              Insights
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group flex flex-col sm:flex-row gap-6 p-4 rounded-3xl border border-transparent hover:border-rose-gold/40 hover:shadow-[0_15px_40px_-20px_oklch(0.71_0.082_55/0.4)] transition-all duration-500"
            >
              <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto rounded-2xl overflow-hidden shrink-0">
                <img src={p.img} alt={p.title} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <span className="self-start px-3 py-1 bg-blush/50 text-deep-plum text-[10px] uppercase tracking-[0.25em] rounded-full">
                  {p.cat}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-deep-plum mt-4 leading-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-muted-foreground text-sm">{p.excerpt}</p>
                <a href="#" className="story-link mt-4 self-start text-xs uppercase tracking-[0.3em] text-rose-gold">
                  Read More →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
