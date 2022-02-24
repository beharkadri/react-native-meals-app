import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DefaultText = (props) => {
  return (
    <Text style={{ ...styles.text, ...props.style }} {...props}>
      {props.children}
    </Text>
  );
};

export default DefaultText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
  },
});
