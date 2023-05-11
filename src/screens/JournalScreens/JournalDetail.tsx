import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { JournalStackParams } from "../../navigation/stacks/JournalStack";
import { useTailwind } from "tailwind-rn/dist";
import { Platform } from "react-native";

type JournalRouteProps = RouteProp<JournalStackParams, "JournalDetail">;

const JournalDetail = () => {
  const route = useRoute<JournalRouteProps>();
  const tw = useTailwind();
  const { title, body } = route.params;
  const [text, onChangeText] = useState(body);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={125}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={tw("p-4 bg-white mb-24 h-full")}>
          <Text style={tw("mb-4 font-bold text-lg")}>{title}</Text>
          <TextInput onChangeText={onChangeText} value={text} multiline />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default JournalDetail;
