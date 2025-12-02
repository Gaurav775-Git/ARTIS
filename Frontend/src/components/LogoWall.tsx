const LogoWall = () => {
  const logos = [
    "Yext",
    "WaterGenics",
    "vRad",
    "SoundHound",
    "Porch",
    "Naver",
    "Adobe",
    "Intel",
  ];

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-muted-foreground text-sm mb-10 fade-in-up">
          Trusted by the best AI teams
        </p>
        
        {/* Scrolling logos */}
        <div className="relative">
          <div className="flex gap-16 items-center justify-center flex-wrap md:flex-nowrap">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="text-muted-foreground/60 hover:text-foreground transition-colors duration-300 font-display font-bold text-xl md:text-2xl cursor-default"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoWall;
