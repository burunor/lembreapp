import React from "react";
import { Alert, StyleSheet, Text } from "react-native";
import * as Yup from "yup";

import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import defaultStyles from "../config/styles";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Usuário é obrigatório")
    .max(15, "Usuário deve ter 15 ou menos caracteres"),
  email: Yup.string().required("Email é obrigatório").email("Email inválido"),
  name: Yup.string()
    .required("Nome completo é obrigatório")
    .min(4, "Nome completo deve ter mais que 4 caracteres")
    .max(255),
  password: Yup.string()
    .required("Senha é obrigatória")
    .min(4, "Senha deve ter 4 ou mais carateres"),
  passwordConfirm: Yup.string()
    .required("Confirmação de senha é obrigatória")
    .oneOf([Yup.ref("password"), null], "As Senhas devem ser iguais"),
});
function RegisterScreen(props) {
  return (
    <Screen style={styles.screen}>
      <Text style={[defaultStyles.text, styles.text]}>Cadastro de Usuário</Text>

      <AppForm
        initialValues={{
          username: "",
          email: "",
          name: "",
          password: "",
          passwordConfirm: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          autofocus
          icon="account"
          name="username"
          placeholder="Usuário"
          textContentType="username"
        />
        <AppFormField
          autoCapitalize="none"
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="words"
          icon="account-details"
          name="name"
          placeholder="Nome Completo"
          textContentType="name"
        />
        <AppFormField
          icon="lock"
          name="password"
          placeholder="Senha"
          secureTextEntry
          textContentType="newPassword"
        />
        <AppFormField
          icon="lock-check"
          name="passwordConfirm"
          placeholder="Confirmar Senha"
          secureTextEntry
        />
        <SubmitButton title="Cadastrar" />
      </AppForm>
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
  text: {
    flex: 0,
    color: defaultStyles.colors.light,
    fontWeight: "bold",
  },
});
export default RegisterScreen;
