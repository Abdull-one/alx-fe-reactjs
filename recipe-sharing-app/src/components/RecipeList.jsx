import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) {
    return <p>No recipes yet.</p>;
  }

  return (
    <ul className="space-y-4">
      {recipes.map((recipe) => (
        <li key={recipe.id} className="border p-4 rounded shadow">
          <h2 className="text-xl font-bold">{recipe.title}</h2>
          <p>{recipe.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
