import { Text, View } from "react-native";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  ImageLogo,
  Link,
  Screen,
} from "@components";
import { AuthScreenPropps } from "@routes";

import { loginSchema, TypeLoginSchema } from "./LoginSchema";

export function Login({ navigation }: AuthScreenPropps<"login">) {
  const { control, formState, handleSubmit } = useForm<TypeLoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  function submitForm() {
    //TODO
  }
  return (
    <Screen scrollable>
      <View className="flex-1 justify-center items-center">
        <ImageLogo />
        <Text className="text-4xl font-bold">Login</Text>
        <FormTextInput control={control} name="email" placeholder="E-mail" />
        <FormPasswordInput
          control={control}
          name="password"
          placeholder="Senha"
        />
        <Button
          title="Criar conta"
          disabled={!formState.isValid}
          onPress={handleSubmit(submitForm)}
        />
        <View className="self-start mt-3">
          <Link
            title="Não possui conta?"
            linkTitle="Criar conta"
            onNavigate={() => navigation.navigate("signUp")}
          />
        </View>
      </View>
    </Screen>
  );
}
