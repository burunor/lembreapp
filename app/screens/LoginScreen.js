import React from "react";
import { Alert, StyleSheet, Text } from "react-native";
import * as Yup from "yup";

import AppTextInput from "../components/AppTextInput";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import Screen from "../components/Screen";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

const validationSchema = Yup.object().shape({
  userOrEmail: Yup.string().required("Email ou usuário são obrigatórios"),
  password: Yup.string().required("Senha é obrigatória"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{ userOrEmail: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autofocus
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          keyboardType="email-address"
          name="userOrEmail"
          placeholder="Usuário ou email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCorrect={false}
          autoCapitalize="none"
          icon="lock"
          name="password"
          placeholder="Senha"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>

      <Text
        style={styles.link}
        onPress={() => Alert.alert("Esqueceu senha foi pressionado")}
      >
        Esqueceu sua senha?
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: defaultStyles.colors.primary,
  },
  link: {
    color: colors.link,
    marginTop: 10,
    textDecorationLine: "underline",
  },
});
export default LoginScreen;
