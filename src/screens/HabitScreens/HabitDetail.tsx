import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { HabitStackParams } from "../../navigation/stacks/HabitStack";
import * as Progress from "react-native-progress";
import { useTailwind } from "tailwind-rn/dist";

type HabitDetailRouteProps = RouteProp<HabitStackParams, "HabitDetail">;

const HabitDetail = () => {
  const route = useRoute<HabitDetailRouteProps>();
  const tw = useTailwind();
  const { title, target, progress } = route.params;

  return (
    <View style={tw("p-3 flex bg-white h-full")}>
      <Text style={tw("text-lg font-bold self-center")}>{title}</Text>
      <Text style={tw("text-lg mb-4 self-center")}>
        {progress} / {target}
      </Text>
      <Progress.Bar
        animated
        progress={progress / target}
        borderWidth={1}
        width={null}
        unfilledColor={"none"}
        height={8}
      />
      <View style={tw("flex flex-row justify-center")}>
        <TouchableOpacity
          style={[
            tw("m-4 h-8 w-8 items-center justify-center bg-white rounded-lg"),
            {
              shadowColor: "black",
              shadowRadius: 2,
              shadowOpacity: 0.5,
              shadowOffset: { width: 1, height: 1 },
            },
          ]}
        >
          <Text style={tw("font-bold text-xl")}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tw("m-4 h-8 w-8 items-center justify-center bg-white rounded-lg"),
            {
              shadowColor: "black",
              shadowRadius: 2,
              shadowOpacity: 0.5,
              shadowOffset: { width: 1, height: 1 },
            },
          ]}
        >
          <Text style={tw("font-bold text-xl")}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HabitDetail;
