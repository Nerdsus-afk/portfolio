import { motion } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import portrait from "@/assets/hero-portrait.png";

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
            Placed at Bank of America · Class of 2026
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
            key="hero-bio"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Final-year Computer Science student at SRM Institute of Science and Technology
            (CGPA 9.12). Joining <span className="text-foreground">Bank of America</span> as
            an Apprentice Software Engineer in 2026. I build software across Java, Python, and the web, explore
            machine learning and NLP, and live in the terminal on Arch Linux + Hyprland.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to="/#work"
              className="group inline-flex items-center gap-3 bg-gradient-amber text-primary-foreground font-medium px-7 py-4 rounded-full hover:shadow-glow transition-all duration-500"
            >
              Explore my projects
              <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </Link>
            <a href="https://github.com/Yashwantkumar2005" target="_blank" rel="noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              View GitHub →
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative flex justify-center items-end"
        >
          <div className="relative w-full max-w-md aspect-square">
            {/* Ground halo / shadow */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.55, 0.35, 0.55],
                scaleX: [1, 0.85, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[60%] h-8 rounded-[50%] bg-amber/40 blur-2xl"
            />
            {/* Inner soft glow */}
            <motion.div
              aria-hidden
              animate={{ opacity: [0.25, 0.15, 0.25] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 -translate-x-1/2 bottom-4 w-[40%] h-4 rounded-[50%] bg-foreground/60 blur-xl"
            />

            {/* Floating Batman with parallax idle motion */}
            <motion.img
              src={portrait}
              alt="Lego Batman minifigure — hero visual"
              width={1024}
              height={1024}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              animate={{
                y: [0, -14, 0, -8, 0],
                rotate: [0, -1.2, 0, 1.2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
            />
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
