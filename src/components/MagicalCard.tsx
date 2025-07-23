import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MagicalCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  style?: React.CSSProperties;
}

export const MagicalCard = ({ 
  children, 
  className, 
  hover = true, 
  glow = false,
  style
}: MagicalCardProps) => {
  return (
    <Card
      className={cn(
        "p-6 rounded-2xl bg-card/90 backdrop-blur-sm border-border/50 shadow-card-magical",
        hover && "hover:shadow-magical hover:-translate-y-2 transition-all duration-300",
        glow && "shadow-glow",
        className
      )}
      style={style}
    >
      {children}
    </Card>
  );
};