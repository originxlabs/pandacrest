import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  House,
  Building2,
  ClipboardCheck,
  BookOpenCheck,
  Newspaper,
  PhoneCall,
  Target,
  HeartHandshake,
  Users,
  FileBadge2,
  Send,
  Baby,
  Shapes,
  GraduationCap,
  Palette,
} from "lucide-react";
import brandLogo from "@/assets/pandacrest-transparent-logo.png";
import EnquiryDialog from "@/components/EnquiryDialog";
import SectionLink from "@/components/SectionLink";

const leftMenu = [
  { label: "Home", href: "/", icon: House },
  {
    label: "About Us",
    href: "/about",
    icon: Building2,
    children: [
      { label: "Vision & Mission", href: "/about", icon: Target },
      { label: "Philosophy", href: "/about", icon: HeartHandshake },
      { label: "Our Teachers", href: "/about", icon: Users },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    icon: ClipboardCheck,
    children: [
      { label: "Process", href: "/admissions/process", icon: ClipboardCheck },
      { label: "Fee Structure", href: "/admissions/fee-structure", icon: FileBadge2 },
      { label: "Apply Online", href: "/admissions/apply-online", icon: Send },
    ],
  },
];

const rightMenu = [
  {
    label: "Curriculum",
    href: "/curriculum",
    icon: BookOpenCheck,
    children: [
      { label: "DayCare", href: "/curriculum", icon: Baby },
      { label: "Nursery", href: "/curriculum", icon: Baby },
      { label: "LKG", href: "/curriculum", icon: Shapes },
      { label: "UKG", href: "/curriculum", icon: GraduationCap },
      { label: "Activities", href: "/curriculum/activities", icon: Palette },
    ],
  },
  { label: "News & Events", href: "/news", icon: Newspaper },
  { label: "Contact", href: "/contact", icon: PhoneCall },
];

const allMenuItems = [...leftMenu, ...rightMenu];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderMenuItem = (item: typeof leftMenu[0]) => (
    <div
      key={item.label}
      className="relative"
      onMouseEnter={() => setActiveDropdown(item.label)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <SectionLink
        to={item.href}
        onClick={() => setActiveDropdown(item.children ? item.label : null)}
        className="whitespace-nowrap px-3 py-2 rounded-lg text-sm font-medium text-foreground/90 hover:text-primary hover:bg-mint transition-all flex items-center gap-2"
      >
        <item.icon className="h-4 w-4 text-primary/80" />
        {item.label}
        {item.children && <ChevronDown className="w-3 h-3" />}
      </SectionLink>
      {item.children && activeDropdown === item.label && (
        <div className="absolute top-full left-0 mt-1 bg-card rounded-xl shadow-card-hover border border-border p-2 min-w-[220px] animate-scale-in z-50">
          {item.children.map((child) => (
            <SectionLink
              key={child.label}
              to={child.href}
              onClick={() => setActiveDropdown(null)}
              className="whitespace-nowrap flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-foreground/70 hover:text-primary hover:bg-mint transition-all"
            >
              <child.icon className="h-3.5 w-3.5 text-primary/75" />
              {child.label}
            </SectionLink>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/88 backdrop-blur-xl shadow-card border-b border-border/70" : "bg-background/82 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-[6rem] md:h-[6.75rem]">
        <div className="hidden lg:flex items-center gap-1 flex-1 justify-end">
          {leftMenu.map(renderMenuItem)}
        </div>

        <SectionLink
          to="/"
          className="brand-orange-glow hidden lg:flex items-center justify-center mx-4 flex-shrink-0"
        >
          <img src={brandLogo} alt="Panda Crest official logo" className="brand-logo-pop h-24 w-auto md:h-28 object-contain" />
        </SectionLink>

        <SectionLink
          to="/"
          className="brand-orange-glow lg:hidden flex items-center justify-center"
        >
          <img src={brandLogo} alt="Panda Crest official logo" className="brand-logo-pop h-16 w-auto object-contain" />
        </SectionLink>

        <div className="hidden lg:flex items-center gap-1 flex-1">
          {rightMenu.map(renderMenuItem)}
          <div className="ml-3">
            <EnquiryDialog />
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/92 shadow-card hover:bg-muted transition-colors text-foreground border border-border/70"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-border animate-fade-up">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {allMenuItems.map((item) => (
              <div key={item.label}>
                <SectionLink
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="whitespace-nowrap flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-foreground/80 hover:text-primary hover:bg-mint transition-all"
                >
                  <item.icon className="h-4 w-4 text-primary/80" />
                  {item.label}
                </SectionLink>
                {item.children?.map((child) => (
                  <SectionLink
                    key={child.label}
                    to={child.href}
                    onClick={() => setIsOpen(false)}
                    className="whitespace-nowrap flex items-center gap-2 px-6 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary transition-all"
                  >
                    <child.icon className="h-3.5 w-3.5 text-primary/70" />
                    {child.label}
                  </SectionLink>
                ))}
              </div>
            ))}
            <div className="mt-2">
              <EnquiryDialog
                trigger={
                  <button className="w-full whitespace-nowrap px-5 py-2.5 rounded-full bg-accent text-accent-foreground font-semibold text-sm text-center">
                    Enquiry Now
                  </button>
                }
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
