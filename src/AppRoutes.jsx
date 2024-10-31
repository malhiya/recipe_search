import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import DetailRecipe from './components/DetailRecipe';

const AppRoutes = ({ filteredRecipes, recipes }) => {
  return (
    <Routes>
      <Route path="/" element={<RecipeList recipes={filteredRecipes} />} />
      <Route path="/recipe/:id" element={<DetailRecipe recipes={recipes} />} />
    </Routes>
  );
};

export default AppRoutes;