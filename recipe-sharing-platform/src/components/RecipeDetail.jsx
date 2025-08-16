import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find recipe by ID
    const found = data.find((r) => r.id === parseInt(id));
    setRecipe(found);
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10">Recipe not found!</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-md shadow-md"
      />
      <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
      <p className="mt-2 text-gray-700">{recipe.summary}</p>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {recipe.ingredients?.map((ing, idx) => (
            <li key={idx}>{ing}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <p className="text-gray-700 whitespace-pre-line">
          {recipe.instructions || "No instructions provided."}
        </p>
      </div>

      <div className="mt-6">
        <Link
          to="/"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetail;
