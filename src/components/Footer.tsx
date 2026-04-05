import brandLogo from "@/assets/pandacrest-transparent-logo.png";
import { Youtube, Twitter, Facebook, Instagram, MessageCircle } from "lucide-react";
import SectionLink from "@/components/SectionLink";

const Footer = () => (
  <footer className="border-t border-border/80 bg-gradient-to-br from-[#0f4776] via-[#17639d] to-[#0b3354] text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="brand-orange-glow">
              <img src={brandLogo} alt="Panda Crest" className="brand-logo-pop h-16 w-auto object-contain" />
            </div>
            <div>
              <span className="block font-display text-xl font-bold">Panda Crest</span>
              <span className="text-[11px] uppercase tracking-[0.32em] text-white/70">International School</span>
            </div>
          </div>
          <p className="text-sm text-white/78">
            Nurturing young minds from DayCare to UKG with love, creativity, and excellence.
          </p>
        </div>
        <div>
          <h4 className="font-display font-bold mb-3">Quick Links</h4>
          <nav className="space-y-2 text-sm text-white/78">
            <SectionLink to="/about" className="block hover:text-white transition-colors">About Us</SectionLink>
            <SectionLink to="/admissions" className="block hover:text-white transition-colors">Admissions</SectionLink>
            <SectionLink to="/curriculum" className="block hover:text-white transition-colors">Curriculum</SectionLink>
            <SectionLink to="/why-pandacrest" className="block hover:text-white transition-colors">Why PandaCrest</SectionLink>
            <SectionLink to="/news" className="block hover:text-white transition-colors">News & Events</SectionLink>
          </nav>
        </div>
        <div>
          <h4 className="font-display font-bold mb-3">Programs</h4>
          <nav className="space-y-2 text-sm text-white/78">
            <SectionLink to="/curriculum" className="block hover:text-white transition-colors">DayCare</SectionLink>
            <SectionLink to="/curriculum" className="block hover:text-white transition-colors">Nursery</SectionLink>
            <SectionLink to="/curriculum" className="block hover:text-white transition-colors">LKG</SectionLink>
            <SectionLink to="/curriculum" className="block hover:text-white transition-colors">UKG</SectionLink>
            <SectionLink to="/curriculum/activities" className="block hover:text-white transition-colors">Activities</SectionLink>
          </nav>
        </div>
        <div>
          <h4 className="font-display font-bold mb-3">Follow Us</h4>
          <div className="flex gap-3">
            <a href="https://www.youtube.com/@PandaCrest" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-white/20 bg-[#ff3b30]/20 text-[#ffd1ce] hover:bg-[#ff3b30]/30 transition-colors shadow-card" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="https://x.com/the_pandacrest" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-white/20 bg-slate-950 text-white hover:bg-slate-900 transition-colors shadow-card" aria-label="Twitter / X">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61574381346720" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-white/20 bg-[#1877f2]/20 text-[#d7e8ff] hover:bg-[#1877f2]/32 transition-colors shadow-card" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/pandacrest" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-white/20 bg-gradient-to-br from-[#f58529]/24 via-[#dd2a7b]/24 to-[#515bd4]/24 text-[#ffe0ec] hover:from-[#f58529]/34 hover:via-[#dd2a7b]/34 hover:to-[#515bd4]/34 transition-colors shadow-card" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-white/20 bg-[#25d366]/20 text-[#e7ffef] hover:bg-[#25d366]/32 transition-colors shadow-card" aria-label="WhatsApp">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/18 pt-6 text-center text-sm text-white/72">
        © {new Date().getFullYear()} Panda Crest International School. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
