import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Baby,
  BookOpen,
  GraduationCap,
  Palette,
  Music,
  Cpu,
  TreePine,
  Drama,
  Sparkles,
  PenTool,
  Shapes,
  MessagesSquare,
  Puzzle,
  Stars,
  Heart,
} from "lucide-react";
import artsCrafts from "@/assets/arts-crafts.jpg";
import musicClass from "@/assets/music-class.jpg";
import classroomImg from "@/assets/classroom-nursery.jpg";
import outdoorPlay from "@/assets/outdoor-play.jpg";
import childrenPlaying from "@/assets/children-playing.jpg";
import teacherReading from "@/assets/teacher-reading.jpg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

gsap.registerPlugin(ScrollTrigger);

const classes = [
  {
    icon: Baby,
    title: "DayCare",
    age: "1.8 to 3 years",
    image: childrenPlaying,
    imageAlt: "Children enjoying Panda Crest daycare care and play",
    shortDesc: "A loving full-day care program with safe routines, guided play, rest, nourishment, and gentle early stimulation.",
    color: "from-[#d8ebff] via-[#f4faff] to-[#c8ddff]",
    iconBg: "bg-sky",
    highlights: ["Safe care", "Play routines", "Rest & comfort", "Early stimulation"],
    popupIntro:
      "Our DayCare program offers a secure, nurturing, and joyful environment for young children who need thoughtful care, comforting routines, supervised play, and age-appropriate engagement throughout the day.",
    pillars: [
      { icon: Heart, title: "Care & Comfort", desc: "Warm caregivers, rest schedules, hygiene support, and a reassuring environment that helps children feel secure." },
      { icon: Sparkles, title: "Playful Stimulation", desc: "Sensory toys, songs, story moments, guided play corners, and simple activities for joyful engagement." },
      { icon: MessagesSquare, title: "Social Warm-Up", desc: "Gentle interaction, sharing routines, teacher bonding, and positive communication with caregivers." },
      { icon: TreePine, title: "Healthy Daily Rhythm", desc: "Balanced time for play, snacks, nap routines, movement, and calm transitions through the day." },
    ],
  },
  {
    icon: Baby,
    title: "Nursery",
    age: "2.5 to 3.5 years",
    image: classroomImg,
    imageAlt: "Panda Crest nursery classroom",
    shortDesc: "A joyful first-school experience focused on language, movement, routine, and sensory discovery.",
    color: "from-[#ffe1cf] via-[#fff4ee] to-[#ffd4b2]",
    iconBg: "bg-peach",
    highlights: ["Sensory play", "Social confidence", "Pre-literacy", "Fine motor growth"],
    popupIntro:
      "Our Nursery curriculum builds security, curiosity, and joyful classroom habits through guided play, stories, songs, movement, and hands-on exploration.",
    pillars: [
      { icon: MessagesSquare, title: "Communication", desc: "Vocabulary building, listening circles, rhymes, storytelling, and expressive speaking." },
      { icon: Puzzle, title: "Thinking Skills", desc: "Sorting, matching, problem-solving, sequencing, and concept discovery through play materials." },
      { icon: Sparkles, title: "Creative Exploration", desc: "Art, music, role play, sensory trays, and themed activity corners for imagination." },
      { icon: PenTool, title: "Motor Readiness", desc: "Grip-building, tracing readiness, balance, movement, and hand-eye coordination." },
    ],
  },
  {
    icon: BookOpen,
    title: "LKG",
    age: "3.5 to 4.5 years",
    image: teacherReading,
    imageAlt: "Teacher guiding LKG learners at Panda Crest",
    shortDesc: "A world-class early-years foundation combining phonics, numeracy, creativity, and confident expression.",
    color: "from-[#dff8f0] via-[#f4fffb] to-[#c6f0e4]",
    iconBg: "bg-mint",
    highlights: ["Phonics readiness", "Number concepts", "Creative expression", "Independent habits"],
    popupIntro:
      "Our LKG program deepens school readiness with a balanced mix of structured learning, exploratory tasks, communication practice, and expressive classroom experiences.",
    pillars: [
      { icon: BookOpen, title: "Early Literacy", desc: "Letter recognition, phonemic awareness, storytelling comprehension, and picture-to-word connection." },
      { icon: Shapes, title: "Math Foundations", desc: "Counting, number values, shapes, patterns, comparisons, and beginning logical reasoning." },
      { icon: Palette, title: "Integrated Creativity", desc: "Craft, music, movement, dramatic play, and thematic projects linked to classroom learning." },
      { icon: Stars, title: "Confidence & Routine", desc: "Independent transitions, classroom participation, self-help skills, and positive learning behaviour." },
    ],
  },
  {
    icon: GraduationCap,
    title: "UKG",
    age: "4.5 to 5.5 years",
    image: artsCrafts,
    imageAlt: "UKG children engaged in creative classroom learning",
    shortDesc: "A premium school-readiness stage with stronger literacy, numeracy, inquiry, and primary transition skills.",
    color: "from-[#ebe4ff] via-[#faf7ff] to-[#dad0ff]",
    iconBg: "bg-lavender",
    highlights: ["Reading readiness", "Early writing", "Numeracy confidence", "Primary transition"],
    popupIntro:
      "Our UKG curriculum prepares children for a successful move to primary school through stronger academic readiness, inquiry-based learning, communication, and self-management.",
    pillars: [
      { icon: PenTool, title: "Reading & Writing", desc: "Blending, sight words, sentence readiness, guided writing practice, and comprehension support." },
      { icon: Cpu, title: "Numeracy & Reasoning", desc: "Operations readiness, measurement, sequencing, classification, and practical math tasks." },
      { icon: Sparkles, title: "Discovery & Projects", desc: "Theme-based science exposure, observation, questioning, experimentation, and presentations." },
      { icon: GraduationCap, title: "School Readiness", desc: "Task completion, focus, confidence, collaboration, and smooth transition to Grade 1 expectations." },
    ],
  },
];

const activities = [
  { icon: Palette, name: "Arts & Crafts", color: "bg-peach" },
  { icon: Music, name: "Music & Rhymes", color: "bg-sky" },
  { icon: Cpu, name: "Innovation Lab", color: "bg-mint" },
  { icon: Drama, name: "Dance & Drama", color: "bg-lavender" },
  { icon: TreePine, name: "Outdoor Play", color: "bg-sunshine" },
];

const CurriculumSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="curriculum" ref={ref} className="py-16 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Our <span className="text-gradient">Curriculum</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
          A world-class early years curriculum for DayCare, Nursery, LKG, and UKG that blends loving care, joyful discovery, academic readiness, creativity, communication, and confident child development.
        </p>

        <div className="grid gap-7 md:grid-cols-2 2xl:grid-cols-4 mb-12">
          {classes.map((c) => (
            <Dialog key={c.title}>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className={`class-card pastel-card group relative flex h-full overflow-hidden rounded-[34px] bg-gradient-to-br ${c.color} p-4 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover md:p-5`}
                >
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/30 blur-2xl" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.7),transparent_38%)]" />
                  <div className="surface-card relative flex min-h-[28rem] w-full flex-col rounded-[30px] bg-white/92 p-5 md:min-h-[29rem] md:p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className={`inline-flex h-16 w-16 items-center justify-center rounded-[22px] ${c.iconBg} shadow-card ring-1 ring-foreground/10`}>
                        <c.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                      </div>
                      <span className="rounded-full bg-foreground px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-sm">
                        View Curriculum
                      </span>
                    </div>
                    <div className="relative mt-5 overflow-hidden rounded-[26px] border border-white/70 bg-white/80 shadow-card">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.75),transparent_35%)]" />
                      <div className="absolute inset-x-6 bottom-4 z-10 rounded-2xl bg-white/84 px-4 py-2 shadow-card backdrop-blur-sm">
                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                          Age {c.age}
                        </span>
                      </div>
                      <img
                        src={c.image}
                        alt={c.imageAlt}
                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-52"
                        loading="lazy"
                        width={1024}
                        height={768}
                      />
                    </div>
                    <div className="mt-5">
                      <h3 className="font-display text-[2rem] font-extrabold leading-none text-foreground md:text-[2.25rem]">{c.title}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-foreground/85 md:text-[15px]">{c.shortDesc}</p>
                    <div className="mt-auto pt-5">
                      <div className="flex flex-wrap gap-2.5">
                        {c.highlights.map((item) => (
                          <span key={item} className="rounded-full bg-muted px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-sm ring-1 ring-foreground/5">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              </DialogTrigger>

              <DialogContent className="max-h-[90vh] max-w-6xl overflow-hidden rounded-[32px] border-white/70 bg-background/95 p-0 shadow-card-hover backdrop-blur-xl">
                <div className={`max-h-[90vh] overflow-y-auto rounded-[32px] bg-gradient-to-br ${c.color}`}>
                  <div className="sticky top-0 z-10 border-b border-white/60 bg-white/72 px-6 py-5 backdrop-blur-xl md:px-8">
                    <DialogHeader className="text-left">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="inline-flex h-16 w-16 items-center justify-center rounded-[22px] bg-white shadow-card ring-1 ring-foreground/10">
                            <c.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                          </div>
                          <div>
                            <DialogTitle className="font-display text-3xl font-extrabold text-foreground md:text-4xl">
                              {c.title} Curriculum
                            </DialogTitle>
                            <DialogDescription className="mt-1 text-base text-foreground/75">
                              Age group: {c.age}
                            </DialogDescription>
                          </div>
                        </div>
                        <div className="rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-primary ring-1 ring-primary/10">
                          Premium Early Years
                        </div>
                      </div>
                    </DialogHeader>
                  </div>

                  <div className="p-6 md:p-8">
                  <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="surface-card rounded-[26px] bg-white/94 p-5 md:p-6">
                      <div className="mb-5 overflow-hidden rounded-[22px] border border-white/70 bg-white shadow-card">
                        <img
                          src={c.image}
                          alt={c.imageAlt}
                          className="h-64 w-full object-cover md:h-72"
                          loading="lazy"
                          width={1280}
                          height={720}
                        />
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-display text-xl font-bold text-foreground">Program Overview</h4>
                        <span className="rounded-full bg-accent/12 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                          View Details
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.popupIntro}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {c.highlights.map((item) => (
                          <span key={item} className="rounded-full bg-background px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-4 content-start">
                      {c.pillars.map((pillar) => (
                        <div key={pillar.title} className="surface-card rounded-[22px] bg-white/94 p-4 md:p-5">
                          <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-background shadow-sm">
                              <pillar.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                            </div>
                            <div>
                              <h5 className="font-display text-lg font-bold text-foreground">{pillar.title}</h5>
                              <p className="mt-1 text-sm text-muted-foreground">{pillar.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-8 items-center mb-14">
          <div className="brand-panel p-6 md:p-8">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">What makes PandaCrest world-class</h3>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="surface-card rounded-2xl bg-white/92 p-4">
                <h4 className="font-display text-lg font-bold text-foreground">Phonics & Literacy</h4>
                <p className="mt-2 text-sm text-muted-foreground">Age-appropriate pre-reading, vocabulary, expression, listening, and writing readiness.</p>
              </div>
              <div className="surface-card rounded-2xl bg-white/92 p-4">
                <h4 className="font-display text-lg font-bold text-foreground">Math Thinking</h4>
                <p className="mt-2 text-sm text-muted-foreground">Hands-on numbers, patterns, shapes, comparisons, sequencing, and logical reasoning.</p>
              </div>
              <div className="surface-card rounded-2xl bg-white/92 p-4">
                <h4 className="font-display text-lg font-bold text-foreground">Creativity & Expression</h4>
                <p className="mt-2 text-sm text-muted-foreground">Art, music, movement, drama, storytelling, and imaginative classroom experiences.</p>
              </div>
              <div className="surface-card rounded-2xl bg-white/92 p-4">
                <h4 className="font-display text-lg font-bold text-foreground">Life Skills & Readiness</h4>
                <p className="mt-2 text-sm text-muted-foreground">Confidence, independence, social habits, routines, focus, and school-readiness behaviour.</p>
              </div>
              <div className="surface-card rounded-2xl bg-white/92 p-4">
                <h4 className="font-display text-lg font-bold text-foreground">DayCare Care Model</h4>
                <p className="mt-2 text-sm text-muted-foreground">Safe supervision, comfort routines, guided play, nap rhythm, and loving caregiver attention for young children.</p>
              </div>
              <div className="surface-card rounded-2xl bg-white/92 p-4">
                <h4 className="font-display text-lg font-bold text-foreground">3D Learning Spaces</h4>
                <p className="mt-2 text-sm text-muted-foreground">Immersive classroom corners, visual storytelling, tactile materials, and image-rich environments that feel engaging and premium.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={classroomImg} alt="Curriculum classroom learning" className="rounded-3xl shadow-card-hover w-full h-56 object-cover col-span-2" loading="lazy" width={1024} height={768} />
            <img src={outdoorPlay} alt="Outdoor learning and play" className="rounded-3xl shadow-card-hover w-full h-44 object-cover" loading="lazy" width={1024} height={768} />
            <img src={musicClass} alt="Music and rhythm session" className="rounded-3xl shadow-card-hover w-full h-44 object-cover" loading="lazy" width={1024} height={768} />
          </div>
        </div>

        <div id="activities">
          <h3 className="text-center font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
            Enrichment & Experiences
          </h3>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {activities.map((a) => (
                <div key={a.name} className={`activity-item ${a.color} pastel-card rounded-2xl p-5 text-center hover:shadow-card-hover hover:scale-105 transition-all`}>
                  <a.icon className="w-8 h-8 mx-auto mb-2 text-primary" aria-hidden="true" />
                  <span className="text-sm font-bold text-foreground">{a.name}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <img
                src={artsCrafts}
                alt="Children doing arts and crafts"
                className="rounded-3xl shadow-card-hover w-full h-48 object-cover"
                loading="lazy"
                width={1024}
                height={768}
              />
              <img
                src={musicClass}
                alt="Music class at Panda Crest"
                className="rounded-3xl shadow-card-hover w-full h-48 object-cover"
                loading="lazy"
                width={1024}
                height={768}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
