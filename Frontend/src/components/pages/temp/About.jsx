import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">About the Challenge</h2>
            <p className="text-gray-300 mb-6">
              The Generative AI Challenge is designed to push the boundaries of what's possible with AI. 
              Participants will tackle real-world problems, implement cutting-edge solutions, and compete 
              with the best minds in the field.
            </p>
            <p className="text-gray-300">
              Whether you're a seasoned AI practitioner or just starting your journey, this challenge 
              offers a unique opportunity to learn, grow, and showcase your skills to the world.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
              alt="AI visualization" 
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;