import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import colors from "../constants/colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FiltersScreen from "../screens/FiltersScreen";
import { StatusBar } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const stackNavigationOptions = {
  headerStyle: {
    backgroundColor: "white",
  },
  headerTintColor: colors.primaryColor,
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: stackNavigationOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: stackNavigationOptions,
  }
);

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  { defaultNavigationOptions: stackNavigationOptions }
);

const MealsTabFavNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarLabel: "Meals",
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name={
                tabInfo.focused ? "ios-restaurant" : "ios-restaurant-outline"
              }
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarLabel: "Favorites",
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name={tabInfo.focused ? "ios-star" : "ios-star-outline"}
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: colors.primaryColor,
      inactiveTintColor: colors.primaryColor,
    },
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsTabFavNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: {
      screen: FiltersNavigator,
      navigationOptions: {
        drawerLabel: "Filters",
      },
    },
  },
  {
    contentOptions: {
      itemsContainerStyle: {
        marginTop: StatusBar.currentHeight + 20,
      },
      activeTintColor: colors.accentColor,
      inactiveTintColor: colors.primaryColor,
    },
  }
);

export default createAppContainer(MainNavigator);
