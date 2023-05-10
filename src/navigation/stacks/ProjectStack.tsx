import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import Projects from "../../screens/ProjectScreens/Projects";
import ProjectDetail from "../../screens/ProjectScreens/ProjectDetail";

export type ProjectStackParams = {
  Projects: undefined;
  ProjectDetail: { title: string; tasks: string[] };
};

const ProjectStack = () => {
  const Stack = createNativeStackNavigator<ProjectStackParams>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Projects"
        component={Projects}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ProjectDetail" component={ProjectDetail} />
    </Stack.Navigator>
  );
};

export default ProjectStack;
