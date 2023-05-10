import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProjectStack from "../stacks/ProjectStack";
import JournalStack from "../stacks/JournalStack";

export type TabParams = {
  ProjectTab: undefined;
  JournalTab: undefined;
  HabitsTab: undefined;
};

const RootTab = () => {
  const Tab = createBottomTabNavigator<TabParams>();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="ProjectTab" component={ProjectStack} />
      <Tab.Screen name="JournalTab" component={JournalStack} />
      {/*
      // TODO: Add Habit stack
      */}
    </Tab.Navigator>
  );
};

export default RootTab;
