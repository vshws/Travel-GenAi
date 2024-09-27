// components/HeroSection.js
import React, { useState } from 'react';

const HeroSection = ({ onGenerate }) => {
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState('');

  const handleGenerate = () => {
    if (destination && days) {
      onGenerate(destination, days);
    }
  };

  return (
    <section className="hero bg-blue-500 text-white py-10">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Plan Your Perfect Trip</h1>
        <p className="mb-8">Enter your destination and number of days to get started</p>
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Destination"
            className="p-3 rounded-l-lg border-0 focus:outline-none"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <input
            type="number"
            placeholder="Days"
            className="p-3 border-0 focus:outline-none"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-r-lg"
            onClick={handleGenerate}
          >
            Generate
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
