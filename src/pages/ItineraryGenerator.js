// pages/ItineraryGenerator.js
import React, { useState } from 'react';
import ItineraryCard from '../components/ItineraryCard';
import HeroSection from '../components/HeroSection';

const ItineraryGenerator = () => {
  const [itinerary, setItinerary] = useState(null);

  const handleGenerate = async (destination, days) => {
    try {
      const response = await fetch('https://travel-genai-backenene-production.up.railway.app/generate-itinerary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ destination, days }),
      });

      if (response.ok) {
        const data = await response.json();
        setItinerary(data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-5">Itinerary Generator</h1>
      <HeroSection onGenerate={handleGenerate} />
      {itinerary && <ItineraryCard itinerary={itinerary} />}
    </div>
  );
};

export default ItineraryGenerator;
