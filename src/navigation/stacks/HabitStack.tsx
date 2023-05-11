import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import Habits from "../../screens/HabitScreens/Habits";
import HabitDetail from "../../screens/HabitScreens/HabitDetail";

export type HabitStackParams = {
  Habits: undefined;
  HabitDetail: { title: string; target: number; progress: number };
};

const HabitStack = () => {
  const Stack = createNativeStackNavigator<HabitStackParams>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Habits"
        component={Habits}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="HabitDetail" component={HabitDetail} />
    </Stack.Navigator>
  );
};

export default HabitStack;
