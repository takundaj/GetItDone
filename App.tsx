import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/navigation/stacks/AuthStack";
import { useState } from "react";
import { SafeAreaView } from "react-native";
import { TailwindProvider } from "tailwind-rn/dist";
import utilities from "./tailwind.json";
import RootTab from "./src/navigation/tabs/RootTab";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          {isLoggedIn ? <RootTab /> : <AuthStack />}
        </SafeAreaView>
      </NavigationContainer>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
