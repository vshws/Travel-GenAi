// components/ItineraryCard.js
import React from 'react';

const ItineraryCard = ({ itinerary }) => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-5 text-center">Your Itinerary</h2>
      {itinerary.itinerary.map((dayPlan, index) => (
        <div key={index} className="bg-white shadow-md p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-4">Day {dayPlan.day}</h3>
          <ul className="list-disc ml-6">
            {dayPlan.activities.map((activity, i) => (
              <li key={i} className="mb-2">{activity}</li>
            ))}
          </ul>
          <div className="mt-4">
            <h4 className="font-semibold">Hotels:</h4>
            <ul>
              <li>Normal: {dayPlan.hotels.normal}</li>
              <li>Middle-Class: {dayPlan.hotels.middle_class}</li>
              <li>Luxury: {dayPlan.hotels.rich}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItineraryCard;
