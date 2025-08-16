import { useState, useEffect } from "react";
import data from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load mock data
    setRecipes(data);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600 mt-2">{recipe.summary}</p>
              <a
                href={`/recipe/${recipe.id}`}
                className="text-blue-500 mt-4 inline-block hover:underline"
              >
                View Recipe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
