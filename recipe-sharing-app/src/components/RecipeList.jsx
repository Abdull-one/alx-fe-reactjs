import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="p-4 border rounded mb-2">
          <h3 className="font-bold">{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link
            to={`/recipe/${recipe.id}`}
            className="text-green-600 underline"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
