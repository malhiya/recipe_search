import React from 'react';
import './RecipeCard.css'


const RecipeCard = ({ recipe }) => (
    <div className="recipe-card">
    <img className="recipe-image" src={recipe.image} alt={recipe.title} />
    <div className="recipe-details">
      <h2>{recipe.title}</h2>
      <p><strong>Calories:</strong> {Math.ceil(recipe.calories)} cal</p>
      <p><strong> Time:</strong> {recipe.cookingTime} minutes</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  </div>
  );

export default RecipeCard;