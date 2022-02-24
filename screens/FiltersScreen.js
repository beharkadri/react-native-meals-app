import { StyleSheet, Switch, Text, View } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import colors from "../constants/colors";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/meals";

const Filter = ({ label, value, onChange }) => (
  <View style={styles.filterContainer}>
    <Text style={styles.filterText}>{label}</Text>
    <Switch
      thumbColor={colors.accentColor}
      trackColor={{ true: colors.primaryColor }}
      value={value}
      onValueChange={onChange}
    />
  </View>
);

const FiltersScreen = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      isGlutenFree,
      isLactoseFree,
      isVegan,
      isVegetarian,
    };

    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <Filter
        label="Gluten-Free"
        value={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <Filter
        label="Lactose-Free"
        value={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <Filter
        label="Vegan"
        value={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <Filter
        label="Vegetarian"
        value={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  );
};

export default FiltersScreen;

FiltersScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "Filters",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Filter"
          iconName="ios-menu"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navigation.getParam("save")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
    margin: 20,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
  filterText: {
    fontFamily: "open-sans",
  },
});
