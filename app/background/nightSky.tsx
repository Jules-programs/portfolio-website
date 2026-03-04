import React from "react";

const NightSky: React.FC = () => {
  const layers = 4;
  const starsPerLayer = 200;

  const generateStars = () =>
    Array.from({ length: starsPerLayer }).map((_, i) => {
      const cx = `${Math.round(Math.random() * 10000) / 100}%`;
      const cy = `${Math.round(Math.random() * 10000) / 100}%`;
      const r = Math.round((Math.random() + 0.5) * 10) / 10;

      return <circle key={i} cx={cx} cy={cy} r={r} className="star" />;
    });

  return (
    <div className="stars-wrapper absolute top-0 left-0 w-full h-[2000px] -z-10 pointer-events-none">
      {/* Twinkle layers */}
      {Array.from({ length: layers }).map((_, layerIndex) => (
        <svg
          key={layerIndex}
          className={`stars absolute inset-0 w-full h-full`}
          preserveAspectRatio="none"
        >
          {generateStars()}
        </svg>
      ))}

      {/* Comets */}
      <svg className="extras absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <radialGradient id="comet-gradient" cx="0" cy=".5" r="0.5">
            <stop offset="0%" stopColor="rgba(255,255,255,.8)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>

        <g transform="rotate(-135)">
          <ellipse
            className="comet comet-a"
            fill="url(#comet-gradient)"
            cx="0"
            cy="0"
            rx="150"
            ry="2"
          />
        </g>

        <g transform="rotate(20)">
          <ellipse
            className="comet comet-b"
            fill="url(#comet-gradient)"
            cx="100%"
            cy="0"
            rx="150"
            ry="2"
          />
        </g>

        <g transform="rotate(300)">
          <ellipse
            className="comet comet-c"
            fill="url(#comet-gradient)"
            cx="40%"
            cy="100%"
            rx="150"
            ry="2"
          />
        </g>
      </svg>
    </div>
  );
};

export default NightSky;