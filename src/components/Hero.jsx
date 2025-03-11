import React from "react";
import HeroImage from "../assets/images/home-bg.png";

const Hero = () => {
  return (
    <div
      className="relative h-[60dvh] bg-cover bg-center py-10 flex flex-col items-center justify-center text-white sm:px-0 px-5"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <h1 className="text-3xl sm:text-5xl text-purple-900 font-semibold mb-2 font-inter sm:w-2/5 text-center">
        Find the perfect space for your events
      </h1>
      <p className="text-base sm:text-xl max-w-lg text-center mt-2 text-neutral-700 sm:w-1/2 text-center">
        Seamlessly book hotel halls for your events—anytime, anywhere. Secure
        payments. Instant confirmation
      </p>
    </div>
  );
};

export default Hero;
