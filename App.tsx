import "./global.css";
import { StatusBar, Text } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { Screen } from "@components";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <Screen>
        <Text>Open up App.tsx to start working on your app!</Text>
      </Screen>
    </SafeAreaProvider>
  );
}
