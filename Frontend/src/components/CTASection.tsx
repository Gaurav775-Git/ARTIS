import { ArrowRight, Terminal, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-bento-dark overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-bento-lime/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Code example */}
          <div className="fade-in-up order-2 lg:order-1">
            <div className="bg-bento-dark-surface rounded-3xl p-6 lg:p-8 border border-bento-sage/30">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <pre className="text-sm md:text-base overflow-x-auto">
                <code className="text-bento-cream/90">
                  <span className="text-bento-lime">import</span> bentoml{"\n"}
                  {"\n"}
                  <span className="text-bento-lime">@bentoml.service</span>
                  {"\n"}
                  <span className="text-blue-400">class</span>{" "}
                  <span className="text-yellow-300">Summarization</span>:{"\n"}
                  {"  "}model = bentoml.<span className="text-blue-300">models</span>.get(
                  {"\n"}
                  {"    "}<span className="text-orange-300">"summarization-model"</span>
                  {"\n"}
                  {"  "}){"\n"}
                  {"\n"}
                  {"  "}<span className="text-bento-lime">@bentoml.api</span>
                  {"\n"}
                  {"  "}<span className="text-blue-400">def</span>{" "}
                  <span className="text-yellow-300">summarize</span>(self, text:{" "}
                  <span className="text-blue-400">str</span>) -{">"}{" "}
                  <span className="text-blue-400">str</span>:{"\n"}
                  {"    "}<span className="text-blue-400">return</span> self.model(text)
                </code>
              </pre>
            </div>
            <div className="flex items-center gap-3 mt-6 text-bento-cream/60 text-sm">
              <Terminal className="w-4 h-4" />
              <span>Deploy with a single command</span>
            </div>
          </div>

          {/* Right: CTA content */}
          <div className="fade-in-up delay-200 order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-bento-lime" />
              <span className="text-bento-lime text-sm font-medium">Simple & Powerful</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-bento-cream mb-6 leading-tight">
              From Python to{" "}
              <span className="text-bento-lime">Production</span>
            </h2>
            <p className="text-bento-cream/70 text-lg mb-8 leading-relaxed">
              Define your model serving logic in Python. BentoML handles containerization, 
              scaling, and deployment automatically. No Kubernetes expertise required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="cta-button cta-button-lime group"
              >
                <span className="font-bold">Read the Docs</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-bento-cream/80 hover:text-bento-cream font-medium transition-colors"
              >
                View Examples
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
