import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import convergenceVideo from "@/assets/panda-convergence-model.mp4";
import highTechVideo from "@/assets/high-tech-high-touch-equation.mp4";
import schoolBuilding from "@/assets/school-building.jpg";
import classroomImg from "@/assets/classroom-nursery.jpg";
import activitiesImg from "@/assets/activities.jpg";
import childrenPlaying from "@/assets/children-playing.jpg";
import artsCrafts from "@/assets/arts-crafts.jpg";
import outdoorPlay from "@/assets/outdoor-play.jpg";
import teacherReading from "@/assets/teacher-reading.jpg";
import musicClass from "@/assets/music-class.jpg";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: schoolBuilding, alt: "School campus" },
  { src: classroomImg, alt: "Nursery classroom" },
  { src: childrenPlaying, alt: "Children playing together" },
  { src: artsCrafts, alt: "Arts and crafts session" },
  { src: outdoorPlay, alt: "Outdoor playground fun" },
  { src: teacherReading, alt: "Teacher reading to kids" },
  { src: musicClass, alt: "Music class" },
  { src: activitiesImg, alt: "Kids doing activities" },
];

const videos = [
  {
    src: convergenceVideo,
    title: "Panda Crest: The Convergence Model",
    description: "A branded introduction to the Panda Crest learning philosophy and campus experience.",
  },
  {
    src: highTechVideo,
    title: "The High-Tech, High-Touch Education Equation",
    description: "A focused look at how Panda Crest blends innovation, care, and early-years excellence.",
  },
];

const GallerySection = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="why-pandacrest" ref={ref} className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Why <span className="text-gradient">PandaCrest</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          Watch Panda Crest through your attached brand videos. These use direct local video playback, so no NotebookLM or embedded external interface appears on screen.
        </p>

        <div className="grid gap-6 lg:grid-cols-2 mb-12">
          {videos.map((video) => (
            <div key={video.title} className="gallery-item brand-panel p-4 md:p-5">
              <div className="surface-card overflow-hidden rounded-[24px] bg-card">
                <video
                  className="w-full aspect-video bg-black"
                  controls
                  playsInline
                  preload="metadata"
                  controlsList="nodownload noremoteplayback"
                  disablePictureInPicture
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="px-1 pt-4">
                <h3 className="font-display text-2xl font-extrabold text-foreground">{video.title}</h3>
                <p className="mt-2 text-sm md:text-base text-muted-foreground">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {images.map((img, i) => (
            <div key={i} className={`gallery-item surface-card rounded-2xl overflow-hidden hover:shadow-card-hover hover:scale-[1.03] transition-all ${i === 0 || i === 3 ? "md:row-span-2" : ""}`}>
              <img src={img.src} alt={img.alt} className={`w-full object-cover ${i === 0 || i === 3 ? "h-48 md:h-full" : "h-48"}`} loading="lazy" width={800} height={600} />
            </div>
          ))}
        </div>

        <p className="text-center mt-4 text-sm text-muted-foreground">
          Explore more from Panda Crest on our{" "}
          <a href="https://www.youtube.com/@PandaCrest" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
            YouTube Channel
          </a>
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
