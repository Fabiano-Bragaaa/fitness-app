import { ActivityIndicator, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { useAuthCredentials } from "@services";

import { AuthStack } from "./AuthStack";

export function Routes() {
  const { isLoading } = useAuthCredentials();

  if (isLoading) {
    return (
      <View className="flex-1 bg-white justify-center items-center">
        <ActivityIndicator color="#000" size={20} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
