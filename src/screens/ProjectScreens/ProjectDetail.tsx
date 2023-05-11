import { View, Text, FlatList } from "react-native";
import React from "react";
import { ProjectStackParams } from "../../navigation/stacks/ProjectStack";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useTailwind } from "tailwind-rn/dist";

type WorkoutScreenRouteProp = RouteProp<ProjectStackParams, "ProjectDetail">;

const WorkoutDetail = () => {
  const route = useRoute<WorkoutScreenRouteProp>();
  const { title, tasks } = route.params;
  const tw = useTailwind();

  const renderTasks = ({ item }: { item: string }) => (
    <View>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View style={tw("p-4 bg-white h-full")}>
      <Text style={tw("font-bold text-lg")}>{title} tasks:</Text>
      <FlatList data={tasks} renderItem={renderTasks} />
    </View>
  );
};

export default WorkoutDetail;
