import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Meal from "./Meal";
import { useSelector } from "react-redux";

const MealsList = ({ meals, navigation }) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);
  const renderMealItem = (itemData) => {
    const isFavorite = favoriteMeals.some(
      (meal) => meal.id === itemData.item.id
    );
    return (
      <Meal
        meal={itemData.item}
        onSelect={() => {
          navigation.navigate("MealDetail", {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title,
            isFavorite: isFavorite,
          });
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList data={meals} renderItem={renderMealItem} style={styles.list} />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  list: {
    width: "100%",
  },
});
