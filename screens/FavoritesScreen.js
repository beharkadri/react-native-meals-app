import React from "react";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import MealsList from "../components/MealsList";
import { View, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultText";

const FavoritesScreen = ({ navigation }) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  if (favoriteMeals.length === 0 || !favoriteMeals) {
    return (
      <View style={styles.fallbackContainer}>
        <DefaultText>No favorites found. Start adding some!</DefaultText>
      </View>
    );
  }
  return <MealsList meals={favoriteMeals} navigation={navigation} />;
};

FavoritesScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Title"
          iconName="ios-menu"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
