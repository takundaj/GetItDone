import { View, Text, FlatList } from "react-native";
import React from "react";
import { ProjectStackParams } from "../../navigation/stacks/ProjectStack";
import { RouteProp, useRoute } from "@react-navigation/native";

type WorkoutScreenRouteProp = RouteProp<ProjectStackParams, "ProjectDetail">;

const WorkoutDetail = () => {
  const route = useRoute<WorkoutScreenRouteProp>();
  const { title, tasks } = route.params;

  const renderTasks = ({ item }: { item: string }) => (
    <View>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View>
      <Text>{title}</Text>
      <FlatList data={tasks} renderItem={renderTasks} />
    </View>
  );
};

export default WorkoutDetail;
