import { useState, useEffect } from 'react';
import './App.css';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import Statistics from './components/Statistics';
import { BrowserRouter as Router } from 'react-router-dom';
const ACCESS_KEY = "0a328037bc7dd0e8f3d656d8a2259593";
const APP_ID = "2142c3aa";
import DetailRecipe from './components/DetailRecipe';
import AppRoutes from './AppRoutes';
import Histogram from './components/Histogram';



const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const fetchRecipes = async (query) => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${ACCESS_KEY}`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const fetchedRecipes = (data.hits.map(hit => ({
        title: hit.recipe.label,
        image: hit.recipe.image,
        ingredients: hit.recipe.ingredientLines, 
        cookingTime: hit.recipe.totalTime === 0 ? 5 : hit.recipe.totalTime, 
        calories: hit.recipe.calories, 
        dietLabels: hit.recipe.dietLabels,
      })));

      setRecipes(fetchedRecipes);
      setFilteredRecipes(fetchedRecipes);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);


  const averageCookingTime = filteredRecipes.length > 0
  ? filteredRecipes.reduce((total, recipe) => total + recipe.cookingTime, 0) / filteredRecipes.length
  : 0;

  const averageIngredients = filteredRecipes.length > 0
    ? filteredRecipes.reduce((total, recipe) => total + recipe.ingredients.length, 0) / filteredRecipes.length
    : 0;


  const lowestCalories =  Math.min(...filteredRecipes.map(recipe => recipe.calories || Infinity));


  const handleCookingTimeFilter = (maxTime) => {
    const filtered = recipes.filter(recipe => recipe.cookingTime <= maxTime);
    setFilteredRecipes(filtered);
  };

  const cookingTimeData = filteredRecipes.reduce((acc, recipe) => {
    const time = recipe.cookingTime;
    if (acc[time]) {
      acc[time].count += 1;
    } else {
      acc[time] = { name: time, count: 1 };
    }
    return acc;
  }, {});

  const histogramData = Object.values(cookingTimeData);

  return (
  <Router>
      <div>
        <div className="header">
          <h1>Culinary Quest 🍲</h1>
          <h3>Type in an ingredient, cuisine type, or food to find a meal!</h3>
        </div>

        <SearchBar onSearch={fetchRecipes} />

        <div>
          <button onClick={() => handleCookingTimeFilter(3000)}>All</button>
          <button onClick={() => handleCookingTimeFilter(30)}>Up to 30 minutes</button>
          <button onClick={() => handleCookingTimeFilter(15)}>Up to 15 minutes</button>
          <button onClick={() => handleCookingTimeFilter(10)}>Up to 10 minutes</button>
        </div>

        <Statistics 
          averageCookingTime={averageCookingTime}
          averageIngredients={averageIngredients}
          lowestCalorieDish={lowestCalories}
          totalRecipes={filteredRecipes.length}
        />

        <Histogram data={histogramData} />



        <div className="list-area">
          <AppRoutes filteredRecipes={filteredRecipes} recipes={recipes} />
        </div>
      </div>
    </Router>
  );
  };

export default App;

   