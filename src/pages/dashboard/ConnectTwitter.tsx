import { useState } from "react";
import { Twitter, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const ConnectTwitter = () => {
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  const connect = () => {
    setLoading(true);
    setTimeout(() => {
      setConnected(true);
      setLoading(false);
      toast.success("Twitter connected!");
    }, 900);
  };

  return (
    <div className="max-w-2xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-border bg-card p-8 shadow-soft">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl bg-accent grid place-items-center"><Twitter className="h-6 w-6 text-accent-foreground" /></div>
          <div>
            <h3 className="font-display text-xl font-semibold">Twitter / X</h3>
            <p className="text-sm text-muted-foreground">Connect your account to start posting.</p>
          </div>
          <div className="ml-auto">
            {connected ? (
              <Badge className="rounded-full bg-success/10 text-success hover:bg-success/10">Connected</Badge>
            ) : (
              <Badge variant="outline" className="rounded-full">Not connected</Badge>
            )}
          </div>
        </div>

        {connected ? (
          <div className="mt-8 flex items-center gap-4 p-4 rounded-xl bg-muted/40">
            <Avatar className="h-12 w-12"><AvatarFallback className="bg-gradient-primary text-primary-foreground">JD</AvatarFallback></Avatar>
            <div className="flex-1">
              <p className="font-semibold">Jane Doe</p>
              <p className="text-sm text-muted-foreground">@janedoe</p>
            </div>
            <CheckCircle2 className="h-5 w-5 text-success" />
            <Button variant="outline" className="rounded-full" onClick={() => { setConnected(false); toast("Disconnected"); }}>Disconnect</Button>
          </div>
        ) : (
          <Button onClick={connect} disabled={loading} className="mt-8 rounded-full" size="lg">
            <Twitter className="h-4 w-4 mr-2" /> {loading ? "Connecting..." : "Connect Twitter Account"}
          </Button>
        )}
      </motion.div>
    </div>
  );
};

export default ConnectTwitter;
