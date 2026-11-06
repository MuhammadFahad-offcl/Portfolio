import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Building2, Check, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { z } from "zod";
import { profile } from "@/data/portfolio";
import { SectionLabel } from "@/components/SectionLabel";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject required").max(150),
  message: z.string().trim().min(5, "Message too short").max(1000),
});

type FormState = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormState, string>>;

const emptyForm: FormState = { name: "", email: "", subject: "", message: "" };

const inputClass =
  "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:bg-background focus:ring-4 focus:ring-primary/10";
const labelClass = "mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground";
const smallLabelClass = "text-[10px] font-medium uppercase tracking-wider text-muted-foreground";

function InfoCard({ icon, label, value, href }: { icon: ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <>
      <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">{icon}</div>
      <div>
        <div className={smallLabelClass}>{label}</div>
        <div className="mt-0.5 text-sm font-semibold">{value}</div>
      </div>
    </>
  );

  if (!href) return <div className="glass flex items-start gap-4 rounded-2xl p-5 shadow-soft">{inner}</div>;

  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="glass group flex items-start gap-4 rounded-2xl p-5 shadow-soft transition-transform hover:-translate-y-1 hover:shadow-glow"
    >
      {inner}
    </a>
  );
}

export function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [honeypot, setHoneypot] = useState(""); // hidden field that only spam bots fill in

  const update = (field: keyof FormState, value: string) => setForm({ ...form, [field]: value });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (sending) return;
    const result = schema.safeParse(form);
    if (!result.success) {
      const next: Errors = {};
      result.error.issues.forEach((issue) => {
        next[issue.path[0] as keyof FormState] = issue.message;
      });
      setErrors(next);
      return;
    }
    setErrors({});
    setSendError("");
    setSending(true);

    try {
      // Sends the message to your inbox through formsubmit.co (free, no account needed).
      const res = await fetch(`https://formsubmit.co/ajax/${profile.formEmail}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: result.data.name,
          email: result.data.email,
          message: result.data.message,
          _subject: `Portfolio: ${result.data.subject}`,
          _replyto: result.data.email,
          _template: "table",
          _honey: honeypot,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { success?: string | boolean };
      if (!res.ok || String(data.success) !== "true") throw new Error("send failed");

      setSent(true);
      setForm(emptyForm);
      setTimeout(() => setSent(false), 4000);
    } catch {
      setSendError(`Couldn't send right now. Please email me at ${profile.email}.`);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-radial opacity-60" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionLabel>Contact</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-4xl font-bold md:text-6xl"
        >
          Let's build something <span className="text-gradient">intelligent</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-center text-muted-foreground"
        >
          Have a workflow to automate or an AI product to ship? Drop a message.
        </motion.p>

        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4 lg:col-span-2"
          >
            <InfoCard icon={<Mail size={18} />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <InfoCard
              icon={<MessageCircle size={18} />}
              label="WhatsApp"
              value={profile.whatsappDisplay}
              href={profile.whatsappLink}
            />
            <InfoCard icon={<MapPin size={18} />} label="Based in" value={profile.location} />
            <InfoCard icon={<Building2 size={18} />} label="Company" value={profile.company} />
            <div className="glass rounded-2xl p-5 shadow-soft">
              <div className={smallLabelClass}>Find me online</div>
              <div className="mt-3 flex gap-2">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="magnetic-btn flex size-11 items-center justify-center rounded-full bg-primary/8 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={16} />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="magnetic-btn flex size-11 items-center justify-center rounded-full bg-primary/8 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="GitHub"
                >
                  <GithubIcon size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-3xl p-8 shadow-soft lg:col-span-3"
          >
            <input
              type="text"
              name="_honey"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {(
                [
                  { name: "name", label: "Name", placeholder: "John Doe", type: "text" },
                  { name: "email", label: "Email", placeholder: "you@email.com", type: "email" },
                ] as const
              ).map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.name} className={labelClass}>
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.name]}
                    onChange={(e) => update(field.name, e.target.value)}
                    maxLength={255}
                    className={inputClass}
                  />
                  {errors[field.name] && <p className="mt-1.5 text-xs text-destructive">{errors[field.name]}</p>}
                </div>
              ))}
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className={labelClass}>
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Project inquiry"
                value={form.subject}
                onChange={(e) => update("subject", e.target.value)}
                maxLength={150}
                className={inputClass}
              />
              {errors.subject && <p className="mt-1.5 text-xs text-destructive">{errors.subject}</p>}
            </div>

            <div className="mt-5">
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                maxLength={1000}
                className={`${inputClass} resize-none`}
              />
              {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
            </div>

            <motion.button
              type="submit"
              disabled={sending || sent}
              whileTap={{ scale: 0.97 }}
              className="magnetic-btn group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground disabled:opacity-70"
            >
              {sent ? (
                <>
                  <Check size={16} /> Message sent
                </>
              ) : sending ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send size={14} className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </motion.button>
            {sendError && (
              <p role="alert" className="mt-3 text-center text-xs text-destructive">
                {sendError}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
