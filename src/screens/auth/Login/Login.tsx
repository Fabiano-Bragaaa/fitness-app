import { Text, View } from "react-native";

import { ImageLogo, Screen, TextInput } from "@components";

export function Login() {
  return (
    <Screen>
      <View className="flex-1 justify-center items-center">
        <ImageLogo />
        <Text className="text-4xl font-bold">Login</Text>
        <TextInput placeholder="E-mail" errorMessage="erro" />
      </View>
    </Screen>
  );
}
