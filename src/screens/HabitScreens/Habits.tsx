import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HabitStackParams } from "../../navigation/stacks/HabitStack";
import { habitData } from "../../dummyData";
import * as Progress from "react-native-progress";

const Habits = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HabitStackParams>>();
  const tw = useTailwind();

  const renderHabits = ({
    item,
  }: {
    item: { title: string; target: number; progress: number };
  }) => (
    <TouchableOpacity
      style={[
        tw("p-3 my-2 bg-white rounded-md"),
        {
          shadowColor: "black",
          shadowRadius: 2,
          shadowOpacity: 0.5,
          shadowOffset: { width: 1, height: 1 },
        },
      ]}
      onPress={() =>
        navigation.navigate("HabitDetail", {
          title: item.title,
          target: item.target,
          progress: item.progress,
        })
      }
    >
      <Text style={tw("mb-4 font-bold")}>{item.title}</Text>
      <Progress.Bar progress={item.progress / item.target} width={null} />
    </TouchableOpacity>
  );

  return (
    <View style={tw("flex p-4 h-full bg-white")}>
      <Text style={tw("text-lg font-bold")}>Habits</Text>
      <FlatList
        style={tw("overflow-visible")}
        data={habitData}
        renderItem={renderHabits}
      />
    </View>
  );
};

export default Habits;
