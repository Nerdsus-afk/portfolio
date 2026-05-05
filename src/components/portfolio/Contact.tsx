import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { GithubIcon as Github } from "@/components/icons/GithubIcon";
import { LinkedinIcon as Linkedin } from "@/components/icons/LinkedinIcon";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/yashwant-kumar-744336252/" },
  { icon: Github, label: "GitHub", href: "https://github.com/Yashwantkumar2005" },
  { icon: Phone, label: "+91 73058 95653", href: "tel:+917305895653" },
];

export const Contact = () => (
  <section id="contact" className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-glow opacity-60 pointer-events-none" />
    <div className="container relative text-center max-w-4xl">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xs uppercase tracking-[0.3em] text-amber mb-6"
      >
        Get in touch
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-display text-6xl md:text-8xl tracking-tighter leading-[0.95] text-gradient mb-10"
      >
        Let's build <br /> <span className="italic text-amber-gradient">something.</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-muted-foreground text-lg max-w-xl mx-auto mb-12 text-pretty [hyphens:none] [word-break:normal] [overflow-wrap:normal]"
      >
        I'm joining Bank of America as an Apprentice Software Engineer in 2026. Until then,
        I'm always up for interesting conversations, side projects, and
        collaborations — drop me a line.
      </motion.p>

      <motion.a
        href="mailto:yashwantec37@gmail.com"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="group inline-flex items-center gap-4 bg-gradient-amber text-primary-foreground font-medium px-8 py-5 rounded-full hover:shadow-glow transition-all duration-500"
      >
        <Mail className="w-5 h-5" />
        yashwantec37@gmail.com
        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
      </motion.a>

      <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm text-muted-foreground hover:text-amber hover:border-amber transition-all"
          >
            <s.icon className="w-4 h-4" />
            {s.label}
          </a>
        ))}
      </div>

      <div className="mt-24 pt-10 border-t border-border/40 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
        <p>© 2026 Yashwant Kumar. Built with care.</p>
      </div>
    </div>
  </section>
);
