import { Link } from "react-router-dom";
import recipes from "../data";

function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Recipe List</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>
            <p className="text-gray-600 text-sm">{recipe.summary}</p>
            <Link
              to={`/recipe/${recipe.id}`}
              className="inline-block mt-3 text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
