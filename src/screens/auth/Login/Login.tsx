import { Text, View } from "react-native";

import { ViewIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";

import { ImageLogo, Screen, TextInput } from "@components";

export function Login() {
  return (
    <Screen>
      <View className="flex-1 justify-center items-center">
        <ImageLogo />
        <Text className="text-4xl font-bold">Login</Text>
        <TextInput placeholder="E-mail" errorMessage="erro" />
        <TextInput
          placeholder="Senha"
          errorMessage="erro"
          rightComponent={<HugeiconsIcon icon={ViewIcon} />}
        />
      </View>
    </Screen>
  );
}
