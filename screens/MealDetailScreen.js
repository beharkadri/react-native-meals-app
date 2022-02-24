import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import DefaultText from "../components/DefaultText";

import { toggleFavorite } from "../store/actions/meals";

const ListItem = ({ children }) => (
  <View style={styles.listItem}>
    <DefaultText>{children}</DefaultText>
  </View>
);
const MealDetailScreen = ({ navigation }) => {
  const meals = useSelector((state) => state.meals.meals);
  const mealId = navigation.getParam("mealId");

  const meal = meals.find((meal) => meal.id === mealId);
  const isFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [mealId]);

  useEffect(
    () => navigation.setParams({ toggleFavorite: toggleFavoriteHandler }),
    [toggleFavoriteHandler]
  );

  useEffect(
    () => navigation.setParams({ isFavorite: isFavorite }),
    [isFavorite]
  );

  return (
    <ScrollView style={styles.screen}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{meal.duration}m</DefaultText>
        <DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {meal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {meal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = ({ navigation }) => {
  const mealTitle = navigation.getParam("mealTitle");
  const toggleFavorite = navigation.getParam("toggleFavorite");
  const isFavorite = navigation.getParam("isFavorite");
  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
    textAlign: "center",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 150,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  listItem: {
    marginVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});
