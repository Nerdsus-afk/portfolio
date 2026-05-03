import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon as Github } from "@/components/icons/GithubIcon";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { prefetchHandlers } from "@/lib/prefetch";
import { useInViewPrefetch } from "@/hooks/use-in-view-prefetch";
import { ImageWithSkeleton } from "./ImageWithSkeleton";

export const Work = () => (
  <section id="work" className="py-32 relative">
    <div className="container">
      <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-amber mb-4">Projects · 2023–2025</p>
          <h2 className="font-display text-5xl md:text-7xl tracking-tighter text-gradient">
            Things I've <span className="italic font-light">built.</span>
          </h2>
        </div>
        <a
          href="https://github.com/Yashwantkumar2005"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-amber transition-colors"
        >
          <Github className="w-4 h-4" /> More on GitHub
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

const ProjectCard = ({ project: p, index: i }: { project: typeof projects[number]; index: number }) => {
  const ref = useInViewPrefetch<HTMLAnchorElement>(p.img);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`${i % 3 === 0 ? "md:translate-y-12" : ""}`}
    >
      <Link
        to={`/projects/${p.slug}`}
        ref={ref}
        {...prefetchHandlers(p.img)}
        className="group block rounded-3xl overflow-hidden bg-card border border-border hover:border-amber/40 transition-all duration-700"
      >
        <div className="aspect-[4/3] overflow-hidden relative">
          <ImageWithSkeleton
            src={p.img}
            alt={`${p.title} — ${p.tag}`}
            width={1200}
            height={900}
            loading={i < 2 ? "eager" : "lazy"}
            decoding="async"
            fetchPriority="low"
            wrapperClassName="w-full h-full"
            imgClassName="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-6 mb-4">
            <div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                <span className="uppercase tracking-wider">{p.tag}</span>
                <span className="w-1 h-1 rounded-full bg-amber" />
                <span>{p.year}</span>
              </div>
              <h3 className="font-display text-3xl mb-2">{p.title}</h3>
            </div>
            <div className="shrink-0 w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-amber group-hover:border-amber group-hover:text-primary-foreground transition-all duration-500">
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
          <div className="flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span key={s} className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground">
                {s}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
