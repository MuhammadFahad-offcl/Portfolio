import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, TrendingUp, Clock, Banknote } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionLabel } from "@/components/SectionLabel";

/* ── Market config ── */
type Market = "PKR" | "AED";

const MARKETS: Record<
  Market,
  { label: string; prefix: string; min: number; max: number; step: number; defaultRate: number }
> = {
  PKR: { label: "Pakistan (PKR)", prefix: "Rs. ", min: 500, max: 5_000, step: 100, defaultRate: 1_500 },
  AED: { label: "UAE (AED)", prefix: "AED ", min: 20, max: 500, step: 10, defaultRate: 100 },
};

/** Format a number with comma separators and the market prefix */
function fmt(amount: number, prefix: string): string {
  return `${prefix}${amount.toLocaleString("en")}`;
}

export function ROICalculator() {
  const [market, setMarket] = useState<Market>("PKR");
  const [hours, setHours] = useState(20);
  const [rate, setRate] = useState(MARKETS.PKR.defaultRate);

  const cfg = MARKETS[market];
  const monthlySavings = hours * rate * 4;
  const yearlySavings = hours * rate * 52;

  const switchMarket = useCallback(
    (m: Market) => {
      setMarket(m);
      setRate(MARKETS[m].defaultRate);
    },
    [],
  );

  return (
    <section id="roi-calculator" className="relative py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-12">
        <SectionLabel>ROI Calculator</SectionLabel>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-4xl font-bold md:text-5xl"
        >
          Calculate Your <span className="text-gradient">Savings</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-center text-muted-foreground"
        >
          See how much your business can save by automating repetitive tasks
          with AI-powered workflows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-16 w-full max-w-4xl"
        >
          {/* ─── Main Card ─── */}
          <div className="w-full max-w-full overflow-hidden rounded-3xl border border-border bg-white shadow-lg dark:bg-card">
            {/* ── Market Toggle ── */}
            <div className="flex items-center justify-center border-b border-border/60 bg-secondary/40 px-6 py-4">
              <div className="relative flex rounded-full bg-secondary p-1">
                {(["PKR", "AED"] as Market[]).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => switchMarket(m)}
                    className={`relative z-10 rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-200 ${
                      market === m
                        ? "text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {MARKETS[m].label}
                  </button>
                ))}
                {/* Sliding pill indicator */}
                <motion.div
                  layout
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="absolute inset-y-1 rounded-full bg-primary shadow-md"
                  style={{
                    width: "calc(50% - 4px)",
                    left: market === "PKR" ? "4px" : "calc(50%)",
                  }}
                />
              </div>
            </div>

            {/* ── Two-column body ── */}
            <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
              {/* ─── LEFT: Inputs ─── */}
              <div className="border-b border-border/50 p-7 sm:p-9 md:border-b-0 md:border-r">
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                    <Calculator size={20} />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    Your Inputs
                  </h3>
                </div>

                {/* Hours slider */}
                <div className="mb-9">
                  <div className="mb-3 flex items-center justify-between">
                    <label
                      htmlFor="roi-hours"
                      className="flex items-center gap-2 text-sm font-medium text-foreground/80"
                    >
                      <Clock size={14} className="text-primary" />
                      Hours on manual tasks / week
                    </label>
                    <span className="rounded-full bg-secondary px-3 py-1 font-mono text-sm font-semibold text-primary">
                      {hours}h
                    </span>
                  </div>
                  <input
                    id="roi-hours"
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="roi-slider w-full"
                  />
                  <div className="mt-1.5 flex justify-between text-[11px] text-muted-foreground">
                    <span>0 hrs</span>
                    <span>50 hrs</span>
                    <span>100 hrs</span>
                  </div>
                </div>

                {/* Rate slider */}
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <label
                      htmlFor="roi-rate"
                      className="flex items-center gap-2 text-sm font-medium text-foreground/80"
                    >
                      <Banknote size={14} className="text-primary" />
                      Avg. hourly rate ({market})
                    </label>
                    <span className="rounded-full bg-secondary px-3 py-1 font-mono text-sm font-semibold text-primary">
                      {fmt(rate, cfg.prefix)}
                    </span>
                  </div>
                  <input
                    id="roi-rate"
                    type="range"
                    min={cfg.min}
                    max={cfg.max}
                    step={cfg.step}
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="roi-slider w-full"
                  />
                  <div className="mt-1.5 flex justify-between text-[11px] text-muted-foreground">
                    <span>{fmt(cfg.min, cfg.prefix)}</span>
                    <span>{fmt(Math.round((cfg.min + cfg.max) / 2), cfg.prefix)}</span>
                    <span>{fmt(cfg.max, cfg.prefix)}</span>
                  </div>
                </div>
              </div>

              {/* ─── RIGHT: Results ─── */}
              <div className="flex flex-col justify-between p-7 sm:p-9">
                <div>
                  <div className="mb-8 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                      <TrendingUp size={20} />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      Your Savings
                    </h3>
                  </div>

                  <div className="space-y-5">
                    {/* Monthly */}
                    <div className="rounded-2xl border border-border bg-secondary/30 p-5">
                      <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Monthly Savings
                      </p>
                      <motion.p
                        key={`m-${monthlySavings}`}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-3xl font-bold tracking-tight text-primary md:text-4xl"
                      >
                        {fmt(monthlySavings, cfg.prefix)}
                      </motion.p>
                    </div>

                    {/* Yearly */}
                    <div className="rounded-2xl border border-primary/25 bg-primary/5 p-5">
                      <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Yearly Savings
                      </p>
                      <motion.p
                        key={`y-${yearlySavings}`}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-3xl font-bold tracking-tight text-primary md:text-4xl"
                      >
                        {fmt(yearlySavings, cfg.prefix)}
                      </motion.p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={profile.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-hover
                  className="magnetic-btn group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
                >
                  Automate This Now
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
