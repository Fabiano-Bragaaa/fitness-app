import { ActivityIndicator as RNActivityIndicator } from "react-native";

import { Screen } from "../Screen/Screen";

export function ActivityIndicator() {
  return (
    <Screen style={{ justifyContent: "center", alignItems: "center" }}>
      <RNActivityIndicator color={"#080808"} size={30} />
    </Screen>
  );
}
