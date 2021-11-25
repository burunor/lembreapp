import React from "react";
import { Text, Platform, StyleSheet } from "react-native";

import colors from "../config/colors";

function AppText({ children, style }) {
  return <Text style={style ? style : styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.secondary,
    fontSize: 20,
  },
});

export default AppText;
