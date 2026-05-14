import spa1 from "@/assets/spa1.jpg";
import spa2 from "@/assets/spa2.jpg";
import spa3 from "@/assets/spa3.jpg";
import spa4 from "@/assets/spa4.jpg";
import spa5 from "@/assets/spa5.jpg";
import spa6 from "@/assets/spa6.jpg";
import spa7 from "@/assets/spa7.jpg";
import spa8 from "@/assets/spa8.jpg";
import p1 from "@/assets/product1.jpg";
import p2 from "@/assets/product2.jpg";
import p3 from "@/assets/product3.jpg";
import p4 from "@/assets/product4.jpg";

const row1 = [spa1, spa3, spa6, spa8, spa7, spa5, spa4, spa2];
const row2 = [p2, spa2, p1, spa7, p3, spa8, p4, spa6];

function Row({ images, dir }: { images: string[]; dir: "left" | "right" }) {
  const doubled = [...images, ...images];
  return (
    <div className="marquee-wrapper marquee-mask overflow-hidden">
      <div className={`marquee-track ${dir === "left" ? "marquee-left" : "marquee-right"}`}>
        {doubled.map((src, i) => (
          <div
            key={i}
            className="relative w-[260px] h-[360px] md:w-[300px] md:h-[420px] shrink-0 rounded-2xl overflow-hidden group"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ImageMarquee() {
  return (
    <section id="gallery" className="py-28 md:py-36 bg-cream overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-16 px-6">
        <span className="rose-rule mb-6">Visual Diary</span>
        <h2 className="font-display text-5xl md:text-6xl italic text-deep-plum mt-6">
          A Glimpse Into Your Journey
        </h2>
      </div>

      <div className="space-y-6">
        <Row images={row1} dir="left" />
        <Row images={row2} dir="right" />
      </div>
    </section>
  );
}
