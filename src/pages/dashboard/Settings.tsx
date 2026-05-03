import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

const Settings = () => {
  const [pwd, setPwd] = useState({ current: "", next: "", confirm: "" });

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl space-y-6">
      <div className="rounded-2xl border border-border bg-card p-8 shadow-soft space-y-5">
        <div>
          <h3 className="font-display text-xl font-semibold">Change password</h3>
          <p className="text-sm text-muted-foreground">Use a strong, unique password.</p>
        </div>
        <div className="grid gap-4">
          <div className="space-y-2"><Label>Current password</Label><Input type="password" value={pwd.current} onChange={(e) => setPwd({ ...pwd, current: e.target.value })} /></div>
          <div className="space-y-2"><Label>New password</Label><Input type="password" value={pwd.next} onChange={(e) => setPwd({ ...pwd, next: e.target.value })} /></div>
          <div className="space-y-2"><Label>Confirm new password</Label><Input type="password" value={pwd.confirm} onChange={(e) => setPwd({ ...pwd, confirm: e.target.value })} /></div>
        </div>
        <Button className="rounded-full" onClick={() => toast.success("Password updated")}>Update password</Button>
      </div>

      <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
        <h3 className="font-display text-xl font-semibold">Twitter connection</h3>
        <p className="text-sm text-muted-foreground mt-1">Disconnect your Twitter account at any time.</p>
        <Button variant="outline" className="rounded-full mt-4" onClick={() => toast("Twitter disconnected")}>Disconnect Twitter</Button>
      </div>

      <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-8">
        <h3 className="font-display text-xl font-semibold text-destructive">Delete account</h3>
        <p className="text-sm text-muted-foreground mt-1">This is permanent. All your data will be removed.</p>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" className="rounded-full mt-4">Delete account</Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="rounded-2xl">
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>This will permanently delete your account and all scheduled tweets.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="rounded-full">Cancel</AlertDialogCancel>
              <AlertDialogAction className="rounded-full bg-destructive hover:bg-destructive/90" onClick={() => toast.success("Account deleted")}>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </motion.div>
  );
};

export default Settings;
