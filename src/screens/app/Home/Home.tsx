import { Text } from "react-native";

import { Screen } from "@components";
import { AppScreen } from "@routes";

export function Home({ navigation }: AppScreen<"home">) {
  return (
    <Screen>
      <Text>Home</Text>
    </Screen>
  );
}
