import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";

function HomeIcons({ image, size = 40, color = "#000", title }) {
  return (
    <View style={styles.container}>
      <Image style={[styles.image, { width: size }]} source={image} />
      {title && <Text style={styles.text}>{title}</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  text: {
    fontSize: 18,
    textTransform: "uppercase",
    color: colors.secondary,
  },
  image: {},
});

export default HomeIcons;
