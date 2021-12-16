import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import AccountScreen from "./app/screens/AccountScreen";
import defaultStyle from "./app/config/styles";
import HomeScreen from "./app/screens/HomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="WelcomeScreen"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{
        title: "Login",
        headerStyle: { backgroundColor: defaultStyle.colors.primary },
      }}
    />
    <Stack.Screen
      name="RegisterScreen"
      component={RegisterScreen}
      options={{
        title: "Cadastro de usuário",
        headerStyle: { backgroundColor: defaultStyle.colors.primary },
      }}
    />
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="AccountScreen" component={AccountScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
