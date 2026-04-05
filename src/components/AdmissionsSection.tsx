import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ClipboardList, FileText, UserCheck, PartyPopper, CalendarDays } from "lucide-react";
import SectionLink from "@/components/SectionLink";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { icon: ClipboardList, step: "01", title: "Enquiry", desc: "Call, WhatsApp, or submit the enquiry form to share your child’s age group and program interest." },
  { icon: CalendarDays, step: "02", title: "Campus Visit", desc: "Visit PandaCrest, explore the classrooms, and meet our admissions team for program guidance." },
  { icon: FileText, step: "03", title: "Registration", desc: "Complete the registration form and submit basic documents such as birth certificate and photographs." },
  { icon: UserCheck, step: "04", title: "Interaction", desc: "Attend a short parent-child interaction so we can understand your child’s comfort, readiness, and needs." },
  { icon: PartyPopper, step: "05", title: "Confirmation", desc: "Receive admission confirmation, complete fee payment, and get your welcome kit with joining details." },
];

const AdmissionsSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="admissions" ref={ref} className="py-16 md:py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          <span className="text-gradient">Admissions</span> Made Easy
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          Join our Panda Crest family through a clear, parent-friendly process.
        </p>

        <div id="admissions-process" className="grid md:grid-cols-2 xl:grid-cols-5 gap-6 mb-10">
          {steps.map((s, i) => (
            <div key={s.step} className="step-card surface-card rounded-3xl p-6 hover:shadow-card-hover hover:-translate-y-2 transition-all relative">
              <span className="font-display text-5xl font-extrabold text-primary/10 absolute top-4 right-4">{s.step}</span>
              <s.icon className="w-8 h-8 text-accent mb-4" aria-hidden="true" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden xl:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/20" />
              )}
            </div>
          ))}
        </div>

        <div id="admissions-fee" className="brand-panel p-6 md:p-8 mb-10">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="surface-card rounded-2xl bg-white/92 p-5">
              <h3 className="font-display text-xl font-bold text-foreground">Documents Needed</h3>
              <p className="mt-2 text-sm text-muted-foreground">Birth certificate, passport-size photos, Aadhaar copy of parent, and previous school details if applicable.</p>
            </div>
            <div className="surface-card rounded-2xl bg-white/92 p-5">
              <h3 className="font-display text-xl font-bold text-foreground">Fee Structure</h3>
              <p className="mt-2 text-sm text-muted-foreground">Fee guidance is shared transparently by our admissions team based on the selected program, age group, timings, and support options.</p>
            </div>
            <div className="surface-card rounded-2xl bg-white/92 p-5">
              <h3 className="font-display text-xl font-bold text-foreground">Parent Support</h3>
              <p className="mt-2 text-sm text-muted-foreground">Our admissions team can help families choose the right entry level and explain timings, routine, and onboarding.</p>
            </div>
          </div>
        </div>

        <div id="admissions-apply" className="text-center">
          <SectionLink
            to="/contact"
            className="inline-block px-10 py-4 rounded-full bg-accent text-accent-foreground font-bold text-lg shadow-float hover:scale-105 transition-all"
          >
            Apply Now
          </SectionLink>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
