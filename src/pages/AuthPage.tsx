import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/Logo";
import { toast } from "sonner";

interface Props { mode: "login" | "signup" }

const AuthPage = ({ mode }: Props) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const isSignup = mode === "signup";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success(isSignup ? "Account created!" : "Welcome back!");
      navigate("/dashboard");
    }, 900);
  };

  return (
    <div className="min-h-screen bg-gradient-hero grid place-items-center p-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
        className="w-full max-w-md">
        <div className="text-center mb-8"><Logo className="justify-center" /></div>
        <div className="rounded-2xl border border-border bg-card p-8 shadow-elevated">
          <h1 className="font-display text-2xl font-bold">{isSignup ? "Create your account" : "Welcome back"}</h1>
          <p className="text-sm text-muted-foreground mt-1">{isSignup ? "Start automating in minutes" : "Log in to continue"}</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {isSignup && (
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Jane Doe" required />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" required />
            </div>
            <Button type="submit" className="w-full rounded-full" disabled={loading}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : isSignup ? "Create account" : "Log in"}
            </Button>
          </form>

          <p className="text-sm text-center text-muted-foreground mt-6">
            {isSignup ? "Already have an account? " : "New here? "}
            <Link to={isSignup ? "/login" : "/signup"} className="text-primary font-medium hover:underline">
              {isSignup ? "Log in" : "Sign up"}
            </Link>
          </p>
        </div>
        <p className="text-center mt-6 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-foreground">← Back to home</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default AuthPage;
