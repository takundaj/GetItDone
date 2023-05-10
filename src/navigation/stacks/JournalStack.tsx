import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import Journals from "../../screens/JournalScreens/Journals";
import JournalDetail from "../../screens/JournalScreens/JournalDetail";

export type JournalStackParams = {
  Journals: undefined;
  JournalDetail: { title: string; body: string };
};

const JournalStack = () => {
  const Stack = createNativeStackNavigator<JournalStackParams>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Journals"
        component={Journals}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="JournalDetail" component={JournalDetail} />
    </Stack.Navigator>
  );
};

export default JournalStack;
