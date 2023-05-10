import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { JournalStackParams } from "../../navigation/stacks/JournalStack";
import { useTailwind } from "tailwind-rn/dist";

type JournalRouteProps = RouteProp<JournalStackParams, "JournalDetail">;

const JournalDetail = () => {
  const route = useRoute<JournalRouteProps>();
  const tw = useTailwind();
  const { title, body } = route.params;

  return (
    <View style={tw("p-4")}>
      <Text style={tw("mb-4 font-bold text-lg")}>{title}</Text>
      <Text>{body}</Text>
    </View>
  );
};

export default JournalDetail;
