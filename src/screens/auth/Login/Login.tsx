import { Text, View } from "react-native";

import { ImageLogo, Screen } from "@components";

export function Login() {
  return (
    <Screen>
      <View className="flex-1 justify-center items-center">
        <ImageLogo />
        <Text className="text-4xl font-bold">Crie sua conta</Text>
      </View>
    </Screen>
  );
}
