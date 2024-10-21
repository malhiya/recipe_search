import React from 'react';
import './Statistics.css'; // Import CSS for styling

const Statistics = ({ totalRecipes, averageCookingTime, averageIngredients, lowestCalorieDish }) => {
  return (
    <div className="statistics">
      <div className="stat-card">
          <h3>Total Recipes</h3>
          <p>{totalRecipes}</p>
        </div>
      <div className="stat-card">
        <h3>Lowest Calorie Dish</h3>
        <p>{Math.ceil(lowestCalorieDish)} calories</p>
      </div>
      <div className="stat-card">
        <h3>Average Cooking Time</h3>
        <p>{averageCookingTime.toFixed(2)} minutes</p>
      </div>
      <div className="stat-card">
        <h3>Average Ingredients per Dish</h3>
        <p>{averageIngredients.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Statistics;