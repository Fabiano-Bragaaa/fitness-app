import { Text } from "react-native";

import { Screen } from "@components";
import { AppScreen } from "@routes";

export function Settings({ navigation }: AppScreen<"settings">) {
  return (
    <Screen>
      <Text>Settings</Text>
    </Screen>
  );
}
