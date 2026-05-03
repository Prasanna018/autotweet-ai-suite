import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { X } from "lucide-react";

const allTimes = Array.from({ length: 24 }).flatMap((_, h) => [`${String(h).padStart(2, "0")}:00`, `${String(h).padStart(2, "0")}:30`]);

const Schedule = () => {
  const [category, setCategory] = useState("tech");
  const [times, setTimes] = useState<string[]>(["09:00", "12:00", "18:00"]);
  const [postsPerDay, setPostsPerDay] = useState(3);
  const [enabled, setEnabled] = useState(true);

  const addTime = (t: string) => { if (!times.includes(t)) setTimes([...times, t].sort()); };
  const removeTime = (t: string) => setTimes(times.filter((x) => x !== t));

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl space-y-6">
      <div className="rounded-2xl border border-border bg-card p-8 shadow-soft space-y-6">
        <div>
          <h3 className="font-display text-xl font-semibold">Automation Setup</h3>
          <p className="text-sm text-muted-foreground">Configure how AutoTweet AI posts for you.</p>
        </div>

        <div className="space-y-2">
          <Label>Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="tech">Tech</SelectItem>
              <SelectItem value="ai">AI</SelectItem>
              <SelectItem value="startups">Startups</SelectItem>
              <SelectItem value="custom">Custom</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Posting times</Label>
          <div className="flex flex-wrap gap-2 p-3 rounded-xl border border-border bg-muted/30 min-h-12">
            {times.length === 0 && <span className="text-sm text-muted-foreground">No times selected</span>}
            {times.map((t) => (
              <Badge key={t} variant="secondary" className="rounded-full pl-3 pr-1 py-1 gap-1">
                {t}
                <button onClick={() => removeTime(t)} className="rounded-full p-0.5 hover:bg-background"><X className="h-3 w-3" /></button>
              </Badge>
            ))}
          </div>
          <Select onValueChange={addTime}>
            <SelectTrigger className="rounded-xl"><SelectValue placeholder="Add a time slot..." /></SelectTrigger>
            <SelectContent className="max-h-60">
              {allTimes.filter((t) => !times.includes(t)).map((t) => (
                <SelectItem key={t} value={t}>{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="ppd">Posts per day</Label>
          <Input id="ppd" type="number" min={1} max={48} value={postsPerDay}
            onChange={(e) => setPostsPerDay(Number(e.target.value))} className="rounded-xl" />
        </div>

        <div className="flex items-center justify-between p-4 rounded-xl bg-muted/40">
          <div>
            <p className="font-medium">Enable automation</p>
            <p className="text-sm text-muted-foreground">Pause anytime without losing your settings.</p>
          </div>
          <Switch checked={enabled} onCheckedChange={setEnabled} />
        </div>

        <Button className="w-full rounded-full" size="lg" onClick={() => toast.success("Settings saved!")}>
          Save changes
        </Button>
      </div>
    </motion.div>
  );
};

export default Schedule;
