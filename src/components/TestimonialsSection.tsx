import { useEffect, useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma", role: "Parent of Nursery Student", text: "My daughter absolutely loves going to school every day. The teachers are caring, the campus feels safe, and the learning-through-play approach has helped her blossom with confidence." },
  { name: "Rajesh Kumar", role: "Parent of LKG Student", text: "We saw a beautiful change in our son's communication skills within a few weeks. Panda Crest feels warm, organised, and genuinely focused on every child's growth." },
  { name: "Anita Patel", role: "Parent of UKG Student", text: "The curriculum is strong, balanced, and age-appropriate. Our child is learning phonics, numbers, and social habits in a joyful way without feeling pressured." },
  { name: "Sneha Reddy", role: "Parent of Nursery Student", text: "The classroom environment is bright, clean, and child-friendly. My daughter talks about her teachers with so much excitement, which gives us real trust in the school." },
  { name: "Vikram Mehta", role: "Parent of LKG Student", text: "Panda Crest has the right balance of discipline, affection, and creativity. We especially appreciate the regular communication and the attention given to each child's needs." },
  { name: "Neha Kapoor", role: "Parent of UKG Student", text: "The school-readiness support is excellent. Our son has become more independent, expressive, and eager to participate in class and group activities." },
  { name: "Kiran Joshi", role: "Parent of Nursery Student", text: "From the admissions experience to the daily routine, everything feels thoughtful and parent-friendly. The teachers create a lovely first-school experience for children." },
  { name: "Amit Verma", role: "Parent of LKG Student", text: "We love the blend of academics, music, movement, and storytelling. The school feels premium, but it also feels personal and deeply caring at the same time." },
  { name: "Pooja Nair", role: "Parent of UKG Student", text: "The progress in language and social confidence has been wonderful to see. Panda Crest has given our child a strong and happy foundation for the next stage of learning." },
  { name: "Ritu Malhotra", role: "Parent of Nursery Student", text: "The overall atmosphere is cheerful, secure, and beautifully managed. We were looking for a world-class early learning space, and Panda Crest truly stands out." },
];

const TestimonialsSection = () => {
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let frameId = 0;
    let isPaused = false;

    const step = () => {
      if (!isPaused) {
        rail.scrollLeft += 0.45;
        if (rail.scrollLeft >= rail.scrollWidth / 2) {
          rail.scrollLeft = 0;
        }
      }
      frameId = window.requestAnimationFrame(step);
    };

    const pause = () => {
      isPaused = true;
    };

    const resume = () => {
      isPaused = false;
    };

    rail.addEventListener("mouseenter", pause);
    rail.addEventListener("mouseleave", resume);
    rail.addEventListener("focusin", pause);
    rail.addEventListener("focusout", resume);

    frameId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(frameId);
      rail.removeEventListener("mouseenter", pause);
      rail.removeEventListener("mouseleave", resume);
      rail.removeEventListener("focusin", pause);
      rail.removeEventListener("focusout", resume);
    };
  }, []);

  const loopingTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-16 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          What <span className="text-gradient">Parents</span> Say
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Real parent voices that reflect the care, trust, and learning experience children enjoy at Panda Crest.
        </p>

        <div className="brand-panel p-5 md:p-6">
          <div className="mb-4 flex items-center justify-center">
            <p className="text-sm font-semibold text-muted-foreground">
              Hover to pause and read each story
            </p>
          </div>

          <div
            ref={railRef}
            className="flex gap-5 overflow-x-auto pb-3 pr-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {loopingTestimonials.map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                className="pastel-card min-h-[21rem] min-w-[19rem] rounded-[30px] bg-white/92 p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover md:min-w-[22rem]"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Quote className="h-5 w-5" />
                  </div>
                </div>

                <p className="min-h-[132px] text-sm leading-7 text-foreground/88 md:text-[15px]">
                  "{item.text}"
                </p>

                <div className="mt-6 border-t border-border/70 pt-4">
                  <h3 className="font-display text-xl font-bold text-foreground">{item.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
