import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CurriculumSection from "@/components/CurriculumSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import GallerySection from "@/components/GallerySection";
import NewsEventsSection from "@/components/NewsEventsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import EnquiryDialog from "@/components/EnquiryDialog";
import { routeToSection } from "@/lib/sectionRoutes";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = routeToSection[location.pathname] ?? "home";

    window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "auto", block: "start" });
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <FloatingSocial />
      <div className="fixed bottom-5 right-5 z-40">
        <EnquiryDialog
          trigger={
            <button className="whitespace-nowrap rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-float transition-all hover:scale-105 hover:shadow-card-hover">
              Enquiry Now
            </button>
          }
        />
      </div>
      <HeroSection />
      <AboutSection />
      <CurriculumSection />
      <AdmissionsSection />
      <GallerySection />
      <NewsEventsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
