import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Alert } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.logoContainer}>
        <AppText>Lembre APP</AppText>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton
          style={{ color: colors.light }}
          title={"Login"}
          onPress={() =>
            Alert.alert("Encaminhamento para LoginScreen pendente")
          }
        />

        <AppButton
          title={"Register"}
          onPress={() =>
            Alert.alert("Encaminhamento para RegisterScreen pendente")
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    color: colors.secondary,
  },
  logoContainer: {
    marginBottom: 50,
  },
  buttonContainer: {
    width: "50%",
  },
});

export default WelcomeScreen;
