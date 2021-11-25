import React from "react";
import { StyleSheet, Text } from "react-native";

import HomeIcons from "../components/HomeIcons";
import Screen from "../components/Screen";
import colors from "../config/colors";

function HomeScreen(props) {
  return (
    <Screen style={styles.container}>
      <HomeIcons
        image={require("../assets/calendar.png")}
        size={90}
        color={colors.secondary}
        title="agenda"
      />
      <HomeIcons
        image={require("../assets/bus-school.png")}
        size={100}
        color={colors.secondary}
        title="transporte"
      />
      <HomeIcons
        image={require("../assets/blackboard.png")}
        size={100}
        color={colors.secondary}
        title="escola"
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: colors.primary,
  },
});

export default HomeScreen;
