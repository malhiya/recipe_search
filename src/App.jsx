import { useState, useEffect } from 'react';
import './App.css';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import Statistics from './components/Statistics'
const ACCESS_KEY = "0a328037bc7dd0e8f3d656d8a2259593";
const APP_ID = "2142c3aa";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    // try {
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


    // } catch (error) {
    //   console.error("Error fetching recipes:", error);
    // }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);


  const averageCookingTime = filteredRecipes.length > 0
  ? filteredRecipes.reduce((total, recipe) => total + recipe.cookingTime, 0) / recipes.length
  : 0;

  const averageIngredients = filteredRecipes.length > 0
    ? filteredRecipes.reduce((total, recipe) => total + recipe.ingredients.length, 0) / recipes.length
    : 0;

  // const shortestCookTime =  Math.min(...recipes.map(recipe => recipe.cookingTime || Infinity));

  const lowestCalories =  Math.min(...filteredRecipes.map(recipe => recipe.calories || Infinity));


  // const handleVegetarianOption = () => {
  //   const filtered = recipes.filter(recipe =>
  //     recipe.dietLabels.filter(label => label === 'Vegetarian').length > 0
  //   );
  //   setFilteredRecipes(filtered);
  // };

  // const handleVeganOption = () => {
  //   const filtered = recipes.filter(recipe =>
  //     recipe.dietLabels.filter(label => label === 'Vegan').length > 0
  //   );
  //   setFilteredRecipes(filtered);
  // };

  const handleCookingTimeFilter = (maxTime) => {
    const filtered = recipes.filter(recipe => recipe.cookingTime <= maxTime);
    setFilteredRecipes(filtered);
  };

  return (
    <div>
      <div className="header">
        <h1>Culinary Quest 🍲</h1>
        <h3>Type in an ingredient, cuisine type, or food to find a meal!</h3>
      </div>

      <br></br><br></br>

      <div className="recipe-area">
      <SearchBar onSearch={fetchRecipes} />
      <br></br>
      <div>
      {/* <button onClick={handleVegetarianOption}></button>
      <button onClick={handleVeganOption}>Vegan</button> */}
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
        //shortestCookingTime={shortestCookTime}
      />
      <div className="list-area">
      <RecipeList recipes={filteredRecipes} />
      </div>

      </div>
    </div>
  );
};

export default App;