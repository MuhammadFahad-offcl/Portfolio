import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, TrendingUp, Clock, Banknote } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionLabel } from "@/components/SectionLabel";

/** Format a number as PKR currency (e.g. "Rs. 150,000") */
function formatPKR(amount: number): string {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}

export function ROICalculator() {
  const [hours, setHours] = useState(20);
  const [rate, setRate] = useState(1500);

  const monthlySavings = hours * rate * 4;
  const yearlySavings = hours * rate * 52;

  const handleHoursChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setHours(Number(e.target.value)),
    [],
  );
  const handleRateChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setRate(Number(e.target.value)),
    [],
  );

  return (
    <section id="roi-calculator" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
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
          className="mx-auto mt-16 max-w-4xl"
        >
          {/* Calculator Card */}
          <div className="glass overflow-hidden rounded-3xl shadow-soft">
            <div className="grid gap-0 md:grid-cols-2">
              {/* ─── Inputs Side ─── */}
              <div className="border-b border-border/50 p-8 md:border-b-0 md:border-r md:p-10">
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                    <Calculator size={20} />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    Your Inputs
                  </h3>
                </div>

                {/* Hours slider */}
                <div className="mb-8">
                  <div className="mb-3 flex items-center justify-between">
                    <label
                      htmlFor="hours-slider"
                      className="flex items-center gap-2 text-sm font-medium text-foreground/80"
                    >
                      <Clock size={14} className="text-primary" />
                      Hours on manual tasks / week
                    </label>
                    <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-sm font-semibold text-primary">
                      {hours}h
                    </span>
                  </div>
                  <input
                    id="hours-slider"
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={hours}
                    onChange={handleHoursChange}
                    className="roi-slider w-full"
                  />
                  <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
                    <span>0 hrs</span>
                    <span>50 hrs</span>
                    <span>100 hrs</span>
                  </div>
                </div>

                {/* Rate slider */}
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <label
                      htmlFor="rate-slider"
                      className="flex items-center gap-2 text-sm font-medium text-foreground/80"
                    >
                      <Banknote size={14} className="text-primary" />
                      Avg. hourly rate (PKR)
                    </label>
                    <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-sm font-semibold text-primary">
                      {formatPKR(rate)}
                    </span>
                  </div>
                  <input
                    id="rate-slider"
                    type="range"
                    min={500}
                    max={5000}
                    step={100}
                    value={rate}
                    onChange={handleRateChange}
                    className="roi-slider w-full"
                  />
                  <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
                    <span>Rs. 500</span>
                    <span>Rs. 2,750</span>
                    <span>Rs. 5,000</span>
                  </div>
                </div>
              </div>

              {/* ─── Results Side ─── */}
              <div className="flex flex-col justify-between p-8 md:p-10">
                <div>
                  <div className="mb-8 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                      <TrendingUp size={20} />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      Your Savings
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {/* Monthly */}
                    <div className="rounded-2xl border border-border bg-card/60 p-5">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Monthly Savings
                      </p>
                      <p className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                        {formatPKR(monthlySavings)}
                      </p>
                    </div>

                    {/* Yearly */}
                    <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Yearly Savings
                      </p>
                      <p className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                        {formatPKR(yearlySavings)}
                      </p>
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
