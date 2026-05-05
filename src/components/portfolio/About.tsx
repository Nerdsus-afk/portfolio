import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Building2 } from "lucide-react";
import bofaLogo from "@/assets/logos/bofa.png";
import accentureLogo from "@/assets/logos/accenture.png";
import infosysLogo from "@/assets/logos/infosys.png";
import cognizantLogo from "@/assets/logos/cognizant.png";

const skills = [
  { label: "Java & OOP", value: 88 },
  { label: "Python & ML / NLP", value: 84 },
  { label: "DSA & Problem Solving", value: 86 },
  { label: "SQL & Databases", value: 82 },
];

const offers = [
  { company: "Bank of America", role: "Apprentice Software Engineer", ctc: "6.45 LPA", chosen: true, logo: bofaLogo },
  { company: "Accenture", role: "Advanced Engineering (AEH)", ctc: "11 LPA", chosen: false, logo: accentureLogo },
  { company: "Infosys", role: "Digital Specialist Engineer", ctc: "7 LPA", chosen: false, logo: infosysLogo },
  { company: "Cognizant", role: "GenC", ctc: "4 LPA", chosen: false, logo: cognizantLogo },
];

export const About = () => {
  const prefersReducedMotion = useReducedMotion();
  const fadeY = (y: number) =>
    prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y };
  const show = prefersReducedMotion
    ? { opacity: 1 }
    : { opacity: 1, y: 0 };

  return (
  <section id="about" className="py-32 relative scroll-mt-24">
    <div className="container grid lg:grid-cols-12 gap-16">
      <motion.div
        initial={fadeY(40)}
        whileInView={show}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-7"
      >
        <motion.p
          initial={fadeY(12)}
          whileInView={show}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs uppercase tracking-[0.3em] text-amber mb-6"
        >
          About
        </motion.p>
        <motion.h2
          initial={fadeY(24)}
          whileInView={show}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="font-display tracking-tighter text-gradient mb-8 text-balance max-w-[18ch] text-[clamp(1.875rem,5.2vw,3.75rem)] leading-[1.08] md:leading-[1.05]"
        >
          Trying to merge my ambitions <span className="italic text-amber-gradient">before the deadline.</span>
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12, delayChildren: prefersReducedMotion ? 0 : 0.15 } },
          }}
          className="space-y-6 text-muted-foreground text-[clamp(1rem,1.4vw,1.125rem)] leading-[1.75] max-w-[65ch] text-pretty md:text-justify [hyphens:none] [word-break:normal] [overflow-wrap:normal]"
        >
          {[
            <>
              I'm a final-year Computer Science and Engineering student at{" "}
              <span className="relative text-foreground">
                SRM Institute of Science and Technology
                <span className="absolute left-0 -bottom-0.5 h-px w-full bg-gradient-amber opacity-60" aria-hidden />
              </span>
              , graduating in 2026 with a CGPA of{" "}
              <span className="text-amber-gradient font-medium">9.12</span>. I enjoy
              writing clean Java and Python, exploring machine learning, and turning
              ideas into working software.
            </>,
            <>
              I've been fortunate to receive offers from four great companies during
              campus placements, and I've chosen to begin my career at{" "}
              <span className="relative text-foreground">
                Bank of America
                <span className="absolute left-0 -bottom-0.5 h-px w-full bg-gradient-amber opacity-60" aria-hidden />
              </span>{" "}
              as an Apprentice Software Engineer —
              excited to grow in a place where engineering meets impact at scale.
            </>,
            <>
              Most recently I interned at{" "}
              <span className="relative text-foreground">
                Opportive
                <span className="absolute left-0 -bottom-0.5 h-px w-full bg-gradient-amber opacity-60" aria-hidden />
              </span>{" "}
              as a Web Development Intern, contributing to a Learning Management System and
              a real-time chat module with Socket.IO. Outside coursework I tinker with
              NLP, sharpen my DSA, and daily-drive Arch Linux with Hyprland.
            </>,
          ].map((content, i) => (
            <motion.p
              key={i}
              variants={{
                hidden: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
                show: prefersReducedMotion
                  ? { opacity: 1, transition: { duration: 0.01 } }
                  : { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              {content}
            </motion.p>
          ))}
        </motion.div>

        {/* Offers */}
        <div className="mt-12">
          <p className="text-xs uppercase tracking-[0.3em] text-amber mb-5 flex items-center gap-2">
            <Building2 className="w-3.5 h-3.5" /> Placement offers
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {offers.map((o) => (
              <div
                key={o.company}
                className={`relative p-5 rounded-2xl border transition-all overflow-hidden ${
                  o.chosen
                    ? "border-amber bg-card shadow-glow"
                    : "border-border bg-card/60"
                }`}
              >
                {o.chosen && (
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.18em] text-amber font-medium z-10">
                    <CheckCircle2 className="w-3 h-3" /> Chosen
                  </span>
                )}
                <div className="flex items-center justify-between gap-4 min-h-[110px]">
                  <div className="flex-1 min-w-0">
                    <p className={`font-display text-lg leading-tight ${o.chosen ? "text-amber-gradient" : "text-foreground"}`}>
                      {o.company}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">{o.role}</p>
                    <p className="text-sm font-medium mt-2 text-foreground">{o.ctc}</p>
                  </div>
                  <div className="w-24 h-24 rounded-xl bg-white flex items-center justify-center p-2.5 shrink-0 border border-border">
                    <img
                      src={o.logo}
                      srcSet={`${o.logo} 1x, ${o.logo} 2x`}
                      sizes="96px"
                      alt={`${o.company} company logo — placement offer for ${o.role}`}
                      width={96}
                      height={96}
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                      draggable={false}
                      style={{ imageRendering: "auto" }}
                      className="w-full h-full object-contain [image-rendering:auto] [-webkit-backface-visibility:hidden] [transform:translateZ(0)]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="lg:col-span-5 space-y-6"
      >
        {skills.map((s, i) => (
          <div key={s.label}>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium">{s.label}</span>
              <span className="text-amber font-display">{s.value}</span>
            </div>
            <div className="h-px w-full bg-border overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="h-full bg-gradient-amber"
              />
            </div>
          </div>
        ))}

        <div className="grid grid-cols-2 gap-4 pt-8">
          {[
            { k: "9.12", v: "CGPA at SRM" },
            { k: "4", v: "Placement offers" },
            { k: "BofA", v: "Joining 2026" },
            { k: "1", v: "Industry internship" },
          ].map((s) => (
            <div key={s.v} className="p-5 rounded-2xl bg-card border border-border">
              <p className="font-display text-3xl text-amber-gradient">{s.k}</p>
              <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.v}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
  );
};

