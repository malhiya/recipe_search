import React from 'react';
import './RecipeCard.css'
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe, index }) => (
    <div className="recipe-card">
    <img className="recipe-image" src={recipe.image} alt={recipe.title} />
    <div className="recipe-details">
      <Link to={`/recipe/${index}`}>
        <h2>{recipe.title}</h2>
      </Link>
      <p><strong>Calories:</strong> {Math.ceil(recipe.calories)} cal</p>
      <p><strong> Time:</strong> {recipe.cookingTime} minutes</p>
    </div>
  </div>
  );

  export default RecipeCard;
