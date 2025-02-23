import React from 'react';
import { Cpu, Code, Network } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Cpu className="h-12 w-12 text-purple-500 mb-4" />,
      title: "AI Development Challenges",
      description: "Build and implement cutting-edge AI models to solve complex problems."
    },
    {
      icon: <Code className="h-12 w-12 text-purple-500 mb-4" />,
      title: "Technical Challenges",
      description: "Solve real-world problems using advanced programming techniques."
    },
    {
      icon: <Network className="h-12 w-12 text-purple-500 mb-4" />,
      title: "Network Learning",
      description: "Connect with experts and learn from the best in the field."
    }
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Challenge Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-colors">
              {feature.icon}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;