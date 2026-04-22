
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  size?: "default" | "small" | "large";
}

export function SectionTitle({ 
  title, 
  subtitle, 
  alignment = "center",
  className,
  titleClassName,
  subtitleClassName,
  size = "default"
}: SectionTitleProps) {
  return (
    <div className={cn(
      "mb-10 reveal-animation",
      {
        "text-center": alignment === "center",
        "text-left": alignment === "left",
        "text-right": alignment === "right",
      },
      className
    )}>
      <h2 className={cn(
        "section-title",
        {
          "text-2xl font-bold": size === "small",
          "text-3xl font-bold": size === "default",
          "text-4xl font-bold": size === "large",
        },
        titleClassName
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "section-subtitle mt-2",
          {
            "text-sm text-muted-foreground": size === "small",
            "text-muted-foreground": size === "default",
            "text-lg text-muted-foreground": size === "large",
          },
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
