import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { JournalStackParams } from "../../navigation/stacks/JournalStack";
import { useTailwind } from "tailwind-rn/dist";
import { journaldata } from "../../dummyData";

interface Props {}

type Journal = {
  title: string;
  body: string;
};

const Journals = () => {
  // get reference to navigation object
  const navigaiton =
    useNavigation<NativeStackNavigationProp<JournalStackParams>>();
  // get reference to tailwind
  const tw = useTailwind();

  //item render method
  const renderProjects = ({
    item,
    index,
  }: {
    item: Journal;
    index: number;
  }) => {
    return (
      <TouchableOpacity
        key={index}
        style={[
          tw("px-3 py-4 my-2 bg-white rounded-md"),
          {
            shadowColor: "black",
            shadowRadius: 2,
            shadowOpacity: 0.5,
            shadowOffset: { width: 1, height: 1 },
          },
        ]}
        onPress={() =>
          navigaiton.navigate("JournalDetail", {
            title: item.title,
            body: item.body,
          })
        }
      >
        <Text style={tw("font-bold pb-2")}>{item.title}</Text>
        <Text>{item.body.slice(0, 100)}...</Text>
      </TouchableOpacity>
    );
  };

  // component UI
  return (
    <View style={tw("flex p-4 h-full bg-white")}>
      <Text style={tw("text-lg font-bold")}>Journals</Text>
      <FlatList
        style={tw("overflow-visible")}
        data={journaldata}
        renderItem={renderProjects}
      />
    </View>
  );
};

export default Journals;
