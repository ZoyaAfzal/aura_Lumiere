import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import p1 from "@/assets/product1.jpg";
import p2 from "@/assets/product2.jpg";
import p3 from "@/assets/product3.jpg";
import p4 from "@/assets/product4.jpg";

const products = [
  { img: p1, name: "Radiant Reverie", price: "$84", was: "$110" },
  { img: p2, name: "Celestial Serenade", price: "$96", was: "$128" },
  { img: p3, name: "Velvet Whispers", price: "$72", was: "$95" },
  { img: p4, name: "Mystic Mirage", price: "$118", was: "$148" },
  { img: p1, name: "Aurora Glow", price: "$64", was: "$82" },
  { img: p3, name: "Botanical Dew", price: "$78", was: "$99" },
];

export function Products() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [, setIdx] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => setIdx(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="shop" className="py-28 md:py-36 bg-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="rose-rule mb-6">Hot Products</span>
            <h2 className="font-display text-5xl md:text-6xl italic text-deep-plum mt-4">
              Curated Beauty Essentials
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="size-12 rounded-full border border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-cream transition-all flex items-center justify-center"
              aria-label="Previous"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              onClick={scrollNext}
              className="size-12 rounded-full border border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-cream transition-all flex items-center justify-center"
              aria-label="Next"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-6">
            {products.map((p, i) => (
              <div
                key={i}
                className="shrink-0 basis-[85%] sm:basis-[48%] lg:basis-[24%] group"
              >
                <div className="relative bg-blush/40 rounded-3xl overflow-hidden aspect-[3/4]">
                  <img src={p.img} alt={p.name} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-champagne text-deep-plum text-[10px] uppercase tracking-[0.25em] rounded-full">
                    Sale
                  </span>
                  <button className="absolute bottom-4 left-4 right-4 py-3 bg-deep-plum text-cream text-xs uppercase tracking-[0.25em] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    Add to Cart
                  </button>
                </div>
                <div className="mt-5 px-1">
                  <div className="flex gap-0.5 text-rose-gold mb-2">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="size-3 fill-rose-gold" />
                    ))}
                  </div>
                  <h3 className="font-display text-2xl text-deep-plum">{p.name}</h3>
                  <div className="mt-1 flex items-baseline gap-3">
                    <span className="text-deep-plum font-medium">{p.price}</span>
                    <span className="text-muted-foreground line-through text-sm">{p.was}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
