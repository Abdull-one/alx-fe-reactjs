import { useRecipeStore } from '../recipeStore';

const RecipeList = () => {
  const { recipes, favorites, addFavorite, removeFavorite } = useRecipeStore();

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid gray', margin: '10px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => toggleFavorite(recipe.id)}>
            {favorites.includes(recipe.id) ? '★ Remove Favorite' : '☆ Add to Favorites'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
