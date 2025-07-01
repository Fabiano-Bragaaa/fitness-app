import { Text, View } from "react-native";

import {
  Button,
  ImageLogo,
  Link,
  PasswordInput,
  Screen,
  TextInput,
} from "@components";

export function SignUp() {
  return (
    <Screen scrollable>
      <View className="flex-1 justify-center items-center">
        <ImageLogo />
        <Text className="text-4xl font-bold">Crie sua conta</Text>
        <TextInput placeholder="E-mail" errorMessage="erro" />
        <PasswordInput placeholder="Senha" errorMessage="error" />
        <PasswordInput placeholder="Confirmar senha" errorMessage="error" />
        <Button title="Criar conta" />
        <View className="self-start mt-3">
          <Link title="Não possui conta?" linkTitle="Criar conta" />
        </View>
      </View>
    </Screen>
  );
}
