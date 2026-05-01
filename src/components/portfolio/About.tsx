import { motion } from "framer-motion";
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
  { company: "Bank of America", role: "Apprentice", ctc: "6.45 LPA", chosen: true, logo: bofaLogo },
  { company: "Accenture", role: "Advanced Engineering (AEH)", ctc: "11 LPA", chosen: false, logo: accentureLogo },
  { company: "Infosys", role: "Digital Specialist Engineer", ctc: "7 LPA", chosen: false, logo: infosysLogo },
  { company: "Cognizant", role: "GenC", ctc: "4 LPA", chosen: false, logo: cognizantLogo },
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
            I've been fortunate to receive offers from four great companies during
            campus placements, and I've chosen to begin my career at{" "}
            <span className="text-foreground">Bank of America</span> as an Apprentice —
            excited to grow in a place where engineering meets impact at scale.
          </p>
          <p>
            Most recently I interned at <span className="text-foreground">Opportive</span> as
            a Web Development Intern, contributing to a Learning Management System and
            a real-time chat module with Socket.IO. Outside coursework I tinker with
            NLP, sharpen my DSA, and daily-drive Arch Linux with Hyprland.
          </p>
        </div>

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
                      alt={`${o.company} logo`}
                      width={96}
                      height={96}
                      loading="lazy"
                      className="w-full h-full object-contain"
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
            { k: "9.16", v: "CGPA at SRM" },
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

