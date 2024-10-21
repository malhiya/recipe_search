import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => (
  <div>
    {recipes.map((recipe, index) => (
      <RecipeCard key={index} recipe={recipe} />
    ))}
  </div>
);

export default RecipeList;