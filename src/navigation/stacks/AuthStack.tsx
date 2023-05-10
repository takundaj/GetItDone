import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import Login from "../../screens/AuthScreens/Login";

type AuthStackParams = {
  Login: undefined;
};

const AuthStack = () => {
  const Stack = createNativeStackNavigator<AuthStackParams>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
