import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { MaterialStory } from "@/components/material-story";
import { Navigation } from "@/components/navigation";
import { Newsletter } from "@/components/newsletter";
import { ProcessTimeline } from "@/components/process-timeline";
import { ProductShowcase } from "@/components/product-showcase";
import { Testimonials } from "@/components/testimonials";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <ProductShowcase />
        <MaterialStory />
        <ProcessTimeline />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
