import { motion } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import portrait from "@/assets/hero-portrait.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="container relative grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            <Sparkles className="w-3 h-3 text-amber" />
            Open to opportunities · Class of 2026
          </motion.div>

          <h1 className="font-display font-light tracking-tighter leading-[0.9] text-[clamp(3rem,9vw,8rem)]">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="block text-gradient"
            >
              Yashwant
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="block italic font-normal text-amber-gradient"
            >
              Kumar S.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="block text-gradient text-[0.55em]"
            >
              writes code, ships ideas.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Final-year Computer Science student at SRM Institute of Science and Technology
            (CGPA 9.16). I build software across Java, Python, and the web, explore machine
            learning and NLP, and live in the terminal on Arch Linux + Hyprland.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 bg-gradient-amber text-primary-foreground font-medium px-7 py-4 rounded-full hover:shadow-glow transition-all duration-500"
            >
              Explore my projects
              <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </a>
            <a href="https://github.com/Yashwantkumar2005" target="_blank" rel="noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              View GitHub →
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden glow">
            <div className="absolute inset-0 bg-gradient-amber opacity-20 mix-blend-overlay z-10" />
            <img
              src={portrait}
              alt="Yashwant Kumar S — Computer Science student & developer"
              width={1024}
              height={1280}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover animate-float"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl px-5 py-3 shadow-card">
            <p className="font-display text-3xl text-amber">9.16</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">CGPA · SRM IST</p>
          </div>
          <div className="absolute -top-4 -right-4 bg-card border border-border rounded-2xl px-5 py-3 shadow-card hidden md:block">
            <p className="font-display text-3xl text-amber-gradient">2026</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Graduating</p>
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-y border-border/40 bg-background overflow-hidden py-5">
        <div className="flex marquee whitespace-nowrap font-display text-3xl text-muted-foreground/60">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6 shrink-0">
              {["Java", "Python", "C++", "SQL", "DSA", "OOP", "NLP", "Linux"].map((t) => (
                <span key={t + i} className="flex items-center gap-12">
                  <span className="italic">{t}</span>
                  <span className="text-amber">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
