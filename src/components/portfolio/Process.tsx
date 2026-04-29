import { motion } from "framer-motion";
import { Code2, Database, Wrench, Terminal, Brain, Award } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Languages",
    items: ["Java", "Python", "C", "C++", "SQL", "HTML", "CSS", "JavaScript"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MySQL", "MongoDB", "Database Design", "DBMS Concepts"],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    items: ["Git", "Postman", "IntelliJ IDEA", "VS Code", "Scene Builder"],
  },
  {
    icon: Terminal,
    title: "Operating Systems",
    items: ["Arch Linux", "Hyprland", "Windows"],
  },
  {
    icon: Brain,
    title: "Core CS",
    items: ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS", "NLP"],
  },
  {
    icon: Award,
    title: "Certifications",
    items: ["NPTEL DBMS", "Opportive Web Dev", "HTML & JS — SRM", "HackerRank Java/Python"],
  },
];

export const Process = () => (
  <section id="process" className="py-32 border-y border-border/40 bg-card/30">
    <div className="container">
      <div className="max-w-2xl mb-20">
        <p className="text-xs uppercase tracking-[0.3em] text-amber mb-4">Skills & Stack</p>
        <h2 className="font-display text-5xl md:text-7xl tracking-tighter text-gradient">
          The tools I <span className="italic">reach for.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="bg-background p-8 lg:p-10 group hover:bg-card transition-colors duration-500"
          >
            <g.icon className="w-6 h-6 text-amber mb-8" />
            <h3 className="font-display text-2xl mb-5 group-hover:text-amber transition-colors">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span key={it} className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground">
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
