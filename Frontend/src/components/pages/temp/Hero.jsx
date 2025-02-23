import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 h-screen">
      <div className="absolute inset-0 bg-black opacity-30 z-[-1]"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Generative AI Challenge
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Showcase your technical skills in solving real-world problems using generative AI techniques.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center">
              Join Challenge <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-purple-600 hover:bg-purple-600/20 px-8 py-3 rounded-lg text-lg font-semibold transition-colors text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;