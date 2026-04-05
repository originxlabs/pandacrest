import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Megaphone, Clock, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    type: "announcement",
    date: "January 15, 2027",
    title: "Admissions Open for 2027-28",
    desc: "Admissions begin for DayCare, Nursery, LKG, and UKG. Families can start enquiries and reserve their visit slots early.",
    color: "bg-mint",
  },
  {
    type: "event",
    date: "February 20, 2027",
    title: "Open House & School Tour",
    desc: "Families can explore the campus, view the classrooms, meet the teachers, and understand the Panda Crest curriculum before joining.",
    color: "bg-lavender",
  },
  {
    type: "event",
    date: "March 15, 2027",
    title: "Panda Crest Grand Opening",
    desc: "Panda Crest International School opens in March 2027 with a warm campus launch, founder-family welcome, and guided early years orientation.",
    color: "bg-peach",
  },
  {
    type: "event",
    date: "March 22, 2027",
    title: "Parent Orientation Week",
    desc: "Parents receive classroom routines, school timings, care guidance, and onboarding support for a confident first month.",
    color: "bg-sunshine",
  },
  {
    type: "event",
    date: "April 12, 2027",
    title: "Founding Batch Creativity Showcase",
    desc: "Our first learners celebrate art, music, storytelling, and joyful classroom projects with families and teachers.",
    color: "bg-sky",
  },
  {
    type: "event",
    date: "April 26, 2027",
    title: "DayCare & Early Years Experience Day",
    desc: "A guided experience session for families to explore our DayCare and early learning environment with children.",
    color: "bg-mint",
  },
];

const NewsEventsSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="news" ref={ref} className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          News & <span className="text-gradient">Events</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          Stay updated with the latest happenings, upcoming events, and exciting announcements at Panda Crest.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((item, i) => (
            <div
              key={i}
              className={`news-card ${item.color} pastel-card rounded-3xl p-6 hover:shadow-card-hover hover:-translate-y-2 transition-all`}
            >
              <div className="flex items-center gap-2 mb-3">
                {item.type === "event" ? (
                  <Calendar className="w-4 h-4 text-primary" aria-hidden="true" />
                ) : (
                  <Megaphone className="w-4 h-4 text-accent" aria-hidden="true" />
                )}
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {item.type === "event" ? "Event" : "Announcement"}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  {item.date}
                </div>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
