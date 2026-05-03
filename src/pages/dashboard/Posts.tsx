import { useState } from "react";
import { motion } from "framer-motion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Inbox } from "lucide-react";

type Status = "ready" | "posted" | "failed";
const data: { content: string; status: Status; time: string }[] = [
  { content: "The future of AI in 2026 is going to surprise everyone.", status: "ready", time: "Today 09:00" },
  { content: "5 startup lessons I learned the hard way (a thread 🧵)", status: "posted", time: "Yesterday 18:00" },
  { content: "Why developer tools matter more than ever.", status: "posted", time: "Yesterday 12:00" },
  { content: "How I went from 0 → 10k followers using only AI.", status: "ready", time: "Tomorrow 10:00" },
  { content: "Rate limit reached — retry tonight.", status: "failed", time: "Today 06:00" },
];

const statusStyles: Record<Status, string> = {
  ready: "bg-warning/10 text-warning",
  posted: "bg-success/10 text-success",
  failed: "bg-destructive/10 text-destructive",
};

const Posts = () => {
  const [filter, setFilter] = useState<"all" | Status>("all");
  const filtered = filter === "all" ? data : data.filter((d) => d.status === filter);

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {(["all", "posted", "ready", "failed"] as const).map((f) => (
          <Button key={f} size="sm" variant={filter === f ? "default" : "outline"} className="rounded-full capitalize"
            onClick={() => setFilter(f)}>
            {f === "ready" ? "Pending" : f}
          </Button>
        ))}
      </div>

      <div className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <Inbox className="h-10 w-10 mx-auto text-muted-foreground" />
            <p className="mt-3 font-medium">No posts here yet</p>
            <p className="text-sm text-muted-foreground">Try changing the filter.</p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Content</TableHead>
                <TableHead className="w-32">Status</TableHead>
                <TableHead className="w-40">Scheduled</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((row, i) => (
                <TableRow key={i} className="hover:bg-muted/40">
                  <TableCell className="max-w-md truncate">{row.content}</TableCell>
                  <TableCell><Badge className={`rounded-full capitalize ${statusStyles[row.status]} hover:${statusStyles[row.status]}`}>{row.status}</Badge></TableCell>
                  <TableCell className="text-muted-foreground">{row.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </motion.div>
  );
};

export default Posts;
