import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
      filteredRecipes: [...state.recipes, recipe].filter((r) =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () =>
    set((state) => {
      // simple mock recommendation system
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
