import { ArrowRight } from "lucide-react";
import BentoIllustration from "./BentoIllustration";

const Hero = () => {
  return (
    <section className="hero-section py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in-up">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-bento-cream leading-tight mb-6">
              Inference{" "}
              <span className="text-bento-lime">On Your Terms</span>
            </h1>
            <p className="text-lg md:text-xl text-bento-cream/80 mb-10 max-w-lg leading-relaxed">
              Inference Platform built for{" "}
              <span className="text-bento-lime font-medium">speed and control</span>. 
              Deploy any model anywhere, with tailored optimization, efficient scaling, 
              and streamlined operations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="cta-button cta-button-lime group"
              >
                <div>
                  <span className="block text-sm opacity-80">Start</span>
                  <span className="block font-bold">Building</span>
                </div>
                <div className="w-10 h-10 bg-bento-dark/10 rounded-full flex items-center justify-center group-hover:bg-bento-dark/20 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </a>
              <a
                href="#"
                className="cta-button cta-button-sage group"
              >
                <div>
                  <span className="block text-sm opacity-80">Get a</span>
                  <span className="block font-bold">Demo</span>
                </div>
                <div className="w-10 h-10 bg-bento-cream/10 rounded-full flex items-center justify-center group-hover:bg-bento-cream/20 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="fade-in-up delay-200 flex justify-center lg:justify-end">
            <BentoIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
