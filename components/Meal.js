import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import DefaultText from "./DefaultText";

const Meal = ({ meal, onSelect }) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelect}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{
                uri: meal.imageUrl,
              }}
              style={styles.bgImage}
            >
              <DefaultText style={styles.title} numberOfLines={1}>
                {meal.title}
              </DefaultText>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <DefaultText>{meal.duration}m</DefaultText>
            <DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Meal;

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    elevation: 2,
    overflow: "hidden",
    marginVertical: 10,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: "center",
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
});
