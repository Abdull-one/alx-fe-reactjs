import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage recipes={recipes} />} />
          <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
        </Routes>
      </Router>

      {/* Add Recipe Form always visible at bottom (you can move it into HomePage if needed) */}
      <div className="mt-8 max-w-lg mx-auto">
        <AddRecipeForm onAddRecipe={handleAddRecipe} />
        <div className="space-y-4 mt-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white p-4 rounded-lg shadow-md border"
            >
              <h3 className="text-xl font-bold">{recipe.title}</h3>
              <p className="text-sm text-gray-600">
                Ingredients: {recipe.ingredients.join(", ")}
              </p>
              <p className="mt-2">{recipe.steps}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

