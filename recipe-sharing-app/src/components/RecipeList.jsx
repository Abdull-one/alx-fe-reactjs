import React from "react";
import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.searchTerm ? state.filteredRecipes : state.recipes
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Recipes</h2>
      <SearchBar />
      <ul className="space-y-2">
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <li key={index} className="p-2 border rounded">
              <Link to={`/recipe/${index}`} className="text-blue-500">
                {recipe.title}
              </Link>
            </li>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </ul>
    </div>
  );
};

export default RecipeList;
