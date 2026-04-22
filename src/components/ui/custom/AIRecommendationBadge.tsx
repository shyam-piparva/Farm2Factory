
import { Sparkles, BarChart3, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface AIRecommendationBadgeProps {
  type?: "recommendation" | "insight" | "analysis";
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "outline" | "highlight";
  showIcon?: boolean;
}

export function AIRecommendationBadge({ 
  type = "recommendation", 
  className,
  children,
  variant = "default",
  showIcon = true
}: AIRecommendationBadgeProps) {
  const getIcon = () => {
    switch (type) {
      case "insight":
        return <Lightbulb className="h-3 w-3 mr-1" />;
      case "analysis":
        return <BarChart3 className="h-3 w-3 mr-1" />;
      case "recommendation":
      default:
        return <Sparkles className="h-3 w-3 mr-1" />;
    }
  };
  
  return (
    <div className={cn(
      "ai-badge inline-flex items-center text-xs font-medium px-2 py-1 rounded-full",
      {
        "bg-factory-blue/10 text-factory-blue": variant === "default",
        "border border-factory-blue/20 text-factory-blue": variant === "outline",
        "bg-amber-100 text-amber-800": variant === "highlight",
      },
      className
    )}>
      {showIcon && getIcon()}
      {children || `AI ${type}`}
    </div>
  );
}
