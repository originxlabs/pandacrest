import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import classroomImg from "@/assets/classroom-nursery.jpg";
import teacherReading from "@/assets/teacher-reading.jpg";
import schoolBuilding from "@/assets/school-building.jpg";
import childrenPlaying from "@/assets/children-playing.jpg";
import activitiesImg from "@/assets/activities.jpg";
import { Eye, Target, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  { icon: Eye, title: "Our Vision", desc: "To be a leading early childhood education centre that nurtures curious, compassionate, and confident young learners.", color: "bg-mint" },
  { icon: Target, title: "Our Mission", desc: "Creating a safe, stimulating environment where children develop social, emotional, and cognitive skills through play-based learning.", color: "bg-lavender" },
  { icon: Heart, title: "Philosophy", desc: "Every child is unique. We celebrate individuality, foster creativity, and build a foundation of lifelong love for learning.", color: "bg-peach" },
];

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="about" ref={ref} className="relative z-10 bg-white/78 pb-14 pt-10 md:pb-18 md:pt-14 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          About <span className="text-gradient">Panda Crest</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
          A world-class early learning environment designed to spark imagination and nurture growth in every child.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-5">
            <div className="brand-panel p-5">
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-foreground">A warm, modern start for every child</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                PandaCrest is designed as a nurturing early-years campus where children feel secure, inspired, and joyful. Our spaces, teachers, and daily routines are planned to support confidence, communication, creativity, and school readiness.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Families choose PandaCrest for the balance of high-touch care, engaging classrooms, age-appropriate structure, and memorable school experiences that help little learners love coming to school.
              </p>
            </div>
            {pillars.map((p) => (
              <div key={p.title} className={`about-card ${p.color} pastel-card rounded-2xl p-6 hover:shadow-card-hover hover:scale-[1.02] transition-all`}>
                <div className="flex items-center gap-3 mb-2">
                  <p.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  <h3 className="font-display text-xl font-bold text-foreground">{p.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="about-image grid grid-cols-2 gap-4">
            <img
              src={schoolBuilding}
              alt="Panda Crest campus exterior"
              className="rounded-3xl shadow-card-hover w-full h-44 object-cover col-span-2"
              loading="lazy"
              width={1280}
              height={720}
            />
            <img
              src={classroomImg}
              alt="Panda Crest nursery classroom"
              className="rounded-3xl shadow-card-hover w-full h-52 object-cover"
              loading="lazy"
              width={800}
              height={600}
            />
            <img
              src={teacherReading}
              alt="Teacher engaging with students"
              className="rounded-3xl shadow-card-hover w-full h-52 object-cover"
              loading="lazy"
              width={1024}
              height={768}
            />
            <img
              src={childrenPlaying}
              alt="Children playing together"
              className="rounded-3xl shadow-card-hover w-full h-40 object-cover"
              loading="lazy"
              width={1024}
              height={768}
            />
            <img
              src={activitiesImg}
              alt="Panda Crest activity time"
              className="rounded-3xl shadow-card-hover w-full h-40 object-cover"
              loading="lazy"
              width={1024}
              height={768}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
