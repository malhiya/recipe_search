import React from 'react';
import { useParams } from 'react-router-dom';
import './DetailRecipe.css';

const DetailRecipe = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find((r, index) => index.toString() === id); // Assuming index is used as the ID

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className='detail-recipe-card'>
      <h1>{recipe.title}</h1>
      <p><strong>Cooking Time:</strong> {recipe.cookingTime} minutes</p>
      <p><strong>Calories: </strong>{Math.ceil(recipe.calories)}</p>
      <p className='labels'><strong> {recipe.dietLabels.join(', ')}  </strong> </p>
      <img src={recipe.image} alt={recipe.title} />
      <br></br> <br></br>
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default DetailRecipe;