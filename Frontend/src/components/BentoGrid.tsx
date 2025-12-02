import { Zap, Shield, Globe, Code2, Cpu, BarChart3 } from "lucide-react";
import FeatureCard from "./FeatureCard";

const BentoGrid = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized inference with automatic batching and model optimization for maximum throughput.",
      variant: "lime" as const,
      size: "large" as const,
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliant with end-to-end encryption and private deployments.",
      variant: "dark" as const,
      size: "medium" as const,
    },
    {
      icon: Globe,
      title: "Deploy Anywhere",
      description: "Cloud, on-prem, or hybrid. Your models, your infrastructure.",
      variant: "cream" as const,
      size: "medium" as const,
    },
    {
      icon: Code2,
      title: "Python Native",
      description: "Build with familiar tools. No new frameworks to learn.",
      variant: "sage" as const,
      size: "medium" as const,
    },
    {
      icon: Cpu,
      title: "Auto Scaling",
      description: "Scale to zero when idle, scale to thousands when needed.",
      variant: "cream" as const,
      size: "medium" as const,
    },
    {
      icon: BarChart3,
      title: "Full Observability",
      description: "Real-time metrics, logging, and tracing for every request.",
      variant: "dark" as const,
      size: "large" as const,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything you need to{" "}
            <span className="text-bento-lime">ship AI</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From prototype to production in minutes. BentoML handles the infrastructure 
            so you can focus on building.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              variant={feature.variant}
              className={`fade-in-up ${
                feature.size === "large" ? "lg:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
