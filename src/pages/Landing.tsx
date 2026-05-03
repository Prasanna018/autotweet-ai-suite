import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Calendar, TrendingUp, Zap, Check, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <div className="container flex items-center justify-between h-16">
          <Logo />
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild variant="ghost" size="sm"><Link to="/login">Login</Link></Button>
            <Button asChild size="sm" className="rounded-full"><Link to="/signup">Get Started</Link></Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="container py-24 md:py-36 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur text-xs font-medium text-muted-foreground mb-8">
            <Sparkles className="h-3.5 w-3.5 text-primary" /> AI-powered Twitter automation
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.05]">
            Automate Your Twitter <br /> Growth with <span className="text-gradient">AI</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Generate on-brand tweets, schedule them at the perfect time, and grow your audience while you sleep — all on autopilot.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-full shadow-glow group">
              <Link to="/signup">Get Started Free <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full"><Link to="/login">Login</Link></Button>
          </motion.div>

          {/* Mock dashboard preview */}
          <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 relative max-w-5xl mx-auto">
            <div className="rounded-2xl border border-border bg-card shadow-elevated overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-muted/30">
                <span className="h-3 w-3 rounded-full bg-destructive/60" />
                <span className="h-3 w-3 rounded-full bg-warning/70" />
                <span className="h-3 w-3 rounded-full bg-success/60" />
              </div>
              <div className="grid grid-cols-3 gap-4 p-6">
                {["Total Posts", "Scheduled", "Success Rate"].map((s, i) => (
                  <div key={s} className="rounded-xl border border-border p-4 text-left bg-background">
                    <p className="text-xs text-muted-foreground">{s}</p>
                    <p className="text-2xl font-display font-bold mt-1">{["1,284", "47", "98.6%"][i]}</p>
                  </div>
                ))}
                <div className="col-span-3 rounded-xl border border-border p-5 text-left bg-background">
                  <div className="flex items-center gap-2 mb-3"><Twitter className="h-4 w-4 text-primary" /><span className="text-sm font-medium">Upcoming tweets</span></div>
                  {["The future of AI in 2026 is...", "5 startup lessons I learned the hard way", "Why developer tools matter more than ever"].map((t, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-t border-border text-sm">
                      <span className="truncate text-muted-foreground">{t}</span>
                      <span className="text-xs text-primary font-medium">{["09:00", "09:30", "10:00"][i]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -top-8 -right-8 h-40 w-40 bg-primary/30 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 bg-primary-glow/30 rounded-full blur-3xl -z-0" />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container py-24">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold">Everything you need to grow</h2>
          <p className="mt-4 text-muted-foreground">Powerful tools that take Twitter off your to-do list.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Sparkles, title: "Auto Tweet Generation", desc: "AI writes scroll-stopping tweets in your unique voice and niche." },
            { icon: Calendar, title: "Smart Scheduling", desc: "Pick optimal posting times. We handle the rest, every single day." },
            { icon: TrendingUp, title: "Trend Analysis", desc: "Tap into trending topics and ride the wave before others do." },
          ].map((f, i) => (
            <motion.div key={f.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-elevated">
              <div className="h-11 w-11 rounded-xl bg-accent grid place-items-center mb-5">
                <f.icon className="h-5 w-5 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold">{f.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-gradient-soft py-24 border-y border-border">
        <div className="container">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold">How it works</h2>
            <p className="mt-4 text-muted-foreground">Three steps to a fully automated Twitter presence.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: "01", title: "Connect Twitter", desc: "One-click secure connection to your X account." },
              { n: "02", title: "Choose your niche", desc: "Tech, AI, startups — or define your own." },
              { n: "03", title: "Sit back & grow", desc: "We generate, schedule and post for you." },
            ].map((s, i) => (
              <motion.div key={s.n} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="relative rounded-2xl bg-card border border-border p-8 shadow-soft">
                <span className="font-display text-5xl font-bold text-gradient">{s.n}</span>
                <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container py-24">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold">Simple, honest pricing</h2>
          <p className="mt-4 text-muted-foreground">Start free. Upgrade when you're ready.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { name: "Starter", price: "$0", desc: "For trying things out", features: ["10 tweets / month", "1 scheduled time", "Basic analytics"], cta: "Start free" },
            { name: "Pro", price: "$19", desc: "For creators", features: ["Unlimited tweets", "Unlimited schedules", "Trend analysis", "Priority AI"], cta: "Go Pro", highlight: true },
            { name: "Business", price: "$49", desc: "For teams", features: ["Everything in Pro", "Multiple accounts", "Team seats", "Dedicated support"], cta: "Contact us" },
          ].map((p, i) => (
            <motion.div key={p.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className={`relative rounded-2xl border p-7 ${p.highlight ? "border-primary bg-card shadow-glow" : "border-border bg-card shadow-soft"}`}>
              {p.highlight && <span className="absolute -top-3 left-7 px-3 py-1 rounded-full text-xs font-medium bg-gradient-primary text-primary-foreground">Most popular</span>}
              <h3 className="font-display text-xl font-semibold">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold">{p.price}</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-success" />{f}</li>
                ))}
              </ul>
              <Button asChild className={`w-full mt-7 rounded-full ${p.highlight ? "" : ""}`} variant={p.highlight ? "default" : "outline"}>
                <Link to="/signup">{p.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-24">
        <motion.div {...fadeUp} className="rounded-2xl bg-gradient-primary p-12 md:p-16 text-center shadow-glow relative overflow-hidden">
          <Zap className="absolute top-6 right-6 h-32 w-32 text-primary-foreground/10" />
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">Ready to grow on autopilot?</h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">Join thousands of creators automating their Twitter with AutoTweet AI.</p>
          <Button asChild size="lg" variant="secondary" className="mt-8 rounded-full">
            <Link to="/signup">Start for free <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </motion.div>
      </section>

      <footer className="border-t border-border">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <Logo />
          <p>© {new Date().getFullYear()} AutoTweet AI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
