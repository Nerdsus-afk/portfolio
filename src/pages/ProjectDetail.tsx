import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Calendar, User } from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { getProject, projects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  if (!project) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="container pt-40 text-center">
          <h1 className="font-display text-5xl mb-4">Project not found</h1>
          <Link to="/" className="text-amber underline">Back to home</Link>
        </div>
      </main>
    );
  }

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <article className="pt-32 pb-20">
        <div className="container max-w-5xl">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-amber transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" /> All projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-6">
              <span className="uppercase tracking-[0.25em] text-amber">{project.tag}</span>
              <span className="w-1 h-1 rounded-full bg-amber" />
              <span>{project.year}</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl tracking-tighter text-gradient mb-8 leading-[0.95]">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              {project.overview}
            </p>
          </motion.div>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="grid sm:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden mt-12"
          >
            <div className="bg-card p-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground mb-2">
                <User className="w-4 h-4 text-amber" /> Role
              </div>
              <p className="font-display text-lg">{project.role}</p>
            </div>
            <div className="bg-card p-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground mb-2">
                <Calendar className="w-4 h-4 text-amber" /> Timeline
              </div>
              <p className="font-display text-lg">{project.duration}</p>
            </div>
            <div className="bg-card p-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground mb-2">
                <ArrowUpRight className="w-4 h-4 text-amber" /> Stack
              </div>
              <p className="text-sm leading-relaxed">{project.stack.join(" · ")}</p>
            </div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-12 rounded-3xl overflow-hidden border border-border glow"
          >
            <img
              src={project.img}
              alt={`${project.title} cover`}
              width={1600}
              height={1200}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Sections */}
          <div className="mt-20 grid lg:grid-cols-3 gap-12">
            <Section title="Highlights" items={project.highlights} />
            <Section title="Challenges" items={project.challenges} />
            <Section title="Outcomes" items={project.outcomes} />
          </div>

          {/* Stack chips */}
          <div className="mt-20">
            <p className="text-xs uppercase tracking-[0.3em] text-amber mb-6">Tech stack</p>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="px-5 py-2.5 rounded-full border border-border bg-card text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Next projects */}
          <div className="mt-32 pt-16 border-t border-border">
            <p className="text-xs uppercase tracking-[0.3em] text-amber mb-8">Keep exploring</p>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((p) => (
                <Link
                  key={p.slug}
                  to={`/projects/${p.slug}`}
                  className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-amber/40 transition-all"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{p.tag}</p>
                      <h3 className="font-display text-2xl">{p.title}</h3>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-amber transition-transform group-hover:rotate-45" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

const Section = ({ title, items }: { title: string; items: string[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    <h2 className="font-display text-3xl mb-6 text-gradient">{title}</h2>
    <ul className="space-y-4">
      {items.map((it) => (
        <li key={it} className="flex gap-3 text-muted-foreground leading-relaxed">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber shrink-0" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default ProjectDetail;
