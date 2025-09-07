import { useRecipeStore } from "./recipeStore";

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((r) => r.id === id))
  );
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favorites.map((recipe) => (
          <div key={recipe.id} className="border p-2 mb-2 rounded">
            <h3 className="font-semibold">{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button
              className="text-red-500 mt-2"
              onClick={() => removeFavorite(recipe.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
