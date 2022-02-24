import React from "react";
import { View, StyleSheet } from "react-native-web";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";
import MealsList from "../components/MealsList";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealScreen = ({ navigation }) => {
  const catId = navigation.getParam("categoryId");
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const meals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (meals.length === 0 || !meals) {
    return (
      <View style={styles.fallbackContainer}>
        <DefaultText>No meals found. Maybe check your filters!</DefaultText>
      </View>
    );
  }

  return <MealsList meals={meals} navigation={navigation} />;
};

CategoryMealScreen.navigationOptions = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
