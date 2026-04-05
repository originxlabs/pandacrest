import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import classroomImg from "@/assets/classroom-nursery.jpg";
import teacherReading from "@/assets/teacher-reading.jpg";
import schoolBuilding from "@/assets/school-building.jpg";
import childrenPlaying from "@/assets/children-playing.jpg";
import activitiesImg from "@/assets/activities.jpg";
import artsCraftsImg from "@/assets/arts-crafts.jpg";
import outdoorPlayImg from "@/assets/outdoor-play.jpg";
import musicClassImg from "@/assets/music-class.jpg";
import heroSchoolImg from "@/assets/hero-school.png";
import convergenceVideo from "@/assets/panda-convergence-model.mp4";
import highTechVideo from "@/assets/high-tech-high-touch-equation.mp4";
import { Eye, Target, Heart } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  { icon: Eye, title: "Our Vision", desc: "To be a leading early childhood education centre that nurtures curious, compassionate, and confident young learners.", color: "bg-mint" },
  { icon: Target, title: "Our Mission", desc: "Creating a safe, stimulating environment where children develop social, emotional, and cognitive skills through play-based learning.", color: "bg-lavender" },
  { icon: Heart, title: "Philosophy", desc: "Every child is unique. We celebrate individuality, foster creativity, and build a foundation of lifelong love for learning.", color: "bg-peach" },
];

type AboutSlide = {
  title: string;
  description: string;
  mediaType: "image" | "video";
  src: string;
  alt: string;
};

const aboutSlides: AboutSlide[] = [
  {
    title: "A nurturing school culture",
    description:
      "Every child is welcomed by caring educators who build trust, confidence, and joyful routines from day one.",
    mediaType: "image",
    src: schoolBuilding,
    alt: "Panda Crest school building",
  },
  {
    title: "Modern, engaging classrooms",
    description:
      "Our learning spaces are age-appropriate and activity-led to develop language, social skills, and independent thinking.",
    mediaType: "image",
    src: classroomImg,
    alt: "Panda Crest classroom setup",
  },
  {
    title: "Mentored by passionate teachers",
    description:
      "Teachers guide children through stories, play, and exploration so they feel supported while discovering new interests.",
    mediaType: "image",
    src: teacherReading,
    alt: "Teacher reading to children",
  },
  {
    title: "Play, movement, and expression",
    description:
      "A balance of indoor and outdoor activities helps children grow physically, emotionally, and creatively.",
    mediaType: "image",
    src: childrenPlaying,
    alt: "Children playing and learning together",
  },
  {
    title: "Creative art and craft corners",
    description:
      "Children explore colors, textures, and ideas through guided and free-form art activities that build confidence.",
    mediaType: "image",
    src: artsCraftsImg,
    alt: "Children doing arts and crafts",
  },
  {
    title: "Outdoor discovery and movement",
    description:
      "Structured outdoor play supports gross motor development, teamwork, and joyful social interaction.",
    mediaType: "image",
    src: outdoorPlayImg,
    alt: "Children in outdoor play area",
  },
  {
    title: "Music and rhythm learning",
    description:
      "Songs, rhythm activities, and group participation strengthen listening, language, and expressive skills.",
    mediaType: "image",
    src: musicClassImg,
    alt: "Music class with children",
  },
  {
    title: "Safe, modern learning campus",
    description:
      "The school infrastructure combines safety and child-friendly design to make every day comfortable and secure.",
    mediaType: "image",
    src: heroSchoolImg,
    alt: "Modern Panda Crest campus",
  },
  {
    title: "Hands-on daily activity blocks",
    description:
      "Daily activity periods balance learning outcomes with joy, curiosity, and playful participation.",
    mediaType: "image",
    src: activitiesImg,
    alt: "Panda Crest activities in progress",
  },
  {
    title: "Whole-child development approach",
    description:
      "Academics, social values, communication, and emotional wellbeing are integrated into every classroom routine.",
    mediaType: "image",
    src: classroomImg,
    alt: "Children learning in classroom",
  },
  {
    title: "Panda Convergence Model",
    description:
      "Watch how Panda Crest blends nurturing care, modern methods, and joyful schooling into one learning journey.",
    mediaType: "video",
    src: convergenceVideo,
    alt: "Panda Convergence Model video",
  },
  {
    title: "High-Tech, High-Touch Equation",
    description:
      "This video highlights how technology and human connection work together at Panda Crest for better outcomes.",
    mediaType: "video",
    src: highTechVideo,
    alt: "High-Tech High-Touch Equation video",
  },
];

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(aboutSlides.length);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const syncVideoPlayback = () => {
    const activeIndex = (api?.selectedScrollSnap() ?? 0);

    videoRefs.current.forEach((video, index) => {
      if (!video) {
        return;
      }

      const shouldPlay = open && index === activeIndex;
      if (shouldPlay) {
        void video.play().catch(() => {
          // Keep controls visible so user can play manually if browser blocks autoplay.
        });
        return;
      }

      video.pause();
    });
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateCurrentSlide = () => {
      setCurrentSlide(api.selectedScrollSnap() + 1);
      syncVideoPlayback();
    };

    setTotalSlides(api.scrollSnapList().length);
    updateCurrentSlide();
    api.on("select", updateCurrentSlide);
    api.on("reInit", updateCurrentSlide);

    return () => {
      api.off("select", updateCurrentSlide);
      api.off("reInit", updateCurrentSlide);
    };
  }, [api]);

  useEffect(() => {
    if (open && api) {
      api.scrollTo(0);
    }

    if (!open) {
      videoRefs.current.forEach((video) => video?.pause());
      return;
    }

    syncVideoPlayback();
  }, [open, api]);

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
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="mt-5" size="lg">
                    Explore About Panda Crest
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl p-4 sm:p-6">
                  <DialogHeader>
                    <DialogTitle className="font-display text-2xl">About Panda Crest</DialogTitle>
                    <DialogDescription>
                      Slide through to discover how Panda Crest supports every child with care, creativity, and confident learning.
                    </DialogDescription>
                  </DialogHeader>

                  <Carousel setApi={setApi} opts={{ loop: false }} className="w-full">
                    <CarouselContent>
                      {aboutSlides.map((slide) => (
                        <CarouselItem key={slide.title}>
                          <div className="grid gap-4 md:grid-cols-2 md:items-center">
                            {slide.mediaType === "video" ? (
                              <video
                                ref={(el) => {
                                  videoRefs.current = [...videoRefs.current];
                                  videoRefs.current[aboutSlides.indexOf(slide)] = el;
                                }}
                                className="h-56 w-full rounded-2xl object-cover shadow-card-hover bg-black"
                                controls
                                playsInline
                                muted
                                preload="metadata"
                              >
                                <source src={slide.src} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            ) : (
                              <img
                                src={slide.src}
                                alt={slide.alt}
                                className="h-56 w-full rounded-2xl object-cover shadow-card-hover"
                                loading="lazy"
                              />
                            )}
                            <div>
                              <h4 className="font-display text-xl font-bold text-foreground">{slide.title}</h4>
                              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{slide.description}</p>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>

                  <DialogFooter className="items-center justify-between gap-3 sm:justify-between sm:space-x-0">
                    <p className="text-sm text-muted-foreground">
                      Slide {currentSlide} of {totalSlides}
                    </p>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        onClick={() => api?.scrollPrev()}
                        disabled={!api?.canScrollPrev()}
                      >
                        Previous
                      </Button>
                      <Button onClick={() => api?.scrollNext()} disabled={!api?.canScrollNext()}>
                        Next
                      </Button>
                    </div>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
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
