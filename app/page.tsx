import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { LearningAcademy } from "@/components/learning-academy";
import { MobileAppCTA } from "@/components/mobile-app-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="h-10" /> {/* 40px spacing between sections */}
        <LearningAcademy />
        <MobileAppCTA />
      </main>
      <Footer />
    </>
  );
}
