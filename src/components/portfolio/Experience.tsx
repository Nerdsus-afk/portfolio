import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Briefcase, GraduationCap, Trees } from "lucide-react";

type Category = "experience" | "education";
type Filter = "all" | Category;

const items: {
  icon: typeof Briefcase;
  category: Category;
  title: string;
  org: string;
  period: string;
  points: string[];
}[] = [
  {
    icon: Briefcase,
    category: "experience",
    title: "Apprentice (Incoming)",
    org: "Bank of America · 6.45 LPA",
    period: "Joining 2026",
    points: [
      "Selected through campus placements at SRM IST to join Bank of America as an Apprentice.",
      "Chose BofA over offers from Accenture (AEH · 11 LPA), Infosys (DSE · 7 LPA) and Cognizant (GenC · 4 LPA) to grow long-term in a global engineering org.",
    ],
  },
  {
    icon: Briefcase,
    category: "experience",
    title: "Web Development Intern",
    org: "Opportive",
    period: "Jul 2025 – Aug 2025",
    points: [
      "Improved a Learning Management System with secure authentication, course management, and payments.",
      "Built a real-time chat module with group messaging, reactions and notifications using Socket.IO and Express.",
    ],
  },
  {
    icon: Trees,
    category: "experience",
    title: "Volunteer",
    org: "Nizhal · Environmental Conservation",
    period: "Jun 2024 – Jul 2024",
    points: [
      "Planted saplings, built protective fences and basins, and maintained urban green spaces.",
      "Managed compost pits and helped clean public areas as part of urban greening efforts.",
    ],
  },
  {
    icon: GraduationCap,
    category: "education",
    title: "B.Tech in Computer Science & Engineering",
    org: "SRM Institute of Science and Technology",
    period: "Aug 2022 – Aug 2026 · CGPA 9.16",
    points: [
      "Coursework across Data Structures, Algorithms, OOP, DBMS, Operating Systems, and Machine Learning.",
      "Active in technical events like the SAP VIT Hackathon 2024 and an Entrepreneurship Bootcamp.",
    ],
  },
  {
    icon: GraduationCap,
    category: "education",
    title: "Higher Secondary · CBSE",
    org: "Velammal Vidhyashram",
    period: "Jun 2021 – Jun 2022 · 75.2%",
    points: ["Foundation in Mathematics, Physics, Chemistry and Computer Science."],
  },
  {
    icon: GraduationCap,
    category: "education",
    title: "Secondary Education · CBSE",
    org: "Velammal Vidhyashram",
    period: "Jun 2019 – Jun 2020 · 79.4%",
    points: ["Completed Class 10 with a strong foundation across core subjects."],
  },
];

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
];

export const Experience = () => {
  const [filter, setFilter] = useState<Filter>("all");
  const [showJump, setShowJump] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const visible = filter === "all" ? items : items.filter((i) => i.category === filter);

  const handleFilter = (id: Filter) => {
    setFilter(id);
    if (id !== "all") setShowJump(true);
  };

  const scrollToTimeline = () => {
    headingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Hide the jump button when the section heading is in view
  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShowJump(false);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-32 relative">
      <div className="container">
        <div ref={headingRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-amber mb-4">Journey</p>
            <h2 className="font-display text-5xl md:text-7xl tracking-tighter text-gradient">
              Experience &amp; <span className="italic">education.</span>
            </h2>
          </div>

          {/* Toggle */}
          <div
            role="tablist"
            aria-label="Filter timeline"
            className="relative inline-flex p-1 rounded-full border border-border bg-card self-start md:self-end"
          >
            {filters.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => handleFilter(f.id)}
                  className="relative px-5 py-2 text-xs uppercase tracking-[0.2em] rounded-full transition-colors"
                >
                  {active && (
                    <motion.span
                      layoutId="filter-pill"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-gradient-amber shadow-glow"
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      active ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {f.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* vertical line */}
          <div className="absolute left-6 md:left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-gradient-to-b from-amber/60 via-border to-transparent" />

          <div className="space-y-14">
            <AnimatePresence mode="popLayout">
              {visible.map((it, i) => {
                const Icon = it.icon;
                const isRight = i % 2 === 0;
                return (
                  <motion.div
                    layout
                    key={it.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="relative md:grid md:grid-cols-2 md:gap-12"
                  >
                    {/* node */}
                    <div
                      aria-hidden="true"
                      style={{ transform: "translate(-50%, 0)" }}
                      className="pointer-events-none absolute left-6 md:left-1/2 top-4 w-3 h-3 rounded-full bg-amber shadow-glow z-10"
                    />

                    <div className={`pl-16 md:pl-0 ${isRight ? "md:pr-12 md:text-right" : "md:pl-12 md:col-start-2"}`}>
                      <div className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 ${isRight ? "md:flex-row-reverse" : ""}`}>
                        <Icon className="w-4 h-4 text-amber" />
                        <span>{it.period}</span>
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl mb-1">{it.title}</h3>
                      <p className="text-amber font-medium mb-4">{it.org}</p>
                      <ul className={`space-y-2 text-sm text-muted-foreground leading-relaxed ${isRight ? "md:[&_li]:flex-row-reverse" : ""}`}>
                        {it.points.map((p) => (
                          <li key={p} className="flex gap-2">
                            <span className="text-amber mt-1.5 shrink-0 w-1 h-1 rounded-full bg-amber" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Floating jump-to-timeline button */}
      <AnimatePresence>
        {showJump && (
          <motion.button
            type="button"
            onClick={scrollToTimeline}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-amber text-primary-foreground text-xs uppercase tracking-[0.2em] font-medium shadow-glow hover:scale-105 transition-transform"
            aria-label="Scroll back to timeline"
          >
            <ArrowUp className="w-4 h-4" />
            Back to timeline
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
};
