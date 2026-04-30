import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const links = [
  { label: "Projects", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      const id = href.replace("#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border/40"
    >
      <nav className="container flex items-center justify-between h-16">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="font-display text-xl font-semibold tracking-tight">
          YASHWANT<span className="text-amber">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => handleNavClick(e, l.href)} className="relative text-muted-foreground hover:text-foreground transition-colors group">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-amber transition-all duration-500 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="text-sm font-medium px-4 py-2 rounded-full border border-border hover:border-amber hover:text-amber transition-all">
          Hire me
        </a>
      </nav>
    </motion.header>
  );
};
