import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { credentials } from "@/data/portfolio";
import { SectionLabel } from "@/components/SectionLabel";
import { ImageLightbox } from "@/components/ImageLightbox";

export function Credentials() {
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);
  const closePreview = useCallback(() => setPreview(null), []);

  return (
    <section id="certifications" className="relative py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-12">
        <SectionLabel>Certifications</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center text-4xl font-bold md:text-5xl"
        >
          Credentials &amp; <span className="text-gradient">milestones</span>
        </motion.h2>

        <div className="grid gap-5 md:grid-cols-2">
          {credentials.map((item, i) => {
            const Icon = item.icon;
            const cert = item.certificate;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={cert ? undefined : { y: -6 }}
                className={`glass group relative overflow-hidden rounded-3xl p-7 shadow-soft transition-shadow hover:shadow-glow ${
                  cert ? "md:col-span-2" : ""
                }`}
              >
                <div className="absolute -right-10 -top-10 size-32 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
                <div className={`relative ${cert ? "flex flex-col gap-7 md:flex-row md:items-center" : ""}`}>
                  <div className="flex min-w-0 flex-1 gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                      <Icon size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <div className="mt-0.5 flex flex-wrap items-center gap-2 text-sm">
                        <span className="text-gradient font-medium">{item.org}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{item.year}</span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                      {cert && (
                        <div className="mt-4 flex flex-wrap items-center gap-3">
                          {cert.id && (
                            <span className="rounded-full border border-border bg-background/50 px-3 py-1 font-mono text-[11px] text-muted-foreground">
                              Credential ID {cert.id}
                            </span>
                          )}
                          <button
                            type="button"
                            onClick={() => setPreview({ src: cert.image, alt: `${item.title} certificate — ${item.org}` })}
                            className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary transition-all duration-300 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground"
                          >
                            View certificate
                            <Maximize2 size={12} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {cert && (
                    <button
                      type="button"
                      onClick={() => setPreview({ src: cert.image, alt: `${item.title} certificate — ${item.org}` })}
                      aria-label={`Enlarge ${item.title} certificate`}
                      className="group/cert relative block w-full shrink-0 overflow-hidden rounded-2xl border border-border shadow-soft md:w-[46%]"
                    >
                      <img
                        src={cert.image}
                        alt={`${item.title} certificate issued by ${item.org}`}
                        width={1156}
                        height={780}
                        loading="lazy"
                        decoding="async"
                        className="block h-auto w-full max-w-full transition-transform duration-500 group-hover/cert:scale-[1.03]"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-primary/0 opacity-0 transition-all duration-300 group-hover/cert:bg-primary/40 group-hover/cert:opacity-100">
                        <span className="flex size-11 items-center justify-center rounded-full bg-white/90 text-primary">
                          <Maximize2 size={18} />
                        </span>
                      </span>
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <ImageLightbox
        open={preview !== null}
        onClose={closePreview}
        src={preview?.src ?? ""}
        alt={preview?.alt ?? ""}
      />
    </section>
  );
}
