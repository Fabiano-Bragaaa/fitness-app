import { Text } from "react-native";

import { Screen } from "@components";
import { AppScreen } from "@routes";

import { SettingsHeader } from "./components/SettingsHeader";

export function Settings({ navigation }: AppScreen<"settings">) {
  return (
    <Screen>
      <SettingsHeader />
    </Screen>
  );
}
