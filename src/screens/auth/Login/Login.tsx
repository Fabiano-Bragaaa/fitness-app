import { Text, View } from "react-native";

import {
  Button,
  ImageLogo,
  PasswordInput,
  Screen,
  TextInput,
} from "@components";

export function Login() {
  return (
    <Screen>
      <View className="flex-1 justify-center items-center">
        <ImageLogo />
        <Text className="text-4xl font-bold">Login</Text>
        <TextInput placeholder="E-mail" errorMessage="erro" />
        <PasswordInput placeholder="Senha" errorMessage="error" />
        <Button title="Criar conta" loading />
      </View>
    </Screen>
  );
}
