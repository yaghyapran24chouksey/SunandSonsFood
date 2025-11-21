import React, { useState } from "react";

// Icons
const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const FlagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" x2="4" y1="22" y2="15" />
  </svg>
);

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

export default function VisionMissionValues() {
  const tabs = {
    Vision: {
      icon: <EyeIcon />,
      text: "Our vision is to guarantee consumer satisfaction through the consistent delivery of quality and value. Simultaneously, we aim to empower our farmers, fostering self-dependence and happiness among them."
    },
    Mission: {
      icon: <FlagIcon />,
      text: "Our mission is to empower farmers to efficiently produce premium dairy products, establishing ourselves as a cherished brand for consumers, envied by competitors, and valued by shareholders."
    },
    Values: {
      icon: <SparklesIcon />,
      text: "We adhere to the core values of farmer-centric commitment, quality assurance, community partnership, integrity, and innovation in all our undertakings. We aim for exceptional customer service in every aspect of our operations."
    }
  };

  const [active, setActive] = useState("Vision");

  return (
    <div className="bg-white w-full px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Blue Box */}
          <div className="bg-[#003F86] rounded-3xl h-[380px] flex items-center justify-center">
            {tabs[active].icon}
          </div>

          {/* Right Section */}
          <div>
            {/* Tabs */}
            <div className="flex bg-[#DCE6F4] rounded-full overflow-hidden w-fit mx-auto md:mx-15 mb-20">
              {Object.keys(tabs).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className={`px-8 py-3 flex items-center gap-2 rounded-full text-sm font-medium transition-all
                    ${active === tab ? "bg-[#003F86] text-white" : "text-[#003F86]"}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Text */}
            <p className="text-[#003F86] text-xl leading-relaxed font-medium">
              {tabs[active].text}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
