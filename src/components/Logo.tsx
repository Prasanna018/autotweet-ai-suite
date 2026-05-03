import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`flex items-center gap-2 font-display font-bold text-lg ${className}`}>
    <span className="grid place-items-center h-8 w-8 rounded-xl bg-gradient-primary shadow-glow">
      <Sparkles className="h-4 w-4 text-primary-foreground" />
    </span>
    <span>AutoTweet <span className="text-gradient">AI</span></span>
  </Link>
);
