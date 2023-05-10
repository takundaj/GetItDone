import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProjectStackParams } from "../../navigation/stacks/ProjectStack";
import { projectData } from "../../dummyData";
import { useTailwind } from "tailwind-rn/dist";

interface Props {}

type Project = {
  title: string;
  tasks: string[];
};

const Projects = () => {
  // get reference to navigation object
  const navigaiton =
    useNavigation<NativeStackNavigationProp<ProjectStackParams>>();
  // get reference to tailwind
  const tw = useTailwind();

  //item render method
  const renderProjects = ({
    item,
    index,
  }: {
    item: Project;
    index: number;
  }) => {
    return (
      <TouchableOpacity
        key={index}
        style={[
          tw("p-3 my-2 m-2 bg-white rounded-md"),
          {
            shadowColor: "black",
            shadowRadius: 2,
            shadowOpacity: 0.5,
            shadowOffset: { width: 1, height: 1 },
          },
        ]}
        onPress={() =>
          navigaiton.navigate("ProjectDetail", {
            title: item.title,
            tasks: item.tasks,
          })
        }
      >
        <Text style={tw("font-bold ")}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  // component UI
  return (
    <View style={tw("flex p-4")}>
      <Text style={tw("text-lg font-bold")}>My Projects</Text>
      <FlatList data={projectData} renderItem={renderProjects} />
    </View>
  );
};

export default Projects;
