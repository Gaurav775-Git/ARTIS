import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bento-card bento-card-dark text-center max-w-4xl mx-auto py-16 lg:py-20 px-8 lg:px-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to ship AI{" "}
            <span className="text-bento-lime">faster?</span>
          </h2>
          <p className="text-bento-cream/70 text-lg mb-10 max-w-xl mx-auto">
            Join thousands of teams using BentoML to deploy machine learning models 
            with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="cta-button cta-button-lime group inline-flex"
            >
              <span className="font-bold">Start for Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="cta-button cta-button-sage group inline-flex"
            >
              <span className="font-bold">Talk to Sales</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
