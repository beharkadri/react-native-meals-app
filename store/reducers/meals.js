import { MEALS } from "../../data/dummy-data";
import { SET_FILTERS, TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const newFavMeal = state.meals.find(
          (meal) => meal.id === action.mealId
        );
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(newFavMeal),
        };
      }
    case SET_FILTERS:
      const filteredMeals = state.meals.filter((meal) => {
        for (const key in action.filters)
          if (action.filters[key] && !meal[key]) return false;
        return true;
      });
      return {
        ...state,
        filteredMeals: filteredMeals,
      };
    default:
      return state;
  }
};

export default mealsReducer;
