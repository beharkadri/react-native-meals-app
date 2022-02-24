import { StyleSheet, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../components/Category";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    return (
      <Category
        item={itemData.item}
        onSelect={() =>
          navigation.navigate("CategoryMeals", { categoryId: itemData.item.id })
        }
      />
    );
  };
  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
};

CategoriesScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "Meal Categories",
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

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
