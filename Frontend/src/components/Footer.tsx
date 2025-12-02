import { Github, Twitter, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: ["Cloud", "Open Source", "Pricing", "Changelog"],
    Resources: ["Documentation", "Tutorials", "Blog", "Examples"],
    Company: ["About", "Careers", "Contact", "Press"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: MessageCircle, href: "#", label: "Discord" },
  ];

  return (
    <footer className="bg-bento-dark py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <a href="/" className="flex items-center gap-2 mb-4 group">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-bento-cream group-hover:bg-bento-lime transition-colors" />
                <div className="w-2 h-2 rounded-full bg-bento-cream group-hover:bg-bento-lime transition-colors delay-75" />
                <div className="w-2 h-2 rounded-full bg-bento-cream group-hover:bg-bento-lime transition-colors delay-150" />
              </div>
              <span className="font-display font-bold text-xl text-bento-cream">BentoML</span>
            </a>
            <p className="text-bento-cream/60 text-sm mb-6 max-w-xs">
              The unified platform for building, deploying, and scaling AI applications.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-bento-sage/30 flex items-center justify-center text-bento-cream/70 hover:bg-bento-lime hover:text-bento-dark transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-bento-cream mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-bento-cream/60 hover:text-bento-lime text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-bento-sage/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-bento-cream/50 text-sm">
            © {new Date().getFullYear()} BentoML Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-bento-cream/50 hover:text-bento-cream text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-bento-cream/50 hover:text-bento-cream text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
