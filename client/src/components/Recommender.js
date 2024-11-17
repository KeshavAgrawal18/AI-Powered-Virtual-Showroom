import React, { useState, useEffect } from "react";
import { fetchRecommendations } from "../services/api";

function Recommender({ userPreferences }) {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    async function loadRecommendations() {
      const response = await fetchRecommendations(userPreferences);
      setRecommendations(response);
    }
    loadRecommendations();
  }, [userPreferences]);

  return (
    <div>
      <h3>Recommended Cars</h3>
      <ul>
        {recommendations.map((car, index) => (
          <li key={index}>{car.model}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recommender;
