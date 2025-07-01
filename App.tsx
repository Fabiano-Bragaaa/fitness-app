import "./global.css";
import { StatusBar } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { SignUp } from "@screens";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <SignUp />
    </SafeAreaProvider>
  );
}
