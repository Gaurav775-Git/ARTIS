import { X, Sparkles } from "lucide-react";
import { useState } from "react";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="announcement-bar relative">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 flex-shrink-0" />
        <p className="text-center">
          <span className="hidden sm:inline">📢 Introducing </span>
          <a href="#" className="underline underline-offset-2 font-semibold hover:no-underline">
            llm-optimizer
          </a>
          {" & "}
          <a href="#" className="underline underline-offset-2 font-semibold hover:no-underline">
            LLM Performance Explorer
          </a>
          <span className="hidden md:inline"> — benchmark and optimize LLM inference with ease.</span>
        </p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-bento-dark/10 rounded transition-colors"
        aria-label="Close announcement"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
