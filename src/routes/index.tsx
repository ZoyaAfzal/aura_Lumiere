import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { ImageMarquee } from "@/components/sections/ImageMarquee";
import { About } from "@/components/sections/About";
import { VideoBanner } from "@/components/sections/VideoBanner";
import { Products } from "@/components/sections/Products";
import { Testimonials } from "@/components/sections/Testimonials";
import { Booking } from "@/components/sections/Booking";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Newsletter } from "@/components/sections/Newsletter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Aura Lumière — Where Science Meets Serenity" },
      {
        name: "description",
        content:
          "Aura Lumière is a Parisian med spa pairing medical-grade aesthetics with deeply considered ritual. Salt therapy, advanced facials, and more.",
      },
      { property: "og:title", content: "Aura Lumière — Where Science Meets Serenity" },
      { property: "og:description", content: "A sanctuary for transformative beauty and wellness." },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-cream">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <ImageMarquee />
      <About />
      <VideoBanner />
      <Products />
      <Testimonials />
      <Booking />
      <BlogPreview />
      <Newsletter />
      <Footer />
    </main>
  );
}
