import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Alert } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <View style={styles.logoContainer}>
        <AppText>Lembre APP</AppText>
      </View> */}

      <AppButton
        style={{ color: colors.light }}
        title={"Login"}
        onPress={() => navigation.navigate("LoginScreen")}
      />

      <AppButton
        title={"Cadastre-se"}
        onPress={() => navigation.navigate("RegisterScreen")}
      />
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
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 50,
  },
});

export default WelcomeScreen;
