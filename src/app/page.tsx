import { Navbar } from "@/components/navbar";
import { Cta } from "@/components/sections/cta";
import { DemoSection } from "@/components/sections/demo";
import { Faq } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Pricing } from "@/components/sections/pricing";
import { SocialProof } from "@/components/sections/social-proof";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <DemoSection />
      <Features />
      <SocialProof />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}
