import { useEffect, useState } from "react";
import { Youtube, Twitter, Facebook, Instagram, MessageCircle } from "lucide-react";

const socials = [
  { icon: Youtube, href: "https://www.youtube.com/@PandaCrest", label: "YouTube", className: "bg-[#ff3b30]/20 text-[#ff7d75] hover:bg-[#ff3b30]/30" },
  { icon: Twitter, href: "https://x.com/the_pandacrest", label: "Twitter / X", className: "bg-slate-900 text-white hover:bg-slate-800" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61574381346720", label: "Facebook", className: "bg-[#1877f2]/20 text-[#7cb6ff] hover:bg-[#1877f2]/30" },
  { icon: Instagram, href: "https://www.instagram.com/pandacrest", label: "Instagram", className: "bg-gradient-to-br from-[#f58529]/22 via-[#dd2a7b]/22 to-[#515bd4]/22 text-[#ff98c0] hover:from-[#f58529]/32 hover:via-[#dd2a7b]/32 hover:to-[#515bd4]/32" },
  { icon: MessageCircle, href: "https://wa.me/919876543210", label: "WhatsApp", className: "bg-[#25d366]/20 text-[#73f2a0] hover:bg-[#25d366]/30" },
];

const FloatingSocial = () => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setCollapsed(window.scrollY > 220);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 lg:flex">
      <div
        className={`flex flex-col gap-3 rounded-[28px] border border-border/80 bg-white/82 p-2.5 shadow-card backdrop-blur-xl transition-all duration-300 ${
          collapsed ? "scale-[0.82] opacity-88" : "scale-100 opacity-100"
        }`}
      >
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className={`group flex items-center overflow-hidden rounded-2xl border border-border/70 shadow-card transition-all duration-300 ${
              collapsed ? "w-10 hover:w-36" : "w-12 hover:w-40"
            } ${s.className}`}
          >
            <div className={`flex flex-shrink-0 items-center justify-center ${collapsed ? "h-10 w-10" : "h-12 w-12"}`}>
              <s.icon className={`${collapsed ? "h-4 w-4" : "h-[18px] w-[18px]"}`} />
            </div>
            <span
              className={`pr-4 text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                collapsed ? "max-w-0 opacity-0 group-hover:max-w-[7rem] group-hover:opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              {s.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FloatingSocial;
