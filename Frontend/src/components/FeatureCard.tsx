import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant: "lime" | "dark" | "cream" | "sage";
  className?: string;
  style?: CSSProperties;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  variant,
  className,
  style,
}: FeatureCardProps) => {
  const variantClasses = {
    lime: "bento-card-lime",
    dark: "bento-card-dark",
    cream: "bento-card-cream",
    sage: "bento-card-sage",
  };

  const iconBgClasses = {
    lime: "bg-bento-dark/10",
    dark: "bg-bento-cream/10",
    cream: "bg-bento-dark/10",
    sage: "bg-bento-cream/10",
  };

  return (
    <div
      className={cn("bento-card", variantClasses[variant], className)}
      style={style}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
          iconBgClasses[variant]
        )}
      >
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
      <p className="opacity-80 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
