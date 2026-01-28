import AboutSection from "@/component/AboutSection";
import BlogsSection from "@/component/BlogSection";
import FAQSection from "@/component/FaqSection";
import Footer from "@/component/Footer";
import Hero from "@/component/Hero";
import HighlightSection from "@/component/highlightsection";
import Navbar from "@/component/Navbar";
import TestimonialsSection from "@/component/TestimonialSection";
import ServicesSection from "@/component/Whatwedo";
import WhyChooseUs from "@/component/WhyChooseUs";
import RecentWorks from "@/component/Works";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <AboutSection />
      <HighlightSection />
      <ServicesSection />
      <WhyChooseUs />
      <RecentWorks />
      <TestimonialsSection />
      <FAQSection />
      <BlogsSection />

    </main>
  );
}