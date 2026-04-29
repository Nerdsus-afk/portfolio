import { motion } from "framer-motion";

const skills = [
  { label: "Java & OOP", value: 88 },
  { label: "Python & ML / NLP", value: 84 },
  { label: "DSA & Problem Solving", value: 86 },
  { label: "SQL & Databases", value: 82 },
];

export const About = () => (
  <section id="about" className="py-32 relative">
    <div className="container grid lg:grid-cols-12 gap-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-7"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-amber mb-6">About</p>
        <h2 className="font-display text-4xl md:text-6xl tracking-tighter leading-[1.05] text-gradient mb-8">
          A curious engineer who loves <span className="italic text-amber-gradient">shipping things.</span>
        </h2>
        <div className="space-y-5 text-muted-foreground text-lg leading-relaxed max-w-2xl">
          <p>
            I'm a final-year Computer Science and Engineering student at SRM Institute
            of Science and Technology, graduating in 2026 with a CGPA of 9.16. I enjoy
            writing clean Java and Python, exploring machine learning, and turning
            ideas into working software.
          </p>
          <p>
            Most recently I interned at <span className="text-foreground">Opportive</span> as
            a Web Development Intern, contributing to a Learning Management System and
            a real-time chat module with Socket.IO. Outside coursework I tinker with
            NLP, sharpen my DSA, and daily-drive Arch Linux with Hyprland.
          </p>
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
            { k: "9.16", v: "CGPA at SRM" },
            { k: "4+", v: "Major projects" },
            { k: "1", v: "Industry internship" },
            { k: "7+", v: "Certifications" },
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
