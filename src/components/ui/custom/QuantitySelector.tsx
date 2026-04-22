
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface QuantitySelectorProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  min?: number;
  max?: number;
  className?: string;
  size?: "default" | "sm" | "lg";
}

export function QuantitySelector({
  quantity,
  onIncrement,
  onDecrement,
  min = 1,
  max = 999,
  className,
  size = "default",
}: QuantitySelectorProps) {
  const isDecrementDisabled = quantity <= min;
  const isIncrementDisabled = quantity >= max;
  
  const getSize = () => {
    switch (size) {
      case "sm":
        return "h-8";
      case "lg":
        return "h-12 text-lg";
      default:
        return "h-10";
    }
  };
  
  return (
    <div 
      className={cn(
        "flex items-center border border-input rounded-md overflow-hidden",
        getSize(),
        className
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "rounded-none border-r border-input",
          size === "sm" ? "h-8 w-8" : "h-full aspect-square",
          size === "lg" && "text-lg"
        )}
        onClick={onDecrement}
        disabled={isDecrementDisabled}
      >
        <Minus className={size === "sm" ? "h-3 w-3" : "h-4 w-4"} />
      </Button>
      
      <div className={cn(
        "flex items-center justify-center font-medium",
        size === "sm" ? "w-8" : "w-10", 
        size === "lg" && "w-14"
      )}>
        {quantity}
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "rounded-none border-l border-input",
          size === "sm" ? "h-8 w-8" : "h-full aspect-square",
          size === "lg" && "text-lg"
        )}
        onClick={onIncrement}
        disabled={isIncrementDisabled}
      >
        <Plus className={size === "sm" ? "h-3 w-3" : "h-4 w-4"} />
      </Button>
    </div>
  );
}
