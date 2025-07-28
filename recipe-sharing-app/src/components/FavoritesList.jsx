import { useRecipeStore } from "../recipeStore";

const FavoritesList = () => {
  const { recipes, favorites } = useRecipeStore();

  const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
