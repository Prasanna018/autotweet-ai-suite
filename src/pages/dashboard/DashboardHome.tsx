import { motion } from "framer-motion";
import { FileText, CalendarClock, TrendingUp, Twitter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const stats = [
  { label: "Total Posts", value: "1,284", icon: FileText, change: "+12%" },
  { label: "Scheduled Posts", value: "47", icon: CalendarClock, change: "+5" },
  { label: "Success Rate", value: "98.6%", icon: TrendingUp, change: "+0.4%" },
];

const upcoming = [
  { time: "09:00", text: "The future of AI in 2026 is going to surprise everyone.", status: "ready" },
  { time: "09:30", text: "5 startup lessons I learned the hard way (a thread 🧵)", status: "ready" },
  { time: "10:00", text: "Why developer tools matter more than ever in the AI era.", status: "ready" },
  { time: "12:00", text: "How I went from 0 → 10k followers using only AI.", status: "ready" },
];

const activity = [
  { time: "2h ago", text: "Tweet posted: 'AI is eating the world...'", ok: true },
  { time: "5h ago", text: "New schedule added (4 slots / day)", ok: true },
  { time: "1d ago", text: "Twitter account reconnected", ok: true },
  { time: "2d ago", text: "Failed to post: rate limited", ok: false },
];

const DashboardHome = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-3xl font-bold">Welcome back, Jane 👋</h2>
        <p className="text-muted-foreground">Here's what's happening with your AutoTweet AI today.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-elevated">
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-xl bg-accent grid place-items-center"><s.icon className="h-5 w-5 text-accent-foreground" /></div>
              <Badge variant="secondary" className="rounded-full text-success bg-success/10">{s.change}</Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-4">{s.label}</p>
            <p className="font-display text-3xl font-bold mt-1">{s.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl border border-border bg-card shadow-soft">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <div>
              <h3 className="font-display text-lg font-semibold">Upcoming posts</h3>
              <p className="text-sm text-muted-foreground">Your next scheduled tweets</p>
            </div>
            <Twitter className="h-5 w-5 text-primary" />
          </div>
          <div className="divide-y divide-border">
            {upcoming.map((u, i) => (
              <div key={i} className="px-6 py-4 flex items-start gap-4 hover:bg-muted/40 transition-colors">
                <div className="text-sm font-mono font-medium text-primary w-12 shrink-0">{u.time}</div>
                <p className="text-sm flex-1">{u.text}</p>
                <Badge variant="outline" className="rounded-full">{u.status}</Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card shadow-soft">
          <div className="p-6 border-b border-border">
            <h3 className="font-display text-lg font-semibold">Recent activity</h3>
            <p className="text-sm text-muted-foreground">Last few events</p>
          </div>
          <ul className="p-4 space-y-1">
            {activity.map((a, i) => (
              <li key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/40">
                <span className={`mt-1.5 h-2 w-2 rounded-full ${a.ok ? "bg-success" : "bg-destructive"}`} />
                <div className="flex-1">
                  <p className="text-sm">{a.text}</p>
                  <p className="text-xs text-muted-foreground">{a.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
