import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Category = ({ item, onSelect }) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={onSelect}>
      <View style={{ ...styles.item, backgroundColor: item.color }}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 10,
    overflow: "hidden",
  },
  item: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 15,
  },
  title: {
    fontFamily: "open-sans-bold",
    color: "black",
    fontSize: 18,
  },
});
