import { useRecipeStore } from "./recipeStore";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (!recipe) return <p>Recipe not found</p>;

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div>
      <h1 className="text-2xl font-bold">{recipe.title}</h1>
      <p>{recipe.description}</p>
      {isFavorite ? (
        <button
          className="text-red-500 mt-2"
          onClick={() => removeFavorite(recipe.id)}
        >
          Remove from Favorites
        </button>
      ) : (
        <button
          className="text-green-500 mt-2"
          onClick={() => addFavorite(recipe.id)}
        >
          Add to Favorites
        </button>
      )}
    </div>
  );
};

export default RecipeDetails;

