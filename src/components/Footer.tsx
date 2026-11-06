import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, CodeXml, Mail } from "lucide-react";
import { footer, profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};
const bigWord: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease } },
};

const socials = [
  { icon: <LinkedinIcon size={18} />, href: profile.linkedin, label: "LinkedIn" },
  { icon: <GithubIcon size={18} />, href: profile.github, label: "GitHub" },
  { icon: <Mail size={18} />, href: `mailto:${profile.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-primary/10 bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10 grid gap-12 md:grid-cols-2 lg:grid-cols-12"
        >
          <motion.div variants={item} className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <CodeXml size={20} />
              </div>
              <span className="text-2xl font-bold tracking-tight text-foreground">{profile.brand}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">{footer.description}</p>
            <div className="mt-8 flex items-center gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Navigation</h4>
            <ul className="mt-6 space-y-3">
              {footer.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item} className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Get in Touch</h4>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{footer.getInTouch}</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-glow"
            >
              <Mail size={14} />
              Say Hello
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row"
        >
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.brand}. All rights reserved.
          </p>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            Crafted by {profile.name}
          </a>
          <a
            href="#home"
            className="group flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Back to top
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border transition-all group-hover:border-primary/30 group-hover:bg-primary/5">
              <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5" />
            </span>
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={bigWord}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex justify-center overflow-hidden"
      >
        <span
          className="select-none whitespace-nowrap text-[18vw] font-bold leading-none tracking-tighter text-foreground/[0.03]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {profile.brand.toUpperCase()}
        </span>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </footer>
  );
}
