import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroSchool from "@/assets/hero-school.png";
import schoolBuilding from "@/assets/school-building.jpg";
import childrenPlaying from "@/assets/children-playing.jpg";
import teacherReading from "@/assets/teacher-reading.jpg";
import classroomImg from "@/assets/classroom-nursery.jpg";
import activitiesImg from "@/assets/activities.jpg";
import { Sparkles, GraduationCap, Heart } from "lucide-react";
import SectionLink from "@/components/SectionLink";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", { y: 60, opacity: 0, duration: 1, delay: 0.2, ease: "power3.out" });
      gsap.from(".hero-tagline", { y: 40, opacity: 0, duration: 1, delay: 0.5, ease: "power3.out" });
      gsap.from(".hero-buttons", { y: 30, opacity: 0, duration: 0.8, delay: 0.8, ease: "power3.out" });
      gsap.from(".hero-badge", { scale: 0, opacity: 0, duration: 0.6, delay: 1.1, ease: "back.out(2)", stagger: 0.15 });
      gsap.from(".hero-image", { y: 40, opacity: 0, duration: 0.8, delay: 0.6, ease: "power3.out", stagger: 0.15 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center gradient-hero overflow-hidden pt-28 pb-6 md:pt-32 md:pb-10">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-peach/50 animate-float" />
      <div className="absolute bottom-32 right-20 w-14 h-14 rounded-full bg-lavender/60 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-40 right-40 w-8 h-8 rounded-full bg-sunshine/50 animate-bounce-gentle" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[rgba(255,197,133,0.20)] to-transparent" />

      <div className="container mx-auto px-4 lg:pl-32 xl:pl-36 2xl:pl-40">
        <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="text-center lg:text-left lg:pr-4">
            <div className="hero-badge inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-primary shadow-card ring-1 ring-primary/10">
              <Sparkles className="h-4 w-4" />
              Starting March 2027
            </div>

            <h1 className="hero-title mt-4 font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-[0.95]">
              A Brighter Start
              <br />
              for Every{" "}
              <span className="text-gradient">Little Learner</span>
            </h1>
            <p className="hero-tagline mt-4 font-display text-xl md:text-2xl lg:text-3xl font-bold text-muted-foreground">
              DayCare to UKG with joy, care, and world-class foundations
            </p>
            <p className="hero-tagline mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Panda Crest opens in March 2027 with playful discovery, loving mentorship, and a distinctive visual identity that children remember. The result is a school brand that feels warm, safe, and proudly premium from the very first glance.
            </p>

            <div className="hero-buttons mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
              <SectionLink
                to="/admissions"
                className="px-8 py-3.5 rounded-full bg-accent text-accent-foreground font-bold text-base shadow-float hover:shadow-card-hover hover:scale-105 transition-all"
              >
                Start Admission
              </SectionLink>
              <SectionLink
                to="/contact"
                className="px-8 py-3.5 rounded-full bg-card text-foreground font-bold text-base shadow-card hover:shadow-card-hover hover:scale-105 transition-all border border-border"
              >
                Contact Us
              </SectionLink>
              <SectionLink
                to="/why-pandacrest"
                className="px-8 py-3.5 rounded-full gradient-cool text-primary-foreground font-bold text-base hover:opacity-90 transition-opacity"
              >
                Why PandaCrest
              </SectionLink>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="hero-image rounded-[28px] overflow-hidden shadow-card-hover">
                <img src={classroomImg} alt="Panda Crest classroom learning" className="h-44 w-full object-cover" loading="eager" width={1024} height={768} />
              </div>
              <div className="hero-image rounded-[28px] overflow-hidden shadow-card-hover">
                <img src={activitiesImg} alt="Children taking part in Panda Crest activities" className="h-44 w-full object-cover" loading="eager" width={1024} height={768} />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="hero-image brand-panel p-4 md:p-5">
              <div className="grid gap-4 sm:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-[28px] bg-gradient-to-br from-white to-primary/10 p-4 shadow-card">
                  <img
                    src={heroSchool}
                    alt="Panda Crest brand illustration"
                    className="w-full rounded-[22px] object-cover"
                    loading="eager"
                    width={1024}
                    height={1024}
                  />
                </div>
                <div className="grid gap-4">
                  <div className="hero-image rounded-[28px] overflow-hidden shadow-card-hover">
                    <img src={schoolBuilding} alt="Panda Crest school building" className="w-full h-44 object-cover" loading="eager" width={1280} height={720} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="hero-image rounded-[24px] overflow-hidden shadow-card-hover">
                      <img src={childrenPlaying} alt="Children playing together" className="w-full h-36 object-cover" loading="eager" width={1024} height={768} />
                    </div>
                    <div className="hero-image rounded-[24px] overflow-hidden shadow-card-hover">
                      <img src={teacherReading} alt="Teacher reading to children" className="w-full h-36 object-cover" loading="eager" width={1024} height={768} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="hero-badge flex items-center gap-2 rounded-2xl bg-white/85 p-3 shadow-card animate-float">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <span className="text-xs font-bold text-foreground">Play & Learn</span>
                </div>
                <div className="hero-badge flex items-center gap-2 rounded-2xl bg-white/85 p-3 shadow-card animate-float" style={{ animationDelay: "0.5s" }}>
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="text-xs font-bold text-foreground">Expert Teachers</span>
                </div>
                <div className="hero-badge flex items-center gap-2 rounded-2xl bg-white/85 p-3 shadow-card animate-float" style={{ animationDelay: "1s" }}>
                  <Heart className="w-5 h-5 text-destructive" />
                  <span className="text-xs font-bold text-foreground">Safe & Caring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
