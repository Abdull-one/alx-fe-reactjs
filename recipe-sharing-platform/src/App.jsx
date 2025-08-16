import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

export default function App() {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Router>
        <Routes>
          {/* Home Page: shows recipe list + add form */}
          <Route
            path="/"
            element={
              <div>
                <AddRecipeForm onAddRecipe={handleAddRecipe} />

                <div className="mt-8 max-w-lg mx-auto space-y-4">
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
            }
          />

          {/* Recipe Details Page */}
          <Route
            path="/recipe/:id"
            element={<RecipeDetail recipes={recipes} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
