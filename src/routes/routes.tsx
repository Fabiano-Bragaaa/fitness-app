import { NavigationContainer } from "@react-navigation/native";

import { AuthStack } from "./AuthStack";

export function Routes() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
