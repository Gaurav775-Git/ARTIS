const BentoIllustration = () => {
  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96 float-animation">
      {/* 3D Stacked Bento Boxes */}
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bottom box (dark) */}
        <g className="drop-shadow-2xl">
          <path
            d="M200 340L80 270V190L200 260L320 190V270L200 340Z"
            fill="hsl(147 33% 12%)"
            stroke="hsl(147 20% 25%)"
            strokeWidth="2"
          />
          <path
            d="M200 260L80 190L200 120L320 190L200 260Z"
            fill="hsl(147 33% 16%)"
            stroke="hsl(147 20% 25%)"
            strokeWidth="2"
          />
          <path
            d="M320 190V270L200 340V260L320 190Z"
            fill="hsl(147 33% 10%)"
            stroke="hsl(147 20% 25%)"
            strokeWidth="2"
          />
        </g>

        {/* Middle box (cream/white) */}
        <g className="drop-shadow-xl">
          <path
            d="M200 260L100 200V140L200 200L300 140V200L200 260Z"
            fill="hsl(60 20% 97%)"
            stroke="hsl(150 15% 88%)"
            strokeWidth="2"
          />
          <path
            d="M200 200L100 140L200 80L300 140L200 200Z"
            fill="hsl(60 20% 100%)"
            stroke="hsl(150 15% 88%)"
            strokeWidth="2"
          />
          <path
            d="M300 140V200L200 260V200L300 140Z"
            fill="hsl(60 10% 92%)"
            stroke="hsl(150 15% 88%)"
            strokeWidth="2"
          />
          
          {/* Grid lines on top face */}
          <line x1="150" y1="110" x2="150" y2="170" stroke="hsl(150 15% 88%)" strokeWidth="1" />
          <line x1="250" y1="110" x2="250" y2="170" stroke="hsl(150 15% 88%)" strokeWidth="1" />
          <line x1="125" y1="125" x2="275" y2="125" stroke="hsl(150 15% 88%)" strokeWidth="1" />
          <line x1="125" y1="155" x2="275" y2="155" stroke="hsl(150 15% 88%)" strokeWidth="1" />
        </g>

        {/* Top small box (cream with dots) */}
        <g className="drop-shadow-lg">
          <path
            d="M200 160L130 120V80L200 120L270 80V120L200 160Z"
            fill="hsl(60 20% 97%)"
            stroke="hsl(150 15% 88%)"
            strokeWidth="2"
          />
          <path
            d="M200 120L130 80L200 40L270 80L200 120Z"
            fill="hsl(60 20% 100%)"
            stroke="hsl(150 15% 88%)"
            strokeWidth="2"
          />
          <path
            d="M270 80V120L200 160V120L270 80Z"
            fill="hsl(60 10% 92%)"
            stroke="hsl(150 15% 88%)"
            strokeWidth="2"
          />
          
          {/* Decorative dots on top */}
          <ellipse cx="180" cy="70" rx="6" ry="4" fill="hsl(147 33% 20%)" />
          <ellipse cx="220" cy="70" rx="6" ry="4" fill="hsl(147 33% 20%)" />
          <ellipse cx="200" cy="85" rx="6" ry="4" fill="hsl(147 33% 20%)" />
        </g>

        {/* Floating particles */}
        <circle cx="340" cy="150" r="4" fill="hsl(78 89% 62%)" className="animate-pulse" />
        <circle cx="60" cy="180" r="3" fill="hsl(78 89% 62%)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <circle cx="350" cy="280" r="3" fill="hsl(78 89% 62%)" className="animate-pulse" style={{ animationDelay: '1s' }} />
        <circle cx="50" cy="260" r="4" fill="hsl(78 89% 62%)" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
      </svg>
    </div>
  );
};

export default BentoIllustration;
