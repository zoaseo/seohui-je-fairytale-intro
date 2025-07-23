import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MagicalButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "enchanted";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export const MagicalButton = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  className,
  onClick 
}: MagicalButtonProps) => {
  const variants = {
    primary: "bg-gradient-primary hover:shadow-glow text-primary-foreground border-0 transform hover:scale-105 transition-all duration-300",
    secondary: "bg-gradient-secondary hover:shadow-magical text-secondary-foreground border-0 transform hover:scale-105 transition-all duration-300", 
    enchanted: "bg-gradient-magical hover:shadow-glow text-white border-0 transform hover:scale-105 transition-all duration-300 animate-sparkle"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <Button
      className={cn(
        "rounded-full font-semibold shadow-card-magical",
        variants[variant],
        sizes[size],
        className
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};