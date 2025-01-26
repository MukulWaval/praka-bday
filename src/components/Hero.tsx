import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="hero bg-base-200 min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="hero-content flex flex-col-reverse lg:flex-row items-center">
        <img
          src="https://i.postimg.cc/13SPwDrT/IMG-20240112-WA0030-removebg-preview-upscayl-2x-high-fidelity-4x.png"
          className="max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg mb-6 lg:mb-0"
          alt="Celebration"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold">
            नमस्कार, मी <span className="text-accent">प्रसाद मणेरीकर</span>
          </h1>
          <p className="py-6 text-sm sm:text-base">
            A writer and an educationist with more than 20 years of experience
            in scientific and experimental education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
