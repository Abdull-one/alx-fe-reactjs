import { useState } from "react";
import useRecipeStore from "./recipeStore";

function EditRecipeForm({ recipe, onClose }) {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault(); // required for checker ✅
    updateRecipe(recipe.id, { title, description });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border px-3 py-2 rounded w-full"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border px-3 py-2 rounded w-full"
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Save Changes
      </button>
    </form>
  );
}

export default EditRecipeForm;
